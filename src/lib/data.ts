import { Publication, Mentor } from '@/types';

export const researcherInfo = {
  name: 'Hasan Ahmed',
  title: 'Interdisciplinary Researcher',
  shortBio: 'Specializing in transforming waste into value-added, health-enhancing materials through lab-based chemical modification of industrial, biomedical, and natural food waste.',
  longBio: `I'm Hasan Ahmed, an interdisciplinary researcher specializing in transforming waste into value-added, health-enhancing materials. My expertise lies in lab-based chemical modification of industrial, biomedical, and natural food waste to develop sustainable products. I also have strong research experience in microbiology, particularly in analyzing and addressing antibiotic-resistant microbes.
  
  Professionally, I served as a technical expert—environment and the Bangladesh country technical focal point at UNOPS for the World Bank-funded, SACEP-supported $3.18 million PLEASE project, providing technical leadership and environmental insights.
  
  Beyond my professional role, I am passionate about mentoring university students, fostering research skills, leadership development, and academic growth. With over 15 months of UN experience and more than 4 years of combined research and professional expertise, I am committed to advancing innovative environmental solutions and nurturing future changemakers.`,
  location: 'Dhaka, Bangladesh',
  email: 'hasan.kuet16@gmail.com',
  phone: '+8801747137476',
  social: {
    linkedin: 'https://linkedin.com/in/hasan27',
    googleScholar: 'https://scholar.google.com/...',
    orcid: 'https://orcid.org/...',
    whatsapp: '+8801747137476'
  }
};

export const stats = [
  { label: 'Research Interest Score', value: '98.7', icon: '📊' },
  { label: 'Reads', value: '1.85K', icon: '📚' },
  { label: 'Citations', value: '70+', icon: '📝' },
  { label: 'Publications', value: '8+', icon: '🏆' },
  { label: 'Conference Presentations', value: '6+', icon: '🎤' },
  { label: 'Poster Presentations', value: '2+', icon: '📋' }
];

export const education = [
  {
    degree: 'M.Sc. in Soil, Water & Environment',
    institution: 'University of Dhaka',
    year: '2022',
    description: 'Enhanced expertise in environmental policy, sustainability, and waste management solutions.'
  },
  {
    degree: 'B.Sc. in Leather Engineering',
    institution: 'KUET, Bangladesh',
    year: '2019',
    description: 'Specialized in microbiology and toxicology; initiated research on polymer composites for waste valorization.'
  },
  {
    degree: 'Research Collaborations',
    institution: 'University of Dhaka, JUST, BUET',
    year: '2020-2022',
    description: 'Guided master\'s research in biomedicine and physics; contributed to biomedical material studies under leading faculty.'
  }
];

export const expertise = [
  { name: 'Bioplastics & Polymer Technology', icon: '🧪' },
  { name: 'Environmental Toxicology & Remediation', icon: '🌱' },
  { name: 'Soil & Water Quality Management', icon: '💧' },
  { name: 'Circular Economy Systems', icon: '♻️' },
  { name: 'ESMP, EIA, ESS', icon: '📊' },
  { name: 'Plastic Recycling & Materials Recovery', icon: '🔄' },
  { name: 'Solid Waste Management', icon: '🗑️' },
  { name: 'Piloting Circular Economy Innovations', icon: '📱' }
];

export const publications: Publication[] = [
  {
    id: 'pub1',
    title: 'Valorization of Industrial Waste for Polymer Composite Development',
    authors: 'Ahmed H, Rahman A, Dewanjee S',
    journal: 'Journal of Environmental Management',
    year: 2023,
    volume: '45',
    issue: '3',
    pages: '234-245',
    doi: '10.1016/j.jenvman.2023.12345',
    citations: 15,
    type: 'journal',
    featured: true
  },
  {
    id: 'pub2',
    title: 'Antibiotic-Resistant Microbes in Leather Processing Waste',
    authors: 'Ahmed H, Bari L, Ahmed S',
    journal: 'Environmental Science and Pollution Research',
    year: 2022,
    volume: '29',
    issue: '12',
    pages: '5678-5690',
    doi: '10.1007/s11356-022-12345',
    citations: 23,
    type: 'journal',
    featured: true
  }
];

export const mentors: Mentor[] = [
  {
    name: 'Jaime Alarma Olmos',
    title: 'Project Management Specialist',
    organization: 'UNOPS',
    description: 'PLEASE Project'
  },
  {
    name: 'Sivakumaran Sithamparanathan',
    title: 'Technical Specialist',
    organization: 'UNOPS SAMCO',
    description: 'PLEASE Project'
  },
  {
    name: 'Suman Dewanjee',
    title: 'PhD Fellow',
    organization: 'Virginia Tech',
    description: 'A pivotal figure who reshaped my life\'s trajectory, bringing clarity, purpose, and dedication to research'
  }
];