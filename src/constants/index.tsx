import {
  FaCheck,
  FaClock,
  FaDoorOpen,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLightbulb,
  FaPhoneAlt,
  FaRegHandshake,
  FaSeedling,
  FaTwitter,
} from "react-icons/fa";

import {
  AssessmentType,
  ClinicDataType,
  ComparePlansType,
  ConsultationPlan,
  ContactDataType,
  ContactDetailType,
  FaqDataType,
  FaqDropdownType,
  JourneyStepType,
  MeetHerbalType,
  NavItemIn,
  OurJourneyTypes,
  pricingDataType,
  ResilienceType,
  StatCard,
  StepProps,
  Testimonial,
  TherapyItem,
} from "../types";
import { FaMessage, FaSquareXTwitter, FaUserDoctor } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoDocumentText, IoMail } from "react-icons/io5";
import {
  FiDollarSign,
  FiHelpCircle,
  FiMail,
  FiRefreshCw,
} from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";

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

export const pricingPlans: pricingDataType[] = [
  {
    id: 1,
    name: "Initial Consultation",
    description:
      "Personalized care from doctor reviewed your tailored to your needs.",
    originalPrice: 79,
    currentPrice: 29,
    free: false,
    shortDescription: "Ideal for new users.",
    features: [
      "Expert 1-on-1 consult",
      "Personalized wellness plan",
      "Doctor-reviewed recommendations",
    ],
    display: true,
  },
  {
    id: 2,
    name: "Follow Up Consultation",
    description:
      "Ongoing support to keep your wellness journey on track with expert guidance.",
    originalPrice: 69,
    currentPrice: 19,
    shortDescription: "Ideal for ongoing care seekers.",
    free: false,
    features: [
      "Continued care support",
      "Review of progress & pain adjustment",
      "Quick virtual check-in",
    ],
    display: true,
  },
  {
    id: 3,
    name: "Switching Clinic",
    description:
      "Seamless transition, we make it easy to switch your care to herbal options.",
    originalPrice: 0,
    currentPrice: 0,
    shortDescription: "Effortless transition to Herbal Opinion.",
    free: true,
    features: [
      "No consultation fee",
      "We handle the switch for you",
      "Guided by our care team",
    ],
    display: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Thomas",
    title: "Businessman",
    content:
      "The doctor was so patient with all my questions. I appreciate finding a service that treats seniors with respect and offers natural alternatives.",
    image: "/img/testimonial/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Homemaker",
    content:
      "Amazing service! The personalized approach and natural remedies have made such a difference in my health journey. Highly recommend!",
    image: "/img/testimonial/testimonial3.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Retired Professor",
    content:
      "I was skeptical at first, but the results speak for themselves. The team is knowledgeable and truly cares about their patients.",
    image: "/img/testimonial/testimonial2.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Retired",
    content:
      "The holistic approach aligns perfectly with my lifestyle. Professional, caring, and effective - everything I was looking for.",
    image: "/img/testimonial/testimonial4.jpg",
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

export const faqsData: FaqDataType[] = [
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

export const contactDetails: ContactDetailType[] = [
  {
    id: 1,
    icon: <IoMail />,
    title: "Email",
    description: "support@herbalopinion.com.au",
  },
  {
    id: 2,
    icon: <FaClock />,
    title: "Hours",
    description: "Mon-Fri, 9am-5pm AEST",
  },
];

export const followUs = [
  { id: 1, display: true, icon: <FaFacebookF />, link: "/facebook" },
  { id: 2, display: true, icon: <FaInstagram />, link: "/instagram" },
  { id: 3, display: true, icon: <FaSquareXTwitter />, link: "/twitter" },
  { id: 4, display: false, icon: <FaTwitter />, link: "/twitter" },
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

export const pricingData: pricingDataType[] = [
  {
    id: 1,
    name: "Initial Consultation",
    description:
      "Personalized care starts here, doctor reviewed plan tailored to your needs.",
    originalPrice: 79,
    currentPrice: 29,
    free: false,
    shortDescription: "Ideal for new users",
    features: [
      "Expert 1-on-1 consult",
      "Personalized wellness plan",
      "Doctor-reviewed recommendations",
    ],
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Follow Up Consultation",
    description:
      "Ongoing support to keep your wellness journey on track with expert guidance.",
    originalPrice: 65,
    currentPrice: 19,
    free: false,
    shortDescription: "Ideal for ongoing care seekers.",
    features: [
      "Continued care support",
      "Review of progress & plan adjustment",
      "Quick virtual check-in",
    ],
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Switching Clinic",
    description:
      "Seamless transition, we make it easy to switch your care to Herbal Opinion.",
    originalPrice: 0,
    currentPrice: 0,
    free: true,
    shortDescription: "Effortless transition to Herbal Opinion.",
    features: [
      "No consultation fee",
      "We handle the switch for you",
      "Guided by our care team",
    ],
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const faqData: FaqDataType[] = [
  {
    id: 1,
    question: "What happens if I miss my consultation?",
    answer:
      "If you miss your consultation, our care team will contact you to reschedule. No additional fees will apply for the first missed appointment. However, repeated missed appointments may incur a rescheduling fee of $15. We recommend canceling at least 24 hours in advance if you can't make your appointment.",
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    question: "Can I change my consultation time?",
    answer:
      "Yes, you can reschedule your consultation up to 24 hours before the appointment at no extra cost. Simply log in to your account or contact our support team.",
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    question: "Do you offer refunds for canceled consultations?",
    answer:
      "Refunds are available if you cancel at least 48 hours in advance. Cancellations made within 48 hours of the appointment may be eligible for credit toward future consultations.",
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    question: "How do I prepare for my consultation?",
    answer:
      "Please ensure you have a stable internet connection, a quiet space, and any necessary documents or medical history ready before your consultation begins.",
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    question: "Are the consultations confidential?",
    answer:
      "Yes, all consultations are strictly confidential. We follow industry-standard privacy and data protection policies to safeguard your personal information.",
    display: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const contactData: ContactDataType[] = [
  {
    id: 1,
    fullname: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 202-555-0178",
    message: "I would like to know more about your services.",
    contactAgree: true,
    submittedAt: new Date("2025-01-05T10:15:00"),
  },
  {
    id: 2,
    fullname: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 202-555-0136",
    message: "Can I schedule a consultation for next week?",
    contactAgree: true,
    submittedAt: new Date("2025-01-06T14:45:00"),
  },
  {
    id: 3,
    fullname: "Sophia Lee",
    email: "sophia.lee@example.com",
    phone: "+44 7700 900123",
    message: "Please send me your latest brochure.",
    contactAgree: false,
    submittedAt: new Date("2025-01-07T09:30:00"),
  },
  {
    id: 4,
    fullname: "David Martinez",
    email: "david.martinez@example.com",
    phone: "+34 600 123 456",
    message: "Interested in partnership opportunities.",
    contactAgree: true,
    submittedAt: new Date("2025-01-08T16:10:00"),
  },
  {
    id: 5,
    fullname: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+1 202-555-0199",
    message: "I have an issue with my recent order.",
    contactAgree: false,
    submittedAt: new Date("2025-01-09T11:20:00"),
  },
  {
    id: 6,
    fullname: "Daniel Kim",
    email: "daniel.kim@example.com",
    phone: "+82 10-2345-6789",
    message: "Can I get a quote for bulk orders?",
    contactAgree: true,
    submittedAt: new Date("2025-01-10T18:40:00"),
  },
  {
    id: 7,
    fullname: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    phone: "+52 55 1234 5678",
    message: "Do you offer international shipping?",
    contactAgree: true,
    submittedAt: new Date("2025-01-11T08:50:00"),
  },
  {
    id: 8,
    fullname: "James Anderson",
    email: "james.anderson@example.com",
    phone: "+1 202-555-0104",
    message: "Looking for customer support.",
    contactAgree: false,
    submittedAt: new Date("2025-01-12T12:05:00"),
  },
  {
    id: 9,
    fullname: "Mia Patel",
    email: "mia.patel@example.com",
    phone: "+91 98765 43210",
    message: "Can you provide details on your pricing?",
    contactAgree: true,
    submittedAt: new Date("2025-01-13T15:15:00"),
  },
  {
    id: 10,
    fullname: "William Chen",
    email: "william.chen@example.com",
    phone: "+86 138 0013 8000",
    message: "Please update me on the status of my request.",
    contactAgree: true,
    submittedAt: new Date("2025-01-14T19:00:00"),
  },
  {
    id: 11,
    fullname: "Ava Thompson",
    email: "ava.thompson@example.com",
    phone: "+1 202-555-0157",
    message: "I would like to unsubscribe from your mailing list.",
    contactAgree: false,
    submittedAt: new Date("2025-01-15T09:25:00"),
  },
  {
    id: 12,
    fullname: "Ethan White",
    email: "ethan.white@example.com",
    phone: "+61 400 123 456",
    message: "Is technical support available on weekends?",
    contactAgree: true,
    submittedAt: new Date("2025-01-16T13:35:00"),
  },
  {
    id: 13,
    fullname: "Isabella Rodriguez",
    email: "isabella.rodriguez@example.com",
    phone: "+34 600 654 321",
    message: "Do you have student discounts?",
    contactAgree: false,
    submittedAt: new Date("2025-01-17T17:50:00"),
  },
  {
    id: 14,
    fullname: "Benjamin Scott",
    email: "benjamin.scott@example.com",
    phone: "+1 202-555-0188",
    message: "I would like to change my appointment time.",
    contactAgree: true,
    submittedAt: new Date("2025-01-18T07:45:00"),
  },
  {
    id: 15,
    fullname: "Charlotte Nguyen",
    email: "charlotte.nguyen@example.com",
    phone: "+84 90 123 4567",
    message: "Please confirm my subscription.",
    contactAgree: true,
    submittedAt: new Date("2025-01-19T20:15:00"),
  },
  {
    id: 16,
    fullname: "Henry Lopez",
    email: "henry.lopez@example.com",
    phone: "+1 202-555-0112",
    message: "Can I update my billing information?",
    contactAgree: false,
    submittedAt: new Date("2025-01-20T11:55:00"),
  },
  {
    id: 17,
    fullname: "Amelia Clark",
    email: "amelia.clark@example.com",
    phone: "+1 202-555-0166",
    message: "Thanks for the quick response from your team!",
    contactAgree: true,
    submittedAt: new Date("2025-01-21T14:20:00"),
  },
];

export const clinicData: ClinicDataType[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 202-555-0178",
    clinicName: "Sunrise Health",
    note: "Interested in partnership",
    contactConcent: true,
    submittedAt: new Date("2025-01-05T10:15:00"),
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 202-555-0136",
    clinicName: "Wellness Center",
    note: "Requesting brochure",
    contactConcent: true,
    submittedAt: new Date("2025-01-06T14:45:00"),
  },
  {
    id: 3,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    phone: "+44 7700 900123",
    clinicName: "Healthy Life Clinic",
    contactConcent: false,
    submittedAt: new Date("2025-01-07T09:30:00"),
  },
  {
    id: 4,
    name: "David Martinez",
    email: "david.martinez@example.com",
    phone: "+34 600 123 456",
    clinicName: "Prime Medical",
    note: "Looking for consultation",
    contactConcent: true,
    submittedAt: new Date("2025-01-08T16:10:00"),
  },
  {
    id: 5,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+1 202-555-0199",
    clinicName: "CarePoint Clinic",
    contactConcent: false,
    submittedAt: new Date("2025-01-09T11:20:00"),
  },
  {
    id: 6,
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    phone: "+82 10-2345-6789",
    clinicName: "Seoul Medical Center",
    note: "Inquiry about services",
    contactConcent: true,
    submittedAt: new Date("2025-01-10T18:40:00"),
  },
  {
    id: 7,
    name: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    phone: "+52 55 1234 5678",
    clinicName: "Healthy Family Clinic",
    contactConcent: true,
    submittedAt: new Date("2025-01-11T08:50:00"),
  },
  {
    id: 8,
    name: "James Anderson",
    email: "james.anderson@example.com",
    phone: "+1 202-555-0104",
    clinicName: "Wellbeing Center",
    note: "Follow up required",
    contactConcent: false,
    submittedAt: new Date("2025-01-12T12:05:00"),
  },
  {
    id: 9,
    name: "Mia Patel",
    email: "mia.patel@example.com",
    phone: "+91 98765 43210",
    clinicName: "City Health Clinic",
    contactConcent: true,
    submittedAt: new Date("2025-01-13T15:15:00"),
  },
  {
    id: 10,
    name: "William Chen",
    email: "william.chen@example.com",
    phone: "+86 138 0013 8000",
    clinicName: "Beijing Wellness",
    note: "Request for info",
    contactConcent: true,
    submittedAt: new Date("2025-01-14T19:00:00"),
  },
  {
    id: 11,
    name: "Ava Thompson",
    email: "ava.thompson@example.com",
    phone: "+1 202-555-0157",
    clinicName: "Green Leaf Clinic",
    contactConcent: false,
    submittedAt: new Date("2025-01-15T09:25:00"),
  },
  {
    id: 12,
    name: "Ethan White",
    email: "ethan.white@example.com",
    phone: "+61 400 123 456",
    clinicName: "Sydney Health Center",
    note: "Interested in collaboration",
    contactConcent: true,
    submittedAt: new Date("2025-01-16T13:35:00"),
  },
  {
    id: 13,
    name: "Isabella Rodriguez",
    email: "isabella.rodriguez@example.com",
    phone: "+34 600 654 321",
    clinicName: "Medicare Clinic",
    contactConcent: false,
    submittedAt: new Date("2025-01-17T17:50:00"),
  },
  {
    id: 14,
    name: "Benjamin Scott",
    email: "benjamin.scott@example.com",
    phone: "+1 202-555-0188",
    clinicName: "Prime Health",
    note: "Schedule a visit",
    contactConcent: true,
    submittedAt: new Date("2025-01-18T07:45:00"),
  },
  {
    id: 15,
    name: "Charlotte Nguyen",
    email: "charlotte.nguyen@example.com",
    phone: "+84 90 123 4567",
    clinicName: "Hanoi Medical",
    contactConcent: true,
    submittedAt: new Date("2025-01-19T20:15:00"),
  },
  {
    id: 16,
    name: "Henry Lopez",
    email: "henry.lopez@example.com",
    phone: "+1 202-555-0112",
    clinicName: "Downtown Clinic",
    note: "Request callback",
    contactConcent: false,
    submittedAt: new Date("2025-01-20T11:55:00"),
  },
  {
    id: 17,
    name: "Amelia Clark",
    email: "amelia.clark@example.com",
    phone: "+1 202-555-0166",
    clinicName: "Sunrise Health",
    contactConcent: true,
    submittedAt: new Date("2025-01-21T14:20:00"),
  },
];

export const metrics: StatCard[] = [
  {
    title: "Total Submissions",
    value: "24",
    subtitle: "This week",
    icon: <IoDocumentText className="w-4 h-4 text-primary " />,
    change: "+12%",
    changeType: "positive",
    period: "vs last week",
    color: "bg-[#DCFCE7]",
  },
  {
    title: "New Contact Messages",
    value: "9",
    subtitle: "This week",
    icon: <FaMessage className="w-4 h-4 text-[#2563EB]" />,
    change: "+5%",
    changeType: "positive",
    period: "vs last week",
    color: "bg-[#DBEAFE]",
  },
  {
    title: "New Switch Clinic Requests",
    value: "7",
    subtitle: "This week",
    icon: <BiTransfer className="w-4 h-4 text-[#F5933C]" />,
    change: "-3%",
    changeType: "negative",
    period: "vs last week",
    color: "bg-[#E5EA98]",
  },
];

export const shortcuts = [
  {
    icon: FiDollarSign,
    title: "Edit Pricing",
    description: "Update your service pricing plans",
    color: "bg-yellow-100 text-yellow-600",
    url: "/dashboard/pricing",
  },
  {
    icon: FiHelpCircle,
    title: "Edit FAQs",
    description: "Manage frequently asked questions",
    color: "bg-purple-100 text-purple-600",
    url: "/dashboard/faq",
  },
];

export const recentActivity = [
  {
    icon: FiMail,
    title: "New contact form submission from Sarah Johnson",
    time: "Today, 10:45 AM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FiRefreshCw,
    title: "New switch clinic request from Michael Brown",
    time: "Yesterday, 3:20 PM",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FiRefreshCw,
    title: "New switch clinic request from Rita Heist",
    time: "2024-04-05",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FiMail,
    title: "New contact form submission from Mila Milson",
    time: "2024-03-02",
    color: "bg-blue-100 text-blue-600",
  },
];
