import React from 'react';
import { User, Car, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CarCommunity</h1>
              <p className="text-xs text-muted-foreground">Drive. Share. Connect.</p>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Car className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};