
import React from 'react';
import Header from '@/components/Header';
import AiAssistantComponent from '@/components/AiAssistant';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bot, BrainCircuit, MessageCircle, Sparkles } from "lucide-react";

const AiAssistantPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">AI Assistant</h1>
            <Button className="bg-solana-gradient">
              <Sparkles className="mr-2 h-4 w-4" />
              Upgrade to Pro
            </Button>
          </div>
          
          <Tabs defaultValue="chat">
            <TabsList className="mb-4">
              <TabsTrigger value="chat">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="insights">
                <BrainCircuit className="mr-2 h-4 w-4" />
                Market Insights
              </TabsTrigger>
              <TabsTrigger value="trading">
                <Bot className="mr-2 h-4 w-4" />
                Trading Assistant
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <AiAssistantComponent />
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Assistant Features</CardTitle>
                      <CardDescription>What your AI assistant can do</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium flex items-center">
                          <Sparkles className="mr-2 h-4 w-4 text-solana" />
                          Market Analysis
                        </h3>
                        <p className="text-sm text-muted-foreground">Get real-time analysis of market trends and token performance.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium flex items-center">
                          <Sparkles className="mr-2 h-4 w-4 text-solana" />
                          DeFi Strategies
                        </h3>
                        <p className="text-sm text-muted-foreground">Learn optimal strategies for yield farming, liquidity providing, and more.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium flex items-center">
                          <Sparkles className="mr-2 h-4 w-4 text-solana" />
                          Portfolio Optimization
                        </h3>
                        <p className="text-sm text-muted-foreground">Receive AI-generated recommendations to optimize your portfolio.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium flex items-center">
                          <Sparkles className="mr-2 h-4 w-4 text-solana" />
                          On-Chain Data Analysis
                        </h3>
                        <p className="text-sm text-muted-foreground">Interpret complex on-chain data to identify opportunities.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="insights" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">Advanced AI market insights coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="trading" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-40">
                    <p className="text-muted-foreground">AI trading assistant coming soon</p>
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

export default AiAssistantPage;
