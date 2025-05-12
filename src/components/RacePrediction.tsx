
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationBar from "./NavigationBar";
import { toast } from "sonner";

interface Horse {
  id: number;
  number: number;
  name: string;
  jockey: string;
  odds: number;
  status?: "favorite" | "underdog";
}

const RacePrediction = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedHorse, setSelectedHorse] = useState<number | null>(null);
  const [isPredictionSubmitted, setIsPredictionSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("04:23");

  // Mock data for a specific race
  const race = {
    id: id || "race3",
    number: 3,
    name: "Sprinter Cup",
    venue: "Mumbai Race Course",
    time: "1:00 PM",
    status: "live" as const,
  };

  // Mock horses data
  const horses: Horse[] = [
    { id: 1, number: 1, name: "Thunder Bolt", jockey: "R. Kumar", odds: 3.5, status: "favorite" },
    { id: 2, number: 2, name: "Silver Streak", jockey: "A. Sharma", odds: 4.2 },
    { id: 3, number: 3, name: "Midnight Star", jockey: "V. Singh", odds: 6.0 },
    { id: 4, number: 4, name: "Golden Arrow", jockey: "S. Patel", odds: 8.5 },
    { id: 5, number: 5, name: "Royal Flush", jockey: "M. Desai", odds: 10.0 },
    { id: 6, number: 6, name: "Lucky Charm", jockey: "P. Roy", odds: 12.5, status: "underdog" },
    { id: 7, number: 7, name: "Wind Dancer", jockey: "K. Gupta", odds: 15.0 },
    { id: 8, number: 8, name: "Mountain Spirit", jockey: "J. Khan", odds: 20.0 },
  ];

  const handleSelection = (horseId: number) => {
    if (!isPredictionSubmitted) {
      setSelectedHorse(horseId);
    }
  };

  const handleSubmit = () => {
    if (selectedHorse === null) {
      toast.error("Please select a horse to predict");
      return;
    }

    setIsPredictionSubmitted(true);
    toast.success("Prediction submitted successfully!");
    
    // In a real app, this would send the prediction to a backend server
  };

  const handleEdit = () => {
    setIsPredictionSubmitted(false);
  };

  const viewLeaderboard = () => {
    navigate("/leaderboard");
  };

  const getOddsDisplay = (odds: number) => {
    return `${odds.toFixed(1)}x`;
  };

  const getWinningAmount = (odds: number) => {
    return `${(100 * odds).toFixed(0)} pts`;
  };

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">{race.name}</h1>
          <p className="text-gray-500 text-sm">{race.venue} • Race #{race.number}</p>
        </div>
        <div className="bg-sport-blue text-white px-3 py-2 rounded-lg flex items-center">
          <span className="mr-1 text-sm">Race starts in</span>
          <span className="font-bold">{timeLeft}</span>
        </div>
      </div>

      <div className="sport-card mb-4">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold">Pick the winner</h2>
          <p className="text-sm text-gray-500">Select one horse to win this race</p>
        </div>

        <div className="divide-y divide-gray-100">
          {horses.map((horse) => (
            <div
              key={horse.id}
              className={`p-4 flex items-center ${
                selectedHorse === horse.id
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              } ${isPredictionSubmitted ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => handleSelection(horse.id)}
            >
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                  selectedHorse === horse.id
                    ? "border-sport-blue bg-sport-blue"
                    : "border-gray-300"
                }`}
              >
                {selectedHorse === horse.id && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-bold w-6">{horse.number}</span>
                  <span className="font-medium">{horse.name}</span>
                  {horse.status === "favorite" && (
                    <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">
                      Favorite
                    </span>
                  )}
                  {horse.status === "underdog" && (
                    <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                      Underdog
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">Jockey: {horse.jockey}</div>
              </div>

              <div className="text-right">
                <div className="font-bold">{getOddsDisplay(horse.odds)}</div>
                <div className="text-xs text-sport-green">
                  Win: {getWinningAmount(horse.odds)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        {!isPredictionSubmitted ? (
          <Button className="submit-button w-full" onClick={handleSubmit}>
            Submit Prediction
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              className="w-1/2"
              onClick={handleEdit}
            >
              Edit Pick
            </Button>
            <Button
              className="w-1/2"
              onClick={viewLeaderboard}
            >
              View Leaderboard
            </Button>
          </>
        )}
      </div>

      <NavigationBar />
    </div>
  );
};

export default RacePrediction;
