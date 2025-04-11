
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send, ChevronRight, Sparkles } from "lucide-react";

const demoMessages = [
  {
    id: 1, 
    type: 'assistant',
    content: "Hello! I'm your AI DeFi assistant. I can help you navigate Solana DeFi, analyze on-chain data, and provide market insights. What would you like to know?"
  },
  {
    id: 2,
    type: 'user',
    content: "What's the best DEX on Solana right now?"
  },
  {
    id: 3,
    type: 'assistant',
    content: "Jupiter Aggregator is currently the leading DEX on Solana, with over $310M in 24h volume. It routes through multiple DEXs to find the best swap rates. Jupiter v3 introduced limit orders and offers better pricing than most alternatives through its aggregation model."
  }
];

const suggestions = [
  "Analyze my portfolio risk",
  "What are the trending DeFi protocols?",
  "Explain yield farming opportunities",
  "How can I stake SOL effectively?"
];

const AiAssistant = () => {
  const [messages, setMessages] = useState(demoMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: 'assistant',
        content: "I'm currently in demo mode. In the full version, I'll provide detailed answers about Solana DeFi, on-chain data analysis, and market insights tailored to your questions."
      };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <Card className="border border-border/50 overflow-hidden">
      <CardHeader className="bg-muted/30 border-b border-border/50 px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg flex items-center">
              <Bot className="mr-2 h-5 w-5 text-solana" />
              DeFi AI Assistant
            </CardTitle>
            <CardDescription>Ask anything about Solana DeFi and on-chain data</CardDescription>
          </div>
          <Badge variant="outline" className="bg-solana-secondary/10 text-solana-secondary border-solana-secondary/20">AI-Powered</Badge>
        </div>
      </CardHeader>
      <ScrollArea className="h-[350px] overflow-y-auto">
        <CardContent className="p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`flex items-start gap-2.5 max-w-[80%] ${
                    message.type === 'user' 
                      ? 'flex-row-reverse' 
                      : 'flex-row'
                  }`}
                >
                  <Avatar className={`w-8 h-8 border ${
                    message.type === 'assistant' 
                      ? 'bg-primary/20 border-primary/30' 
                      : 'bg-secondary/20 border-secondary/30'
                  }`}>
                    {message.type === 'assistant' 
                      ? <Bot className="h-4 w-4 text-primary" /> 
                      : <User className="h-4 w-4 text-secondary" />
                    }
                  </Avatar>
                  <div 
                    className={`p-3 rounded-lg ${
                      message.type === 'assistant' 
                        ? 'bg-muted border border-border/50 text-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2.5 max-w-[80%]">
                  <Avatar className="w-8 h-8 border bg-primary/20 border-primary/30">
                    <Bot className="h-4 w-4 text-primary" />
                  </Avatar>
                  <div className="p-3 rounded-lg bg-muted border border-border/50">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </ScrollArea>
      
      {suggestions.length > 0 && (
        <div className="px-4 py-2 border-t border-border/50 bg-muted/30">
          <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, i) => (
              <Button 
                key={i} 
                variant="outline" 
                size="sm" 
                className="text-xs h-7 bg-background/50"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion} <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            ))}
          </div>
        </div>
      )}
      
      <CardFooter className="p-4 border-t border-border/50">
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Ask about Solana DeFi, on-chain data, or trading strategies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
            disabled={loading}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!input.trim() || loading}
            className="bg-solana hover:bg-solana/90"
          >
            {loading ? <Sparkles className="h-4 w-4 animate-pulse" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Fix for missing Badge import
import { Badge } from "@/components/ui/badge";

export default AiAssistant;
