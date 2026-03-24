import { Publication, Mentor } from '@/types';

export const researcherInfo = {
  name: 'Hasan Ahmed',
  title: 'Interdisciplinary Researcher',
  shortBio: 'Specializing in transforming waste into value-added, health-enhancing materials through lab-based chemical modification of industrial, biomedical, and natural food waste.',
  longBio: `I'm Hasan Ahmed, an interdisciplinary researcher specializing in transforming waste into value-added, health-enhancing materials...`,
  location: 'Dhaka, Bangladesh',
  email: 'hasan.kuet16@gmail.com',
  phone: '+8801747137476',
  social: {
    linkedin: 'https://linkedin.com/in/hasan27',
    googleScholar: 'https://scholar.google.com/...',
    researchGate: 'https://researchgate.net/profile/hasan-ahmed', // ✅ ADD THIS
    publons: 'https://publons.com/researcher/your-id', // ✅ ADD THIS
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
export const socialLinks = [
  { name: "LinkedIn", url: researcherInfo.social.linkedin, icon: "in", title: "LinkedIn" },
  { name: "ResearchGate", url: "https://researchgate.net/profile/hasan-ahmed", icon: "RG", title: "ResearchGate" }, // ✅ Hardcoded
  { name: "Web of Science", url: "https://publons.com/researcher/your-id", icon: "WoS", title: "Web of Science" }, // ✅ Hardcoded
  { name: "ORCID", url: researcherInfo.social.orcid, icon: "ORCID", title: "ORCID" },
  { name: "Google Scholar", url: researcherInfo.social.googleScholar, icon: "GS", title: "Google Scholar" },
  { name: "Institutional", url: "https://ki.se", icon: "I", title: "Institutional Web Page" }
];
export const images = [
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.youtube.com/watch?v=xxxxxxxxxxx",
    "videoEmbed": "https://www.youtube.com/embed/xxxxxxxxxxx",
    "type": "home",
    "page": "/"
  },
  {
    "id": "experience",
    "name": "Professional Experience",
    "title": "Professional Journey",
    "description": "Overview of my professional experience across international organizations and corporate sectors.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience"
  },
  {
    "id": "experience-unops",
    "name": "UNOPS Experience",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "experience-unops",
    "name": "UNOPS Experience 2",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "experience-bpcl",
    "name": "BPCL Experience",
    "title": "Research Consultant at BPCL",
    "description": "Worked on research projects related to energy efficiency and sustainable practices in the corporate sector.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/bpcl"
  },
  {
    "id": "experience-maskeeters",
    "name": "Maskeeters Experience",
    "title": "Team Lead at Maskeeters",
    "description": "Led a team of researchers and developers on innovative projects and research initiatives.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/maskeeters"
  },
  {
    "id": "experience-maskeeters",
    "name": "Maskeeters Experience",
    "title": "Team Lead at Maskeeters",
    "description": "Led a team of researchers and developers on innovative projects and research initiatives.",
    "image": "",
    "video": "https://youtu.be/21E3MNWz5m4?list=RD21E3MNWz5m4",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/maskeeters"
  },
  {
    "id": "research",
    "name": "Research Journey",
    "title": "My Research Journey",
    "description": "Overview of my research work, publications, and academic contributions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.youtube.com/watch?v=xxxxxxxxxxx",
    "videoEmbed": "https://www.youtube.com/embed/xxxxxxxxxxx",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-lab",
    "name": "Lab Experimentations",
    "title": "Laboratory Research",
    "description": "Hands-on laboratory work focusing on industrial waste valorization and polymer composite development.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.youtube.com/watch?v=xxxxxxxxxxx",
    "videoEmbed": "https://www.youtube.com/embed/xxxxxxxxxxx",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-youth",
    "name": "Youth Engagement",
    "title": "Mentoring Young Researchers",
    "description": "Supervising and mentoring undergraduate and graduate students in environmental research projects.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.youtube.com/watch?v=xxxxxxxxxxx",
    "videoEmbed": "https://www.youtube.com/embed/xxxxxxxxxxx",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "research-phd",
    "name": "My PhD Journey",
    "title": "PhD in Environmental Science",
    "description": "Doctoral research focusing on valorization of industrial waste for sustainable polymer composites.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/phd"
  },
  {
    "id": "about",
    "name": "About Me",
    "title": "Hasan Ahmed",
    "description": "Environmental researcher and technical expert passionate about sustainability, waste management, and mentoring young scientists.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "about",
    "page": "/about"
  },
  {
    "id": "achievements",
    "name": "Achievements",
    "title": "Key Achievements",
    "description": "A comprehensive list of my professional achievements, awards, and recognitions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "achievements",
    "page": "/achievements"
  },
  {
    "id": "training",
    "name": "Training & Consultancy",
    "title": "Training Programs & Consultancy Work",
    "description": "Professional training programs delivered and consultancy services provided to organizations.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "education",
    "name": "Education",
    "title": "Academic Background",
    "description": "PhD in Environmental Science from University of Dhaka, Master of Science in Chemistry, and Bachelor of Science in Chemistry.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "education",
    "page": "/education"
  },
  {
    "id": "media",
    "name": "Media & Blog",
    "title": "Media Appearances & Blog",
    "description": "Interviews, media coverage, and my personal blog on research and environmental topics.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "media",
    "page": "/media"
  },
  {
    "id": "blog",
    "name": "Blog & Insights",
    "title": "Blog & Insights",
    "description": "Personal blog sharing insights on research, environmental sustainability, and professional experiences.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "blog",
    "page": "/media/blog"
  }
];



// Achievements data
export const achievements = {
  researchImpact: [
    "Published 8+ peer-reviewed research articles in high-impact journals",
    "Developed innovative polymer composites from industrial waste materials",
    "Led research on antibiotic-resistant microbes in leather processing waste",
    "Collaborated with international researchers on biomedical material studies",
    "Contributed to environmental policy and sustainability initiatives",
    "Guided master's research in biomedicine and physics at multiple universities"
  ],
  professionalLeadership: [
    "Technical Expert - Environment at UNOPS Bangladesh (World Bank-funded PLEASE project)",
    "Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank",
    "Bangladesh country technical focal point for $3.18M international development project",
    "Research Consultant at BPCL, focusing on energy efficiency and sustainable practices",
    "Team Lead at Maskeeters, managing research and development initiatives",
    "Mentored junior researchers and contributed to academic collaborations"
  ]
};