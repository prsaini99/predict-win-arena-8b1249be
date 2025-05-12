
import { Avatar } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface LeaderboardEntry {
  id: string;
  rank: number;
  username: string;
  points: number;
  avatar?: string;
  isCurrentUser?: boolean;
}

// Mock data
const globalLeaderboard: LeaderboardEntry[] = [
  {
    id: "1",
    rank: 1,
    username: "CricketMaster",
    points: 4250,
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    rank: 2,
    username: "PredictionKing",
    points: 3890,
  },
  {
    id: "3",
    rank: 3,
    username: "SportsPundit",
    points: 3780,
    avatar: "/placeholder.svg",
  },
  {
    id: "4",
    rank: 4,
    username: "MSDhoni_Fan",
    points: 3550,
  },
  {
    id: "5",
    rank: 5,
    username: "CricketWiz",
    points: 3420,
    avatar: "/placeholder.svg",
  },
  {
    id: "current",
    rank: 24,
    username: "You",
    points: 1850,
    isCurrentUser: true,
  },
];

const todayLeaderboard: LeaderboardEntry[] = [
  {
    id: "1",
    rank: 1,
    username: "SportsPundit",
    points: 380,
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    rank: 2,
    username: "CricketWiz",
    points: 320,
    avatar: "/placeholder.svg",
  },
  {
    id: "3",
    rank: 3,
    username: "PredictionKing",
    points: 290,
  },
  {
    id: "4",
    rank: 4,
    username: "MSDhoni_Fan",
    points: 250,
  },
  {
    id: "5",
    rank: 5,
    username: "CricketMaster",
    points: 240,
    avatar: "/placeholder.svg",
  },
  {
    id: "current",
    rank: 12,
    username: "You",
    points: 150,
    isCurrentUser: true,
  },
];

const LeaderboardList = ({
  entries,
  showTop3Special = false,
}: {
  entries: LeaderboardEntry[];
  showTop3Special?: boolean;
}) => {
  // Split into top 3 and rest if needed
  const top3 = showTop3Special ? entries.slice(0, 3) : [];
  const rest = showTop3Special ? entries.slice(3) : entries;
  const currentUser = entries.find((entry) => entry.isCurrentUser);

  return (
    <div>
      {showTop3Special && top3.length > 0 && (
        <div className="flex justify-center items-end mb-8 mt-4">
          {/* Second place */}
          <div className="text-center mx-3">
            <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-2 overflow-hidden">
              {top3[1]?.avatar ? (
                <img
                  src={top3[1].avatar}
                  alt={top3[1].username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-sport-blue flex items-center justify-center text-white text-xl font-bold">
                  {top3[1]?.username.charAt(0)}
                </div>
              )}
            </div>
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-1">
              <span className="text-xl font-bold">2</span>
            </div>
            <p className="font-medium text-sm truncate max-w-[80px]">
              {top3[1]?.username}
            </p>
            <p className="text-xs text-sport-blue font-medium">
              {top3[1]?.points} pts
            </p>
          </div>

          {/* First place */}
          <div className="text-center mx-3 -mt-6">
            <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-2 overflow-hidden border-2 border-sport-yellow">
              {top3[0]?.avatar ? (
                <img
                  src={top3[0].avatar}
                  alt={top3[0].username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-sport-orange flex items-center justify-center text-white text-2xl font-bold">
                  {top3[0]?.username.charAt(0)}
                </div>
              )}
            </div>
            <div className="w-16 h-16 rounded-full bg-sport-yellow flex items-center justify-center mb-1">
              <span className="text-2xl font-bold">1</span>
            </div>
            <p className="font-bold text-sm truncate max-w-[80px]">
              {top3[0]?.username}
            </p>
            <p className="text-xs text-sport-orange font-medium">
              {top3[0]?.points} pts
            </p>
          </div>

          {/* Third place */}
          <div className="text-center mx-3">
            <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-2 overflow-hidden">
              {top3[2]?.avatar ? (
                <img
                  src={top3[2].avatar}
                  alt={top3[2].username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-sport-green flex items-center justify-center text-white text-xl font-bold">
                  {top3[2]?.username.charAt(0)}
                </div>
              )}
            </div>
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mb-1">
              <span className="text-xl font-bold">3</span>
            </div>
            <p className="font-medium text-sm truncate max-w-[80px]">
              {top3[2]?.username}
            </p>
            <p className="text-xs text-sport-green font-medium">
              {top3[2]?.points} pts
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {rest.map((entry) => (
          <div
            key={entry.id}
            className={`flex items-center justify-between p-3 rounded-lg ${
              entry.isCurrentUser
                ? "bg-blue-50 border border-sport-blue"
                : "border border-gray-100"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  entry.rank <= 3
                    ? entry.rank === 1
                      ? "bg-sport-yellow text-black"
                      : entry.rank === 2
                      ? "bg-gray-300 text-black"
                      : "bg-sport-orange/80 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span className="font-bold text-sm">{entry.rank}</span>
              </div>

              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2 border border-gray-200">
                  {entry.avatar ? (
                    <img
                      src={entry.avatar}
                      alt={entry.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-sport-blue flex items-center justify-center text-white font-bold">
                      {entry.username.charAt(0)}
                    </div>
                  )}
                </Avatar>
                <span
                  className={`${
                    entry.isCurrentUser ? "font-bold" : ""
                  } text-sm`}
                >
                  {entry.username}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="font-bold text-sport-blue">{entry.points}</span>
              <span className="text-xs text-gray-500 ml-1">pts</span>
            </div>
          </div>
        ))}
      </div>

      {currentUser && !entries.some((e) => e.id === currentUser.id) && (
        <div className="mt-4 pt-2 border-t border-gray-200">
          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-sport-blue">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <span className="font-bold text-sm">{currentUser.rank}</span>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-sport-blue flex items-center justify-center mr-2 text-white font-bold">
                  {currentUser.username.charAt(0)}
                </div>
                <span className="font-bold">{currentUser.username}</span>
              </div>
            </div>

            <div className="text-right">
              <span className="font-bold text-sport-blue">
                {currentUser.points}
              </span>
              <span className="text-xs text-gray-500 ml-1">pts</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Leaderboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <LeaderboardList entries={todayLeaderboard} showTop3Special={false} />
        </TabsContent>
        <TabsContent value="weekly">
          <LeaderboardList entries={globalLeaderboard} showTop3Special={false} />
        </TabsContent>
        <TabsContent value="global">
          <LeaderboardList entries={globalLeaderboard} showTop3Special={true} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Leaderboard;
