
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const insights = [
  {
    id: 1,
    title: "SOL price momentum indicates bullish pattern",
    description: "Based on on-chain metrics and recent price action, SOL is showing signs of a potential breakout. Trading volume has increased by 32% in the last 24 hours.",
    confidence: 87,
    type: "opportunity",
    timestamp: "2h ago",
    tags: ["SOL", "Technical Analysis", "Bullish"]
  },
  {
    id: 2,
    title: "Large whale movement detected",
    description: "A wallet holding approximately $23M in BTC has moved funds to a Solana address. This could indicate preparation for cross-chain activities or potential market activity.",
    confidence: 92,
    type: "alert",
    timestamp: "5h ago",
    tags: ["Whale Alert", "BTC", "SOL", "Cross-chain"]
  },
  {
    id: 3,
    title: "DeFi protocol liquidity surge",
    description: "Jupiter Aggregator has seen a 47% increase in TVL over the past week, suggesting growing confidence in Solana DeFi. Consider exploring yield opportunities.",
    confidence: 83,
    type: "opportunity",
    timestamp: "1d ago",
    tags: ["DeFi", "Jupiter", "Yield"]
  },
  {
    id: 4,
    title: "Risk alert: Smart contract vulnerability",
    description: "A potential vulnerability has been identified in a popular lending protocol. While not yet exploited, consider reducing exposure until audited.",
    confidence: 79,
    type: "risk",
    timestamp: "12h ago",
    tags: ["Security", "Smart Contracts", "Risk Management"]
  }
];

const AiInsights = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const { toast } = useToast();
  
  const filteredInsights = currentTab === "all" 
    ? insights 
    : insights.filter(insight => insight.type === currentTab);

  const handleViewAll = () => {
    toast({
      title: "View All Insights",
      description: "Detailed insights dashboard will be available in the next update!",
    });
  };

  const handleInsightClick = (insight: any) => {
    toast({
      title: "Insight Details",
      description: `Viewing details for: ${insight.title}`,
      variant: insight.type === 'risk' ? 'destructive' : 'default',
    });
  };

  return (
    <Card className="border border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-solana-accent" /> 
              AI Market Insights
            </CardTitle>
            <CardDescription>Blockchain data analysis & predictions</CardDescription>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            Beta
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All Insights</TabsTrigger>
            <TabsTrigger value="opportunity">Opportunities</TabsTrigger>
            <TabsTrigger value="risk">Risks</TabsTrigger>
          </TabsList>
          
          <TabsContent value={currentTab} className="mt-0">
            <div className="space-y-4">
              {filteredInsights.map((insight) => (
                <Card 
                  key={insight.id} 
                  className="bg-muted border-none overflow-hidden cursor-pointer hover:bg-muted/80 transition-colors"
                  onClick={() => handleInsightClick(insight)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 p-1.5 rounded-full flex-shrink-0 
                        ${insight.type === 'opportunity' ? 'bg-solana-secondary/20 text-solana-secondary' : 
                          insight.type === 'risk' ? 'bg-destructive/20 text-destructive' : 
                          'bg-solana-accent/20 text-solana-accent'}`}
                      >
                        {insight.type === 'opportunity' ? 
                          <TrendingUp className="h-4 w-4" /> : 
                          insight.type === 'risk' ? 
                          <AlertTriangle className="h-4 w-4" /> : 
                          <Sparkles className="h-4 w-4" />
                        }
                      </div>
                      <div className="space-y-1.5">
                        <div className="font-medium">{insight.title}</div>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <div className="text-xs text-muted-foreground">{insight.timestamp}</div>
                          <div className="text-xs bg-background px-2 py-1 rounded-full text-foreground/70">
                            {insight.confidence}% confidence
                          </div>
                          {insight.tags.map((tag, i) => (
                            <div key={i} className="text-xs bg-solana/10 text-solana-accent px-2 py-0.5 rounded-full">
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t border-border/50 p-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-muted-foreground">
            Powered by AI analysis of on-chain data and market metrics
          </span>
          <Button variant="ghost" size="sm" onClick={handleViewAll}>
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AiInsights;
