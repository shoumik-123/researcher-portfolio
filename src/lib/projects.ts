import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'sup-recycling-facility',
    title: 'SUP Recycling Facility for BRAC',
    slug: 'sup-recycling-facility-brac',
    type: 'industry',
    status: 'completed',
    summary: 'Established large-scale Single Use Plastic recycling facility with ETP',
    description: 'Technical guidance for setting up a comprehensive recycling facility with environmental management systems.',
    fullDescription: `
      Led the technical implementation of Bangladesh's first large-scale SUP recycling facility for BRAC. The project included:
      
      - Design and specification of recycling equipment
      - Installation of Effluent Treatment Plant (ETP)
      - Environmental compliance monitoring
      - Staff training and capacity building
      
      The facility processes 50+ tons of SUP monthly with zero liquid discharge.
    `,
    duration: {
      start: '2022-01',
      end: '2023-06'
    },
    role: 'Technical Expert - Environment',
    organization: 'BRAC',
    location: 'Dhaka, Bangladesh',
    impact: [
      '50+ tons SUP processed monthly',
      'Zero liquid discharge achieved',
      '100+ jobs created'
    ],
    technologies: [
      'Plastic Recycling',
      'ETP Systems',
      'Material Recovery',
      'Quality Control'
    ],
    media: [
      {
        type: 'image',
        url: '/images/projects/sup-facility-1.jpg',
        title: 'Recycling Facility Overview',
        description: 'Main processing area',
        isPrimary: true
      },
      {
        type: 'image',
        url: '/images/projects/sup-facility-2.jpg',
        title: 'ETP System',
        description: 'Effluent treatment plant installation'
      }
    ],
    featured: true
  },
  {
    id: 'recycling-business-units',
    title: '7 Recycling Business Units for BPCL',
    slug: 'recycling-business-units-bpcl',
    type: 'consultancy',
    status: 'completed',
    summary: 'Technical guidance to establish 7 Recycling Business Units (RBUs)',
    description: 'Provided end-to-end technical support for setting up multiple recycling units across Bangladesh.',
    fullDescription: `
      Provided technical guidance to establish 7 Recycling Business Units (RBUs) for BPCL under the PLEASE project.
      
      Key activities included:
      - Site selection and feasibility studies
      - Equipment specification and procurement
      - Operational guidelines development
      - Quality assurance protocols
      - Environmental monitoring systems
    `,
    duration: {
      start: '2021-03',
      end: '2022-12'
    },
    role: 'Technical Lead',
    organization: 'BPCL / UNOPS',
    location: 'Multiple locations, Bangladesh',
    impact: [
      '7 RBUs established nationwide',
      '500+ tons recycled annually',
      '200+ direct beneficiaries'
    ],
    technologies: [
      'Waste Sorting',
      'Mechanical Recycling',
      'Quality Testing',
      'Data Management'
    ],
    media: [
      {
        type: 'image',
        url: '/images/projects/rbu-1.jpg',
        title: 'RBU Dhaka',
        description: 'Main recycling unit in Dhaka',
        isPrimary: true
      },
      {
        type: 'image',
        url: '/images/projects/rbu-2.jpg',
        title: 'Sorting Facility',
        description: 'Material sorting area'
      }
    ],
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getProjectsByType = (type: string) => projects.filter(p => p.type === type);