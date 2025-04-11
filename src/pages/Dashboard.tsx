
import React from 'react';
import Header from '@/components/Header';
import MarketOverview from '@/components/MarketOverview';
import AiInsights from '@/components/AiInsights';
import PortfolioSummary from '@/components/PortfolioSummary';
import TradingPanel from '@/components/TradingPanel';
import AiAssistant from '@/components/AiAssistant';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <MarketOverview />
            <AiInsights />
            <PortfolioSummary />
          </div>
          <div className="space-y-6">
            <TradingPanel />
            <AiAssistant />
          </div>
        </div>
      </main>
      <footer className="py-4 mt-8 border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xs text-muted-foreground">
            SolanaAI DeFi Forge | Created for Encode AI London Hackathon
          </div>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <div className="text-xs px-2 py-1 rounded-full bg-solana-gradient bg-opacity-10 text-solana-accent">
              AI-Powered
            </div>
            <div className="text-xs px-2 py-1 rounded-full bg-solana-gradient bg-opacity-10 text-solana-secondary">
              Solana
            </div>
            <div className="text-xs px-2 py-1 rounded-full bg-solana-gradient bg-opacity-10 text-solana-accent">
              DeFi
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
