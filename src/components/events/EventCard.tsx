import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import type { EventWithDetails } from "@/types/database";
import { format, parseISO } from "date-fns";

interface EventCardProps {
  event: EventWithDetails;
}

export function EventCard({ event }: EventCardProps) {
  const formattedDate = format(parseISO(event.event_date), "MMM d, yyyy");
  const formattedTime = format(new Date(`2000-01-01T${event.event_time}`), "h:mm a");
  const fillPercentage = (event.filled_seats / event.total_seats) * 100;

  return (
    <Card variant="elevated" className="group overflow-hidden">
      {/* Event Header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-300">
            {event.image_emoji || "📅"}
          </div>
          <Badge variant={event.status === "open" ? "registered" : "pending"}>
            {event.status === "open" ? "Registration Open" : event.status === "closed" ? "Closed" : "Cancelled"}
          </Badge>
        </div>
        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Organized by: <span className="text-primary">{event.club_name}</span>
        </p>
      </div>

      {/* Event Details */}
      <CardContent className="pt-0">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formattedDate}</span>
            <Clock className="w-4 h-4 text-primary ml-2" />
            <span>{formattedTime}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{event.filled_seats} / {event.total_seats} filled</span>
          </div>
        </div>

        {/* Contact Details */}
        {(event.club_email || event.club_phone || event.club_instagram) && (
          <div className="mb-4 p-3 rounded-lg bg-secondary border border-border">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Contact & Social</p>
            <div className="space-y-1.5">
              {event.club_email && (
                <a href={`mailto:${event.club_email}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-3 h-3" />
                  <span>{event.club_email}</span>
                </a>
              )}
              {event.club_phone && (
                <a href={`tel:${event.club_phone}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-3 h-3" />
                  <span>{event.club_phone}</span>
                </a>
              )}
              {event.club_instagram && (
                <a href={`https://instagram.com/${event.club_instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-3 h-3" />
                  <span>{event.club_instagram}</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${Math.min(fillPercentage, 100)}%` }}
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
  );
}
