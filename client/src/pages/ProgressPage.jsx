import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Progress } from "../components/ui/Progress";
import { Badge } from "../components/ui/Badge";
import Button from "../components/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs";
import { Trophy, Star, Target, Calendar, Award, BookOpen, Clock, TrendingUp, Medal, Flame } from "lucide-react";

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const overallStats = {
    totalPoints: 2450,
    rank: 3,
    streak: 7,
    completedLessons: 26,
    totalLessons: 45,
    hoursLearned: 12.5,
    averageScore: 85,
  };

  const achievements = [
    {
      name: "First Steps",
      description: "Complete your first lesson",
      icon: BookOpen,
      earned: true,
      date: "2024-01-15",
      points: 50,
      rarity: "Common",
    },
    {
      name: "Quiz Master",
      description: "Score 100% on 5 quizzes",
      icon: Trophy,
      earned: true,
      date: "2024-01-20",
      points: 100,
      rarity: "Rare",
    },
    {
      name: "Constitution Explorer",
      description: "Complete Bill of Rights module",
      icon: Star,
      earned: true,
      date: "2024-01-25",
      points: 200,
      rarity: "Epic",
    },
    {
      name: "Streak Keeper",
      description: "Maintain 7-day learning streak",
      icon: Flame,
      earned: true,
      date: "2024-02-01",
      points: 150,
      rarity: "Rare",
    },
    {
      name: "Civic Champion",
      description: "Complete all basic modules",
      icon: Medal,
      earned: false,
      date: null,
      points: 500,
      rarity: "Legendary",
    },
    {
      name: "Knowledge Seeker",
      description: "Spend 20 hours learning",
      icon: Clock,
      earned: false,
      date: null,
      points: 300,
      rarity: "Epic",
    },
  ];

  const weeklyProgress = [
    { day: "Mon", lessons: 2, points: 120 },
    { day: "Tue", lessons: 1, points: 80 },
    { day: "Wed", lessons: 3, points: 180 },
    { day: "Thu", lessons: 2, points: 140 },
    { day: "Fri", lessons: 1, points: 90 },
    { day: "Sat", lessons: 4, points: 220 },
    { day: "Sun", lessons: 2, points: 110 },
  ];

  const moduleProgress = [
    { name: "Bill of Rights", progress: 100, lessons: "8/8", points: 400, status: "completed" },
    { name: "Government Structure", progress: 75, lessons: "9/12", points: 360, status: "in-progress" },
    { name: "Electoral Process", progress: 33, lessons: "2/6", points: 120, status: "in-progress" },
    { name: "County Governments", progress: 0, lessons: "0/10", points: 0, status: "locked" },
    { name: "Justice System", progress: 0, lessons: "0/9", points: 0, status: "locked" },
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-800";
      case "Rare":
        return "bg-blue-100 text-blue-800";
      case "Epic":
        return "bg-purple-100 text-purple-800";
      case "Legendary":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "in-progress":
        return "border-blue-500 bg-blue-50";
      case "locked":
        return "border-gray-300 bg-gray-50";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Progress</h1>
            <p className="text-xl text-gray-600">Track your civic learning journey and celebrate achievements</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overall Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{overallStats.totalPoints}</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">#{overallStats.rank}</div>
              <div className="text-sm text-gray-600">Class Rank</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{overallStats.streak}</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {overallStats.completedLessons}/{overallStats.totalLessons}
              </div>
              <div className="text-sm text-gray-600">Lessons</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Learning Progress</span>
                </CardTitle>
                <CardDescription>Your overall progress across all modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Overall Completion</span>
                      <span className="text-sm text-gray-600">
                        {Math.round((overallStats.completedLessons / overallStats.totalLessons) * 100)}%
                      </span>
                    </div>
                    <Progress
                      value={(overallStats.completedLessons / overallStats.totalLessons) * 100}
                      className="h-3"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{overallStats.hoursLearned}</div>
                      <div className="text-sm text-gray-600">Hours Learned</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">{overallStats.averageScore}%</div>
                      <div className="text-sm text-gray-600">Average Score</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">
                        {achievements.filter((a) => a.earned).length}
                      </div>
                      <div className="text-sm text-gray-600">Achievements</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>This Week's Activity</span>
                </CardTitle>
                <CardDescription>Your daily learning activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-4">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                          day.lessons > 0 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {day.lessons}
                      </div>
                      <div className="text-xs text-gray-500">{day.points}pts</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span>Achievements</span>
                </CardTitle>
                <CardDescription>Unlock badges by completing challenges and reaching milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className={`border-2 ${
                        achievement.earned ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50 opacity-75"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              achievement.earned ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-500"
                            }`}
                          >
                            <achievement.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold">{achievement.name}</h4>
                              <Badge className={getRarityColor(achievement.rarity)}>{achievement.rarity}</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-blue-600">+{achievement.points} points</span>
                              {achievement.earned && achievement.date && (
                                <span className="text-xs text-gray-500">
                                  Earned {new Date(achievement.date).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <span>Module Progress</span>
                </CardTitle>
                <CardDescription>Track your progress through each learning module</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moduleProgress.map((module, index) => (
                    <Card key={index} className={`border-2 ${getStatusColor(module.status)}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{module.name}</h4>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">{module.lessons}</span>
                            <Badge variant="outline">{module.progress}%</Badge>
                          </div>
                        </div>
                        <Progress value={module.progress} className="h-2 mb-3" />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-blue-600 font-medium">{module.points} points earned</span>
                          {module.status === "completed" && (
                            <Badge className="bg-green-500 text-white">Completed</Badge>
                          )}
                          {module.status === "in-progress" && (
                            <Button size="sm" variant="outline">
                              Continue
                            </Button>
                          )}
                          {module.status === "locked" && <Badge variant="outline">Locked</Badge>}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>Your learning activity over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "Today",
                      activities: [
                        { type: "lesson", title: "Electoral Process - Voting Rights", time: "2:30 PM", points: 50 },
                        {
                          type: "quiz",
                          title: "Government Structure Quiz",
                          time: "1:15 PM",
                          points: 80,
                          score: "8/10",
                        },
                      ],
                    },
                    {
                      date: "Yesterday",
                      activities: [
                        {
                          type: "lesson",
                          title: "Bill of Rights - Freedom of Expression",
                          time: "4:45 PM",
                          points: 60,
                        },
                        { type: "achievement", title: "Earned 'Streak Keeper' badge", time: "4:30 PM", points: 150 },
                      ],
                    },
                    {
                      date: "2 days ago",
                      activities: [
                        { type: "quiz", title: "Children's Rights Quiz", time: "3:20 PM", points: 90, score: "9/10" },
                        { type: "lesson", title: "Constitutional History", time: "2:00 PM", points: 45 },
                      ],
                    },
                  ].map((day, dayIndex) => (
                    <div key={dayIndex}>
                      <h4 className="font-semibold text-gray-900 mb-3">{day.date}</h4>
                      <div className="space-y-2 ml-4">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                activity.type === "lesson"
                                  ? "bg-green-100"
                                  : activity.type === "quiz"
                                    ? "bg-blue-100"
                                    : "bg-yellow-100"
                              }`}
                            >
                              {activity.type === "lesson" ? (
                                <BookOpen className="w-4 h-4 text-green-600" />
                              ) : activity.type === "quiz" ? (
                                <Trophy className="w-4 h-4 text-blue-600" />
                              ) : (
                                <Award className="w-4 h-4 text-yellow-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{activity.title}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-600">
                                <span>{activity.time}</span>
                                {activity.score && <span>Score: {activity.score}</span>}
                                <span className="text-blue-600 font-medium">+{activity.points} points</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
