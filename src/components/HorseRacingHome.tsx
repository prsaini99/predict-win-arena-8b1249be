
import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import NavigationBar from "./NavigationBar";

interface Race {
  id: string;
  number: number;
  name: string;
  venue: string;
  time: string;
  status: "upcoming" | "live" | "locked" | "completed";
  timeToStart?: string;
}

const HorseRacingHome = () => {
  // Mock data for races
  const [races] = useState<Race[]>([
    {
      id: "race1",
      number: 1,
      name: "Royal Derby",
      venue: "Mumbai Race Course",
      time: "10:30 AM",
      status: "completed",
    },
    {
      id: "race2",
      number: 2,
      name: "Champion Stakes",
      venue: "Mumbai Race Course",
      time: "11:45 AM",
      status: "locked",
    },
    {
      id: "race3",
      number: 3,
      name: "Sprinter Cup",
      venue: "Mumbai Race Course",
      time: "1:00 PM",
      status: "live",
    },
    {
      id: "race4",
      number: 4,
      name: "Grand National",
      venue: "Mumbai Race Course",
      time: "2:15 PM",
      status: "upcoming",
      timeToStart: "20m",
    },
    {
      id: "race5",
      number: 5,
      name: "Classic Mile",
      venue: "Mumbai Race Course",
      time: "3:30 PM",
      status: "upcoming",
      timeToStart: "1h 35m",
    },
    {
      id: "race6",
      number: 6,
      name: "Steeplechase Challenge",
      venue: "Mumbai Race Course",
      time: "4:45 PM",
      status: "upcoming",
      timeToStart: "2h 50m",
    },
  ]);

  const getStatusTag = (status: Race["status"], timeToStart?: string) => {
    switch (status) {
      case "live":
        return (
          <span className="bg-sport-green text-white px-2 py-1 rounded-md text-xs font-medium">
            LIVE
          </span>
        );
      case "locked":
        return (
          <span className="bg-gray-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            LOCKED
          </span>
        );
      case "completed":
        return (
          <span className="bg-gray-400 text-white px-2 py-1 rounded-md text-xs font-medium">
            COMPLETED
          </span>
        );
      case "upcoming":
        return (
          <span className="bg-sport-blue text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {timeToStart}
          </span>
        );
      default:
        return null;
    }
  };

  const getActionButton = (race: Race) => {
    switch (race.status) {
      case "live":
        return (
          <Button className="predict-button">
            Predict Now
          </Button>
        );
      case "upcoming":
        return (
          <Button variant="outline">
            View Details
          </Button>
        );
      case "completed":
        return (
          <Button variant="outline" className="text-gray-500">
            View Results
          </Button>
        );
      case "locked":
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="text-gray-500" disabled>
                Locked
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This race has already started and predictions are locked</p>
            </TooltipContent>
          </Tooltip>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-2">Horse Racing</h1>
      <p className="text-gray-500 mb-4">Today's Races</p>

      <div className="space-y-3">
        {races.map((race) => (
          <div key={race.id} className="sport-card">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">Race #{race.number}</h3>
                {getStatusTag(race.status, race.timeToStart)}
              </div>
              <h2 className="font-bold text-lg">{race.name}</h2>
              <div className="text-sm text-gray-500 mt-1">
                {race.venue} • {race.time}
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <div className="text-sm font-medium">
                  {race.status === "live" ? (
                    <span className="text-sport-green">In Progress</span>
                  ) : race.status === "completed" ? (
                    <span className="text-gray-500">Results Available</span>
                  ) : (
                    <span>8 Runners</span>
                  )}
                </div>
              </div>
              <Link to={`/racing/${race.id}`}>
                {getActionButton(race)}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <NavigationBar />
    </div>
  );
};

export default HorseRacingHome;
