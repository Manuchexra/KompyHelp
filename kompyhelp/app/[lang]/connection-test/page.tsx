import { ConnectionStatus } from "@/components/connection-status"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConnectionTestPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Backend Connection Test</h1>

      <ConnectionStatus />

      <Card>
        <CardHeader>
          <CardTitle>Connection Information</CardTitle>
          <CardDescription>
            This page tests the connection between your Next.js frontend and Django backend
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If the connection is successful, you should see a green "Connected to backend" message above. This means
            your environment variables are correctly set up and your Django backend is accessible.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-2">Troubleshooting</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Make sure your Django backend is running</li>
            <li>Check that the BACKEND_URL environment variable is correctly set</li>
            <li>Verify that CORS is properly configured in your Django settings</li>
            <li>Ensure your network allows connections to the backend URL</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
