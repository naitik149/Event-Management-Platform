import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const mockEvents = [
  { date: "2025-01-24", title: "Hackathon 2025", club: "Coding Club", color: "primary" },
  { date: "2025-01-28", title: "AI Workshop", club: "AI Society", color: "primary" },
  { date: "2025-02-05", title: "Cultural Fest", club: "Cultural Committee", color: "warning" },
  { date: "2025-02-10", title: "Pitch Competition", club: "E-Cell", color: "success" },
  { date: "2025-02-15", title: "Photography Walk", club: "Photography Club", color: "primary" },
  { date: "2025-02-20", title: "Web Dev Bootcamp", club: "DSC", color: "primary" },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1));

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Previous month days
    for (let i = 0; i < startingDay; i++) {
      const prevMonthDay = new Date(year, month, -startingDay + i + 1);
      days.push({ date: prevMonthDay, isCurrentMonth: false });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    
    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }

    return days;
  };

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const getEventsForDate = (date: Date) => {
    const dateKey = formatDateKey(date);
    return mockEvents.filter(event => event.date === dateKey);
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date();

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Calendar</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Event <span className="text-gradient">Calendar</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Plan ahead. Never miss an event again. Click an event to view details or register.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto overflow-hidden">
            {/* Calendar Header */}
            <CardHeader className="bg-secondary border-b border-border">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon" onClick={() => navigateMonth(-1)}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CalendarIcon className="w-6 h-6 text-primary" />
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => navigateMonth(1)}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-4 md:p-6">
              {/* Days of Week */}
              <div className="grid grid-cols-7 mb-4">
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center py-2 font-display text-sm text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {days.map((day, index) => {
                  const events = getEventsForDate(day.date);
                  const isToday = formatDateKey(day.date) === formatDateKey(today);
                  
                  return (
                    <div
                      key={index}
                      className={`min-h-20 md:min-h-28 p-1 md:p-2 rounded-lg border transition-all duration-300 ${
                        day.isCurrentMonth
                          ? "bg-card border-border hover:border-primary/50"
                          : "bg-secondary/20 border-transparent"
                      } ${isToday ? "border-primary shadow-soft" : ""}`}
                    >
                      <div className={`text-sm font-display mb-1 ${
                        day.isCurrentMonth ? "text-foreground" : "text-muted-foreground/50"
                      } ${isToday ? "text-primary font-bold" : ""}`}>
                        {day.date.getDate()}
                      </div>
                      
                      <div className="space-y-1">
                        {events.slice(0, 2).map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className="text-xs p-1 rounded bg-primary/10 text-primary truncate cursor-pointer hover:bg-primary/20 transition-colors"
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                        {events.length > 2 && (
                          <div className="text-xs text-muted-foreground">
                            +{events.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events List */}
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-xl font-display font-semibold mb-6">Upcoming This Month</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mockEvents.map((event, index) => (
                <Card key={index} variant="elevated" className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.club}</p>
                      <p className="text-sm text-primary mt-1">{event.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
