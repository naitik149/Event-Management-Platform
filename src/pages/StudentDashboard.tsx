import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  QrCode,
  Award,
  MessageSquare,
  Star,
  Download,
  CheckCircle,
  AlertCircle,
  Lock,
  Settings,
  User,
  Mail,
  Phone,
  Save,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const mockStudentData = {
  name: "Alex Johnson",
  email: "alex.johnson@college.edu",
  phone: "+91 98765 00000",
  studentId: "STU2024001",
  department: "Computer Science",
  year: "3rd Year",
  registeredEvents: [
    {
      id: 1,
      title: "Hackathon 2025: Code the Future",
      club: "Coding Club",
      date: "Jan 24, 2025",
      time: "10:00 AM",
      venue: "Main Auditorium",
      status: "completed",
      attended: true,
      feedbackSubmitted: true,
      certificateAvailable: true,
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      club: "AI Society",
      date: "Jan 28, 2025",
      time: "2:00 PM",
      venue: "Tech Lab 201",
      status: "attended",
      attended: true,
      feedbackSubmitted: false,
      certificateAvailable: false,
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      club: "E-Cell",
      date: "Feb 10, 2025",
      time: "11:00 AM",
      venue: "Seminar Hall",
      status: "registered",
      attended: false,
      feedbackSubmitted: false,
      certificateAvailable: false,
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      club: "Developer Students Club",
      date: "Feb 20, 2025",
      time: "10:00 AM",
      venue: "Computer Lab 3",
      status: "registered",
      attended: false,
      feedbackSubmitted: false,
      certificateAvailable: false,
    },
  ],
};

const statusConfig: Record<string, { label: string; variant: "registered" | "pending" | "completed" | "warning" }> = {
  registered: { label: "Registered", variant: "registered" },
  attended: { label: "Feedback Pending", variant: "pending" },
  completed: { label: "Completed", variant: "completed" },
};

export default function StudentDashboard() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [profileData, setProfileData] = useState({
    name: mockStudentData.name,
    email: mockStudentData.email,
    phone: mockStudentData.phone,
  });

  const completedEvents = mockStudentData.registeredEvents.filter(e => e.status === "completed");
  const upcomingEvents = mockStudentData.registeredEvents.filter(e => e.status === "registered");
  const pendingFeedback = mockStudentData.registeredEvents.filter(e => e.status === "attended");

  const handleProfileSave = () => {
    // Mock save - in real app this would call an API
    console.log("Profile saved:", profileData);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <Badge variant="glow" className="mb-4">Student Dashboard</Badge>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  Welcome back 👋
                </h1>
                <p className="text-lg text-muted-foreground">
                  Track your events, attendance, and certificates here.
                </p>
              </div>
              <Card variant="glass" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xl">
                    👨‍🎓
                  </div>
                  <div>
                    <p className="font-display font-semibold">{mockStudentData.name}</p>
                    <p className="text-sm text-muted-foreground">{mockStudentData.email}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: mockStudentData.registeredEvents.length, label: "Total Events", icon: Calendar },
              { value: completedEvents.length, label: "Completed", icon: CheckCircle },
              { value: pendingFeedback.length, label: "Pending Feedback", icon: MessageSquare },
              { value: completedEvents.length, label: "Certificates", icon: Award },
            ].map((stat, index) => (
              <Card key={index} variant="feature" className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-gradient">{stat.value}</p>
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
              <TabsList className="bg-secondary/50 p-1">
                <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  My Events
                </TabsTrigger>
                <TabsTrigger value="attendance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  QR Attendance
                </TabsTrigger>
                <TabsTrigger value="certificates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Certificates
                </TabsTrigger>
                <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Settings className="w-4 h-4 mr-1" />
                  Profile
                </TabsTrigger>
              </TabsList>

              {/* My Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {mockStudentData.registeredEvents.map((event) => (
                    <Card key={event.id} variant="glow" className="group">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant={statusConfig[event.status].variant}>
                            {statusConfig[event.status].label}
                          </Badge>
                          {event.attended && (
                            <CheckCircle className="w-5 h-5 text-success" />
                          )}
                        </div>
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {event.club}
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                            <Clock className="w-4 h-4 text-primary ml-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.venue}</span>
                          </div>
                        </div>

                        {event.status === "attended" && (
                          <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/30">
                            <p className="text-sm text-warning flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Submit feedback to unlock certificate
                            </p>
                          </div>
                        )}

                        <div className="mt-6 flex gap-3">
                          <Button variant="outline" size="sm" asChild className="flex-1">
                            <Link to={`/events/${event.id}`}>View Details</Link>
                          </Button>
                          {event.status === "attended" && (
                            <Button variant="default" size="sm" className="flex-1">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Submit Feedback
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* QR Attendance Tab */}
              <TabsContent value="attendance">
                <Card variant="glass" className="max-w-xl mx-auto">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <QrCode className="w-6 h-6 text-primary" />
                      QR Attendance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center">
                        <QrCode className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-2">
                        Ready to Mark Attendance
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Scan the QR code displayed at the event venue to mark your attendance.
                      </p>
                      <Button variant="default">
                        <QrCode className="w-4 h-4 mr-2" />
                        Open QR Scanner
                      </Button>
                    </div>

                    <div className="mt-8 p-4 rounded-lg bg-success/10 border border-success/30">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <div>
                          <p className="font-display font-medium text-success">Attendance Marked</p>
                          <p className="text-sm text-muted-foreground">Hackathon 2025 - Jan 24, 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates">
                <div className="grid md:grid-cols-2 gap-6">
                  {mockStudentData.registeredEvents.map((event) => (
                    <Card key={event.id} variant={event.certificateAvailable ? "glow" : "default"}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                            event.certificateAvailable 
                              ? "bg-primary/20 border border-primary/30"
                              : "bg-secondary border border-border/50"
                          }`}>
                            {event.certificateAvailable ? (
                              <Award className="w-7 h-7 text-primary" />
                            ) : (
                              <Lock className="w-7 h-7 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-semibold mb-1">{event.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{event.club}</p>
                            
                            {event.certificateAvailable ? (
                              <Button variant="default" size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                Download Certificate
                              </Button>
                            ) : (
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                  {event.attended ? (
                                    <CheckCircle className="w-4 h-4 text-success" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-muted-foreground" />
                                  )}
                                  <span className={event.attended ? "text-success" : "text-muted-foreground"}>
                                    Attendance marked
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  {event.feedbackSubmitted ? (
                                    <CheckCircle className="w-4 h-4 text-success" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-muted-foreground" />
                                  )}
                                  <span className={event.feedbackSubmitted ? "text-success" : "text-muted-foreground"}>
                                    Feedback submitted
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Profile Settings Tab */}
              <TabsContent value="profile">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Edit Profile */}
                  <Card variant="glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <User className="w-5 h-5 text-primary" />
                        Edit Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <Button onClick={handleProfileSave} className="w-full">
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Account Info */}
                  <Card variant="feature">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-primary" />
                        Account Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                        <p className="text-xs text-muted-foreground mb-1">Student ID</p>
                        <p className="font-display font-semibold">{mockStudentData.studentId}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                        <p className="text-xs text-muted-foreground mb-1">Department</p>
                        <p className="font-display font-semibold">{mockStudentData.department}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                        <p className="text-xs text-muted-foreground mb-1">Year</p>
                        <p className="font-display font-semibold">{mockStudentData.year}</p>
                      </div>
                      <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <p className="text-xs text-muted-foreground">
                          To update your Student ID, Department, or Year, please contact the admin.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
}
