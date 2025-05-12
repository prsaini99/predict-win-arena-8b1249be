
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Splash from "./components/Splash";
import Onboarding from "./components/Onboarding";
import Login from "./components/Login";
import ProfileSetup from "./components/ProfileSetup";
import UserProfile from "./components/UserProfile";
import Leaderboard from "./components/Leaderboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/rewards" element={
            <div className="p-4 pb-20 bg-gray-50 min-h-screen">
              <h1 className="text-xl font-bold mb-4">Rewards</h1>
              <div className="sport-card p-4 text-center">
                <p className="mb-4">Rewards coming soon!</p>
              </div>
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
