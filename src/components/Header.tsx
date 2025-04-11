
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Wallet, Coins, Info, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleConnectWallet = () => {
    toast({
      title: "Wallet Connection",
      description: "Wallet integration coming soon! Stay tuned for the full implementation.",
    });
  };

  const handleNavigation = (destination: string) => {
    toast({
      title: "Navigation",
      description: `Navigating to ${destination} page. This feature is coming soon!`,
    });
  };

  const handleAiInsights = () => {
    toast({
      title: "AI Insights",
      description: "Detailed AI market analysis coming in the next update!",
      variant: "default",
    });
  };

  return (
    <header className="bg-card/50 backdrop-blur-md border-b border-border sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-solana-gradient flex items-center justify-center">
            <Coins className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg solana-gradient-text">SolanaAI DeFi Forge</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => handleNavigation('Dashboard')}
          >
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => handleNavigation('Portfolio')}
          >
            Portfolio
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => handleNavigation('Market')}
          >
            Market
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/80 hover:text-foreground"
            onClick={() => handleNavigation('AI Assistant')}
          >
            AI Assistant
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
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => {
                    handleNavigation('Dashboard');
                    setMobileMenuOpen(false);
                  }}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => {
                    handleNavigation('Portfolio');
                    setMobileMenuOpen(false);
                  }}
                >
                  Portfolio
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => {
                    handleNavigation('Market');
                    setMobileMenuOpen(false);
                  }}
                >
                  Market
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => {
                    handleNavigation('AI Assistant');
                    setMobileMenuOpen(false);
                  }}
                >
                  AI Assistant
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start mt-4"
                  onClick={handleAiInsights}
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
