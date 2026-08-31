import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "ar-development",
    number: "01",
    title: "Augmented Reality",
    description:
      "Interactive AR experiences that connect physical environments with digital content.",
    features: [
      "WebAR Experiences",
      "Product Visualization",
      "Interactive Campaigns",
      "AR Try-On Experiences",
    ],
    icon: "scan",
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    description:
      "High-performance websites and web applications designed around your business goals.",
    features: [
      "Corporate Websites",
      "Web Applications",
      "Landing Pages",
      "Interactive Websites",
    ],
    icon: "code",
  },
  {
    id: "ui-ux",
    number: "03",
    title: "UI / UX Design",
    description:
      "Clean, purposeful interfaces designed to make complex products feel simple.",
    features: [
      "Product Design",
      "UX Research",
      "Design Systems",
      "Prototyping",
    ],
    icon: "layers",
  },
  {
    id: "digital-solutions",
    number: "04",
    title: "Digital Solutions",
    description:
      "Custom software solutions that streamline operations and solve real business problems.",
    features: [
      "Business Systems",
      "Dashboards",
      "Management Systems",
      "Custom Applications",
    ],
    icon: "cpu",
  },
];