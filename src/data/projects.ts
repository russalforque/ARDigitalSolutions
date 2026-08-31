import type { Project } from "../types/project";
import ARProductImage from "../assets/images/AR Product Experience.png";
import BrandCampaignImage from "../assets/images/Immersive Brand Campaign.png";
import ProductViewerImage from "../assets/images/Digital Product Viewer.png";
import BusinessPlatformImage from "../assets/images/Business Management Platform.png";
import SwiftWashImage from "../assets/images/SwiftWash Dashboard.png";
import StatechImage from "../assets/images/Statech.png";

export const projects: Project[] = [
  {
    id: "01",
    title: "AR Product Experience",
    slug: "ar-product-experience",
    category: "Augmented Reality",
    description:
      "An immersive product visualization experience that allows customers to explore products through AR.",
    fullDescription:
      "A WebAR experience designed to help customers visualize products in their own environment. The experience combines spatial interaction, product visualization, and a minimal interface to create a seamless digital-to-physical journey.",
    image: ARProductImage,
    year: "2026",
    client: "Confidential",
    services: ["AR Development", "UX Design", "3D Visualization"],
    technologies: ["WebAR", "Three.js", "React"],
    featured: true,
  },

  {
    id: "02",
    title: "Immersive Brand Campaign",
    slug: "immersive-brand-campaign",
    category: "Interactive Experience",
    description:
      "An interactive campaign designed to create a stronger connection between a brand and its audience.",
    fullDescription:
      "A digital campaign concept combining interactive storytelling, motion, and immersive content to create a memorable brand experience.",
    image: BrandCampaignImage,
    year: "2026",
    client: "Confidential",
    services: ["Creative Development", "Interaction Design"],
    technologies: ["React", "GSAP", "WebGL"],
    featured: true,
  },

  {
    id: "03",
    title: "Digital Product Viewer",
    slug: "digital-product-viewer",
    category: "3D / Web",
    description:
      "A browser-based product viewer allowing users to inspect products from every angle.",
    fullDescription:
      "A lightweight interactive product visualization platform designed for modern e-commerce and product presentation.",
    image: ProductViewerImage,
    year: "2026",
    client: "Confidential",
    services: ["Web Development", "3D Development"],
    technologies: ["React", "Three.js", "WebGL"],
    featured: true,
  },

  {
    id: "04",
    title: "Business Management Platform",
    slug: "business-management-platform",
    category: "Software",
    description:
      "A centralized platform designed to simplify business operations and reporting.",
    fullDescription:
      "A custom business management system providing organizations with centralized data, dashboards, workflows, and reporting.",
    image: BusinessPlatformImage,
    year: "2026",
    client: "Confidential",
    services: ["Software Development", "UI/UX"],
    technologies: ["React", "TypeScript", ".NET"],
    featured: false,
  },

  {
    id: "05",
    title: "SwiftWash",
    slug: "swiftwash",
    category: "Software",
    description:
      "A smart laundry service platform designed to streamline booking, tracking, and customer engagement.",
    fullDescription:
      "SwiftWash is a customer-focused digital experience that simplifies laundry bookings and service management. The platform combines a clean booking flow, customer communication, and operations visibility into one streamlined product.",
    image: SwiftWashImage,
    year: "2026",
    client: "SwiftWash",
    services: ["Web Development", "UI/UX", "Product Design"],
    technologies: ["React", "TypeScript", "Tailwind"],
    featured: true,
    liveUrl: "https://swiftwash-demo.vercel.app/",
  },

  {
    id: "06",
    title: "Statech",
    slug: "statech",
    category: "Software",
    description:
      "A modern digital platform for a technology-first business focused on digital transformation and service delivery.",
    fullDescription:
      "Statech Intern Timesheet Monitoring System** is a web-based system developed for Statech to streamline and organize intern attendance, timesheets, daily tasks, and progress monitoring. The platform provides administrators with a centralized way to track intern activities while giving interns a simple interface for recording attendance, managing tasks, and monitoring their progress.",
    image: StatechImage,
    year: "2026",
    client: "Statech",
    services: ["Brand Presence", "Web Development", "UX Strategy"],
    technologies: ["React", "TypeScript", "Tailwind"],
    featured: true,
  },
];

export const projectCategories = [
  "All",
  "Augmented Reality",
  "Interactive Experience",
  "3D / Web",
  "Software",
];