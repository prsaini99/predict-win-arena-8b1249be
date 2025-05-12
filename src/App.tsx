
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Splash from "./components/Splash";
import Onboarding from "./components/Onboarding";
import Login from "./components/Login";
import ProfileSetup from "./components/ProfileSetup";
import UserProfile from "./components/UserProfile";
import Leaderboard from "./components/Leaderboard";
import HorseRacingHome from "./components/HorseRacingHome";
import RacePrediction from "./components/RacePrediction";
import RewardsPage from "./components/RewardsPage";
import DailyTrivia from "./components/DailyTrivia";
import NotificationsPage from "./components/NotificationsPage";
import SettingsPage from "./components/SettingsPage";
import StatsPage from "./components/StatsPage";
import HelpPage from "./components/HelpPage";
import MorePage from "./components/MorePage";

const queryClient = new QueryClient();

const App = () => {
  const [showTrivia, setShowTrivia] = useState(false);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <DailyTrivia isOpen={showTrivia} onClose={() => setShowTrivia(false)} />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/home" element={<Index />} />
            <Route path="/profile" element={
              <div className="p-4 pb-20 bg-gray-50 min-h-screen">
                <UserProfile />
              </div>
            } />
            <Route path="/leaderboard" element={
              <div className="p-4 pb-20 bg-gray-50 min-h-screen">
                <h1 className="text-xl font-bold mb-4">Leaderboard</h1>
                <Leaderboard />
              </div>
            } />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/racing" element={<HorseRacingHome />} />
            <Route path="/racing/:id" element={<RacePrediction />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/more" element={<MorePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
