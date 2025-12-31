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
  Zap,
  ArrowRight,
  Terminal,
  Shield,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

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

const codeLines = [
  { text: "$ initializing dark_code_rising...", delay: 0 },
  { text: "> loading event_discovery_module", delay: 400 },
  { text: "> activating qr_attendance_system", delay: 800 },
  { text: "> enabling certificate_automation", delay: 1200 },
  { text: "> deploying feedback_collection", delay: 1600 },
  { text: "✓ all systems operational", delay: 2000, isSuccess: true },
  { text: "$ ready for launch_", delay: 2400, isPrompt: true },
];

export default function HomePage() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    codeLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 grid-background opacity-40" />
        
        {/* Scan Lines Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_hsl(var(--primary)/0.03)_50%)] bg-[length:100%_4px]" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                {/* Glowing Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/40 mb-8 animate-fade-in backdrop-blur-sm">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                  </div>
                  <span className="text-sm font-display font-medium text-primary tracking-wide">
                    SYSTEM ONLINE
                  </span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>

                {/* Main Headline with Glitch Effect */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
                  <span className="block text-foreground mb-2">We're not just</span>
                  <span className="block text-foreground mb-2">managing events —</span>
                  <span className="relative inline-block">
                    <span className="text-gradient text-5xl md:text-6xl lg:text-7xl">
                      we're organizing
                    </span>
                  </span>
                  <span className="block text-gradient text-5xl md:text-6xl lg:text-7xl mt-2">
                    campus life.
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in animation-delay-400 leading-relaxed">
                  One unified platform for{" "}
                  <span className="text-primary font-medium">events</span>,{" "}
                  <span className="text-primary font-medium">attendance</span>,{" "}
                  <span className="text-primary font-medium">certificates</span>, and{" "}
                  <span className="text-primary font-medium">feedback</span>.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in animation-delay-600">
                  <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
                    <Link to="/events">
                      <span className="relative z-10 flex items-center">
                        Explore Events
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" className="group" asChild>
                    <Link to="/login">
                      <Terminal className="w-5 h-5 mr-2" />
                      Access Portal
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center gap-8 mt-12 animate-fade-in animation-delay-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-success" />
                    <span className="text-sm text-muted-foreground">Verified Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-warning" />
                    <span className="text-sm text-muted-foreground">Instant Certificates</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Interactive Terminal */}
              <div 
                className="relative animate-scale-in animation-delay-400"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${-mousePosition.y * 0.1}deg)`,
                }}
              >
                {/* Glow Effect Behind Terminal */}
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
                
                <Card className="relative bg-card/90 border-primary/30 backdrop-blur-xl overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-5 py-4 bg-secondary/80 border-b border-primary/20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-warning hover:bg-warning/80 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-success hover:bg-success/80 transition-colors cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" />
                      <span className="text-xs font-display text-muted-foreground">
                        dark-code-rising@campus
                      </span>
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 font-display text-sm space-y-2 min-h-[280px]">
                    {codeLines.map((line, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-300 ${
                          visibleLines.includes(index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                      >
                        <span
                          className={`${
                            line.isSuccess
                              ? "text-success"
                              : line.isPrompt
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {line.text}
                          {line.isPrompt && (
                            <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-pulse" />
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Terminal Footer */}
                  <div className="px-5 py-3 bg-secondary/40 border-t border-primary/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span className="text-xs text-success font-display">Connected</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-display">v2.0.1</span>
                  </div>
                </Card>

                {/* Floating Elements Around Terminal */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center animate-float backdrop-blur-sm">
                  <QrCode className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg bg-success/20 border border-success/30 flex items-center justify-center animate-float animation-delay-200 backdrop-blur-sm">
                  <Award className="w-5 h-5 text-success" />
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 rounded-lg bg-warning/20 border border-warning/30 flex items-center justify-center animate-float animation-delay-400 backdrop-blur-sm">
                  <Bell className="w-5 h-5 text-warning" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-display tracking-widest">SCROLL</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-destructive/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="destructive" className="mb-6">The Problem</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Campus Events Are <span className="text-destructive">Broken</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: "📍", text: "Event details are scattered across WhatsApp groups", color: "border-destructive/30 hover:border-destructive/50" },
                { icon: "❌", text: "Attendance tracking is unreliable and easily faked", color: "border-destructive/30 hover:border-destructive/50" },
                { icon: "⏰", text: "Certificates are delayed by weeks or months", color: "border-destructive/30 hover:border-destructive/50" },
                { icon: "📊", text: "Event quality is never measured or improved", color: "border-destructive/30 hover:border-destructive/50" },
              ].map((problem, index) => (
                <Card key={index} variant="glow" className={`p-6 text-left transition-all duration-300 ${problem.color}`}>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
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
                className="p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
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
      <section className="py-24 bg-secondary/10">
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
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <Card variant="glass" className="max-w-4xl mx-auto p-12 text-center border-primary/30">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Campus Events?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students and clubs already using Dark Code Rising.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">
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
