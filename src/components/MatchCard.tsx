
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface MatchCardProps {
  id: string;
  type: "cricket" | "racing";
  title: string;
  status: "live" | "upcoming" | "completed";
  time?: string;
  countdown?: string;
  progress?: string;
  teamALogo?: string;
  teamBLogo?: string;
  teamAName?: string;
  teamBName?: string;
  teamAScore?: string;
  teamBScore?: string;
  raceNumber?: number;
  raceVenue?: string;
  onClick?: () => void;
}

const MatchCard = ({
  id,
  type,
  title,
  status,
  time,
  countdown,
  progress,
  teamALogo,
  teamBLogo,
  teamAName,
  teamBName,
  teamAScore,
  teamBScore,
  raceNumber,
  raceVenue,
  onClick,
}: MatchCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case "live":
        return (
          <Badge className="bg-sport-red text-white animate-pulse-sport">
            LIVE
          </Badge>
        );
      case "upcoming":
        return (
          <Badge className="bg-sport-blue text-white">
            {countdown ? `Starts in ${countdown}` : "Upcoming"}
          </Badge>
        );
      case "completed":
        return <Badge className="bg-gray-500 text-white">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="sport-card hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-500 flex items-center">
            {type === "cricket" ? (
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 12L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Cricket - {time}
              </span>
            ) : (
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5C21 6.10457 20.1046 7 19 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 17H8L10 13L12 15L16 9L19 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Race #{raceNumber} - {raceVenue}
              </span>
            )}
          </div>
          {getStatusBadge()}
        </div>

        {type === "cricket" ? (
          <>
            <h3 className="font-medium mb-4 text-lg">{title}</h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-2 overflow-hidden">
                  {teamALogo ? (
                    <img
                      src={teamALogo}
                      alt={teamAName}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold">{teamAName?.[0]}</span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{teamAName}</p>
                  {status !== "upcoming" && (
                    <p className="text-sm font-bold">{teamAScore}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                  VS
                </span>
                {progress && (
                  <p className="text-xs mt-1 text-gray-500">
                    {progress}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <div>
                  <p className="font-medium text-sm text-right">{teamBName}</p>
                  {status !== "upcoming" && (
                    <p className="text-sm font-bold text-right">{teamBScore}</p>
                  )}
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ml-2 overflow-hidden">
                  {teamBLogo ? (
                    <img
                      src={teamBLogo}
                      alt={teamBName}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold">{teamBName?.[0]}</span>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-medium mb-2 text-lg">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {time} - {raceVenue}
            </p>
          </>
        )}

        <div className="mt-4 pt-3 border-t border-gray-100">
          <Button
            onClick={onClick}
            className={`w-full ${
              status === "live"
                ? "bg-sport-red hover:bg-sport-red/90"
                : status === "upcoming"
                ? "bg-sport-blue hover:bg-sport-blue/90"
                : "bg-gray-500 hover:bg-gray-500/90"
            }`}
          >
            {status === "live"
              ? "Play Now"
              : status === "upcoming"
              ? "Pre-Match Quiz"
              : "View Results"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
