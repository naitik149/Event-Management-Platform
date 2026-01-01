import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  QrCode,
  Award,
  Bell,
  Star,
  ArrowRight,
  GraduationCap,
  Users,
  Sparkles,
  CheckCircle2,
  PartyPopper,
  Search,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Centralized Events",
    description: "All campus events in one place. Never miss important announcements again.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: QrCode,
    title: "QR Attendance",
    description: "Scan to mark attendance. No more fake sign-ups or proxy attendance.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Award,
    title: "Auto Certificates",
    description: "Certificates auto-unlock after attendance & feedback verification.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get notified before events start. Never miss what matters.",
    color: "bg-warning/10 text-warning",
  },
  {
    icon: Star,
    title: "Feedback System",
    description: "Rate events to help organizers improve future experiences.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "For All Branches",
    description: "From Engineering to Arts, every student finds events they love.",
    color: "bg-accent/10 text-accent",
  },
];

const steps = [
  { 
    step: "01", 
    title: "Discover Events", 
    desc: "Browse verified campus events from all registered clubs",
    icon: Search,
  },
  { 
    step: "02", 
    title: "Register & Get Reminded", 
    desc: "One-click registration with automated reminders",
    icon: Clock,
  },
  { 
    step: "03", 
    title: "Scan QR at Venue", 
    desc: "Mark your attendance with a simple QR scan",
    icon: QrCode,
  },
  { 
    step: "04", 
    title: "Download Certificate", 
    desc: "Get your verified certificate after attending",
    icon: Award,
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Gradient Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-accent/20 rounded-full animate-float animation-delay-400" />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-accent/30 rounded-full animate-bounce-gentle" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <PartyPopper className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Welcome to Your Campus Hub
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
              <span className="text-foreground">Your Campus, Your Events,</span>
              <br />
              <span className="text-gradient">One Platform.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
              Discover, register, attend, and get certified — all in one place. 
              For every student, from every branch.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
              <Button size="lg" className="rounded-full px-8 shadow-medium group" asChild>
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/login">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16 animate-fade-in animation-delay-600">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students Active</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Clubs Registered</div>
              </div>
            </div>
          </div>

          {/* Floating Event Cards Preview */}
          <div className="mt-16 relative max-w-4xl mx-auto animate-scale-in animation-delay-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Tech Fest 2025", category: "Technology", color: "bg-primary" },
                { title: "Cultural Night", category: "Cultural", color: "bg-accent" },
                { title: "Sports Meet", category: "Sports", color: "bg-success" },
              ].map((event, index) => (
                <Card 
                  key={index} 
                  className="p-4 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <div className={`w-full h-24 rounded-lg ${event.color}/10 mb-3 flex items-center justify-center`}>
                    <span className={`text-2xl font-display font-bold ${event.color === 'bg-primary' ? 'text-primary' : event.color === 'bg-accent' ? 'text-accent' : 'text-success'}`}>
                      {event.title.charAt(0)}
                    </span>
                  </div>
                  <Badge variant="secondary" className="mb-2">{event.category}</Badge>
                  <h3 className="font-display font-semibold text-foreground">{event.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="destructive" className="mb-6">The Challenge</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Campus Events Are <span className="text-destructive">Scattered</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Students from all departments face the same problems when trying to participate in campus activities.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: "📍", text: "Event details are scattered across WhatsApp groups" },
                { icon: "❌", text: "Attendance tracking is unreliable and easily faked" },
                { icon: "⏰", text: "Certificates are delayed by weeks or months" },
                { icon: "📊", text: "Event quality is never measured or improved" },
              ].map((problem, index) => (
                <Card key={index} className="p-6 text-left shadow-soft hover:shadow-medium transition-all duration-300 bg-card">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{problem.icon}</span>
                    <p className="text-muted-foreground">{problem.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">The Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              One Platform. <span className="text-gradient">Endless Possibilities.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CampusConnect brings together event discovery, QR-based attendance, 
              automated certificates, and verified feedback for students of all branches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 group hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Simple Steps to <span className="text-gradient-warm">Get Started</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((item, index) => (
                <Card key={index} className="p-6 flex items-start gap-4 group hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-card">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary mb-1 block">Step {item.step}</span>
                    <h3 className="text-lg font-display font-semibold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto p-12 text-center shadow-large bg-card border-primary/10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Ready to Transform Your Campus Experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students already discovering events, building connections, and earning certificates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 shadow-medium" asChild>
                <Link to="/login">
                  Get Started Free
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link to="/events">
                  Browse Events
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
