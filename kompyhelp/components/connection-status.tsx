"use client"

import { useState, useEffect } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { RefreshCwIcon as ReloadIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"

export function ConnectionStatus() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading")
  const [message, setMessage] = useState("")
  const [backendUrl, setBackendUrl] = useState("")

  const checkConnection = async () => {
    setStatus("loading")
    try {
      const response = await fetch("/api/test-connection")
      const data = await response.json()

      if (data.status === "connected") {
        setStatus("connected")
      } else {
        setStatus("error")
      }

      setMessage(data.message)
      setBackendUrl(data.backendUrl)
    } catch (error) {
      setStatus("error")
      setMessage("Failed to check connection")
    }
  }

  useEffect(() => {
    checkConnection()
  }, [])

  return (
    <Alert
      className={`mb-4 ${
        status === "connected"
          ? "border-green-500 bg-green-50"
          : status === "error"
            ? "border-red-500 bg-red-50"
            : "border-yellow-500 bg-yellow-50"
      }`}
    >
      <div className="flex items-center">
        {status === "loading" && <ReloadIcon className="h-5 w-5 text-yellow-500 animate-spin mr-2" />}
        {status === "connected" && <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />}
        {status === "error" && <XCircleIcon className="h-5 w-5 text-red-500 mr-2" />}
        <AlertTitle className="text-lg font-medium">
          {status === "loading"
            ? "Checking connection..."
            : status === "connected"
              ? "Connected to backend"
              : "Connection error"}
        </AlertTitle>
      </div>
      <AlertDescription className="mt-2">
        <p className="mb-2">{message}</p>
        {backendUrl && <p className="text-sm text-gray-500">Backend URL: {backendUrl}</p>}
        {status === "error" && (
          <Button variant="outline" size="sm" onClick={checkConnection} className="mt-2">
            Retry connection
          </Button>
        )}
      </AlertDescription>
    </Alert>
  )
}
