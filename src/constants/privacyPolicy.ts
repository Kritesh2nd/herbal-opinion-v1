import { PrivacyPolicyType } from "../types";

export const privacyPolicyData: PrivacyPolicyType[] = [
  {
    id: 1,
    title: "1. Purpose",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "At Herbal Opinion we are committed to protecting the privacy and security of personal information we collect from our patients and visitors to our website. This Data Security and Privacy Policy outlines how we handle your personal information, your privacy rights, and our obligations under privacy laws, including:",
    ],
    points: [
      "Privacy Act 1988 (Cth)",
      "My Health Records Act 2012 (Cth)",
      "Various state-specific health records and privacy laws ",
    ],
  },
  {
    id: 2,
    title: "2. Scope",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "This policy applies to all personal and health information collected, stored, used, and disclosed by the clinic regarding any individual using our services.",
    ],
    points: [],
  },
  {
    id: 20005,
    title: "3. Definitions",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [],
    points: [
      "Personal Information: Information or an opinion about an identifiable individual, recorded in any form, including names, contact details, or other details from which a person's identity can reasonably be ascertained.",
      "Sensitive Information: A subset of personal information that includes racial or ethnic origin, political opinions, religious beliefs, sexual preferences, criminal records, or membership in professional/trade associations.",
      "Third-Party Website Visitors: Individuals who visit the clinic's website but are not current patients or users of our services.",
    ],
  },
  {
    id: 3,
    title: "4. What Information We Collect",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: ["We may collect the following types of personal information:"],
    points: [],
  },
  {
    id: 4,
    title: "4.1 Patients",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [],
    points: [
      "Contact Details: Name, address, phone number, email address.",
      "Health Information: Medical history, symptoms, treatment plans, test results, prescriptions, and other health-related data.",
      "Payment Information: Medicare details, private health insurance details, credit card information, and payment history.",
      "Technical Data: IP address, browser type, device information, and usage data collected through our telehealth platform and website. ",
    ],
  },
  {
    id: 5,
    title: "4.2 Website Visitors",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [],
    points: [
      "Technical Data: IP address, browser type, operating system, device information, and website usage data.",
      "Personal Data: Any personal information you choose to provide through contact forms, newsletter sign-ups, or online queries.     ",
    ],
  },
  {
    id: 6,
    title: "How We Collect Information ",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "We collect personal information through various methods, including:",
    ],
    points: [
      "Direct interactions with patients during consultations, via telehealth platforms, phone calls, or emails.",
      "Online forms, such as appointment booking or contact forms on our website.",
      "Automatic collection through cookies and similar technologies when you visit our website.",
      "Third-party referrals from other healthcare providers, insurers, or authorised representatives.",
    ],
  },
  {
    id: 7,
    title: "6. How We Use Your Information ",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [],
    points: [],
  },
  {
    id: 8,
    title: "6.1 Patients",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: ["We use your personal information for the following purposes:"],
    points: [
      "To provide healthcare services, including telehealth consultations, diagnosis, treatment, and followup care.",
      "To communicate with you regarding appointments, treatment plans, and health-related information.",
      "To process payments, including Medicare and private health insurance claims.",
      "To comply with legal and regulatory obligations, such as reporting notifiable diseases or responding to court orders.",
      "To improve our services, telehealth platforms, and website functionality.",
    ],
  },
  {
    id: 9,
    title: "6.2 Website Visitors",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: ["We use your information to:"],
    points: [
      "Respond to your inquiries or requests made through our website.",
      "Analyse website usage and improve user experience.",
      "Manage our website's functionality and security. ",
    ],
  },
  {
    id: 10,
    title: "7. Disclosure of Information ",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "We do not sell or rent your personal information to third parties. We may share your personal information in the following circumstances:",
    ],
    points: [
      "Healthcare Providers: With your consent, we may share your health information with other healthcare providers involved in your care.",
      "Third-Party Service Providers: We may share your information with third-party service providers who assist us in delivering our services (e.g., IT service providers, payment processors) under strict confidentiality agreements.",
      "Legal Requirements: We may disclose your information where required or authorised by law (e.g., to comply with a subpoena or court order).",
      "Regulatory Authorities: We may disclose your information to regulatory authorities as required for compliance with health regulations.",
    ],
  },

  {
    id: 11,
    title: "8. Data Security Measures ",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "We implement the following measures to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure: ",
    ],
    points: [
      "Encryption: All personal information is encrypted during transmission over the internet using secure socket layer (SSL) technology.",
      "Access Controls: Access to your personal information is restricted to authorised personnel who need it to perform their duties.",
      "Secure Storage: All digital data is stored on secure servers protected by firewalls and regularly updated security software.",
      "Regular Audits: We conduct regular security audits and assessments to identify and mitigate potential vulnerabilities.",
      "Multi-Factor Authentication (MFA): Employees must use MFA to access systems containing sensitive information.",
    ],
  },
  {
    id: 12,
    title: "9. Cookies and Tracking Technologies",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "Our website uses cookies and similar tracking technologies to enhance your user experience. Cookies are small text files stored on your device by a web server that help us understand website traffic and usage.",
    ],
    points: [],
    subPoints: [
      {
        type: "disk",
        level: 1,
        point: "Types of Cookies Used:",
        points: [
          {
            type: "circle",
            level: 2,
            point:
              "Essential Cookies: Necessary for the website to function properly. ",
            points: [],
          },
          {
            type: "circle",
            level: 2,
            point:
              "Performance Cookies: Help us analyse website performance and improve user experience.",
            points: [],
          },
          {
            type: "circle",
            level: 2,
            point:
              "Functionality Cookies: Enable enhanced functionality, such as remembering your preferences.",
            points: [],
          },
        ],
      },
      {
        type: "disk",
        level: 1,
        point:
          "Managing Cookies: You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your access to certain features of our website.",
        points: [],
      },
    ],
  },

  {
    id: 13,
    title: "10.Data Retention",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, as required by law, or for other legitimate purposes, such as compliance with our legal obligations. Retention periods are as follows:",
    ],
    points: [
      "Patient Health Records: Retained for at least 7 years from the last date of entry, or until minors reach the age of 25, whichever is longer.",
      "Website Visitor Data: Retained for up to 2 years or as required for legal or business purposes. ",
    ],
  },
  {
    id: 14,
    title: "11.Your Rights ",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "Under Australian privacy laws, you have the following rights regarding your personal information:",
    ],
    points: [
      "Access: You have the right to request access to your personal information held by us. We will provide access within 30 days, subject to applicable exceptions.",
      "Correction: You have the right to request corrections to your personal information if it is inaccurate, incomplete, or out of date.",
      "Withdrawal of Consent: You may withdraw your consent for us to use your personal information at any time by contacting us.",
      "Complaints: If you believe your privacy has been breached, you have the right to lodge a complaint with our Privacy Officer or the Office of the Australian Information Commissioner (OAIC). ",
    ],
  },
  {
    id: 15,
    title: "12.How to Access or Correct Your Information",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "If you wish to access, correct, or update your personal information, or if you have any questions or concerns regarding this policy, please reach out to our Privacy Officer using the contact details provided in Section 14. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.",
    ],
    points: [],
  },
  {
    id: 16,
    title: "13.Changes to This Policy",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "We may update this Data Security and Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on our website, and we encourage you to review this policy periodically.",
    ],
    points: [],
  },
  {
    id: 17,
    title: "14. Contact Information",
    titleColor: "black",
    titleSize: 2,
    titleBold: true,
    content: [
      "If you have any questions or concerns about this policy or our data handling practices, please contact:",
    ],
    points: [
      "Privacy Officer: Bisham Lama",
      "Contact Details: support@herbalopinion.com.au",
    ],
  },
];

/*
{
  id:1,
  title:"",
  titleColor:"black",
  titleSize:2,
  titleBold:true,
  content:[],
  points:[],
},

{
  type:"disk",
  level:1,
  point:"",
  points:[],
},

*/
