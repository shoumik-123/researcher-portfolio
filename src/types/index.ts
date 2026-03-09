export type ProjectType = 'research' | 'industry' | 'consultancy' | 'mentoring';
export type ProjectStatus = 'completed' | 'ongoing' | 'planned';

export interface ProjectMedia {
  type: 'image' | 'video' | 'document';
  url: string;
  thumbnail?: string;
  title: string;
  description?: string;
  isPrimary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  type: ProjectType;
  status: ProjectStatus;
  summary: string;
  description: string;
  fullDescription?: string;
  duration: {
    start: string;
    end?: string;
  };
  role: string;
  organization: string;
  location?: string;
  impact?: string[];
  technologies: string[];
  media: ProjectMedia[];
  featured: boolean;
  links?: {
    publication?: string;
    presentation?: string;
    website?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  citations: number;
  type: 'journal' | 'conference' | 'poster';
  featured: boolean;
}

export interface Mentor {
  name: string;
  title: string;
  organization: string;
  description: string;
  image?: string;
}