import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-8xl font-display font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Button variant="hero" asChild>
          <Link to="/"><Home className="w-4 h-4 mr-2" />Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
