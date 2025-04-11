
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Wallet, Coins, Info, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleConnectWallet = () => {
    toast({
      title: "Wallet Connection",
      description: "Wallet integration coming soon! Stay tuned for the full implementation.",
    });
  };

  const handleAiInsights = () => {
    toast({
      title: "AI Insights",
      description: "Detailed AI market analysis coming in the next update!",
      variant: "default",
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-card/50 backdrop-blur-md border-b border-border sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-solana-gradient flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg solana-gradient-text">SolanaAI DeFi Forge</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant={isActive("/dashboard") ? "default" : "ghost"} 
            className={isActive("/dashboard") ? "bg-muted" : "text-foreground/80 hover:text-foreground"}
            asChild
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>
          <Button 
            variant={isActive("/portfolio") ? "default" : "ghost"} 
            className={isActive("/portfolio") ? "bg-muted" : "text-foreground/80 hover:text-foreground"}
            asChild
          >
            <Link to="/portfolio">Portfolio</Link>
          </Button>
          <Button 
            variant={isActive("/market") ? "default" : "ghost"} 
            className={isActive("/market") ? "bg-muted" : "text-foreground/80 hover:text-foreground"}
            asChild
          >
            <Link to="/market">Market</Link>
          </Button>
          <Button 
            variant={isActive("/ai-assistant") ? "default" : "ghost"} 
            className={isActive("/ai-assistant") ? "bg-muted" : "text-foreground/80 hover:text-foreground"}
            asChild
          >
            <Link to="/ai-assistant">AI Assistant</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="border-solana border-opacity-50 hidden sm:flex"
            onClick={handleAiInsights}
          >
            <Info className="mr-2 h-4 w-4" />
            <span>AI Insights</span>
          </Button>
          
          <Button 
            onClick={handleConnectWallet}
            className="bg-solana-gradient hover:bg-solana hover:opacity-90 transition-all"
          >
            <Wallet className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
            <span className="sm:hidden">Connect</span>
          </Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4 flex flex-col space-y-3">
                <Button 
                  variant={isActive("/dashboard") ? "default" : "ghost"} 
                  className="justify-start"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  variant={isActive("/portfolio") ? "default" : "ghost"} 
                  className="justify-start"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
                <Button 
                  variant={isActive("/market") ? "default" : "ghost"} 
                  className="justify-start"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/market">Market</Link>
                </Button>
                <Button 
                  variant={isActive("/ai-assistant") ? "default" : "ghost"} 
                  className="justify-start"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/ai-assistant">AI Assistant</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start mt-4"
                  onClick={() => {
                    handleAiInsights();
                    setMobileMenuOpen(false);
                  }}
                >
                  <Info className="mr-2 h-4 w-4" />
                  AI Insights
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
