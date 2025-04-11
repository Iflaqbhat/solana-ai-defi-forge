
import React from 'react';
import Header from '@/components/Header';
import MarketOverview from '@/components/MarketOverview';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, ArrowUpRight } from "lucide-react";

// Mock token market data
const marketTokens = [
  { name: 'Solana', symbol: 'SOL', price: 177.82, change: 5.3, volume: '2.3B', marketCap: '82.5B', category: 'L1' },
  { name: 'Bitcoin', symbol: 'BTC', price: 68432.12, change: -0.8, volume: '32.1B', marketCap: '1.5T', category: 'L1' },
  { name: 'Ethereum', symbol: 'ETH', price: 3980.45, change: 2.1, volume: '18.7B', marketCap: '465.2B', category: 'L1' },
  { name: 'Bonk', symbol: 'BONK', price: 0.000024, change: 12.5, volume: '158.3M', marketCap: '1.4B', category: 'Meme' },
  { name: 'Jupiter', symbol: 'JUP', price: 1.44, change: 3.7, volume: '142.7M', marketCap: '2.1B', category: 'DeFi' },
  { name: 'Orca', symbol: 'ORCA', price: 2.21, change: -1.2, volume: '54.1M', marketCap: '458.2M', category: 'DeFi' },
  { name: 'Raydium', symbol: 'RAY', price: 1.87, change: 0.9, volume: '47.3M', marketCap: '387.4M', category: 'DeFi' },
  { name: 'Jito', symbol: 'JTO', price: 4.05, change: 8.2, volume: '102.8M', marketCap: '567.3M', category: 'Infrastructure' },
];

const Market = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Market Overview</h1>
          
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search tokens, projects..." 
                className="pl-10 pr-4"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending
              </Button>
              <Button variant="outline" size="sm">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Gainers
              </Button>
            </div>
          </div>
          
          <MarketOverview />
          
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Assets</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="l1">Layer 1</TabsTrigger>
              <TabsTrigger value="meme">Meme</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Data</CardTitle>
                  <CardDescription>Real-time cryptocurrency market information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Name</th>
                          <th className="text-right py-3 px-4">Price</th>
                          <th className="text-right py-3 px-4">24h Change</th>
                          <th className="text-right py-3 px-4">Volume</th>
                          <th className="text-right py-3 px-4">Market Cap</th>
                          <th className="text-right py-3 px-4">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marketTokens.map((token) => (
                          <tr key={token.symbol} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="ml-3">
                                  <div className="font-medium">{token.name}</div>
                                  <div className="text-xs text-muted-foreground">{token.symbol}</div>
                                </div>
                              </div>
                            </td>
                            <td className="text-right py-3 px-4 font-medium">
                              ${typeof token.price === 'number' && token.price < 0.01 ? token.price.toFixed(6) : token.price.toLocaleString()}
                            </td>
                            <td className={`text-right py-3 px-4 ${token.change >= 0 ? 'text-solana-secondary' : 'text-red-500'}`}>
                              {token.change >= 0 ? '+' : ''}{token.change}%
                            </td>
                            <td className="text-right py-3 px-4 text-muted-foreground">${token.volume}</td>
                            <td className="text-right py-3 px-4 text-muted-foreground">${token.marketCap}</td>
                            <td className="text-right py-3 px-4">
                              <Badge variant="outline" className="bg-muted/50">
                                {token.category}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="defi" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">DeFi tokens filtered view coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="l1" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">Layer 1 tokens filtered view coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="meme" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">Meme tokens filtered view coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Market;
