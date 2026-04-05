import { Publication, Mentor } from '@/types';

export const researcherInfo = {
  name: 'Hasan Ahmed',
  title: 'Environmental Specialist &  Interdisciplinary Researcher',
  shortBio: 'Specializing in transforming waste into value-added, health-enhancing materials through lab-based chemical modification of industrial, biomedical, and natural food waste.',
  longBio: `I'm Hasan Ahmed, an interdisciplinary researcher specializing in transforming waste into value-added, health-enhancing materials...`,
  location: 'Dhaka, Bangladesh',
  email: 'hasan.kuet16@gmail.com',
  phone: '+8801747137476',
  social: {
    linkedin: 'https://www.linkedin.com/in/hasanahmed27/',
    googleScholar: 'https://scholar.google.com/citations?user=0DuQk4wAAAAJ&hl=en',
    researchGate: 'https://www.researchgate.net/profile/Hasan-Ahmed-25', // ✅ ADD THIS
    // publons: 'https://publons.com/researcher/your-id', // ✅ ADD THIS
    orcid: 'https://orcid.org/0009-0006-9120-0957',
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
  { name: 'Project and Grant Management (including Results-Based Management and donor compliance)', icon: '📋' },
  { name: 'Project Proposal Writing and Fund Management', icon: '✍️' },
  { name: 'Technical Documentation, Reporting, and MEAL Frameworks', icon: '📊' },
  { name: 'Bioplastics & Polymer Technology for Sustainable Materials', icon: '🧪' },
  { name: 'Environmental Toxicology & Remediation', icon: '🌱' },
  { name: 'Soil & Water Quality Management', icon: '💧' },
  { name: 'Circular Economy Systems and Waste-to-Resource Innovation', icon: '♻️' },
  { name: 'Environmental & Social Safeguards (ESMP, EIA, ESS) aligned with World Bank and UN standards', icon: '🛡️' },
  { name: 'Plastic Recycling Systems & Materials Recovery Facilities (MRFs)', icon: '🔄' },
  { name: 'Solid Waste Management & Pollution Prevention', icon: '🗑️' },
  { name: 'Piloting Circular Economy Innovations (AI-based data management, digital validation, and mobile app-based payment systems)', icon: '📱' }
];

export const professionalMentors = [
  { name: 'Jaime Alarma Olmos', role: 'Project Management Specialist', project: 'PLEASE Project, UNOPS' },
  { name: 'Sivakumaran Sithamparanathan', role: 'Technical Specialist', project: 'PLEASE Project, UNOPS SAMCO' },
  { name: 'Obidul Islam', role: 'Project Manager', project: 'SACEP PLEASE Project, UNOPS SAMCO' },
  { name: 'Labio Bala', role: 'Finance Specialist', project: 'UNOPS Vienna' },
  { name: 'Khadem Yousuf', role: 'MD & CEO', project: 'BPCL' },
  { name: 'Nusrat Jahan', role: 'Project Management Officer', project: 'UNOPS PLEASE Project, Bangladesh' },
  { name: 'Nusrat Shaheen', role: 'Technical Expert (Environment)', project: 'UNOPS PLEASE Project, Bhutan' }
];

export const academicMentors = [
  { 
    name: 'Dr. Tarek Arafat', 
    role: 'Head of BME, BUET', 
    description: 'In challenging times, his generosity and mentorship reignited my passion for research.' 
  },
  { 
    name: 'Dr. Latiful Bari', 
    role: 'Chief Scientist, CARS, University of Dhaka', 
    description: 'As his research assistant, I learned discipline and impactful research, making him my lifelong role model.' 
  },
  { 
    name: 'Dr. Asma Rahman', 
    role: 'Principal Scientist, CARS, University of Dhaka', 
    description: 'Provided invaluable opportunities to work in her lab, greatly enhancing my skills and knowledge.' 
  },
  { 
    name: 'Suman Dewanjee', 
    role: 'PhD Fellow, Virginia Tech', 
    description: 'A pivotal figure who reshaped my life\'s trajectory, bringing clarity, purpose, and dedication to research.' 
  }
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
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Hasan-Ahmed-25", icon: "RG", title: "ResearchGate" }, // ✅ Hardcoded
  // { name: "Web of Science", url: "https://publons.com/researcher/your-id", icon: "WoS", title: "Web of Science" }, // ✅ Hardcoded
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
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "home",
    "page": "/"
  },
  {
    "id": "home",
    "name": "Home",
    "title": "Hasan Ahmed - Researcher & Technical Expert",
    "description": "Environmental technical expert with experience in project management, research, and sustainable development across Bangladesh.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
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
    "type": "CARS",
    "page": "/experience"
  },
  {
    "id": "experience",
    "name": "Professional Experience",
    "title": "Professional Journey",
    "description": "Overview of my professional experience across international organizations and corporate sectors.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "Maskeeters",
    "page": "/experience"
  },
  {
    "id": "experience",
    "name": "Professional Experience",
    "title": "Professional Journey",
    "description": "Overview of my professional experience across international organizations and corporate sectors.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fprofile.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "BPCL",
    "page": "/experience"
  },

  // unops start
  {
    "id": "unops-retreat-2024-1",
    "name": "UNOPS Colleague Retreat 2024",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1dTD6nFmqfo7RVlhRadT6DIyOocnoIhEs/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-retreat-2025-1",
    "name": "UNOPS Colleague Retreat 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/190xIDYnUa9hP9ejmlBnakFcxbO9iQLEa/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-retreat-2025-2",
    "name": "UNOPS Colleague Retreat 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1mujlSjX8vOCV1NTW_xQyzHI_AbH8lIAH/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-retreat-2024-2",
    "name": "UNOPS Colleague Retreat 2024",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1314LBg16ZhcVfWwqU0wWx-VqF095RPBs/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-bd-colleague-2024",
    "name": "UNOPS BD Colleague 2024",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1gn2yue7EkCFY2MDWhcA8KD6gf-TIZyHY/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-bd-visit-2025-1",
    "name": "UNOPS Colleague BD Visit 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1CrByPOQyoU_H2MegIj9tmhFqIlJZktoj/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-bd-visit-2025-2",
    "name": "UNOPS Colleague BD Visit 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1i5s-UqaXNJqyilIGvPak-hKVIoMHDkrS/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "bd-gob-meeting-2025-1",
    "name": "BD GOB Stakeholder Meeting 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/10YRLLvZfkDFkypJ0GTccDzbjr9yxyNZ-/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-bd-visit-2025-3",
    "name": "UNOPS Colleague BD Visit 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1qP_R1CDMlUo--B6LHuNY9PlEkxEt2p91/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-bd-visit-2025-4",
    "name": "UNOPS Colleague BD Visit 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1qE_zB6aHU3KYBezTABarOtBnsFE4NAnN/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "bd-gob-meeting-2025-2",
    "name": "BD GOB Stakeholder Meeting 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1qlKkCL84blpd8IOiCI7mB2I8ngG6rl6o/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "unops-bd-visit-2025-5",
    "name": "UNOPS Colleague BD Visit 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1pfcDNdW7RYFdVse-MYjkjdWERb7j4CxS/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "field-monitoring-2025",
    "name": "Field Monitoring with UNOPS Colleague at BD 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1qgu7Z5EiE-eP2N5VigsDLPRVGWRWjTeN/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "closure-mission-2025-1",
    "name": "Project Closure Mission with UNOPS Colleague at BD 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1pWDb6S_dMd0HzSw2CPKxE4lNsLTTZ1Ma/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "closure-mission-2025-2",
    "name": "Project Closure Mission with UNOPS Colleague at BD 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1qng31G3zsdViPWfj2lCKlx9wZ_T_BoAp/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "closure-mission-2025-3",
    "name": "Project Closure Mission with UNOPS Colleague at BD 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1pyFV-yPWZ23dagvGd7OC_nZ_c9vfeOL_/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "closure-mission-2025-4",
    "name": "Project Closure Mission with UNOPS Colleague at BD 2025",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Bangladesh country technical focal point for the World Bank-funded $3.18M PLEASE project. Led development of 11+ Environmental and Social Management Plans (ESMPs) approved by World Bank.",
    "image": "https://drive.google.com/file/d/1qBeyXyTr25sSgPoGYFppeepFuZTyrbzQ/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-1",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/12Kv_CIa4VYTv93wuxBWvjlbOaKeL2Mer/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-2",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1vRz8Yap9Ky9VEBrkQj_sHCTf8VV9imD9/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-3",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/11ypxaABRBfBmT7D2ZoW3pFV9CU0T1cZV/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-4",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1MKG1WUTfzT5bQgQ9_bLmPr6aBAoPLLUZ/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-5",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1Mo2N3xVFYxvX8UhfRIYl9KRVskA8yayp/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-6",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1MlFYEX1aUHEakxuWx3--l6UoAL7c_l0M/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-7",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1Mph35FMe05Kegn6586rmClJ5e-ZAuAIF/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-8",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1_D4hf_U_To1sQ4NDcMhl0sx3qPphorzb/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-9",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1_KPtPK9CWtifCIWrvrCSzi3M3Je-abA6/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-10",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1_JuHZcSyrtVvwwg13izWMd-EpZZENmPj/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-11",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1_BQHznWrUDgaDp0IvP8HcSAGlivgiQxY/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-12",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1Lc-bJ_Dp0n_z2hktBqnrnYYaaF0EnT7h/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-13",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1Ll6cu1fLc77q0RUlRrwm_obJoWEZxET_/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
  {
    "id": "please-field-visit-14",
    "name": "PLEASE Project Field Visit and Guidance on ESMP",
    "title": "Technical Expert - Environment at UNOPS",
    "description": "Field visit providing guidance on Environmental and Social Management Plans (ESMPs) and project activities.",
    "image": "https://drive.google.com/file/d/1RaeEiKVnjD826N_n6s4AxuqXMeAi_TfB/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "experience",
    "page": "/experience/unops"
  },
   {
      "id": "video-retreat-sri-lanka-2025",
      "title": "Retreat Program in Sri Lanka 2025",
      "url": "https://youtu.be/rXG6oEWm3ZI",
      "embedUrl": "https://www.youtube.com/embed/rXG6oEWm3ZI",
      "thumbnail": "https://img.youtube.com/vi/rXG6oEWm3ZI/maxresdefault.jpg",
      "type": "video"
    },
    {
      "id": "video-innovation-guidance-1",
      "title": "Innovation Guidance to IMS Team at Chittagong University",
      "url": "https://youtu.be/0esuC1X2A60",
      "embedUrl": "https://www.youtube.com/embed/0esuC1X2A60",
      "thumbnail": "https://img.youtube.com/vi/0esuC1X2A60/maxresdefault.jpg",
      "type": "video"
    },
    {
      "id": "video-waste-mapping",
      "title": "Waste Mapping and Field Verification on IMS",
      "url": "https://youtube.com/shorts/X3aq2e97a0A",
      "embedUrl": "https://www.youtube.com/embed/X3aq2e97a0A",
      "thumbnail": "https://img.youtube.com/vi/X3aq2e97a0A/maxresdefault.jpg",
      "type": "video"
    },
    {
      "id": "video-innovation-guidance-2",
      "title": "Innovation Guidance to IMS Team at Chittagong 2025 University",
      "url": "https://youtu.be/1iLcE7K-UZk",
      "embedUrl": "https://www.youtube.com/embed/1iLcE7K-UZk",
      "thumbnail": "https://img.youtube.com/vi/1iLcE7K-UZk/maxresdefault.jpg",
      "type": "video"
    },
    {
      "id": "video-innovation-esmp",
      "title": "Innovation Guidance and ESMP to IMS Team at Chittagong University",
      "url": "https://youtu.be/NXXi0QyoHDQ",
      "embedUrl": "https://www.youtube.com/embed/NXXi0QyoHDQ",
      "thumbnail": "https://img.youtube.com/vi/NXXi0QyoHDQ/maxresdefault.jpg",
      "type": "video"
    },
    {
      "id": "video-arannyak-foundation",
      "title": "Innovation Guidance and ESMP to Arannyak Foundation",
      "url": "https://youtu.be/SXkreMpHneg",
      "embedUrl": "https://www.youtube.com/embed/SXkreMpHneg",
      "thumbnail": "https://img.youtube.com/vi/SXkreMpHneg/maxresdefault.jpg",
      "type": "video"
    },
    {
      "id": "video-local-stakeholder",
      "title": "Local Stakeholder Meeting at Chittagong 2025",
      "url": "https://youtu.be/-Mm3FUgydvs",
      "embedUrl": "https://www.youtube.com/embed/-Mm3FUgydvs",
      "thumbnail": "https://img.youtube.com/vi/-Mm3FUgydvs/maxresdefault.jpg",
      "type": "video"
    },
  // unops end


{
  "id": "bpcl-meal-1",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/11ntM1EtuD2kfsZRX5bFDKmJFUfaeIAlZ/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-2",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1icVmRG4daiNMKODpHXUM0ls7Sp4JC5eg/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-3",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1KWSM_IMZkHSGDjLOYzqnZCR34ZFwpV6U/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-4",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1OTPiGOj_m0EKfhDwDAtpHKrjyxTBtgbv/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-5",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1RnSiD2q7Z-AyBh9-fc10jXH7tL39dEtF/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-6",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/19gZGZZMhoA7kqEFIeiasO_zlyXPEdcI1/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-7",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1kEQNWBTKYDSd2V_EO2RhyYSV5qPwCOpH/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-8",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1VA0_NQNtrc9t_6nDaOFxUFj8oy3cGBGQ/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},
{
  "id": "bpcl-meal-9",
  "name": "BPCL Project Management and MEAL Guidance",
  "title": "Research Consultant at BPCL",
  "description": "Project Management and Monitoring, Evaluation, Accountability, and Learning (MEAL) guidance at BPCL.",
  "image": "https://drive.google.com/file/d/1p579fWNzvYEegVaH3Vx5GQ-zaF_iTVcv/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/bpcl"
},

// experience/bpcl end
// experience/maskeeters start
{
  "id": "maskeeters-image-1",
  "name": "Maskeeters Idea Limited Technical Sustainability and MEAL Lead",
  "title": "Technical Head – Environment & Sustainability at Maskeeters",
  "description": "Technical Sustainability and MEAL Lead at Maskeeters Idea Limited, leading innovation-driven environmental solutions and sustainability initiatives.",
  "image": "https://drive.google.com/file/d/1iIsLsrK2OwLbFTTkIf_Ee4rxSc8AqtqE/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/maskeeters"
},
{
  "id": "maskeeters-video-1",
  "name": "Maskeeters Idea Limited Technical Sustainability and MEAL Lead",
  "title": "Technical Head – Environment & Sustainability at Maskeeters",
  "description": "Video documentation of Technical Sustainability and MEAL Lead activities at Maskeeters Idea Limited.",
  "image": "",
  "video": "https://drive.google.com/file/d/1yafDKSA3r0zPwJ2lEewA56HOSoyFeBaL/view?usp=drive_link",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/maskeeters"
},
{
  "id": "maskeeters-video-2",
  "name": "Maskeeters Idea Limited Technical Sustainability and MEAL Lead",
  "title": "Technical Head – Environment & Sustainability at Maskeeters",
  "description": "Video documentation of Technical Sustainability and MEAL Lead activities at Maskeeters Idea Limited.",
  "image": "https://drive.google.com/file/d/1QJqwIzzXYP26N8wbNjmPAPMynPvFGq8Q/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/maskeeters"
},
{
  "id": "maskeeters-video-3",
  "name": "Maskeeters Idea Limited Technical Sustainability and MEAL Lead",
  "title": "Technical Head – Environment & Sustainability at Maskeeters",
  "description": "Video documentation of Technical Sustainability and MEAL Lead activities at Maskeeters Idea Limited.",
  "image": "https://drive.google.com/file/d/1vWIqLXWZ7XgyaJvOGCloBc9NxjENItbv/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "experience",
  "page": "/experience/maskeeters"
},
{
  "id": "maskeeters-video-4",
  "name": "200 NGOs Stakeholder Meeting",
  "title": "200 NGOs Stakeholder Meeting",
  "description": "Stakeholder meeting with 200+ NGOs discussing sustainability initiatives and collaborative opportunities.",
  "image": "",
  "video": "https://youtu.be/6h0a43X2ER8",
  "videoEmbed": "https://www.youtube.com/embed/6h0a43X2ER8",
  "type": "experience",
  "page": "/experience/maskeeters"
},
// experience/maskeeters end

  {
    "id": "research",
    "name": "Research Journey",
    "title": "My Research Journey",
    "description": "Overview of my research work, publications, and academic contributions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research",
    "name": "Research Journey",
    "title": "My Research Journey",
    "description": "Overview of my research work, publications, and academic contributions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research",
    "name": "Research Journey",
    "title": "My Research Journey",
    "description": "Overview of my research work, publications, and academic contributions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research",
    "name": "Research Journey",
    "title": "My Research Journey",
    "description": "Overview of my research work, publications, and academic contributions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-lab",
    "name": "Lab Experimentations",
    "title": "Laboratory Research",
    "description": "Hands-on laboratory work focusing on industrial waste valorization and polymer composite development.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-youth",
    "name": "Youth Engagement",
    "title": "Mentoring Young Researchers",
    "description": "Supervising and mentoring undergraduate and graduate students in environmental research projects.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "research-youth",
    "name": "Youth Engagement",
    "title": "Mentoring Young Researchers",
    "description": "Supervising and mentoring undergraduate and graduate students in environmental research projects.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "",
    "videoEmbed": "",
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
    "id": "achievements",
    "name": "Achievements",
    "title": "Key Achievements",
    "description": "A comprehensive list of my professional achievements, awards, and recognitions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-2.jpg&w=1920&q=75",
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
    "Published 10+ peer-reviewed research articles in high-impact international journals on biodegradable composites, antimicrobial biomaterials, waste-to-resource technologies, and environmental remediation.",
    "Designed and executed laboratory experiments and developed advanced methodologies for 20+ research innovations in sustainable materials and environmental science.",
    "Developed innovative polymer composites and green materials from industrial and tannery waste through detoxification and valorization processes.",
    "Led targeted research on antibiotic-resistant microbes in leather processing waste and environmental microbiology.",
    "Collaborated with international researchers on biomedical material studies, including hydrogels and wound-healing applications.",
    "Contributed to environmental policy and sustainability initiatives through waste minimization and circular economy research.",
    "Guided and mentored master's and undergraduate research students in biomedicine and physics at multiple universities.",
    "Served as keynote speaker for the university and trainer for UNYSAB, promoting environmental leadership and youth empowerment.",
    "Mentored junior researchers and fostered academic collaborations across institutions."
  ],
  professionalLeadership: [
    "Served as technical expert (environment) and Bangladesh country technical focal point at UNOPS for the World Bank-funded PLEASE Project.",
    "Led the development of 11+ Environmental and Social Management Plans (ESMPs) approved by the World Bank.",
    "Developed 5+ Environmental and Social Standards (ESS) for five key grantees: Red Orange, IMS, Arannyak Foundation, BRAC, and BPCL.",
    "Provided key technical inputs, monitoring, and oversight for the setup of 9 plastic recycling facilities, including business models, operational regulations, and material recovery systems under the UNOPS PLEASE Project.",
    "Developed 10+ innovations under the UNOPS PLEASE Project, including innovation assessment, verification, and testing protocols for scalable circular plastic solutions and advanced material recovery models.",
    "Managed Environmental Sustainability and MEAL for the $1.3 million World Bank-funded PLEASE Project at BPCL, focusing on plastic recovery, Recycling Business Unit (RBU) establishment, and sustainable practices.",
    "Serving as Technical Head – Environment, Sustainability & MEAL at Musketeers Idea Ltd., leading grant proposal development for more than 10 projects for NGOs, INGOs, and CSOs, while providing environmental consultancy for policy development and new sustainability initiatives."
  ]
};