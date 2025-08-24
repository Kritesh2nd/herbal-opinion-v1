import React, { ReactNode } from "react";

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

export interface JourneyStepType {
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

export interface OurJourneyTypes {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ResilienceType {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ComparePlansType {
  id: number;
  feature: string;
  essectialRelief: string;
  ongoingCare: string;
  priorityAccess: string;
}

export interface MeetHerbalType {
  id: number;
  text: string;
}

export interface AssessmentType {
  id: number;
  title: string;
  subTitle: string;
  question: string;
  points: string[];
  answer: boolean;
}

export interface StatCard {
  title: string;
  value: string;
  subtitle: string;
  icon?: React.JSX.Element;
  change: string;
  changeType: "positive" | "negative";
  period: string;
  color: string;
}

export interface pricingDataType {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  free: boolean;
  shortDescription: string;
  features: string[];
  display: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FaqDataType {
  id: number;
  question: string;
  answer: string;
  display: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ContactDataType {
  id: number;
  fullname: string;
  email: string;
  phone?: string;
  message: string;
  contactAgree: boolean;
  submittedAt: Date;
}

export interface ClinicDataType {
  id: number;
  name: string;
  email: string;
  phone: string;
  clinicName: string;
  note?: string;
  contactConcent: boolean;
  submittedAt: Date;
}

export interface TermsAndConditionsType {
  id: number;
  title: string;
  titleSize: number;
  upperContent?: string[];
  points?: string[];
  belowContent?: string[];
}

// export interface SubPointType {
//   id: number;
//   type: "number" | "disk" | "circle";
//   titleSize: number;
//   subTitleLevel: number;
//   bold: boolean;
//   title?: string;
//   points?: string[];
//   content?: string[];
//   subPoints?: SubPointType[];
// }

// export interface TermsAndConditionsSpecialType {
//   id: number;
//   title: string;
//   titleSize: number;
//   upperContent?: string[];
//   points?: SubPointType[];
//   belowContent?: string[];
// }
export interface SubPointType {
  type: "number" | "disk" | "circle" | "none";
  level: number;
  point: string;
  points: SubPointType[];
}
export interface TermsAndConditionsSpecialType {
  id: number;
  title: string;
  titleSize: number;
  upperContent?: string[];
  points?: SubPointType[];
  belowContent?: string[];
}

export interface PrivacyPolicyType {
  id: number;
  title: string;
  titleColor: string;
  titleSize: number;
  titleBold: boolean;
  content?: string[];
  points?: string[];
  subPoints?: SubPointType[];
}
