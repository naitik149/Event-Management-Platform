import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  QrCode,
  MessageSquare,
  Award,
  Bell,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const mockEvent = {
  id: 1,
  title: "Hackathon 2025: Code the Future",
  club: "Coding Club",
  date: "Jan 24, 2025",
  time: "10:00 AM - 6:00 PM",
  venue: "Main Auditorium",
  seats: { filled: 120, total: 150 },
  status: "open",
  category: "Technical",
  description: `Join us for the most anticipated coding event of the year! Hackathon 2025 brings together the brightest minds to solve real-world problems through code.

Whether you're a beginner or an experienced developer, this is your chance to collaborate, learn, and create something amazing in just 8 hours.

Prizes worth ₹50,000 to be won! Free food, swag, and networking opportunities included.`,
  rules: [
    "Team size: 2-4 members",
    "All code must be written during the event",
    "Use of open-source libraries is allowed",
    "Projects must be submitted before the deadline",
    "Plagiarism will result in disqualification",
  ],
  timeline: [
    { time: "Registration Opens", date: "Jan 20, 2025", completed: true },
    { time: "Event Day", date: "Jan 24, 2025", completed: false },
    { time: "QR Attendance Scan", date: "Jan 24, 2025 - 10:00 AM", completed: false },
    { time: "Feedback Submission", date: "Jan 24, 2025 - 6:30 PM", completed: false },
    { time: "Certificate Unlock", date: "After Feedback", completed: false },
  ],
  contact: {
    email: "codingclub@college.edu",
    phone: "+91 98765 43210",
    instagram: "@codingclub_official",
  },
};

export default function EventDetailsPage() {
  const { id } = useParams();

  return (
    <Layout>
      {/* Back Navigation */}
      <section className="py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild>
            <Link to="/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </Button>
        </div>
      </section>

      {/* Event Header */}
      <section className="py-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl shrink-0">
                🖥️
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="tech">{mockEvent.category}</Badge>
                  <Badge variant={mockEvent.status === "open" ? "registered" : "pending"}>
                    {mockEvent.status === "open" ? "Registration Open" : "Registration Closed"}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {mockEvent.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Organized by <span className="text-primary">{mockEvent.club}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {mockEvent.description}
                  </p>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Event Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockEvent.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          item.completed 
                            ? "bg-success/10 text-success" 
                            : "bg-secondary text-muted-foreground"
                        }`}>
                          {item.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-current" />
                          )}
                        </div>
                        <div className="flex-1 pb-4 border-b border-border last:border-0">
                          <p className="font-display font-medium">{item.time}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Rules & Eligibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mockEvent.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 rounded-lg bg-warning/10 border border-warning/30">
                    <p className="text-sm text-warning">
                      <strong>Note:</strong> Certificates are issued only after attendance verification and feedback submission.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Details Card */}
              <Card variant="elevated" className="sticky top-24">
                <CardContent className="pt-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{mockEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{mockEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{mockEvent.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{mockEvent.seats.filled} / {mockEvent.seats.total} registered</span>
                    </div>
                  </div>

                  {/* Seats Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Seats Filled</span>
                      <span className="text-primary font-display">
                        {Math.round((mockEvent.seats.filled / mockEvent.seats.total) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${(mockEvent.seats.filled / mockEvent.seats.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full mb-4">
                    Register Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    You'll receive reminders before the event.
                  </p>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Bell, text: "Event reminders" },
                      { icon: QrCode, text: "QR attendance scan" },
                      { icon: MessageSquare, text: "Post-event feedback" },
                      { icon: Award, text: "Verified certificate" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <item.icon className="w-4 h-4 text-primary" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact & Social */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-display font-semibold mb-4">Contact & Social</h3>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${mockEvent.contact.email}`} 
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                      <span>{mockEvent.contact.email}</span>
                    </a>
                    <a 
                      href={`tel:${mockEvent.contact.phone}`} 
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{mockEvent.contact.phone}</span>
                    </a>
                    <a 
                      href={`https://instagram.com/${mockEvent.contact.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-primary" />
                      <span>{mockEvent.contact.instagram}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
