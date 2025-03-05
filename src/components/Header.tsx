import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const navigateToAuth = (defaultTab: 'signin' | 'signup') => {
    navigate(`/auth?tab=${defaultTab}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/bc4b57d4-e29b-4e44-8e1c-82ec09ca6fd6.png" 
              alt="Gebeya" 
              className="h-8"
            />
            <span className="text-xl font-semibold text-gebeya-pink">Jitume</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex"
              onClick={() => navigateToAuth('signin')}
            >
              Sign in
            </Button>
            <Button 
              className="bg-gradient-to-r from-gebeya-pink to-gebeya-orange hover:opacity-90 text-white"
              onClick={() => navigateToAuth('signup')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}; 