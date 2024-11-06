"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
// import { useToast } from '@/components/ui/use-toast'       // this is error toast for to send the file handling  
import { Upload, FileText, Send } from 'lucide-react'

export default function Sign() {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [signatories, setSignatories] = useState('')
  const [documentUrl, setDocumentUrl] = useState('')
  // const { toast } = useToast()          // ito yung toast ang hirap 

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !title || !signatories) {
      toast({
        title: "Error",
        description: "Please fill in all fields and upload a document.",
        variant: "destructive",
      })
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('signatories', signatories)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setDocumentUrl(data.url)
        toast({
          title: "Success",
          description: "Document uploaded and signatories notified.",
        })
      } else {
        throw new Error('Upload failed')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload document. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>DocumentSign</CardTitle>
          <CardDescription>Create and manage agreements securely on Arweave</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Document Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter document title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">Upload Document</Label>
              <Input id="file" type="file" onChange={handleFileChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signatories">Signatories (comma-separated emails)</Label>
              <Textarea
                id="signatories"
                value={signatories}
                onChange={(e) => setSignatories(e.target.value)}
                placeholder="Enter signatory emails"
              />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="mr-2 h-4 w-4" /> Upload and Notify Signatories
            </Button>
          </form>
        </CardContent>
        {documentUrl && (
          <CardFooter className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Document URL:</span>
            </div>
            <Input value={documentUrl} readOnly />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(documentUrl)
                toast({ title: "Copied", description: "Document URL copied to clipboard" })
              }}
              variant="outline"
            >
              Copy Link
            </Button>
          </CardFooter>
        
          
        )}
      </Card>
    </div>
  )
}
