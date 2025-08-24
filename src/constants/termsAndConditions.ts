import {
  TermsAndConditionsSpecialType,
  // TermsAndConditionsSpecialType,
  TermsAndConditionsType,
} from "../types";

export const termsAndConditionsUpper: TermsAndConditionsType[] = [
  {
    id: 0,
    title: "",
    titleSize: 1,
    upperContent: [],
    points: [],
    belowContent: [],
  },
  {
    id: 1,
    title: "Introduction",
    titleSize: 1,
    upperContent: [
      'Welcome to Herbal Opinion ("we," "us," "our"). By accessing and using our services, including our website and digital platforms (collectively referred to as the "Platform"), you agree to comply with these Terms & Conditions ("Terms"). If you do not agree with any part of these Terms, please refrain from using our Services',
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 2,
    title: "Definitions",
    titleSize: 1,
    upperContent: [],
    points: [
      "Terms: These Terms & Conditions, along with our Privacy Policy and any other agreements you accept with us.",
      "Medicine: Any medication prescribed by a licensed healthcare practitioner.",
      "Pharmacy: A third-party pharmacy engaged to dispense and supply Medicine.",
      "Services: The healthcare and telehealth services provided by Herbal Opinion.",
      "Clinic Services: Consultations and related services provided by our healthcare practitioners.",
      "Platform: Our website, digital media, and service platforms used to deliver our Services.",
      "Staff: Employees or contractors engaged to provide our Services.",
      "Healthcare Practitioners: Licensed medical professionals such as doctors and nurses providing healthcare services.",
      "Fee: Charges for Clinic Services, as specified from time to time.",
      "Authorised Representative: An individual legally authorised to act on behalf of a patient",
    ],
    belowContent: [],
  },
  {
    id: 3,
    title: "Our Services",
    titleSize: 1,
    upperContent: ["Herbal Opinion provides:"],
    points: [
      "Initial and follow-up consultations with qualified healthcare professionals.",
      "Access to telehealth services for medical assessments and prescriptions.",
      "Facilitation of prescription fulfilment through third-party pharmacies",
    ],
    belowContent: [
      "Prescriptions are issued solely at the discretion of our Healthcare Practitioners, who assess each patient's individual medical condition to determine the appropriateness of treatment. This process is conducted in strict adherence to Australian laws and regulations, including obtaining necessary approvals from the regulator and relevant state or territory health authorities, as required. ",
    ],
  },
  {
    id: 4,
    title: "No Emergency Services",
    titleSize: 1,
    upperContent: [
      "Our Services are not intended for medical emergencies. If you require urgent medical attention, please call emergency services at 000 or visit the nearest emergency department. If our staff identify immediate risks to an individual’s welfare, they may notify emergency services at their discretion.",
    ],
    points: [],
    belowContent: [
      "Our Services are not a replacement for your primary healthcare provider. You should continue routine care with your community healthcare practitioners.",
    ],
  },
  {
    id: 5,
    title: "Eligibility",
    titleSize: 1,
    upperContent: [
      "To qualify for our treatment services, you must meet the following conditions:",
    ],
    points: [
      "Age Requirement: You must be at least 18 years old.",
      "Residency Status: You must reside in Australia and possess a valid Australian residential address.",
      "Personal Use: You must utilise our services for yourself unless you are legally authorised to act on behalf of another individual. In such cases, appropriate legal documentation confirming your authority will be required.",
      "Consent to Treatment: You must provide informed consent for the proposed  treatment plan, acknowledging the potential benefits and risks involved.",
    ],
    belowContent: [
      "Please note that meeting these eligibility criteria does not guarantee acceptance into our treatment program. Final decisions are made at the discretion of our healthcare practitioners, based on a comprehensive evaluation of your health status and in accordance with Australian medical standards.",
    ],
  },
  {
    id: 6,
    title: "Your Obligations and Responsibilities",
    titleSize: 1,
    upperContent: ["By using our Services, you agree to:"],
    points: [
      "Provide accurate, complete, and up-to-date medical and personal information.",
      "Attend scheduled consultations and notify us in advance if you are unable to do so.",
      "Authorise us to share necessary prescription details with pharmacies and other partners to facilitate your treatment.",
      "Comply with all applicable laws and regulations, including those related to the use of medicinal cannabis.",
      "Follow the prescribed treatment plans.",
      "Promptly report any adverse reactions to Medicine to us",
    ],
    belowContent: [],
  },
  {
    id: 7,
    title: "Accurate Information",
    titleSize: 1,
    upperContent: [
      "You are responsible for ensuring that all information you provide is accurate and up to date. Failure to do so may affect our ability to provide Services and may result in suspension or termination of your access to our Services.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 8,
    title: "Appropriate Use",
    titleSize: 1,
    upperContent: ["::::You agree not to:"],
    points: [
      "Engage in fraudulent or unlawful activity.",
      "Mislead or deceive our Staff, partners, or any other individuals or entities associated with our Services.",
      "Use language or engage in conduct that is abusive, threatening, harassing, discriminatory, or otherwise offensive towards our Staff, partners, suppliers, or other users.",
      "Attempt to access or interfere with our Platform's security features or operations.",
    ],
    belowContent: [],
  },
  {
    id: 9,
    title: "Authorised Representative",
    titleSize: 1,
    upperContent: [
      "You may designate an Authorised Representative to assist with managing your healthcare needs. Additional documentation may be required for this arrangement. To nominate an Authorised Representative, please contact us directly for the necessary forms and procedures.",
    ],
    points: [],
    belowContent: [],
  },
];

export const termsAndConditionsSpecial: TermsAndConditionsSpecialType[] = [
  {
    id: 5001,
    title: "Payment of Fees",
    titleSize: 1,
    upperContent: [
      "::::To ensure clarity and transparency regarding our fee structure, please review the following policies:",
    ],
    points: [
      {
        type: "number",
        level: 1,
        point: "Consultation Fees:",
        points: [
          {
            type: "disk",
            level: 2,
            point:
              "All consultation fees are payable in full at the time of booking.",
            points: [],
          },
          {
            type: "disk",
            level: 2,
            point:
              "These fees cover the consultation services provided by our healthcare practitioners and do not include the cost of any prescribed medications or their delivery.",
            points: [],
          },
        ],
      },
      {
        type: "number",
        level: 1,
        point: "Medication and Delivery Costs:",
        points: [
          {
            type: "disk",
            level: 2,
            point:
              "The cost of prescribed medications and their delivery are separate expenses",
            points: [],
          },
          {
            type: "disk",
            level: 2,
            point:
              "Arrangements for the purchase and delivery of medications should be made directly through the designated pharmacy.",
            points: [],
          },
        ],
      },
      {
        type: "number",
        level: 1,
        point: "Refund Policy:",
        points: [
          {
            type: "disk",
            level: 2,
            point:
              "::::Refunds for consultation fees are available under the following conditions:",
            points: [
              {
                type: "circle",
                level: 3,
                point:
                  "Service Inappropriateness: If our healthcare practitioner determines that our services are not suitable for your specific medical needs.",
                points: [],
              },
              {
                type: "circle",
                level: 3,
                point:
                  "Appointment Cancellation by Clinic: If we cancel an appointment and are unable to reschedule it within a reasonable timeframe.",
                points: [],
              },
            ],
          },
          {
            type: "disk",
            level: 2,
            point:
              "Refunds will be processed in the original payment method within a reasonable timeframe.",
            points: [],
          },
        ],
      },
      {
        type: "number",
        level: 1,
        point: "Cancellation and Rescheduling Policy:",
        points: [
          {
            type: "disk",
            level: 2,
            point: "Patient-Initiated Cancellations:",
            points: [
              {
                type: "circle",
                level: 3,
                point:
                  "Cancellations made more than 48 hours before the scheduled appointment time will receive a full refund or the option to reschedule without penalty.",
                points: [],
              },
              {
                type: "circle",
                level: 3,
                point:
                  "Cancellations made within 48 hours of the scheduled appointment time may incur a cancellation fee equivalent to 50% of the consultation fee.",
                points: [],
              },
            ],
          },
          {
            type: "disk",
            level: 2,
            point: "No-Show Policy:",
            points: [
              {
                type: "circle",
                level: 3,
                point:
                  "Failure to attend a scheduled appointment without prior notice will result in the forfeiture of the full consultation fee.",
                points: [],
              },
            ],
          },
        ],
      },
      {
        type: "number",
        level: 1,
        point: "Late Arrivals for Telehealth Appointments:",
        points: [
          {
            type: "none",
            level: 1,
            point:
              "::::Punctuality is essential for the effective delivery of our telehealth services. If you join your telehealth appointment late, we will make reasonable efforts to accommodate you; however, the session may need to be shortened to conclude at the originally scheduled time, and the full consultation fee will still apply. If you are more than 15 minutes late, the appointment may be considered a no-show, necessitating rescheduling and the application of our no-show policy. To ensure a smooth experience, please log in to your telehealth session a few minutes before the scheduled start time to address any potential technical issues.",
            points: [],
          },
        ],
      },
    ],
    belowContent: [
      "By adhering to these payment policies, we aim to provide a fair and efficient service to all our patients. If you have any questions or require further clarification, please do not hesitate to contact our administrative team.",
    ],
  },
  {
    id: 5002,
    title: "",
    titleSize: 1,
    upperContent: [],
    points: [],
    belowContent: [],
  },
];

/*

  {
    type:"disk",
    level:"pl-[50px]",
    point:"",
    points:[],
  },

  {
    id:5001,
    title:"",
    titleSize:1,
    upperContent:[],
    points:[],
    belowContent:[],
  },

*/

export const termsAndConditionsBelow: TermsAndConditionsType[] = [
  {
    id: 1001,
    title: "",
    titleSize: 2,
    upperContent: [
      "Notice of Termination: In the event of suspension or termination, we will provide you with written notice outlining the reason(s) for such action and the effective date. Notice will be sent to the email address associated with your account.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 1002,
    title: "",
    titleSize: 2,
    upperContent: [
      "Effect of Termination: Upon termination of your access to our Services:",
    ],
    points: [
      "All rights granted to you under these Terms will cease immediately.",
      "You must discontinue all use of our Services and Platform.",
      "Any outstanding fees or charges will become immediately due and payable.",
      "We reserve the right to delete or deactivate your account and all related information, subject to our data retention policies and applicable laws.",
    ],
    belowContent: [],
  },
  {
    id: 1003,
    title: "",
    titleSize: 2,
    upperContent: [
      "Survival of Terms: Provisions of these Terms that, by their nature, should survive termination will remain in effect, including but not limited to:",
    ],
    points: [
      "Payment obligations.",
      "Intellectual property rights.",
      "Limitation of liability.",
      "Indemnity clauses.",
    ],
    belowContent: [],
  },
  {
    id: 1004,
    title: "Intellectual Property",
    titleSize: 1,
    upperContent: [
      'All content available on our Platform, including but not limited to text, images, graphics, logos, videos, software, and digital materials (collectively referred to as "Content"), is the exclusive property of Herbal Opinion or its licensors and is protected by Australian and international intellectual property laws.',
      "Prohibited Actions:",
    ],
    points: [
      "You must not reproduce, distribute, modify, transmit, display, perform, publish, license, create derivative works from, or sell any Content without prior written consent from Herbal Opinion.",
      "You must not use any Content for commercial purposes or public display without explicit permission.",
      "You must not remove or alter any copyright, trademark, or other proprietary notices from the Content.",
      "You must not use any automated tools or methods to access, acquire, copy, or monitor any portion of the Platform or Content.",
    ],
    belowContent: [],
  },
  {
    id: 1005,
    title: "",
    titleSize: 2,
    upperContent: [
      "Trademarks: All trademarks, service marks, and logos displayed on the Platform are the property of Herbal Opinion or their respective owners. Use of these marks without prior written consent is strictly prohibited.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 1006,
    title: "",
    titleSize: 2,
    upperContent: [
      "Third-Party Content: Our Platform may include content provided by third parties, including materials provided by other users, bloggers, and third-party licensors. All statements and opinions expressed in these materials, and all articles and responses to questions and other content, other than the Content provided by Herbal Opinion, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of Herbal Opinion. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 1007,
    title: "",
    titleSize: 2,
    upperContent: [
      "Reporting Intellectual Property Infringements: If you believe that any Content on our Platform infringes upon your intellectual property rights, please contact us promptly with detailed information so that we can investigate and address the issue appropriately.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 1008,
    title: "Privacy Policy",
    titleSize: 2,
    upperContent: [
      "Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our Services, you consent to our data practices as detailed in our Privacy Policy.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 1009,
    title: "Limitation of Liability & Indemnity",
    titleSize: 2,
    upperContent: [
      "We strive to provide reliable and high-quality Services; however, we cannot guarantee uninterrupted or error-free access to our Platform or Services. To the maximum extent permitted by Australian law, we exclude all liability for any loss or damage arising from your use of our Services, including but not limited to direct, indirect, incidental, consequential, or punitive damages.",
      "The information contained on the Platform is provided for general informational purposes only and is not intended nor implied to be a substitute for professional medical advice, diagnosis, or treatment. You should not rely on any information provided on the Platform for your health needs. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on the Platform.",
      "Except for information provided by our Healthcare Practitioners during consultations, nothing contained on the Platform or provided by our Services is intended to be or should be taken for medical advice, diagnosis, or treatment. You take full and total responsibility for what you do with this information, and any resulting outcomes from your actions.",
      "::::You agree to indemnify, defend, and hold harmless Herbal Opinion, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, liabilities, costs, or expenses (including reasonable legal fees) arising from:",
    ],
    points: [
      "Your misuse of our Services or Platform.",
      "Your breach of these Terms.",
      "Your violation of any applicable laws or regulations",
    ],
    belowContent: [
      "This indemnification obligation will survive the termination or expiration of your account and/or these Terms.",
    ],
  },
  {
    id: 10010,
    title: "Amendments to Terms and Conditions",
    titleSize: 2,
    upperContent: [
      "We reserve the right to amend these Terms and Conditions at any time. All amendments will become effective upon publication on our Platform or upon notification to you through other appropriate means. We will strive to notify you of any significant changes to these Terms by providing notice through our Platform, via email, or other reasonable methods. It is your responsibility to review the Terms regularly to stay informed of any changes. By continuing to access or use our Services after any amendments become effective, you agree to be bound by the updated Terms. If you do not agree to the amended Terms, you must discontinue your use of our Services immediately.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 10011,
    title: "Governing Law",
    titleSize: 2,
    upperContent: [
      "These Terms are governed by and construed in accordance with the laws of the State of Victoria, Australia. Any disputes arising from or in connection with these Terms or the use of our Services will be subject to the exclusive jurisdiction of the courts of Victoria. By using our Services, you irrevocably submit to the jurisdiction of these courts.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 10012,
    title: "Severability",
    titleSize: 2,
    upperContent: [
      "If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision will be deemed severed from these Terms, and the remaining provisions will continue in full force and effect. The invalidity of any provision will not affect the validity of the remaining provisions, which will remain binding and enforceable.",
    ],
    points: [],
    belowContent: [],
  },
  {
    id: 10013,
    title: "Entire Agreement",
    titleSize: 2,
    upperContent: [
      "These Terms, together with our Privacy Policy and any other documents expressly incorporated by reference, constitute the entire agreement between you and Herbal Opinion regarding your use of our Services. This agreement supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding such subject matter. You acknowledge that you have not relied on any statement, representation, or warranty not expressly set out in these Terms.",
      "By using our Services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
    ],
    points: [],
    belowContent: [],
  },
];

/*

{
    id: 0,
    title: "",
    titleSize: 1,
    upperContent: [],
    points: [],
    belowContent: [],
  },


















*/
