import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast.error(error.message || "Failed to sign in");
    } else {
      toast.success("Welcome back!");
      navigate(from, { replace: true });
    }

    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signUp(email, password, fullName);

    if (error) {
      toast.error(error.message || "Failed to create account");
    } else {
      toast.success("Account created! Please check your email to verify your account.");
      setActiveTab("login");
    }

    setIsLoading(false);
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-bold text-xl">
                  <span className="text-gradient">Event</span>
                  <span className="text-foreground">Flow</span>
                </span>
              </Link>
            </div>

            <Card className="overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full rounded-none bg-secondary p-0">
                  <TabsTrigger
                    value="login"
                    className="flex-1 rounded-none py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="flex-1 rounded-none py-4 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login" className="mt-0">
                  <form onSubmit={handleLogin}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">Welcome Back</CardTitle>
                      <CardDescription>
                        Access your events, attendance, and certificates.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@college.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-secondary border-border focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 bg-secondary border-border focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                      <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : null}
                        Login
                        {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                      </Button>
                    </CardContent>
                  </form>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register" className="mt-0">
                  <form onSubmit={handleRegister}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">Create Your Account</CardTitle>
                      <CardDescription>
                        Join your campus event ecosystem.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="pl-10 bg-secondary border-border focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="you@college.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-secondary border-border focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="register-password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 bg-secondary border-border focus:border-primary"
                            required
                            minLength={6}
                          />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        By creating an account, you'll start as a student. Contact admin for club organizer access.
                      </p>
                      <Button className="w-full" type="submit" disabled={isLoading}>
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : null}
                        Create Account
                        {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                      </Button>
                    </CardContent>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Secured with end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
