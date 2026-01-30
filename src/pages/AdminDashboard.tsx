import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  QrCode,
  Award,
  Star,
  Plus,
  Download,
  CheckCircle,
  Eye,
  Settings,
  Loader2,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEvents, useCreateEvent } from "@/hooks/useEvents";
import { useClubs } from "@/hooks/useClubs";
import { format, parseISO } from "date-fns";
import { toast } from "sonner";

export default function AdminDashboard() {
  const { profile, role, isAdmin } = useAuth();
  const { data: events, isLoading: isLoadingEvents } = useEvents();
  const { data: clubs, isLoading: isLoadingClubs } = useClubs();
  const createEventMutation = useCreateEvent();
  const { user } = useAuth();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    club_id: "",
    event_date: "",
    event_time: "",
    venue: "",
    category: "Technical",
    total_seats: 50,
    image_emoji: "📅",
  });

  const handleCreateEvent = async () => {
    if (!user) return;
    
    if (!newEvent.title || !newEvent.club_id || !newEvent.event_date || !newEvent.event_time || !newEvent.venue) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await createEventMutation.mutateAsync({
        ...newEvent,
        created_by: user.id,
        status: "open",
      });
      toast.success("Event created successfully!");
      setIsCreateDialogOpen(false);
      setNewEvent({
        title: "",
        description: "",
        club_id: "",
        event_date: "",
        event_time: "",
        venue: "",
        category: "Technical",
        total_seats: 50,
        image_emoji: "📅",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to create event");
    }
  };

  const totalRegistrations = events?.reduce((acc, e) => acc + (e.filled_seats || 0), 0) ?? 0;

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {isAdmin ? "Admin Dashboard" : "Club Dashboard"}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  {profile?.full_name || "Dashboard"}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Manage events, attendance, feedback, and certificates seamlessly.
                </p>
              </div>
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Event</DialogTitle>
                    <DialogDescription>
                      Fill in the details to create a new event.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Event Title *</Label>
                      <Input
                        id="title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., Hackathon 2026"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="club">Club *</Label>
                      <Select
                        value={newEvent.club_id}
                        onValueChange={(value) => setNewEvent((prev) => ({ ...prev, club_id: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a club" />
                        </SelectTrigger>
                        <SelectContent>
                          {clubs?.map((club) => (
                            <SelectItem key={club.id} value={club.id}>
                              {club.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={newEvent.event_date}
                          onChange={(e) => setNewEvent((prev) => ({ ...prev, event_date: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time *</Label>
                        <Input
                          id="time"
                          type="time"
                          value={newEvent.event_time}
                          onChange={(e) => setNewEvent((prev) => ({ ...prev, event_time: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venue">Venue *</Label>
                      <Input
                        id="venue"
                        value={newEvent.venue}
                        onChange={(e) => setNewEvent((prev) => ({ ...prev, venue: e.target.value }))}
                        placeholder="e.g., Main Auditorium"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={newEvent.category}
                          onValueChange={(value) => setNewEvent((prev) => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Technical">Technical</SelectItem>
                            <SelectItem value="Workshop">Workshop</SelectItem>
                            <SelectItem value="Cultural">Cultural</SelectItem>
                            <SelectItem value="Business">Business</SelectItem>
                            <SelectItem value="Creative">Creative</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="seats">Total Seats</Label>
                        <Input
                          id="seats"
                          type="number"
                          value={newEvent.total_seats}
                          onChange={(e) => setNewEvent((prev) => ({ ...prev, total_seats: parseInt(e.target.value) || 50 }))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emoji">Event Emoji</Label>
                      <Input
                        id="emoji"
                        value={newEvent.image_emoji}
                        onChange={(e) => setNewEvent((prev) => ({ ...prev, image_emoji: e.target.value }))}
                        placeholder="📅"
                        maxLength={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe your event..."
                        rows={4}
                      />
                    </div>
                    <Button
                      className="w-full"
                      onClick={handleCreateEvent}
                      disabled={createEventMutation.isPending}
                    >
                      {createEventMutation.isPending ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4 mr-2" />
                      )}
                      Create Event
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: events?.length ?? 0, label: "Total Events", icon: Calendar },
              { value: totalRegistrations, label: "Total Registrations", icon: Users },
              { value: clubs?.length ?? 0, label: "Clubs", icon: Star },
              { value: "N/A", label: "Attendance Rate", icon: CheckCircle },
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
                  <Button variant="outline" size="sm" onClick={() => setIsCreateDialogOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    New Event
                  </Button>
                </div>

                {isLoadingEvents ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : events?.length === 0 ? (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-display font-semibold mb-2">No events yet</h3>
                    <p className="text-muted-foreground mb-4">Create your first event to get started!</p>
                    <Button onClick={() => setIsCreateDialogOpen(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Event
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {events?.map((event) => (
                      <Card key={event.id} variant="elevated">
                        <CardContent className="pt-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">{event.image_emoji || "📅"}</span>
                                <h3 className="text-lg font-display font-semibold">{event.title}</h3>
                                <Badge variant={event.status === "open" ? "registered" : "pending"}>
                                  {event.status === "open" ? "Open" : event.status}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-primary" />
                                  {format(parseISO(event.event_date), "MMM d, yyyy")}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 text-primary" />
                                  {format(new Date(`2000-01-01T${event.event_time}`), "h:mm a")}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  {event.venue}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6">
                              <div className="text-center">
                                <p className="text-xl font-display font-bold text-primary">{event.filled_seats}</p>
                                <p className="text-xs text-muted-foreground">Registered</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xl font-display font-bold text-success">{event.total_seats}</p>
                                <p className="text-xs text-muted-foreground">Capacity</p>
                              </div>
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
                )}
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
                        <div className="w-48 h-48 mx-auto mb-6 rounded-lg bg-secondary border border-border flex items-center justify-center">
                          <QrCode className="w-24 h-24 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          QR Code generation coming soon
                        </p>
                        <div className="flex gap-3 justify-center">
                          <Button variant="default" disabled>
                            <Download className="w-4 h-4 mr-2" />
                            Download QR
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
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">
                          Attendance tracking will be available here
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Feedback Tab */}
              <TabsContent value="feedback">
                <div className="text-center py-12">
                  <Star className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-display font-semibold mb-2">No feedback yet</h3>
                  <p className="text-muted-foreground">
                    Feedback from attendees will appear here after events.
                  </p>
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
                    <div className="text-center py-12">
                      <Award className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-display font-semibold mb-2">Certificate generation coming soon</h3>
                      <p className="text-muted-foreground">
                        You'll be able to generate and manage certificates here.
                      </p>
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
