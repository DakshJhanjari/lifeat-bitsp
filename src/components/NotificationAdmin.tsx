import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Notification = Database['public']['Tables']['notifications']['Row'];

const NotificationAdmin = () => {
  const location = useLocation();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "info" as "info" | "warning" | "success",
    expires_at: "",
    is_active: true
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    try {
      const stored = localStorage.getItem("local_notifications");
      let list: Notification[] = [];
      if (stored) {
        list = JSON.parse(stored);
      }
      list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setNotifications(list);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      toast({
        title: "Error",
        description: "Failed to load notifications",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const stored = localStorage.getItem("local_notifications");
      let list: Notification[] = stored ? JSON.parse(stored) : [];
      
      const payload = {
        title: formData.title,
        message: formData.message,
        type: formData.type,
        expires_at: formData.expires_at || null,
        is_active: formData.is_active
      };
      
      if (editingId) {
        list = list.map(item => {
          if (item.id === editingId) {
            return {
              ...item,
              ...payload
            };
          }
          return item;
        });
      } else {
        const newNotif: Notification = {
          id: `notif-${Date.now()}`,
          created_at: new Date().toISOString(),
          ...payload
        };
        list.push(newNotif);
      }

      localStorage.setItem("local_notifications", JSON.stringify(list));
      
      toast({
        title: "Success",
        description: `Notification ${editingId ? 'updated' : 'created'} successfully`,
      });

      window.dispatchEvent(new Event("local-notifications-updated"));

      resetForm();
      fetchNotifications();
    } catch (error) {
      console.error('Error saving notification:', error);
      toast({
        title: "Error",
        description: "Failed to save notification",
        variant: "destructive",
      });
    }
  };

  const handleDelete = (id: string) => {
    try {
      const stored = localStorage.getItem("local_notifications");
      let list: Notification[] = stored ? JSON.parse(stored) : [];
      
      list = list.filter(item => item.id !== id);
      localStorage.setItem("local_notifications", JSON.stringify(list));

      toast({
        title: "Success",
        description: "Notification deleted successfully",
      });

      window.dispatchEvent(new Event("local-notifications-updated"));

      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notification:', error);
      toast({
        title: "Error",
        description: "Failed to delete notification",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (notification: Notification) => {
    setFormData({
      title: notification.title,
      message: notification.message,
      type: notification.type as "info" | "warning" | "success",
      expires_at: notification.expires_at ? notification.expires_at.slice(0, 16) : "",
      is_active: notification.is_active
    });
    setEditingId(notification.id);
    setIsCreating(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      message: "",
      type: "info",
      expires_at: "",
      is_active: true
    });
    setEditingId(null);
    setIsCreating(false);
  };

  return (
    <div className="container mx-auto p-8 min-h-screen text-foreground max-w-4xl space-y-6">
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6 flex-wrap gap-4">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Link to="/admin/content">
            <Button 
              variant={location.pathname === "/admin/content" ? "default" : "outline"} 
              className={location.pathname === "/admin/content" ? "bg-blue-600 hover:bg-blue-500 text-white" : "border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:text-white"}
            >
              Manage Content
            </Button>
          </Link>
          <Link to="/admin/notifications">
            <Button 
              variant={location.pathname === "/admin/notifications" ? "default" : "outline"} 
              className={location.pathname === "/admin/notifications" ? "bg-blue-600 hover:bg-blue-500 text-white" : "border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:text-white"}
            >
              Manage Notifications
            </Button>
          </Link>
        </div>
      </div>

      <Card className="bg-slate-900/40 border border-slate-800 backdrop-blur-sm text-foreground shadow-2xl">
        <CardHeader>
          <CardTitle className="text-white">Notification Management</CardTitle>
          <CardDescription className="text-slate-400">
            Create and manage notifications for the BITS Pilani onboarding site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsCreating(true)}
            className="mb-6 bg-blue-600 hover:bg-blue-500 text-white"
            disabled={isCreating}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Notification
          </Button>

          {isCreating && (
            <Card className="mb-6 bg-slate-950/40 border border-slate-800 text-foreground">
              <CardHeader>
                <CardTitle className="text-white">{editingId ? 'Edit' : 'Create'} Notification</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-slate-200">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      className="bg-slate-900/60 border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-200">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-slate-900/60 border-slate-800 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="type" className="text-slate-200">Type</Label>
                    <Select value={formData.type} onValueChange={(value: "info" | "warning" | "success") => setFormData({ ...formData, type: value })}>
                      <SelectTrigger className="bg-slate-900/60 border-slate-800 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-950 border-slate-800 text-white">
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="success">Success</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="expires_at" className="text-slate-200">Expires At (Optional)</Label>
                    <Input
                      id="expires_at"
                      type="datetime-local"
                      value={formData.expires_at}
                      onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
                      className="bg-slate-900/60 border-slate-800 text-white"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_active"
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                    />
                    <Label htmlFor="is_active" className="text-slate-200">Active</Label>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white">
                      {editingId ? 'Update' : 'Create'} Notification
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm} className="border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:text-white">
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className="bg-slate-950/40 border border-slate-800 text-foreground">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-white">{notification.title}</h3>
                      <p className="text-sm text-slate-300 mt-1">{notification.message}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                        <span>Type: {notification.type}</span>
                        <span>Status: {notification.is_active ? 'Active' : 'Inactive'}</span>
                        {notification.expires_at && (
                          <span>Expires: {new Date(notification.expires_at).toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(notification)}
                        className="border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(notification.id)}
                        className="bg-red-950/40 border border-red-900/50 text-red-400 hover:bg-red-900 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationAdmin;
