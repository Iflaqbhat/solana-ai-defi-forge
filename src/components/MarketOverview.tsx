
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for demonstration
const marketData = [
  { name: 'Jan', SOL: 40, BTC: 24, ETH: 28 },
  { name: 'Feb', SOL: 30, BTC: 13, ETH: 22 },
  { name: 'Mar', SOL: 20, BTC: 98, ETH: 65 },
  { name: 'Apr', SOL: 27, BTC: 39, ETH: 45 },
  { name: 'May', SOL: 90, BTC: 48, ETH: 52 },
  { name: 'Jun', SOL: 23, BTC: 38, ETH: 44 },
  { name: 'Jul', SOL: 74, BTC: 43, ETH: 50 },
  { name: 'Aug', SOL: 65, BTC: 80, ETH: 70 },
];

const tokens = [
  { symbol: 'SOL', name: 'Solana', price: 177.82, change: 5.3, volume: '2.3B', marketCap: '82.5B' },
  { symbol: 'BTC', name: 'Bitcoin', price: 68432.12, change: -0.8, volume: '32.1B', marketCap: '1.5T' },
  { symbol: 'ETH', name: 'Ethereum', price: 3980.45, change: 2.1, volume: '18.7B', marketCap: '465.2B' },
  { symbol: 'BONK', name: 'Bonk', price: 0.000024, change: 12.5, volume: '158.3M', marketCap: '1.4B' },
];

const MarketOverview = () => {
  return (
    <div className="space-y-6">
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            Market Overview
            <span className="ml-2 text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">AI-Enhanced</span>
          </CardTitle>
          <CardDescription>Real-time market trends with AI analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={marketData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(30, 30, 40, 0.9)', 
                    borderColor: '#444',
                    borderRadius: '8px', 
                    color: 'white' 
                  }} 
                />
                <Line type="monotone" dataKey="SOL" stroke="#9945FF" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="BTC" stroke="#F7931A" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="ETH" stroke="#627EEA" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {tokens.map((token) => (
                <Card key={token.symbol} className="bg-muted border-none">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{token.symbol}</div>
                        <div className="text-xs text-muted-foreground">{token.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">${typeof token.price === 'number' && token.price < 0.01 ? token.price.toFixed(6) : token.price.toLocaleString()}</div>
                        <div className={`text-xs ${token.change >= 0 ? 'text-solana-secondary' : 'text-red-500'}`}>
                          {token.change >= 0 ? '↑' : '↓'} {Math.abs(token.change)}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketOverview;
