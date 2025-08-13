import { ReactNode } from "react";

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
  id: string;
  title: string;
  description: string;
  originalPrice?: number;
  currentPrice: number | string;
  isFree?: boolean;
  subtitle: string;
  features: string[];
  bgColor: "light-green" | "Primary-green";
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string;
  rating: number;
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  image: string;
  style: string;
  extra: string;
}

export interface ContactDetailType {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FaqDropdownType {
  id: number;
  question: string;
  answer: string;
  display: boolean;
}
