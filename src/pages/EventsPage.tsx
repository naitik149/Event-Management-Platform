import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  Filter,
  ChevronRight,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "Hackathon 2025: Code the Future",
    club: "Coding Club",
    date: "Jan 24, 2025",
    time: "10:00 AM",
    venue: "Main Auditorium",
    seats: { filled: 120, total: 150 },
    status: "open",
    category: "Technical",
    image: "🖥️",
    contact: { email: "codingclub@college.edu", phone: "+91 98765 43210", instagram: "@codingclub_official" },
  },
  {
    id: 2,
    title: "AI & Machine Learning Workshop",
    club: "AI Society",
    date: "Jan 28, 2025",
    time: "2:00 PM",
    venue: "Tech Lab 201",
    seats: { filled: 45, total: 60 },
    status: "open",
    category: "Workshop",
    image: "🤖",
    contact: { email: "aisociety@college.edu", phone: "+91 98765 12345", instagram: "@ai_society" },
  },
  {
    id: 3,
    title: "Campus Cultural Fest",
    club: "Cultural Committee",
    date: "Feb 5, 2025",
    time: "5:00 PM",
    venue: "Open Air Theatre",
    seats: { filled: 500, total: 500 },
    status: "closed",
    category: "Cultural",
    image: "🎭",
    contact: { email: "cultural@college.edu", phone: "+91 98765 67890", instagram: "@cultural_committee" },
  },
  {
    id: 4,
    title: "Startup Pitch Competition",
    club: "E-Cell",
    date: "Feb 10, 2025",
    time: "11:00 AM",
    venue: "Seminar Hall",
    seats: { filled: 30, total: 50 },
    status: "open",
    category: "Business",
    image: "🚀",
    contact: { email: "ecell@college.edu", phone: "+91 98765 11111", instagram: "@ecell_official" },
  },
  {
    id: 5,
    title: "Photography Walk",
    club: "Photography Club",
    date: "Feb 15, 2025",
    time: "6:00 AM",
    venue: "Campus Gardens",
    seats: { filled: 18, total: 25 },
    status: "open",
    category: "Creative",
    image: "📸",
    contact: { email: "photoclub@college.edu", phone: "+91 98765 22222", instagram: "@photoclub" },
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    club: "Developer Students Club",
    date: "Feb 20, 2025",
    time: "10:00 AM",
    venue: "Computer Lab 3",
    seats: { filled: 35, total: 40 },
    status: "open",
    category: "Technical",
    image: "🌐",
    contact: { email: "dsc@college.edu", phone: "+91 98765 33333", instagram: "@dsc_college" },
  },
];

const categories = ["All", "Technical", "Workshop", "Cultural", "Business", "Creative"];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.club.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="glow" className="mb-6">Events</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover and register for verified college events.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search events or clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50 focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} variant="glow" className="group overflow-hidden">
                  {/* Event Header */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-2xl group-hover:glow-primary transition-all duration-300">
                        {event.image}
                      </div>
                      <Badge variant={event.status === "open" ? "registered" : "pending"}>
                        {event.status === "open" ? "Registration Open" : "Closed"}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Organized by: <span className="text-primary">{event.club}</span>
                    </p>
                  </div>

                    {/* Event Details */}
                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                          <Clock className="w-4 h-4 text-primary ml-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{event.seats.filled} / {event.seats.total} filled</span>
                        </div>
                      </div>

                      {/* Contact Details */}
                      <div className="mb-4 p-3 rounded-lg bg-secondary/30 border border-border/30">
                        <p className="text-xs text-muted-foreground mb-2 font-medium">Contact & Social</p>
                        <div className="space-y-1.5">
                          <a href={`mailto:${event.contact.email}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="w-3 h-3" />
                            <span>{event.contact.email}</span>
                          </a>
                          <a href={`tel:${event.contact.phone}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="w-3 h-3" />
                            <span>{event.contact.phone}</span>
                          </a>
                          <a href={`https://instagram.com/${event.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="w-3 h-3" />
                            <span>{event.contact.instagram}</span>
                          </a>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${(event.seats.filled / event.seats.total) * 100}%` }}
                          />
                        </div>
                      </div>

                      <Button
                        variant={event.status === "open" ? "default" : "secondary"}
                        className="w-full"
                        asChild
                        disabled={event.status !== "open"}
                      >
                        <Link to={`/events/${event.id}`}>
                          View Details
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
