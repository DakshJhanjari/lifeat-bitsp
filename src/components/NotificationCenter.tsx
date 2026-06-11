import { useState, useEffect, useRef } from "react";
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

  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  useEffect(() => {
    fetchNotifications();
    
    const channelName = `notifications-${Date.now()}`;
    const channel = supabase
      .channel(channelName)
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'notifications' },
        () => {
          fetchNotifications();
        }
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
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
        return <AlertCircle className="h-5 w-5 text-orange-400" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-emerald-400" />;
      default:
        return <Info className="h-5 w-5 text-blue-400" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-gradient-to-r from-orange-950/25 to-amber-950/10 border-orange-900/40 text-orange-200";
      case "success":
        return "bg-gradient-to-r from-emerald-950/25 to-teal-950/10 border-emerald-900/40 text-emerald-200";
      default:
        return "bg-gradient-to-r from-blue-950/25 to-purple-950/10 border-blue-900/40 text-blue-200";
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

  const renderMessageWithLinks = (message: string) => {
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
            className="text-blue-400 hover:text-blue-300 underline font-semibold"
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
        variant="ghost"
        size="sm"
        className="relative h-8 w-8 p-0 hover:bg-slate-800 text-slate-300 hover:text-white"
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Bell className="h-4 w-4" />
        )}
        {newNotificationsCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold shadow-lg animate-pulse">
            {newNotificationsCount > 9 ? '9+' : newNotificationsCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <Card className="w-80 sm:w-96 max-w-[90vw] bg-slate-950/95 border border-slate-800 text-foreground backdrop-blur-md shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  🔔 Notifications
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0 hover:bg-red-950/40 hover:text-red-400"
                >
                  <X className="h-3 w-3" />
                </Button>
              </CardTitle>
              <CardDescription className="text-sm font-medium text-slate-400">
                Stay updated with important announcements! ✨
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-80 overflow-y-auto">
              {loading ? (
                <div className="flex items-center justify-center py-6">
                  <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
                  <span className="ml-2 text-sm font-semibold text-slate-400">Loading...</span>
                </div>
              ) : visibleNotifications.length === 0 ? (
                <p className="text-center text-slate-500 py-4 text-sm font-medium">No notifications 📭</p>
              ) : (
                <div className="space-y-3">
                  {visibleNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border ${getBgColor(notification.type)} relative hover-lift`}
                    >
                      <div className="flex items-start gap-3">
                        {getIcon(notification.type)}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-white text-sm truncate">
                              {notification.title}
                            </h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => dismissNotification(notification.id)}
                              className="h-6 w-6 p-0 hover:bg-red-950/40 hover:text-red-400 flex-shrink-0"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                            {renderMessageWithLinks(notification.message)}
                          </p>
                          <p className="text-xs text-slate-500 mt-2 font-semibold">{formatDate(notification.created_at)}</p>
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
