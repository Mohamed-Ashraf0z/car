import React, { useState } from 'react';
import { User, Car, Search, MoreHorizontal, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary animate-pulse-glow">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CarCommunity</h1>
              <p className="text-xs text-muted-foreground">Drive. Share. Connect.</p>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="glass" size="icon" className="hover:scale-105 transition-all duration-300">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="icon" className="hover:scale-105 transition-all duration-300">
              <Car className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="icon" className="hover:scale-105 transition-all duration-300">
              <User className="w-5 h-5" />
            </Button>
            <Button 
              variant="glass" 
              size="icon" 
              className="hover:scale-105 transition-all duration-300"
              onClick={toggleDarkMode}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="glass" size="icon" className="hover:scale-105 transition-all duration-300">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};