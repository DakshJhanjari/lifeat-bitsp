
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, X, AlertCircle, Info, CheckCircle } from "lucide-react";

interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  title: string;
  message: string;
  date: string;
  isNew?: boolean;
}

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "info",
      title: "Welcome to BITS Pilani!",
      message: "Your onboarding journey starts here. Explore all sections to get familiar with campus life.",
      date: "2024-06-13",
      isNew: true
    },
    {
      id: "2",
      type: "warning",
      title: "Registration Reminder",
      message: "Don't forget to complete your ERP registration and hostel allocation before the deadline.",
      date: "2024-06-12",
      isNew: true
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-orange-50 border-orange-200";
      case "success":
        return "bg-green-50 border-green-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const newNotificationsCount = notifications.filter(n => n.isNew).length;

  return (
    <div className="mb-8">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="relative bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-300"
      >
        <Bell className="h-5 w-5 mr-2" />
        Notifications
        {newNotificationsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
            {newNotificationsCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <Card className="mt-4 max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>🔔 Notifications</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
            <CardDescription>
              Stay updated with important announcements and reminders
            </CardDescription>
          </CardHeader>
          <CardContent>
            {notifications.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No notifications at the moment</p>
            ) : (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${getBgColor(notification.type)} relative`}
                  >
                    <div className="flex items-start gap-3">
                      {getIcon(notification.type)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">
                            {notification.title}
                            {notification.isNew && (
                              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                New
                              </span>
                            )}
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeNotification(notification.id)}
                            className="h-6 w-6 p-0"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationCenter;
