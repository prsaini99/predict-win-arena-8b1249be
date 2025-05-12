
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationBar from "./NavigationBar";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data for stats
const weeklyPointsData = [
  { day: "Mon", points: 120 },
  { day: "Tue", points: 180 },
  { day: "Wed", points: 140 },
  { day: "Thu", points: 250 },
  { day: "Fri", points: 190 },
  { day: "Sat", points: 310 },
  { day: "Sun", points: 270 },
];

const monthlyPointsData = [
  { week: "Week 1", points: 850 },
  { week: "Week 2", points: 1200 },
  { week: "Week 3", points: 980 },
  { week: "Week 4", points: 1400 },
];

const sportData = [
  { sport: "Cricket", accuracy: 75, predictions: 48 },
  { sport: "Horse Racing", accuracy: 62, predictions: 35 },
  { sport: "Football", accuracy: 70, predictions: 20 },
  { sport: "Basketball", accuracy: 58, predictions: 12 },
];

interface Prediction {
  id: string;
  match: string;
  question: string;
  prediction: string;
  result: string;
  isCorrect: boolean;
  points: number;
  date: string;
}

const StatsPage = () => {
  const [period, setPeriod] = useState<"week" | "month" | "year">("week");
  
  // Mock prediction history
  const [predictions] = useState<Prediction[]>([
    {
      id: "p1",
      match: "India vs Australia",
      question: "Who will win the match?",
      prediction: "India",
      result: "India",
      isCorrect: true,
      points: 100,
      date: "May 10, 2025",
    },
    {
      id: "p2",
      match: "India vs Australia",
      question: "Total runs in first 10 overs?",
      prediction: "60-70",
      result: "72",
      isCorrect: true,
      points: 75,
      date: "May 10, 2025",
    },
    {
      id: "p3",
      match: "England vs New Zealand",
      question: "Who will win the match?",
      prediction: "England",
      result: "New Zealand",
      isCorrect: false,
      points: 0,
      date: "May 8, 2025",
    },
    {
      id: "p4",
      match: "Delhi Derby - Race 3",
      question: "Which horse will win?",
      prediction: "Thunder Bolt",
      result: "Speed Demon",
      isCorrect: false,
      points: 0,
      date: "May 7, 2025",
    },
    {
      id: "p5",
      match: "Royal Challengers vs Chennai Kings",
      question: "Highest individual score?",
      prediction: "80-90",
      result: "85",
      isCorrect: true,
      points: 100,
      date: "May 5, 2025",
    },
  ]);

  // Stats summary data
  const stats = {
    totalPredictions: 120,
    correctPredictions: 82,
    totalPoints: 1850,
    accuracy: 68,
    bestStreak: 9,
    currentStreak: 3,
  };

  // Change period for charts
  const handlePeriodChange = (value: "week" | "month" | "year") => {
    setPeriod(value);
  };

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Your Stats</h1>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Total Predictions</div>
            <div className="text-2xl font-bold">{stats.totalPredictions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Correct Predictions</div>
            <div className="text-2xl font-bold text-sport-green">{stats.correctPredictions}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Accuracy</div>
            <div className="text-2xl font-bold text-sport-blue">{stats.accuracy}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Total Points</div>
            <div className="text-2xl font-bold text-sport-orange">{stats.totalPoints}</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Points Earned</CardTitle>
          <CardDescription>
            <div className="flex space-x-2 mt-1">
              <Button
                variant={period === "week" ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs"
                onClick={() => handlePeriodChange("week")}
              >
                Week
              </Button>
              <Button
                variant={period === "month" ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs"
                onClick={() => handlePeriodChange("month")}
              >
                Month
              </Button>
              <Button
                variant={period === "year" ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs"
                onClick={() => handlePeriodChange("year")}
              >
                Year
              </Button>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={period === "week" ? weeklyPointsData : monthlyPointsData}
                margin={{
                  top: 5,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey={period === "week" ? "day" : "week"} />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="points"
                  stroke="#2563eb"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Sport Breakdown */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Sport Breakdown</CardTitle>
          <CardDescription>Accuracy by sport type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sportData}
                margin={{
                  top: 20,
                  right: 10,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sport" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="accuracy" name="Accuracy %" fill="#2563eb" />
                <Bar dataKey="predictions" name="Predictions" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Prediction History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Predictions</CardTitle>
          <CardDescription>Your last 5 predictions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="correct">Correct Only</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-3">
              {predictions.map((prediction) => (
                <div
                  key={prediction.id}
                  className={`p-3 rounded-lg border ${
                    prediction.isCorrect ? "border-green-100 bg-green-50" : "border-red-100 bg-red-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-sm">{prediction.match}</h3>
                    <span className="text-xs text-gray-500">{prediction.date}</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">{prediction.question}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="text-xs">
                        <span className="text-gray-500">Your prediction: </span>
                        <span className="font-medium">{prediction.prediction}</span>
                      </div>
                      <div className="text-xs mx-2">•</div>
                      <div className="text-xs">
                        <span className="text-gray-500">Result: </span>
                        <span className="font-medium">{prediction.result}</span>
                      </div>
                    </div>
                    <div className={`text-xs font-medium ${prediction.isCorrect ? "text-sport-green" : "text-sport-red"}`}>
                      {prediction.isCorrect ? `+${prediction.points} pts` : "0 pts"}
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="correct" className="space-y-3">
              {predictions.filter(p => p.isCorrect).map((prediction) => (
                <div
                  key={prediction.id}
                  className="p-3 rounded-lg border border-green-100 bg-green-50"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-sm">{prediction.match}</h3>
                    <span className="text-xs text-gray-500">{prediction.date}</span>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">{prediction.question}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="text-xs">
                        <span className="text-gray-500">Your prediction: </span>
                        <span className="font-medium">{prediction.prediction}</span>
                      </div>
                      <div className="text-xs mx-2">•</div>
                      <div className="text-xs">
                        <span className="text-gray-500">Result: </span>
                        <span className="font-medium">{prediction.result}</span>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-sport-green">
                      +{prediction.points} pts
                    </div>
                  </div>
                </div>
              ))}
              
              {predictions.filter(p => p.isCorrect).length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No correct predictions yet
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <NavigationBar />
    </div>
  );
};

export default StatsPage;
