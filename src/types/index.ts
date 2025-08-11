export interface NavItemIn {
    name: string;
    url: string;
}

export interface TherapyItem {
  id: number;
  name: string;
  image: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
}

export interface ConsultationPlan {
  id: string
  title: string
  description: string
  originalPrice?: number
  currentPrice: number | string
  isFree?: boolean
  subtitle: string
  features: string[]
  bgColor: "light-green" | "Primary-green" 
  isPopular?: boolean
}

export interface Testimonial {
  id: number
  name: string
  title: string
  content: string
  image: string
  rating: number
}
