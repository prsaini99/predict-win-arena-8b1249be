
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const UserProfile = () => {
  // Mock user data
  const user = {
    name: "Rahul Sharma",
    avatar: "/placeholder.svg",
    points: 1850,
    rank: 24,
    matches: 32,
    accuracy: 68,
  };

  // Mock history data
  const history = [
    {
      id: "1",
      match: "India vs Australia",
      date: "May 10, 2025",
      points: 120,
      correct: 8,
      total: 10,
    },
    {
      id: "2",
      match: "England vs New Zealand",
      date: "May 8, 2025",
      points: 90,
      correct: 6,
      total: 10,
    },
    {
      id: "3",
      match: "Royal Challengers vs Chennai Kings",
      date: "May 5, 2025",
      points: 150,
      correct: 10,
      total: 12,
    },
  ];

  // Mock badges data
  const badges = [
    {
      id: "1",
      name: "Prediction Pro",
      description: "Made 100 correct predictions",
      icon: "🏆",
      earned: true,
    },
    {
      id: "2",
      name: "Cricket Expert",
      description: "90% accuracy in 5 consecutive matches",
      icon: "🏏",
      earned: true,
    },
    {
      id: "3",
      name: "Top Predictor",
      description: "Ranked in top 10 weekly leaderboard",
      icon: "🥇",
      earned: false,
    },
    {
      id: "4",
      name: "Perfect Match",
      description: "100% accuracy in a full match",
      icon: "✨",
      earned: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center">
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
            <h2 className="text-xl font-bold flex items-center">
              {user.name}
              <button className="ml-2 text-gray-400">
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
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            </h2>
            <p className="text-gray-500">
              Joined May 2025 • Rank #{user.rank}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 p-3 rounded-lg text-center">
            <p className="text-gray-600 text-sm">Total Points</p>
            <p className="text-sport-blue font-bold text-xl">{user.points}</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <p className="text-gray-600 text-sm">Accuracy</p>
            <p className="text-sport-green font-bold text-xl">{user.accuracy}%</p>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg text-center">
            <p className="text-gray-600 text-sm">Matches</p>
            <p className="text-sport-orange font-bold text-xl">{user.matches}</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="border border-gray-100 rounded-lg p-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{item.match}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-600">
                      {item.correct}/{item.total} correct
                    </span>
                  </div>
                  <div className="text-sport-blue font-bold">
                    +{item.points} pts
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full border-dashed"
            >
              View More History
            </Button>
          </TabsContent>

          <TabsContent value="badges" className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`border rounded-lg p-3 ${
                    badge.earned
                      ? "border-sport-blue bg-blue-50"
                      : "border-gray-200 opacity-60"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{badge.icon}</span>
                    <h3 className="font-medium">{badge.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {badge.description}
                  </p>
                  {badge.earned ? (
                    <div className="mt-2 text-xs text-sport-green font-medium flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Earned
                    </div>
                  ) : (
                    <div className="mt-2 text-xs text-gray-500 font-medium">
                      Not yet earned
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4 border-t border-gray-100">
        <Button variant="outline" className="w-full">
          Settings
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
