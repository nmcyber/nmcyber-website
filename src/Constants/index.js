import { ImCheckmark, ImLoop, ImWarning } from 'react-icons/im';
import { clock, facebook, graduationHat, instagram, linkedin, lock_n_key, pc, youtube } from "@/assets";
import { FaBook, FaGraduationCap, FaMagnifyingGlass, FaPen, FaQuestion, FaShield } from 'react-icons/fa6';

export const navigation = [
  {
    id: "0",
    title: "Company",
    url: "/",
  },
  {
    id: "1",
    title: "About",
    url: "/about",
  },
  {
    id: "2",
    title: "Solutions",
    url: "/solutions",
  },
  {
    id: "3",
    title: "Resources",
    url: "/",
  },
  {
    id: "4",
    title: "Platform",
    url: "/",
  },
];

export const countUp =[
  {
    id: "1",
    num: "30",
    title: "Empowered Businesses"
  },
  {
    id: "2",
    num: "200",
    title: "Skilled Individuals"
  },
  {
    id: "3",
    num: "10",
    title: "Transformative Courses"
  }
];

export const accordion = [
  {
    title: "Discover",
    content: [
      "We start it off by conducting thorough assessments to discover gaps in the organisation’s cybersecurity defences.",
      "This includes identifying weak points in systems, understanding employee awareness levels, and recognising the types of threats most likely to target your organisation.",
      "This proactive approach helps in anticipating potential threats and preparing accordingly, thus reducing the risk of breaches.",
    ],
  },
  {
    title: "Transform",
    content: [
      "Building on the insights gained from the discovery phase, we move on to transform your organisation's cybersecurity posture by:",
      "Providing targeted employee training on cybersecurity best practices, such as phishing awareness and social engineering prevention.",
      "Implementing advanced security technologies and solutions including endpoint and email security.",
      "Adopting a holistic approach to cybersecurity that integrates various security products and services to create a multi-layered defense system.",
      "This process leads to a more secure and resilient digital environment for your organisation, reducing the likelihood of successful cyber attacks.",
    ],
  },
  {
    title: "Thrive",
    content: [
      "With a comprehensive discovery and Transformation, your business organisation is set to thrive. We are here to help you continuously update your cybersecurity measures, staying ahead of emerging threats, and promote a culture of security awareness.",
      "We are your trusted partner when it comes to:",
      "Regularly updating training programs to keep pace with new types of cyber threats.",
      "Leveraging managed cybersecurity services to provide round-the-clock protection and rapid incident response.",
      "Encouraging a proactive cybersecurity mindset among your employees, ensuring that security practices are ingrained in the organisational culture.",
      "When your organisations thrive in cybersecurity, you build trust with customers, stakeholders, and partners.",
    ],
  },
];

export const services =[
  {
    id:"1",
    img: clock,
    service:"Cybersecurity Readlines",
  },
  {
    id:"2",
    img: lock_n_key,
    service:"Cybersecurity Assesment",
  },
  {
    id:"3",
    img: pc,
    service:"Screening Candidate for Hiring",
  },
  {
    id:"4",
    img: graduationHat,
    service:"Cybersecurity Awareness & Training",
  },
];

export const socialMedia = [
  {
    id:"1",
    img: facebook,
    url:"https://www.facebook.com",
  },
  {
    id:"2",
    img: instagram,
    url:"",
  },
  {
    id:"3",
    img: youtube,
    url:"",
  },
  {
    id:"4",
    img: linkedin,
    url:"",
  },
];

export const contactInfo = [
  {
    id:"1",
    icon:"",
    desc:"+61 421212628"
  },
  {
    id:"2",
    icon:"",
    desc:"info@nmcyber.com.au"
  },
  {
    id:"3",
    icon:"",
    desc:"Perth WA 6064, Australia"
  },
]

// NAVIGATION SUB-MENU ITEMS - FROM THE GOOGLE DRIVE WORD DOCUMENT BY DR.NICKSON

export const subMenuItemsOne = [
  {
    title: 'Cybersecurity Awareness',
    description: 'Training, phishing, culture development',
    icon: FaShield,
  },
  {
    title: 'Cybersecurity Readiness',
    description: 'Incident response, assessments, business continuity',
    icon: ImCheckmark,
  },
  {
    title: 'Candidate Screening',
    description: 'Pre-employment, technical, behavioral screening',
    icon: FaMagnifyingGlass,
  },
  {
    title: 'Content Creation',
    description: 'Training videos, infographics, newsletters',
    icon: FaPen,
  },
  {
    title: 'Risk Assessments',
    description: 'Employee, culture, industry-specific',
    icon: ImWarning,
  },
  {
    title: 'Industry Training',
    description: 'Compliance, sector-specific, custom',
    icon: FaGraduationCap,
  }
];

export const subMenuItemsTwo = [
  {
    title: 'On-Demand Courses',
    description: 'Self-paced, modular, mobile-friendly',
    icon: FaBook,
  },
  {
    title: 'Continuous Learning',
    description: 'Microlearning, ongoing programs',
    icon: ImLoop,
  },
  {
    title: 'Help Center',
    description: 'FAQs, solutions, troubleshooting',
    icon: FaQuestion,
  }
];

export const serviceContent = {
  "Cybersecurity Readiness": {
    title: "Cybersecurity Readiness",
    description: "Our Cybersecurity Readiness service ensures your organization is prepared to face and mitigate cyber threats effectively.",
    features: [
      "Comprehensive risk assessment",
      "Incident response planning",
      "Regular security audits",
      "Employee training programs",
      "Continuous monitoring and threat intelligence"
    ]
  },
  "Cybersecurity Assessment": {
    title: "Cybersecurity Assessment",
    description: "Our expert team conducts thorough assessments to identify vulnerabilities and strengthen your cybersecurity posture.",
    features: [
      "Vulnerability scanning and penetration testing",
      "Security policy review",
      "Compliance gap analysis",
      "Third-party risk assessment",
      "Customized security recommendations"
    ]
  },
  "Screening Candidate for Hiring": {
    title: "Cybersecurity Talent Screening",
    description: "We help you identify and hire top cybersecurity talent to build a robust security team.",
    features: [
      "Technical skills assessment",
      "Security certifications verification",
      "Background checks",
      "Soft skills evaluation",
      "Cultural fit assessment"
    ]
  },
  "Cybersecurity Awareness & Training": {
    title: "Cybersecurity Awareness & Training",
    description: "Empower your employees with the knowledge and skills to recognize and prevent cyber threats.",
    features: [
      "Interactive online training modules",
      "Simulated phishing exercises",
      "Role-specific security training",
      "Regular security updates and newsletters",
      "Cybersecurity awareness campaigns"
    ]
  }
}