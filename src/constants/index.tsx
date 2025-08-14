import {
  FaCheck,
  FaDoorOpen,
  FaHeart,
  FaLightbulb,
  FaRegHandshake,
  FaSeedling,
} from "react-icons/fa";

import {
  AssessmentType,
  ComparePlansType,
  ConsultationPlan,
  FaqDropdownType,
  JourneyStepType,
  MeetHerbalType,
  NavItemIn,
  OurJourneyTypes,
  ResilienceType,
  StepProps,
  Testimonial,
  TherapyItem,
} from "../types";
import { FaUserDoctor } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export const NavData: NavItemIn[] = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "How It Works",
    url: "/how-it-works",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
  {
    name: "Switch Clinic",
    url: "/switch-clinic",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const therapyItems: TherapyItem[] = [
  {
    id: 1,
    name: "Chronic Pain",
    image: "/img/home/chronic.png",
  },
  {
    id: 2,
    name: "Physical Discomfort",
    image: "/img/home/physical.png",
  },
  {
    id: 3,
    name: "Emotional Balance",
    image: "/img/home/emotional.png",
  },
  {
    id: 4,
    name: "Mood Support",
    image: "/img/home/mood.png",
  },
  {
    id: 5,
    name: "Restful Sleep",
    image: "/img/home/restfull.png",
  },
  {
    id: 6,
    name: "and more...",
    image: "/img/home/more.png",
  },
];

export const steps: StepProps[] = [
  {
    number: 1,
    title: "Answer 5 Quick Questions",
    description:
      "Tell us about your needs with our simple questionnaire designed for ease of use.",
  },
  {
    number: 2,
    title: "Get a Recommendation",
    description:
      "Receive personalized natural solutions based on your specific needs.",
  },
  {
    number: 3,
    title: "Receive Your Prescription",
    description:
      "Your natural prescription is delivered discreetly to your door.",
  },
];

export const CONSULTATION_PLANS: ConsultationPlan[] = [
  {
    id: "initial",
    title: "Initial Consultation",
    description:
      "Personalized care from doctor reviewed your tailored to your needs.",
    originalPrice: 79,
    currentPrice: 29,
    bgColor: "light-green",
    subtitle: "Ideal for new users.",
    features: [
      "Expert 1-on-1 consult",
      "Personalized wellness plan",
      "Doctor-reviewed recommendations",
    ],
  },
  {
    id: "followup",
    title: "Follow Up Consultation",
    description:
      "Ongoing support to keep your wellness journey on track with expert guidance.",
    originalPrice: 69,
    currentPrice: 19,
    bgColor: "Primary-green",
    isPopular: true,
    subtitle: "Ideal for ongoing care seekers.",
    features: [
      "Continued care support",
      "Review of progress & pain adjustment",
      "Quick virtual check-in",
    ],
  },
  {
    id: "switching",
    title: "Switching Clinic",
    description:
      "Seamless transition, we make it easy to switch your care to herbal options.",
    currentPrice: "FREE",
    isFree: true,
    bgColor: "light-green",
    subtitle: "Effortless transition to Herbal Opinion.",
    features: [
      "No consultation fee",
      "We handle the switch for you",
      "Guided by our care team",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Thomas",
    title: "12 years old",
    content:
      "The doctor was so patient with all my questions. I appreciate finding a service that treats seniors with respect and offers natural alternatives.",
    image: "/img/testimonial/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Wellness Coach",
    content:
      "Amazing service! The personalized approach and natural remedies have made such a difference in my health journey. Highly recommend!",
    image: "/img/testimonial/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Retired Teacher",
    content:
      "I was skeptical at first, but the results speak for themselves. The team is knowledgeable and truly cares about their patients.",
    image: "/img/testimonial/1.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Yoga Instructor",
    content:
      "The holistic approach aligns perfectly with my lifestyle. Professional, caring, and effective - everything I was looking for.",
    image: "/img/testimonial/2.jpg",
    rating: 5,
  },
];

export const ourJourney: OurJourneyTypes[] = [
  {
    id: 1,
    icon: <FaSeedling />,
    title: "Founded in 2025",
    description:
      "Started by a group of Australian citizens passionate about natural alternatives.",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Inspired by Need",
    description:
      "Recognized the gap in accessible, natural support for those with ongoing conditions.",
  },
  {
    id: 3,
    icon: <FaUserDoctor />,
    title: "Professional Partners",
    description:
      "Partnered with experienced healthcare professionals to ensure safety and efficacy.",
  },
  {
    id: 4,
    icon: <FaHeart />,
    title: "Focused Mission",
    description:
      "Dedicated to helping seniors and individuals with long-term conditions find relief naturally.",
  },
];

export const resilience: ResilienceType[] = [
  {
    id: 1,
    icon: <FaDoorOpen />,
    title: "Accessibility",
    description:
      "Making natural wellness solutions available to everyone, regardless of location or circumstance.",
  },
  {
    id: 2,
    icon: <FaRegHandshake />,
    title: "Integrity",
    description:
      "Providing honest, transparent recommendations based on what's truly best for each individual.",
  },
  {
    id: 3,
    icon: <FaSeedling />,
    title: "Long-Term Wellbeing",
    description:
      "Supporting sustainable health practices that improve quality of life for years to come.",
  },
];

export const meetHerbal: MeetHerbalType[] = [
  { id: 1, text: "Certified Practitioners" },
  { id: 2, text: "Personalized Care" },
  { id: 3, text: "Evidence-Based Approach" },
  { id: 4, text: "Ongoing Support" },
];

export const comparePlans: ComparePlansType[] = [
  {
    id: 1,
    feature: "Consultations",
    essectialRelief: "1 Session",
    ongoingCare: "Monthly",
    priorityAccess: "Unlimited",
  },
  {
    id: 2,
    feature: "Personalized Care Plan",
    essectialRelief: "yes",
    ongoingCare: "yes",
    priorityAccess: "yes",
  },
  {
    id: 3,
    feature: "Prescription Support",
    essectialRelief: "no",
    ongoingCare: "yes",
    priorityAccess: "yes",
  },
  {
    id: 4,
    feature: "Direct Chat Access",
    essectialRelief: "no",
    ongoingCare: "no",
    priorityAccess: "yes",
  },
  {
    id: 5,
    feature: "Priority Service",
    essectialRelief: "no",
    ongoingCare: "Standard",
    priorityAccess: "VIP",
  },
];

export const faqs: FaqDropdownType[] = [
  {
    id: 1,
    question: "What makes your products different from others in the market?",
    answer:
      "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
    display: true,
  },
  {
    id: 2,
    question: "Are your products cruelty-free and vegan?",
    answer:
      "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
    display: true,
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
    display: true,
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer:
      "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
    display: true,
  },
  {
    id: 5,
    question: "How are your ingredients sourced?",
    answer:
      "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
    display: true,
  },
  {
    id: 6,
    question: "Are your products safe?",
    answer:
      "Our products stand out because they are crafted with 100% natural, ethically sourced ingredients. We focus on sustainability throughout our entire production process, from ingredient selection to packaging. ",
    display: true,
  },
];

export const JourneyStep: JourneyStepType[] = [
  {
    id: "01",
    title: "Tell Us About Yourself",
    description:
      "Answer a few quick questions so we can learn more about your condition and history. Our questionnaire is designed by healthcare professionals to gather the information we need to help you.",
    image: "/img/how-it-works/step1.png",
    style: "rotate-4 -bottom-[1px]",
    extra: "",
  },
  {
    id: "02",
    title: "Get a Personalized Recommendation",
    description:
      "Based on your answers, we'll connect you with a care consultant who reviews your case. Our consultants specialize in natural remedies and holistic approaches to wellness.",
    image: "/img/how-it-works/step2.png",
    style: "rotate-8 -bottom-0",
    extra:
      "All consultants are licensed healthcare professionals with expertise in herbal medicine",
  },
  {
    id: "03",
    title: "Begin Your Treatment Plan",
    description:
      "If you're eligible, a treatment plan will be shared and medication discreetly delivered to your doorstep. Our natural remedies are carefully sourced and formulated for maximum effectiveness.",
    image: "/img/how-it-works/step3.png",
    style: "bottom-14 -left-1",
    extra: "",
  },
];

export const assessmentQuestion: AssessmentType[] = [
  {
    id: 1,
    title: "Step 1: Your Health Background",
    subTitle: "We'll check if your condition is suitable for our care pathways",
    question:
      "Do you have a chronic condition lasting more than 3 months that has been diagnosed by a doctor? (e.g. chronic pain, anxiety, depression, insomnia, etc.)",
    points: [],
    answer: false,
  },
  {
    id: 2,
    title: "Step 2: Your Treatment Journey",
    subTitle:
      "Tell us what you've already tried so we can guide you toward better results.",
    question:
      "Have you tried conventional prescription medication for your condition?",
    points: [],
    answer: false,
  },
  {
    id: 3,
    title: "Step 3: Is Your Current Treatment Helping?",
    subTitle: "This helps us know if another option might suit you better.",
    question:
      "Has the medication been unsuccessful in fully treating your symptoms, or does it cause adverse side effects?",
    points: [],
    answer: false,
  },
  {
    id: 4,
    title: "Step 4: A Quick Health Check",
    subTitle:
      "Some conditions may need extra care. Let us know if any apply to you.",
    question: "Do you have any of the following conditions?",
    points: [
      "Active psychosis",
      "Drug dependence or substance abuse",
      "Cardio pulmonary disease",
      "Pregnant or breastfeeding",
    ],
    answer: false,
  },
  {
    id: 5,
    title: "Step 5: Mental Health Background",
    subTitle: "We ask this to ensure our care is right for you.",
    question:
      "Do you have a history of schizophrenia, bipolar type 1 and 2 disorder or have experienced psychosis?",
    points: [],
    answer: false,
  },
];

export const eligibleText = {
  true: {
    title: "Great news — you're eligible!",
    message: [
      "You've met the requirements for care through our team. Let's get you started with your free consultation.",
    ],
    icon: <FaCheck />,
  },
  false: {
    title: "Unfortunately, you may not be eligible at this time",
    message: [
      "In order to be eligible for medicinal cannabis treatment, a patient needs to have been diagnosed with a chronic condition by a doctor.",
      "In order to be eligible for medicinal cannabis treatment, you need to have tried (or be currently using) a prescribed medication to help treat your symptoms.",
      "In order to be eligible for medicinal cannabis treatment, your previous medication needs to have been unsuccessful or have undesired side-effects.",
      "Unfortunately, you are likely not suitable for plant medicine treatment.",
      "Unfortunately, you are likely not suitable for plant medicine treatment.",
    ],
    icon: <ImCross />,
  },
};
/*
"In order to be eligible for medicinal cannabis treatment, a patient needs to have been diagnosed with a chronic condition by a doctor.",
"In order to be eligible for medicinal cannabis treatment, you need to have tried (or be currently using) a prescribed medication to help treat your symptoms.",
"In order to be eligible for medicinal cannabis treatment, your previous medication needs to have been unsuccessful or have undesired side-effects.",
"Unfortunately, you are likely not suitable for plant medicine treatment.",
"Unfortunately, you are likely not suitable for plant medicine treatment.",
*/
