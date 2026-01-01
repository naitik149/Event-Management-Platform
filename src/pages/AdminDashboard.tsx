import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  QrCode,
  Award,
  MessageSquare,
  Star,
  Plus,
  Upload,
  Download,
  BarChart,
  CheckCircle,
  Eye,
  Settings,
} from "lucide-react";

const mockClubData = {
  name: "Coding Club",
  totalEvents: 12,
  totalRegistrations: 1250,
  averageRating: 4.6,
  events: [
    {
      id: 1,
      title: "Hackathon 2025: Code the Future",
      date: "Jan 24, 2025",
      time: "10:00 AM",
      venue: "Main Auditorium",
      registered: 120,
      attended: 98,
      capacity: 150,
      status: "completed",
      rating: 4.8,
      feedbackCount: 85,
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      date: "Feb 20, 2025",
      time: "10:00 AM",
      venue: "Computer Lab 3",
      registered: 35,
      attended: 0,
      capacity: 40,
      status: "upcoming",
      rating: 0,
      feedbackCount: 0,
    },
  ],
  recentFeedback: [
    { user: "Student A", rating: 5, comment: "Amazing event! Learned so much.", event: "Hackathon 2025" },
    { user: "Student B", rating: 4, comment: "Great organization. Could use more breaks.", event: "Hackathon 2025" },
    { user: "Student C", rating: 5, comment: "Best hackathon I've attended!", event: "Hackathon 2025" },
  ],
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Club Dashboard</Badge>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  {mockClubData.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Manage events, attendance, feedback, and certificates seamlessly.
                </p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: mockClubData.totalEvents, label: "Total Events", icon: Calendar },
              { value: mockClubData.totalRegistrations, label: "Total Registrations", icon: Users },
              { value: mockClubData.averageRating.toFixed(1), label: "Avg Rating", icon: Star },
              { value: "98%", label: "Attendance Rate", icon: CheckCircle },
            ].map((stat, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="events" className="space-y-8">
              <TabsList className="bg-secondary p-1 flex-wrap">
                <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Events
                </TabsTrigger>
                <TabsTrigger value="qr" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  QR Attendance
                </TabsTrigger>
                <TabsTrigger value="feedback" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Feedback
                </TabsTrigger>
                <TabsTrigger value="certificates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Certificates
                </TabsTrigger>
              </TabsList>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-semibold">Your Events</h2>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Event
                  </Button>
                </div>

                <div className="space-y-4">
                  {mockClubData.events.map((event) => (
                    <Card key={event.id} variant="elevated">
                      <CardContent className="pt-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-display font-semibold">{event.title}</h3>
                              <Badge variant={event.status === "upcoming" ? "registered" : "completed"}>
                                {event.status === "upcoming" ? "Upcoming" : "Completed"}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-primary" />
                                {event.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-primary" />
                                {event.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-primary" />
                                {event.venue}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-6">
                            <div className="text-center">
                              <p className="text-xl font-display font-bold text-primary">{event.registered}</p>
                              <p className="text-xs text-muted-foreground">Registered</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xl font-display font-bold text-success">{event.attended}</p>
                              <p className="text-xs text-muted-foreground">Attended</p>
                            </div>
                            {event.status === "completed" && (
                              <div className="text-center">
                                <p className="text-xl font-display font-bold text-warning flex items-center gap-1">
                                  <Star className="w-4 h-4" />
                                  {event.rating}
                                </p>
                                <p className="text-xs text-muted-foreground">{event.feedbackCount} reviews</p>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* QR Attendance Tab */}
              <TabsContent value="qr">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <QrCode className="w-6 h-6 text-primary" />
                        Generate Attendance QR
                      </CardTitle>
                      <CardDescription>
                        Display this QR code at the event venue.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <div className="w-48 h-48 mx-auto mb-6 rounded-lg bg-foreground p-4">
                          <div className="w-full h-full bg-background rounded flex items-center justify-center">
                            <QrCode className="w-24 h-24 text-foreground" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Hackathon 2025 - Jan 24, 2025
                        </p>
                        <div className="flex gap-3 justify-center">
                          <Button variant="default">
                            <Download className="w-4 h-4 mr-2" />
                            Download QR
                          </Button>
                          <Button variant="outline">
                            Regenerate
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Attendance Overview</CardTitle>
                      <CardDescription>
                        Real-time attendance tracking
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                          <div>
                            <p className="font-display font-medium">Hackathon 2025</p>
                            <p className="text-sm text-muted-foreground">Jan 24, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-display font-bold text-primary">98/120</p>
                            <p className="text-xs text-muted-foreground">Attended</p>
                          </div>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "82%" }} />
                        </div>
                        <p className="text-sm text-center text-muted-foreground">
                          82% attendance rate
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Feedback Tab */}
              <TabsContent value="feedback">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Stats */}
                  <Card className="lg:col-span-3">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                          <p className="text-4xl font-display font-bold text-primary mb-1">4.6</p>
                          <div className="flex justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= 4 ? "text-warning fill-warning" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">Average Rating</p>
                        </div>
                        <div>
                          <p className="text-4xl font-display font-bold text-primary mb-1">85</p>
                          <p className="text-sm text-muted-foreground">Total Feedback</p>
                        </div>
                        <div>
                          <p className="text-4xl font-display font-bold text-primary mb-1">87%</p>
                          <p className="text-sm text-muted-foreground">Response Rate</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Feedback */}
                  {mockClubData.recentFeedback.map((feedback, index) => (
                    <Card key={index} variant="elevated">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= feedback.rating ? "text-warning fill-warning" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                          <Badge variant="tech">{feedback.event}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">"{feedback.comment}"</p>
                        <p className="text-sm text-muted-foreground">— {feedback.user}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary" />
                      Certificate Management
                    </CardTitle>
                    <CardDescription>
                      Certificates are auto-linked only to students with: ✓ Registered ✓ Attendance marked ✓ Feedback submitted
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <Card className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-display font-semibold mb-1">Hackathon 2025</h3>
                            <p className="text-sm text-muted-foreground">85 eligible students</p>
                          </div>
                          <div className="flex gap-3">
                            <Button variant="outline" size="sm">
                              <Upload className="w-4 h-4 mr-2" />
                              Upload Template
                            </Button>
                            <Button variant="default" size="sm">
                              Generate All
                            </Button>
                          </div>
                        </div>
                      </Card>

                      <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                        <p className="text-sm text-warning flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <strong>Security:</strong> Only authorized admins can upload certificates.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-display font-medium">Eligible Students Preview</h4>
                        <div className="max-h-64 overflow-y-auto space-y-2">
                          {["Alex Johnson", "Maria Garcia", "James Chen", "Emma Wilson", "David Kim"].map((student, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                                  {student.charAt(0)}
                                </div>
                                <span>{student}</span>
                              </div>
                              <Badge variant="success">Eligible</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
}
