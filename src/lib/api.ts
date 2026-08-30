const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = 'Something went wrong. Please try again.';
    try {
      const body = await res.json();
      if (body?.message) message = Array.isArray(body.message) ? body.message[0] : body.message;
    } catch {
      // Response wasn't JSON — keep the generic message.
    }
    throw new ApiError(res.status, message);
  }
  return res.json();
}

export interface DemoRequestPayload {
  name: string;
  email: string;
  phone?: string;
  restaurantName?: string;
  message?: string;
  type?: 'demo' | 'appointment';
  preferredDate?: string;
  preferredTime?: string;
}

export async function submitDemoRequest(payload: DemoRequestPayload): Promise<void> {
  const res = await fetch(`${API_URL}/public/demo-requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  await handleResponse<unknown>(res);
}

export interface PublicPlan {
  id: string;
  name: string;
  description: string | null;
  monthlyPrice: string;
  yearlyPrice: string | null;
  features: { maxBranches?: number; maxTables?: number; kdsEnabled?: boolean };
  trialDays: number;
}

export async function getPublicPlans(): Promise<PublicPlan[]> {
  const res = await fetch(`${API_URL}/public/plans`);
  return handleResponse<PublicPlan[]>(res);
}

// =========================================
// CAREERS
// =========================================

export interface JobPosition {
  id: string;
  title: string;
  experience: string | null;
  location: string | null;
  description: string | null;
}

export async function getOpenJobPositions(): Promise<JobPosition[]> {
  const res = await fetch(`${API_URL}/public/job-positions`);
  return handleResponse<JobPosition[]>(res);
}

export interface CareerApplicationPayload {
  name: string;
  email: string;
  mobile: string;
  position: string;
  message?: string;
  resume: File;
}

export async function submitCareerApplication(payload: CareerApplicationPayload): Promise<void> {
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('email', payload.email);
  formData.append('mobile', payload.mobile);
  formData.append('position', payload.position);
  if (payload.message) formData.append('message', payload.message);
  formData.append('resume', payload.resume);

  const res = await fetch(`${API_URL}/public/career-applications`, {
    method: 'POST',
    body: formData,
  });
  await handleResponse<unknown>(res);
}

// =========================================
// CONTACT
// =========================================

export interface ContactEnquiryPayload {
  name: string;
  restaurantName?: string;
  email: string;
  mobile: string;
  city?: string;
  subject?: string;
  message?: string;
}

export async function submitContactEnquiry(payload: ContactEnquiryPayload): Promise<void> {
  const res = await fetch(`${API_URL}/public/contact-enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  await handleResponse<unknown>(res);
}
