import {
  ConsultationPlan,
  NavItemIn,
  StepProps,
  Testimonial,
  TherapyItem,
} from "../types";

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
