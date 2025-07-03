
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, X, AlertCircle, Info, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Notification = Database['public']['Tables']['notifications']['Row'];

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [dismissedNotifications, setDismissedNotifications] = useState<Set<string>>(
    new Set(JSON.parse(localStorage.getItem('dismissedNotifications') || '[]'))
  );
  const { toast } = useToast();

  useEffect(() => {
    fetchNotifications();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('notifications')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'notifications' },
        (payload) => {
          console.log('Notification update:', payload);
          fetchNotifications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('is_active', true)
        .or(`expires_at.is.null,expires_at.gt.${new Date().toISOString()}`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notifications:', error);
        toast({
          title: "Error",
          description: "Failed to load notifications",
          variant: "destructive",
        });
        return;
      }

      setNotifications(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-gradient-to-r from-red-50 to-blue-50 border-red-200";
      case "success":
        return "bg-gradient-to-r from-blue-50 to-red-50 border-blue-200";
      default:
        return "bg-gradient-to-r from-blue-50 via-white to-red-50 border-blue-200";
    }
  };

  const dismissNotification = (id: string) => {
    const newDismissed = new Set(dismissedNotifications);
    newDismissed.add(id);
    setDismissedNotifications(newDismissed);
    localStorage.setItem('dismissedNotifications', JSON.stringify([...newDismissed]));
  };

  const visibleNotifications = notifications.filter(n => !dismissedNotifications.has(n.id));
  const newNotificationsCount = visibleNotifications.length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Function to render text with clickable links
  const renderMessageWithLinks = (message: string) => {
    // Regular expression to find URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = message.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-semibold"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="relative bg-gradient-to-r from-red-100 to-blue-100 backdrop-blur-sm border-2 border-red-300 hover:border-blue-300 font-bold text-slate-700 hover-lift"
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Bell className="h-4 w-4" />
        )}
        {newNotificationsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold shadow-lg animate-pulse">
            {newNotificationsCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[90vw] z-50">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  🔔 Notifications
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-red-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-slate-600">
                Stay updated with important announcements! ✨
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-red-500" />
                  <span className="ml-2 font-semibold text-slate-600 text-sm">Loading...</span>
                </div>
              ) : visibleNotifications.length === 0 ? (
                <p className="text-center text-gray-500 py-4 text-sm font-medium">No notifications 📭</p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {visibleNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-xl border-2 ${getBgColor(notification.type)} relative hover-lift`}
                    >
                      <div className="flex items-start gap-3">
                        {getIcon(notification.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-gray-800 text-sm">
                              {notification.title}
                              <span className="ml-2 bg-gradient-to-r from-red-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                                ✨ New
                              </span>
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => dismissNotification(notification.id)}
                              className="h-6 w-6 p-0 hover:bg-red-100"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-gray-700 mt-2 font-medium leading-relaxed">
                            {renderMessageWithLinks(notification.message)}
                          </p>
                          <p className="text-xs text-gray-500 mt-2 font-semibold">{formatDate(notification.created_at)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
