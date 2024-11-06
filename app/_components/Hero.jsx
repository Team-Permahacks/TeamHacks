"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Plus, Copy, Bot, Bell } from "lucide-react"

export  function Hero() {
  const [agreements, setAgreements] = useState([
    { id: 1, title: "Service Agreement", status: "Pending", url: "https://arweave.net/service-agreement" },
    { id: 2, title: "Employment Contract", status: "Signed", url: "https://arweave.net/employment-contract" },
    { id: 3, title: "NDA", status: "Draft", url: "https://arweave.net/nda" },
  ])

  const [pendingSignatures, setPendingSignatures] = useState([
    { id: 1, title: "Service Agreement", signer: "ayanokoji@gmail.com" },
    { id: 2, title: "NDA", signer: "akotosiya@gmail.com" },
  ])

  //notification dito po hehe
  
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url)
    
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">ArweaveDocumentSign</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Agreement
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Agreements</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="signed">Signed</TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[300px] mt-4">
                {agreements.map((agreement) => (
                  <div key={agreement.id} className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{agreement.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${agreement.status === 'Signed' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {agreement.status}
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(agreement.url)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Signatures</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              {pendingSignatures.map((signature) => (
                <div key={signature.id} className="flex items-center justify-between py-2 border-b">
                  <span>{signature.title}</span>
                  <span className="text-sm text-muted-foreground">{signature.signer}</span>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>AI Summary</CardTitle>
            <CardDescription>Get a quick summary of any agreement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input placeholder="Enter agreement URL or ID" />
              <Button>
                <Bot className="mr-2 h-4 w-4" /> Summarize
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

 export default Hero