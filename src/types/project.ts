export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  year: string;
  client: string;
  services: string[];
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
}