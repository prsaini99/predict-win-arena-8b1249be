
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "./NavigationBar";

interface Notification {
  id: string;
  type: "match" | "reward" | "system";
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const NotificationsPage = () => {
  // Mock notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "n1",
      type: "match",
      title: "India vs Australia",
      message: "Match starts in 30 minutes. Make your predictions now!",
      time: "30m ago",
      isRead: false,
    },
    {
      id: "n2",
      type: "reward",
      title: "Points Credited",
      message: "You've earned 150 points for your correct predictions!",
      time: "2h ago",
      isRead: false,
    },
    {
      id: "n3",
      type: "system",
      title: "New Badge Earned",
      message: "Congratulations! You've earned the 'Prediction Pro' badge.",
      time: "1d ago",
      isRead: true,
    },
    {
      id: "n4",
      type: "match",
      title: "England vs New Zealand",
      message: "Match results are in. Check your predictions!",
      time: "2d ago",
      isRead: true,
    },
    {
      id: "n5",
      type: "reward",
      title: "Reward Available",
      message: "You can now claim ₹50 Amazon Voucher with your points!",
      time: "3d ago",
      isRead: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isRead: true,
      }))
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Notifications</h1>
        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="text-sport-blue"
            onClick={markAllAsRead}
          >
            Mark all as read
          </Button>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="all" className="relative">
            All
            {unreadCount > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-sport-red text-white h-5 w-5 flex items-center justify-center p-0 text-xs">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={markAsRead}
              />
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              No notifications
            </div>
          )}
        </TabsContent>

        <TabsContent value="matches" className="space-y-3">
          {notifications.filter((n) => n.type === "match").length > 0 ? (
            notifications
              .filter((n) => n.type === "match")
              .map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={markAsRead}
                />
              ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              No match notifications
            </div>
          )}
        </TabsContent>

        <TabsContent value="rewards" className="space-y-3">
          {notifications.filter((n) => n.type === "reward").length > 0 ? (
            notifications
              .filter((n) => n.type === "reward")
              .map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={markAsRead}
                />
              ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              No reward notifications
            </div>
          )}
        </TabsContent>
      </Tabs>

      <NavigationBar />
    </div>
  );
};

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

const NotificationItem = ({
  notification,
  onMarkAsRead,
}: NotificationItemProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "match":
        return (
          <div className="bg-sport-blue/10 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sport-blue"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
          </div>
        );
      case "reward":
        return (
          <div className="bg-sport-orange/10 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sport-orange"
            >
              <path d="M19 7.5v9l-3.5 3.5-3.5-3.5-3.5 3.5-3.5-3.5v-9A4.5 4.5 0 0 1 9.5 3h5A4.5 4.5 0 0 1 19 7.5z"></path>
              <circle cx="12" cy="7" r="1"></circle>
            </svg>
          </div>
        );
      default:
        return (
          <div className="bg-sport-green/10 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sport-green"
            >
              <path d="M12 13V2l8 4-8 4"></path>
              <path d="M20.55 10.23A9 9 0 1 1 8 4.94"></path>
              <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            </svg>
          </div>
        );
    }
  };

  return (
    <div
      className={`p-4 rounded-lg ${
        notification.isRead ? "bg-white" : "bg-blue-50"
      } border border-gray-100 shadow-sm`}
    >
      <div className="flex">
        <div className="mr-4">{getIcon(notification.type)}</div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">{notification.title}</h3>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          {!notification.isRead && (
            <div className="mt-2 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-sport-blue h-7 px-2"
                onClick={() => onMarkAsRead(notification.id)}
              >
                Mark as read
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
