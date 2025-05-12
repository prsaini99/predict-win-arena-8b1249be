
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MatchCard from "@/components/MatchCard";
import Leaderboard from "@/components/Leaderboard";
import CricketPrediction from "@/components/CricketPrediction";
import NavigationBar from "@/components/NavigationBar";

// Mock data for live matches
const liveMatches = [
  {
    id: "1",
    type: "cricket",
    title: "India vs Australia",
    status: "live",
    time: "10:30 AM",
    progress: "Over 10.2",
    teamALogo: "/placeholder.svg",
    teamBLogo: "/placeholder.svg",
    teamAName: "IND",
    teamBName: "AUS",
    teamAScore: "120/3",
    teamBScore: "—",
  },
  {
    id: "2",
    type: "racing",
    title: "Delhi Derby - Race 3",
    status: "live",
    time: "11:15 AM",
    raceNumber: 3,
    raceVenue: "Delhi",
  },
];

const upcomingMatches = [
  {
    id: "3",
    type: "cricket",
    title: "England vs New Zealand",
    status: "upcoming",
    time: "02:00 PM",
    countdown: "2h",
    teamALogo: "/placeholder.svg",
    teamBLogo: "/placeholder.svg",
    teamAName: "ENG",
    teamBName: "NZ",
  },
  {
    id: "4",
    type: "racing",
    title: "Mumbai Cup - Race 1",
    status: "upcoming",
    time: "03:30 PM",
    countdown: "3h 30m",
    raceNumber: 1,
    raceVenue: "Mumbai",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activePrediction, setActivePrediction] = useState<boolean>(false);

  // Mock user data
  const user = {
    name: "Rahul",
    points: 1850,
    rank: 24,
    avatar: "/placeholder.svg",
  };

  const handleMatchClick = (matchId: string) => {
    // For this demo, we'll just toggle the prediction component
    setActivePrediction(!activePrediction);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header with user info */}
      <div className="bg-sport-blue text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Hi, {user.name}!</h1>
            <p className="text-sm opacity-90">Welcome back to Predict & Win</p>
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center bg-white/20 px-3 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M12 1v5M5 4l2.25 2.25M19 4l-2.25 2.25M3 11h4M17 11h4M8 17.5l2 2M14 17.5l-2 2M6 21h12"></path>
              </svg>
              <span className="font-bold">{user.points}</span>
              <span className="text-xs ml-1">pts</span>
            </div>
            <Avatar className="h-10 w-10 border-2 border-white">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center text-sport-blue text-lg font-bold">
                  {user.name.charAt(0)}
                </div>
              )}
            </Avatar>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-4">
        {activePrediction && (
          <div className="mb-6 animate-fade-in">
            <CricketPrediction />
          </div>
        )}

        {/* Live Now section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold flex items-center">
              <span className="mr-2 w-2 h-2 bg-sport-red rounded-full animate-pulse-sport"></span>
              Live Now
            </h2>
            <Button variant="link" className="text-sport-blue p-0 h-auto">
              View All
            </Button>
          </div>
          <div className="grid gap-4 grid-cols-1">
            {liveMatches.map((match) => (
              <MatchCard
                key={match.id}
                {...match}
                onClick={() => handleMatchClick(match.id)}
              />
            ))}
          </div>
        </section>

        {/* Upcoming Matches section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Upcoming</h2>
            <Button variant="link" className="text-sport-blue p-0 h-auto">
              View All
            </Button>
          </div>
          <div className="grid gap-4 grid-cols-1">
            {upcomingMatches.map((match) => (
              <MatchCard
                key={match.id}
                {...match}
                onClick={() => handleMatchClick(match.id)}
              />
            ))}
          </div>
        </section>

        {/* Daily Trivia section */}
        <section className="mb-6">
          <div className="sport-card p-4 bg-gradient-to-r from-sport-blue/10 to-sport-green/10 border-none">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">Daily Trivia</h3>
              <Badge className="bg-sport-green">+50 points</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Answer today's cricket trivia question and earn bonus points!
            </p>
            <Button className="w-full bg-sport-blue hover:bg-sport-blue/90">
              Play Now
            </Button>
          </div>
        </section>

        {/* Rewards section */}
        <section className="mb-6">
          <div className="sport-card p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold">Rewards Progress</h3>
              <Button variant="link" className="text-sport-blue p-0 h-auto">
                View All
              </Button>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Current: {user.points} points</span>
                <span>Next: 2000 points</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-sport-orange h-2 rounded-full"
                  style={{ width: `${(user.points / 2000) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {2000 - user.points} points to ₹100 reward
              </p>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-sport-orange to-sport-orange/80 hover:opacity-90"
            >
              Claim Rewards
            </Button>
          </div>
        </section>
      </div>

      {/* Bottom navigation */}
      <NavigationBar />
    </div>
  );
};

export default HomePage;
