
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Wallet, Coins, Info, Menu } from "lucide-react";

const Header = () => {
  const { toast } = useToast();

  const handleConnectWallet = () => {
    toast({
      title: "Wallet Connection",
      description: "Wallet integration coming soon! Stay tuned for the full implementation.",
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
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
            Portfolio
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
            Market
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
            AI Assistant
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="border-solana border-opacity-50 hidden sm:flex"
            onClick={() => {
              toast({
                title: "Coming Soon",
                description: "AI insights feature will be available in the next update!",
              });
            }}
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
          
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
