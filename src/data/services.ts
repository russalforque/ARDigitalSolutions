import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Websites",
    description:
      "Fast, professional business websites that build trust and bring in customers.",
    features: [
      "Business Websites",
      "Landing Pages",
      "E-Commerce",
      "Website Redesigns",
    ],
    icon: "code",
  },
  {
    id: "pos-systems",
    number: "02",
    title: "POS Systems",
    description:
      "Point-of-sale systems that handle sales, inventory, and reporting for retail and service businesses.",
    features: [
      "Sales & Checkout",
      "Inventory Management",
      "Reports & Analytics",
      "Offline Support",
    ],
    icon: "cpu",
  },
  {
    id: "digital-solutions",
    number: "03",
    title: "Custom Business Systems",
    description:
      "Booking, management, and automation systems built around how your business already works.",
    features: [
      "Booking & Scheduling",
      "Management Systems",
      "Workflow Automation",
      "Business Dashboards",
    ],
    icon: "layers",
  },
  {
    id: "ui-ux",
    number: "04",
    title: "Digital Experiences",
    description:
      "Interfaces and dashboards designed to make everyday tools simple to use.",
    features: [
      "UI / UX Design",
      "Product Dashboards",
      "Interactive Interfaces",
      "Design Systems",
    ],
    icon: "scan",
  },
];
