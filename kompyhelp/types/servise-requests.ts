export interface ServiceRequest {
  serviceType: string
  deviceType: string
  description: string
  preferredDate: string
  address: string
  phoneNumber: string
}

export interface ServiceRequestResponse {
  success: boolean
  message: string
  data?: {
    request_id: string
    estimated_time: string
  }
  error?: string
}