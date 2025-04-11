
import React from 'react';
import Header from '@/components/Header';
import PortfolioSummary from '@/components/PortfolioSummary';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
          
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="history">Transaction History</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <PortfolioSummary />
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance History</CardTitle>
                  <CardDescription>Your portfolio performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full flex items-center justify-center bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">Historical performance metrics coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="assets" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Asset List</CardTitle>
                  <CardDescription>Detailed breakdown of all your assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full flex items-center justify-center bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">Detailed asset analytics coming soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Record of all your transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full flex items-center justify-center bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">Transaction history will be available after wallet connection</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Analytics</CardTitle>
                  <CardDescription>Advanced metrics and AI-powered insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full flex items-center justify-center bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">AI analytics coming soon</p>
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

export default Portfolio;
