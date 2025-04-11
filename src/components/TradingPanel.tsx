
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Sparkles, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const tokens = [
  { symbol: "SOL", name: "Solana" },
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USD Coin" },
  { symbol: "BONK", name: "Bonk" },
  { symbol: "JUP", name: "Jupiter" },
];

const TradingPanel = () => {
  const { toast } = useToast();
  const [fromToken, setFromToken] = useState("SOL");
  const [toToken, setToToken] = useState("USDC");
  const [slippage, setSlippage] = useState(0.5);
  const [useAi, setUseAi] = useState(true);
  const [amount, setAmount] = useState("");
  const [activeTab, setActiveTab] = useState("swap");

  const handleTokenSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    toast({
      title: "Tokens Swapped",
      description: `Swapped from ${toToken} to ${fromToken}`,
    });
  };

  const handleTradeSubmit = () => {
    if (!amount || Number(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to trade.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Trade Simulation",
      description: `Simulated ${amount} ${fromToken} to ${toToken} swap executed successfully.`,
      variant: "default",
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "limit") {
      toast({
        title: "Limit Orders",
        description: "Limit order functionality will be available in the next update!",
      });
    }
  };

  const handleAiToggle = (checked: boolean) => {
    setUseAi(checked);
    toast({
      title: checked ? "AI Optimization Enabled" : "AI Optimization Disabled",
      description: checked 
        ? "AI will now optimize your trades for better execution." 
        : "Standard trading routes will be used for your trades.",
    });
  };

  const handleJupiterClick = () => {
    toast({
      title: "Jupiter Aggregator",
      description: "Connecting to Jupiter for optimal routing and execution.",
    });
  };

  return (
    <Card className="border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl">Trading Panel</CardTitle>
        <CardDescription>Execute trades with AI-optimized routing</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="swap" value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="swap">Swap</TabsTrigger>
            <TabsTrigger value="limit">Limit Order</TabsTrigger>
          </TabsList>

          <TabsContent value="swap" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>From</Label>
                <div className="flex space-x-2">
                  <Select value={fromToken} onValueChange={setFromToken}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent>
                      {tokens.map(token => (
                        <SelectItem key={token.symbol} value={token.symbol}>{token.symbol}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input 
                    type="number" 
                    placeholder="0.00" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleTokenSwap}
                  className="rounded-full h-8 w-8 bg-muted hover:bg-muted/80"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 5.5L7.5 1.5M7.5 1.5L11.5 5.5M7.5 1.5V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>

              <div className="space-y-2">
                <Label>To</Label>
                <div className="flex space-x-2">
                  <Select value={toToken} onValueChange={setToToken}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent>
                      {tokens.map(token => (
                        <SelectItem key={token.symbol} value={token.symbol}>{token.symbol}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input type="number" placeholder="0.00" readOnly value={amount ? (Number(amount) * 1.25).toFixed(2) : ""} />
                </div>
              </div>

              <Card className="bg-muted border-none">
                <CardContent className="p-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rate</span>
                      <span>1 {fromToken} = 1.25 {toToken}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Fee</span>
                      <span>0.15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Route</span>
                      <span 
                        className="text-secondary cursor-pointer hover:underline"
                        onClick={handleJupiterClick}
                      >
                        Jupiter Aggregator ↗
                      </span>
                    </div>
                    {useAi && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">AI Recommendation</span>
                        <span className="flex items-center text-solana">
                          <Sparkles className="mr-1 h-3 w-3" /> Good timing
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="slippage" className="text-sm">Slippage Tolerance</Label>
                  <span className="text-sm">{slippage}%</span>
                </div>
                <Slider 
                  id="slippage"
                  min={0.1} 
                  max={3} 
                  step={0.1} 
                  value={[slippage]} 
                  onValueChange={(value) => setSlippage(value[0])} 
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="useAi" checked={useAi} onCheckedChange={handleAiToggle} />
                <Label htmlFor="useAi" className="text-sm">Use AI for trade optimization</Label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="limit">
            <div className="flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <AlertCircle className="mx-auto h-8 w-8 text-muted-foreground" />
                <h3 className="font-medium">Limit Orders Coming Soon</h3>
                <p className="text-sm text-muted-foreground">
                  Limit order functionality will be available in the next update
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleTradeSubmit}
          className="w-full bg-solana-gradient hover:opacity-90"
          disabled={!amount}
        >
          Swap {fromToken} to {toToken}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TradingPanel;
