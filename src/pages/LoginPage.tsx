import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Mail, Lock, User, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 group">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
              </Link>
            </div>

            <Card className="overflow-hidden">
              <Tabs defaultValue="login">
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
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        Remember me
                      </label>
                      <a href="#" className="text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/dashboard">
                        Login
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </TabsContent>

                {/* Register Form */}
                <TabsContent value="register" className="mt-0">
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
                          className="pl-10 bg-secondary border-border focus:border-primary"
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
                          className="pl-10 bg-secondary border-border focus:border-primary"
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
                          className="pl-10 bg-secondary border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Account Type</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-auto py-4 flex flex-col gap-1 border-primary bg-primary/10">
                          <span className="text-lg">👨‍🎓</span>
                          <span className="text-xs">Student</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex flex-col gap-1">
                          <span className="text-lg">🏫</span>
                          <span className="text-xs">Club Admin</span>
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full">
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
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
