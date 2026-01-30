import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useEvents } from "@/hooks/useEvents";
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, isSameMonth, isToday } from "date-fns";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data: events, isLoading } = useEvents();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get days from previous month to fill the first week
  const startDayOfWeek = getDay(monthStart);
  const prevMonthDays = Array.from({ length: startDayOfWeek }, (_, i) => {
    const day = new Date(monthStart);
    day.setDate(day.getDate() - (startDayOfWeek - i));
    return { date: day, isCurrentMonth: false };
  });

  // Current month days
  const currentMonthDays = daysInMonth.map((day) => ({
    date: day,
    isCurrentMonth: true,
  }));

  // Next month days to fill remaining cells (42 total for 6 weeks)
  const totalDays = 42;
  const remainingDays = totalDays - prevMonthDays.length - currentMonthDays.length;
  const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => {
    const day = new Date(monthEnd);
    day.setDate(day.getDate() + (i + 1));
    return { date: day, isCurrentMonth: false };
  });

  const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

  const getEventsForDate = (date: Date) => {
    if (!events) return [];
    const dateStr = format(date, "yyyy-MM-dd");
    return events.filter((event) => event.event_date === dateStr);
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) =>
      direction > 0 ? addMonths(prev, 1) : subMonths(prev, 1)
    );
  };

  const upcomingEvents = events
    ?.filter((event) => {
      const eventDate = parseISO(event.event_date);
      return isSameMonth(eventDate, currentDate);
    })
    .slice(0, 6) ?? [];

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
                  {format(currentDate, "MMMM yyyy")}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={() => navigateMonth(1)}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-4 md:p-6">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
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
                    {allDays.map((day, index) => {
                      const dayEvents = getEventsForDate(day.date);
                      const isTodayDate = isToday(day.date);

                      return (
                        <div
                          key={index}
                          className={`min-h-20 md:min-h-28 p-1 md:p-2 rounded-lg border transition-all duration-300 ${
                            day.isCurrentMonth
                              ? "bg-card border-border hover:border-primary/50"
                              : "bg-secondary/20 border-transparent"
                          } ${isTodayDate ? "border-primary shadow-soft" : ""}`}
                        >
                          <div
                            className={`text-sm font-display mb-1 ${
                              day.isCurrentMonth ? "text-foreground" : "text-muted-foreground/50"
                            } ${isTodayDate ? "text-primary font-bold" : ""}`}
                          >
                            {format(day.date, "d")}
                          </div>

                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event) => (
                              <Link
                                key={event.id}
                                to={`/events/${event.id}`}
                                className="block text-xs p-1 rounded bg-primary/10 text-primary truncate cursor-pointer hover:bg-primary/20 transition-colors"
                                title={event.title}
                              >
                                {event.title}
                              </Link>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-muted-foreground">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Events List */}
          {upcomingEvents.length > 0 && (
            <div className="max-w-5xl mx-auto mt-12">
              <h2 className="text-xl font-display font-semibold mb-6">Upcoming This Month</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {upcomingEvents.map((event) => (
                  <Link key={event.id} to={`/events/${event.id}`}>
                    <Card variant="elevated" className="p-4 hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xl">
                          {event.image_emoji || "📅"}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold mb-1">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.club_name}</p>
                          <p className="text-sm text-primary mt-1">
                            {format(parseISO(event.event_date), "MMM d, yyyy")}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
