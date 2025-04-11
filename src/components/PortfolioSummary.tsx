
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Mock portfolio data
const portfolioData = [
  { name: 'SOL', value: 45, color: '#9945FF' },
  { name: 'BTC', value: 20, color: '#F7931A' },
  { name: 'ETH', value: 15, color: '#627EEA' },
  { name: 'USDC', value: 10, color: '#2775CA' },
  { name: 'Other', value: 10, color: '#14F195' },
];

const assets = [
  { name: 'Solana', symbol: 'SOL', amount: 3.85, value: 684.59, change: 5.2, allocation: 45 },
  { name: 'Bitcoin', symbol: 'BTC', amount: 0.0044, value: 301.10, change: -0.8, allocation: 20 },
  { name: 'Ethereum', symbol: 'ETH', amount: 0.057, value: 226.89, change: 2.1, allocation: 15 },
  { name: 'USD Coin', symbol: 'USDC', amount: 150.00, value: 150.00, change: 0, allocation: 10 },
  { name: 'Jupiter', symbol: 'JUP', amount: 50.25, value: 72.11, change: 8.3, allocation: 5 },
  { name: 'Bonk', symbol: 'BONK', amount: 2500000, value: 60.00, change: 12.3, allocation: 4 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-2 rounded-md text-xs">
        <p className="font-semibold">{payload[0].name}</p>
        <p>{`${payload[0].value}% of portfolio`}</p>
      </div>
    );
  }
  return null;
};

const PortfolioSummary = () => {
  // Calculate total portfolio value
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  
  return (
    <Card className="border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl">Portfolio Summary</CardTitle>
        <CardDescription>Asset allocation and performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold">${totalValue.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 flex-wrap">
              {portfolioData.map((item) => (
                <div key={item.name} className="flex items-center mt-2">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Asset</span>
                <span>Allocation</span>
              </div>
              {assets.map((asset) => (
                <div key={asset.symbol} className="space-y-1">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="font-medium">{asset.symbol}</div>
                      <div className={`ml-2 text-xs ${asset.change > 0 ? 'text-solana-secondary' : asset.change < 0 ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {asset.change > 0 ? '↑' : asset.change < 0 ? '↓' : ''}
                        {asset.change !== 0 ? `${Math.abs(asset.change)}%` : '-'}
                      </div>
                    </div>
                    <div className="text-sm">${asset.value.toFixed(2)}</div>
                  </div>
                  <Progress value={asset.allocation} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{asset.amount} {asset.symbol}</span>
                    <span>{asset.allocation}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Card className="bg-gradient-to-r from-solana/10 to-solana-secondary/10 border-none">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-solana rounded-full p-1.5">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">AI Portfolio Suggestion</div>
                      <p className="text-xs text-muted-foreground">Consider rebalancing to increase SOL exposure by 5% given recent on-chain metrics and market conditions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
