import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  QrCode,
  Award,
  Bell,
  Star,
  ChevronRight,
  Zap,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Centralized Events",
    description: "All campus events in one place. Never miss important announcements again.",
  },
  {
    icon: QrCode,
    title: "QR Attendance",
    description: "Scan to mark attendance. No more fake sign-ups or proxy attendance.",
  },
  {
    icon: Award,
    title: "Auto Certificates",
    description: "Certificates auto-unlock after attendance & feedback verification.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Get notified before events start. Never miss what matters.",
  },
  {
    icon: Star,
    title: "Feedback System",
    description: "Rate events to help organizers improve future experiences.",
  },
];


export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-400" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-display text-primary">Event Management Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in animation-delay-200">
              <span className="text-foreground">We're not just managing events —</span>
              <br />
              <span className="text-gradient">we're organizing campus life.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
              One platform for events, attendance, certificates, and feedback.
              Built for students. Powered by innovation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
              <Button variant="hero" size="xl" asChild>
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/login">
                  Login / Register
                </Link>
              </Button>
            </div>

            {/* Terminal Preview */}
            <div className="mt-16 animate-scale-in animation-delay-600">
              <Card variant="glass" className="max-w-2xl mx-auto overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-display">terminal@dark-code-rising</span>
                </div>
                <div className="p-6 font-display text-sm text-left">
                  <p className="text-muted-foreground">
                    <span className="text-primary">$</span> initiating campus_events_system
                  </p>
                  <p className="text-success mt-2">✓ Event discovery module loaded</p>
                  <p className="text-success">✓ QR attendance system active</p>
                  <p className="text-success">✓ Certificate automation ready</p>
                  <p className="text-success">✓ Feedback collection enabled</p>
                  <p className="mt-2 text-foreground">
                    <span className="text-primary">$</span> system.status
                    <span className="terminal-cursor animate-blink" />
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="cyber" className="mb-6">The Problem</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Campus Events Are <span className="text-destructive">Broken</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: "📍", text: "Event details are scattered across WhatsApp groups" },
                { icon: "❌", text: "Attendance tracking is unreliable and easily faked" },
                { icon: "⏰", text: "Certificates are delayed by weeks or months" },
                { icon: "📊", text: "Event quality is never measured or improved" },
              ].map((problem, index) => (
                <Card key={index} variant="glow" className="p-6 text-left">
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="glow" className="mb-6">The Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              One Platform. <span className="text-gradient">Endless Possibilities.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dark Code Rising centralizes event discovery, QR-based attendance, 
              automated certificate eligibility, smart reminders, and verified feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="feature"
                className="p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="cyber" className="mb-6">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Simple. Secure. <span className="text-gradient">Seamless.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "01", title: "Discover Events", desc: "Browse verified campus events from all registered clubs" },
                { step: "02", title: "Register & Get Reminded", desc: "One-click registration with automated reminders" },
                { step: "03", title: "Scan QR at Venue", desc: "Mark your attendance with a simple QR scan" },
                { step: "04", title: "Download Certificate", desc: "Get your verified certificate after attending" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 group-hover:glow-primary transition-all duration-300">
                    <span className="text-xl font-display font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Card variant="glass" className="max-w-4xl mx-auto p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Campus Events?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students and clubs already using Dark Code Rising.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Get Started Free
                  <Zap className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
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
