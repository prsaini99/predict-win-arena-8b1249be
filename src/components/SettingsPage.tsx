
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import NavigationBar from "./NavigationBar";

const SettingsPage = () => {
  // Mock user settings
  const [settings, setSettings] = useState({
    notifications: {
      matchReminders: true,
      resultAlerts: true,
      rewardUpdates: true,
      marketingEmails: false,
    },
    preferences: {
      language: "english",
      theme: "light",
      autoPredictions: false,
    },
    privacy: {
      showProfileStats: true,
      showRealName: false,
      publicProfile: true,
    },
  });

  // Mock user data
  const user = {
    name: "Rahul Sharma",
    email: "rahul.s@example.com",
    phone: "+91 98765 43210",
    avatar: "/placeholder.svg",
  };

  const updateNotificationSettings = (key: keyof typeof settings.notifications, value: boolean) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: value,
      },
    });
    toast.success("Settings updated");
  };

  const updatePreferenceSettings = (key: keyof typeof settings.preferences, value: string | boolean) => {
    setSettings({
      ...settings,
      preferences: {
        ...settings.preferences,
        [key]: value,
      },
    });
    toast.success("Settings updated");
  };

  const updatePrivacySettings = (key: keyof typeof settings.privacy, value: boolean) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: value,
      },
    });
    toast.success("Settings updated");
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    // In a real app, this would handle the logout process
  };

  const handleDeleteAccount = () => {
    // In a real app, this would handle the account deletion process
    toast.error("Account deletion is disabled in demo mode");
  };

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Settings</h1>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center mb-4">
            <Avatar className="h-16 w-16 mr-4 border-2 border-sport-blue">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-sport-blue flex items-center justify-center text-white text-xl font-bold">
                  {user.name.charAt(0)}
                </div>
              )}
            </Avatar>
            <div>
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              {user.phone && (
                <p className="text-sm text-gray-500">{user.phone}</p>
              )}
            </div>
          </div>
          <Button size="sm" variant="outline" className="w-full">
            Edit Profile
          </Button>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-bold text-lg mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="match-reminders" className="font-medium">
                  Match Reminders
                </Label>
                <p className="text-sm text-gray-500">
                  Notify before matches start
                </p>
              </div>
              <Switch
                id="match-reminders"
                checked={settings.notifications.matchReminders}
                onCheckedChange={(value) =>
                  updateNotificationSettings("matchReminders", value)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="result-alerts" className="font-medium">
                  Result Alerts
                </Label>
                <p className="text-sm text-gray-500">
                  Notify when match results are in
                </p>
              </div>
              <Switch
                id="result-alerts"
                checked={settings.notifications.resultAlerts}
                onCheckedChange={(value) =>
                  updateNotificationSettings("resultAlerts", value)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reward-updates" className="font-medium">
                  Reward Updates
                </Label>
                <p className="text-sm text-gray-500">
                  Notify about new rewards and point earnings
                </p>
              </div>
              <Switch
                id="reward-updates"
                checked={settings.notifications.rewardUpdates}
                onCheckedChange={(value) =>
                  updateNotificationSettings("rewardUpdates", value)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="marketing-emails" className="font-medium">
                  Marketing Emails
                </Label>
                <p className="text-sm text-gray-500">
                  Receive promotional emails
                </p>
              </div>
              <Switch
                id="marketing-emails"
                checked={settings.notifications.marketingEmails}
                onCheckedChange={(value) =>
                  updateNotificationSettings("marketingEmails", value)
                }
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-bold text-lg mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="language-select" className="font-medium">
                Language
              </Label>
              <Select
                value={settings.preferences.language}
                onValueChange={(value) =>
                  updatePreferenceSettings("language", value)
                }
              >
                <SelectTrigger id="language-select" className="w-[180px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="tamil">Tamil</SelectItem>
                  <SelectItem value="telugu">Telugu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="theme-select" className="font-medium">
                Theme
              </Label>
              <Select
                value={settings.preferences.theme}
                onValueChange={(value) =>
                  updatePreferenceSettings("theme", value)
                }
              >
                <SelectTrigger id="theme-select" className="w-[180px]">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System Default</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-predictions" className="font-medium">
                  Auto Predictions
                </Label>
                <p className="text-sm text-gray-500">
                  Use AI to make predictions when you miss a match
                </p>
              </div>
              <Switch
                id="auto-predictions"
                checked={settings.preferences.autoPredictions}
                onCheckedChange={(value) =>
                  updatePreferenceSettings("autoPredictions", value)
                }
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-bold text-lg mb-4">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="profile-stats" className="font-medium">
                  Show Profile Stats
                </Label>
                <p className="text-sm text-gray-500">
                  Display your stats to other users
                </p>
              </div>
              <Switch
                id="profile-stats"
                checked={settings.privacy.showProfileStats}
                onCheckedChange={(value) =>
                  updatePrivacySettings("showProfileStats", value)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="real-name" className="font-medium">
                  Show Real Name
                </Label>
                <p className="text-sm text-gray-500">
                  Show your real name instead of username
                </p>
              </div>
              <Switch
                id="real-name"
                checked={settings.privacy.showRealName}
                onCheckedChange={(value) =>
                  updatePrivacySettings("showRealName", value)
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="public-profile" className="font-medium">
                  Public Profile
                </Label>
                <p className="text-sm text-gray-500">
                  Allow others to see your profile
                </p>
              </div>
              <Switch
                id="public-profile"
                checked={settings.privacy.publicProfile}
                onCheckedChange={(value) =>
                  updatePrivacySettings("publicProfile", value)
                }
              />
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="font-bold text-lg mb-4">Account</h2>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full border-orange-300 text-orange-700 hover:bg-orange-50"
              onClick={handleLogout}
            >
              Log Out
            </Button>
            <Button
              variant="outline"
              className="w-full border-red-300 text-red-700 hover:bg-red-50"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
};

export default SettingsPage;
