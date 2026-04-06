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
  // { name: "Institutional", url: "https://ki.se", icon: "I", title: "Institutional Web Page" }
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

  //research start
  // Research Page Images - Lab Work & Experiments
  {
    "id": "research-food-waste",
    "name": "Food Waste Sample Collection",
    "title": "Food Waste Sample Collection for Chitosan Extraction",
    "description": "Collecting food waste samples for chitosan extraction research at University of Dhaka",
    "image": "https://drive.google.com/file/d/1NG_kz7yEmI0_Af1_bUKezT2tqnXz9F2r/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biomaterials-prep",
    "name": "Biomaterials Fabrication",
    "title": "Sample Preparation for Biomaterials Fabrications",
    "description": "Preparing biomaterial samples for advanced material characterization",
    "image": "https://drive.google.com/file/d/1NYaxwbgdNa-0RCIhLFO6OZ5xS4Oz_ki9/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-microbial-assay",
    "name": "Microbial Assay Experimentation",
    "title": "Microbial Assay Experimentation at CARS",
    "description": "Microbial assay experimentation at Centre for Advanced Research in Sciences (CARS), University of Dhaka 2023",
    "image": "https://drive.google.com/file/d/1zRgXGD9lnqu98wxo022gZjIuyBzUmuqP/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-chemical-modification",
    "name": "Chemical Modification Lab",
    "title": "Chemical Modification of Fine Sand",
    "description": "Lab experimentation at CARS for chemical modification of fine sand",
    "image": "https://drive.google.com/file/d/16HOZYggn_krboWDKdl73e3W-tzxgr5BV/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-waste-collection",
    "name": "Waste Sample Collection",
    "title": "Waste Sample Collection from Matuail Canal",
    "description": "Waste sample collection from Matuail Canal for environmental research, 2023",
    "image": "https://drive.google.com/file/d/1BFPt8mes4Ujg2HaayPfA_g_GT6AIIwzj/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-dr-asma",
    "name": "Training with Dr. Asma Rahman",
    "title": "Training with Dr. Asma Rahman",
    "description": "Dr. Asma Rahman, Principal Scientist Pharmacy - Gained knowledge on HPLC, AAS, antibiotic identification",
    "image": "https://drive.google.com/file/d/1BsxNxBtWHpoHV-bYjzQFtI_Oc1Zup2pH/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biomaterials-prep-2",
    "name": "Biomaterials Fabrication 2",
    "title": "Sample Preparation for Biomaterials Fabrications",
    "description": "Advanced biomaterials fabrication and sample preparation",
    "image": "https://drive.google.com/file/d/17haFvGqhpdOEADeSIvH1y7GR2WxNTzHy/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-hydrogel-prep",
    "name": "Hydrogel Fabrication",
    "title": "Sample Preparation for Hydrogel Fabrications",
    "description": "Preparing hydrogel samples for biomedical applications",
    "image": "https://drive.google.com/file/d/1Tcu_RjI7GfyXzwLJHh_CCwZdqRpIqltz/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-electrospinning",
    "name": "Electrospinning Nanofiber",
    "title": "Electrospinning Nanofiber Fabrications",
    "description": "Sample preparation for electrospinning nanofiber fabrication",
    "image": "https://drive.google.com/file/d/1TxzR4hWRSoDQDqw62hZrnzqyrjZVo9y7/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-hydrogel-prep-2",
    "name": "Hydrogel Fabrication 2",
    "title": "Sample Preparation for Hydrogel Fabrications",
    "description": "Advanced hydrogel fabrication for wound healing applications",
    "image": "https://drive.google.com/file/d/1UBoJAmA2lWeExi8wj0W5M2wlqZVntTtU/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biomaterials-prep-3",
    "name": "Biomaterials Fabrication 3",
    "title": "Sample Preparation for Biomaterials Fabrications",
    "description": "Sustainable biomaterial development from waste resources",
    "image": "https://drive.google.com/file/d/1VPndZGxb4-mpT2GNrsSPm9pXWVurthbv/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biotech-conf-1",
    "name": "Biotechnology Conference 2023",
    "title": "Participation in BioTechnology Conference",
    "description": "Participation in BioTechnology in Health and Agriculture at Dhaka University 2023",
    "image": "https://drive.google.com/file/d/1SO3GRUst7OnSwtCU_DyvrU9WZ9JMyvMY/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biotech-conf-2",
    "name": "Biotechnology Conference 2023",
    "title": "Participation in BioTechnology Conference",
    "description": "Participation in BioTechnology in Health and Agriculture at Dhaka University 2023",
    "image": "https://drive.google.com/file/d/1STldQpgzplSEuv082yUe0DzRBkmZIEAR/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biotech-conf-3",
    "name": "Biotechnology Conference 2023",
    "title": "Participation in BioTechnology Conference",
    "description": "Participation in BioTechnology in Health and Agriculture at Dhaka University 2023",
    "image": "https://drive.google.com/file/d/1S6S0QvhD6UQXBdESgHLbHe0ly4kuLfE4/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biotech-conf-4",
    "name": "Biotechnology Conference 2023",
    "title": "Participation in BioTechnology Conference",
    "description": "Participation in BioTechnology in Health and Agriculture at Dhaka University 2023",
    "image": "https://drive.google.com/file/d/1SjcRDmV9EJElR2v5w3cfKxRcES81ZJlJ/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biotech-conf-5",
    "name": "Biotechnology Conference 2023",
    "title": "Participation in BioTechnology Conference",
    "description": "Participation in BioTechnology in Health and Agriculture at Dhaka University 2023",
    "image": "https://drive.google.com/file/d/1Sn7o0v1epoyADZq1_d_srQMRYXKyPHSf/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-biotech-conf-6",
    "name": "Biotechnology Conference 2023",
    "title": "Participation in BioTechnology Conference",
    "description": "Participation in BioTechnology in Health and Agriculture at Dhaka University 2023",
    "image": "https://drive.google.com/file/d/1SZA0CW4JaOHwZMkeg2sWar_9HzV-YT8I/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-icmie-2023-1",
    "name": "ICMIE 2023 Paper Presentation",
    "title": "Paper Presentation at ICMIE 2023",
    "description": "Paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2023",
    "image": "https://drive.google.com/file/d/1KmKPm54OLUFuMq7T5MSsYDVlP6z_VGPZ/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-icmie-2023-2",
    "name": "ICMIE 2023 Paper Presentation",
    "title": "Paper Presentation at ICMIE 2023",
    "description": "Paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2023",
    "image": "https://drive.google.com/file/d/1uor6XAYMSN0KBveIeKwyo6n4kboNpRli/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-icmie-2023-3",
    "name": "ICMIE 2023 Paper Presentation",
    "title": "Paper Presentation at ICMIE 2023",
    "description": "Paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2023",
    "image": "https://drive.google.com/file/d/1T5ATv7mRkfo2_PUgOBwCTvv_Te70_9ye/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-icmie-2023-4",
    "name": "ICMIE 2023 Paper Presentation",
    "title": "Paper Presentation at ICMIE 2023",
    "description": "Paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2023",
    "image": "https://drive.google.com/file/d/15lHXuT2Ugyrk7OJQzJG7VRLc9QTcB2Fl/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-icmie-2025-1",
    "name": "ICMIE 2025 Paper Presentation",
    "title": "Paper Presentation at ICMIE 2025",
    "description": "Paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2025",
    "image": "https://drive.google.com/file/d/1xaeV1wfRNk1x-J1i0DTvUTHkoAxFgxhT/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },
  {
    "id": "research-icmie-2025-2",
    "name": "ICMIE 2025 Paper Presentation",
    "title": "Paper Presentation at ICMIE 2025",
    "description": "Paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2025",
    "image": "https://drive.google.com/file/d/16wIOpuOCOzFr2xwBM1iuqxvjRkwXVAae/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research"
  },

  // Research Videos
  {
    "id": "research-video-icmie-2023",
    "name": "ICMIE 2023 Video Presentation",
    "title": "Paper Presentation at ICMIE 2023",
    "description": "Video recording of paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2023",
    "image": "",
    "video": "https://youtu.be/j8jhqxp9c4c",
    "videoEmbed": "https://www.youtube.com/embed/j8jhqxp9c4c",
    "type": "video",
    "page": "/research"
  },
  {
    "id": "research-video-icmie-2025",
    "name": "ICMIE 2025 Video Presentation",
    "title": "Paper Presentation at ICMIE 2025",
    "description": "Video recording of paper presentation at International Conference on Mechanical, Industrial and Energy Engineering (ICMIE) 2025",
    "image": "",
    "video": "https://youtu.be/Dr5QYus7_ag",
    "videoEmbed": "https://www.youtube.com/embed/Dr5QYus7_ag",
    "type": "video",
    "page": "/research"
  },
  // Research Pages end

  // Research Subpages
  // Research Lab Page - Videos
  {
    "id": "research-lab-midnight-2023",
    "name": "Midnight Lab Work",
    "title": "Midnight Lab Work on Biomaterial Sample Preparation 2023",
    "description": "Late-night laboratory work focused on biomaterial sample preparation for advanced research applications.",
    "image": "",
    "video": "https://youtu.be/oiOkEUpVpdA",
    "videoEmbed": "https://www.youtube.com/embed/oiOkEUpVpdA",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-antibacterial-2023",
    "name": "Antibacterial Assay Preparation",
    "title": "Lab Work on Antibacterial Assay Sample Preparation 2023",
    "description": "Preparing samples for antibacterial assay testing to evaluate antimicrobial properties of developed materials.",
    "image": "",
    "video": "https://youtube.com/shorts/nF_UuHH18T8",
    "videoEmbed": "https://www.youtube.com/embed/nF_UuHH18T8",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-antibacterial-2022",
    "name": "Antibacterial Assay Preparation",
    "title": "Lab Work on Antibacterial Assay Sample Preparation 2022",
    "description": "Early-stage antibacterial assay sample preparation for material characterization studies.",
    "image": "",
    "video": "https://youtu.be/edvPjpFeueU",
    "videoEmbed": "https://www.youtube.com/embed/edvPjpFeueU",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-wound-healing-2022",
    "name": "Wound Healing Material",
    "title": "Lab Work on Wound Healing Material Sample Preparation 2022",
    "description": "Preparing wound healing material samples for biomedical applications and tissue regeneration studies.",
    "image": "",
    "video": "https://youtube.com/shorts/GoSTyDZ9cqg",
    "videoEmbed": "https://www.youtube.com/embed/GoSTyDZ9cqg",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-hplc-2022",
    "name": "HPLC Preparation",
    "title": "Lab Work on HPLC Preparation 2022",
    "description": "High-Performance Liquid Chromatography (HPLC) sample preparation for chemical analysis and characterization.",
    "image": "",
    "video": "https://youtube.com/shorts/9viMPEChhYI",
    "videoEmbed": "https://www.youtube.com/embed/9viMPEChhYI",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-chitosan-2023",
    "name": "Chitosan Extraction",
    "title": "Lab Work on Chitosan Extraction Preparation 2023",
    "description": "Extracting chitosan from food waste for sustainable biomaterial development.",
    "image": "",
    "video": "https://youtube.com/shorts/bY_zaOtCkuc",
    "videoEmbed": "https://www.youtube.com/embed/bY_zaOtCkuc",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-bioplastic-2023",
    "name": "Bioplastic Preparation",
    "title": "Lab Work on Bioplastic Preparation 2023",
    "description": "Developing sustainable bioplastics for food packaging and environmental applications.",
    "image": "",
    "video": "https://youtube.com/shorts/W1GUbdCLWwU",
    "videoEmbed": "https://www.youtube.com/embed/W1GUbdCLWwU",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-bioimpedance-2023",
    "name": "Bioimpedance Analysis",
    "title": "Lab Work on Bioimpedance 2023",
    "description": "Bioimpedance measurements for material characterization and biological sample analysis.",
    "image": "",
    "video": "https://youtube.com/shorts/ZpOZUnF10oU",
    "videoEmbed": "https://www.youtube.com/embed/ZpOZUnF10oU",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-hydrogel-2024",
    "name": "Hydrogel Preparation",
    "title": "Lab Work on Hydrogel 2024",
    "description": "Advanced hydrogel fabrication for wound healing and drug delivery applications.",
    "image": "",
    "video": "https://youtu.be/VANfL_8iRSY",
    "videoEmbed": "https://www.youtube.com/embed/VANfL_8iRSY",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-pathogen-2023",
    "name": "Pathogen Identification",
    "title": "Lab Work on Pathogen Identification Sample Preparation 2023",
    "description": "Sample preparation for pathogen identification and microbial analysis studies.",
    "image": "",
    "video": "https://youtube.com/shorts/p9VHBAZpTxc",
    "videoEmbed": "https://www.youtube.com/embed/p9VHBAZpTxc",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-uv-spectrophotometry",
    "name": "UV Spectrophotometry",
    "title": "UV Spectrophotometry Analysis",
    "description": "UV Spectrophotometry for material characterization and chemical analysis.",
    "image": "",
    "video": "https://youtube.com/shorts/a8CD60C9Vxs",
    "videoEmbed": "https://www.youtube.com/embed/a8CD60C9Vxs",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-electrospinning",
    "name": "Electrospinning Nanofiber",
    "title": "Electrospinning Nanofiber Fabrications",
    "description": "Fabricating nanofibers through electrospinning technique for advanced material applications.",
    "image": "",
    "video": "https://youtube.com/shorts/C0ojc2Y4nxE",
    "videoEmbed": "https://www.youtube.com/embed/C0ojc2Y4nxE",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-toxic-dye-removal",
    "name": "Toxic Dye Removal",
    "title": "Toxic Dye Removal from Wastewater",
    "description": "Research on removing toxic dyes from wastewater using sustainable treatment methods.",
    "image": "",
    "video": "https://youtube.com/shorts/8XhLuAOmEXo",
    "videoEmbed": "https://www.youtube.com/embed/8XhLuAOmEXo",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-heavy-metal-aas",
    "name": "Heavy Metal Identification",
    "title": "Heavy Metal Identifications by AAS",
    "description": "Atomic Absorption Spectroscopy (AAS) for heavy metal detection and quantification in environmental samples.",
    "image": "",
    "video": "https://youtu.be/3Um8mim4kN",
    "videoEmbed": "https://www.youtube.com/embed/3Um8mim4kN",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-ph-check",
    "name": "pH Check",
    "title": "pH Check for Biomaterials",
    "description": "pH measurement and adjustment for biomaterial preparation and characterization.",
    "image": "",
    "video": "https://youtube.com/shorts/DiD9yzxwesI",
    "videoEmbed": "https://www.youtube.com/embed/DiD9yzxwesI",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-wound-healing-skin",
    "name": "Wound Healing Materials",
    "title": "Wound Healing Materials for Wounded Skin",
    "description": "Development and testing of wound healing materials for skin tissue regeneration.",
    "image": "",
    "video": "https://youtu.be/W0BnlbD7KvA",
    "videoEmbed": "https://www.youtube.com/embed/W0BnlbD7KvA",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-sustainable-bioplastic",
    "name": "Sustainable Bioplastic",
    "title": "Sustainable Bioplastic Development for Food Packaging Materials",
    "description": "Creating eco-friendly bioplastics for sustainable food packaging solutions.",
    "image": "",
    "video": "https://youtu.be/4BycEQ8O9MM",
    "videoEmbed": "https://www.youtube.com/embed/4BycEQ8O9MM",
    "type": "research",
    "page": "/research/lab"
  },
  {
    "id": "research-lab-drug-encapsulated",
    "name": "Drug-Encapsulated Biomaterials",
    "title": "Drug-Encapsulated Biomaterials for Wound Healing",
    "description": "Developing drug-encapsulated biomaterials for enhanced wound healing and therapeutic applications.",
    "image": "",
    "video": "https://youtu.be/sO0oigJGu1k",
    "videoEmbed": "https://www.youtube.com/embed/sO0oigJGu1k",
    "type": "research",
    "page": "/research/lab"
  },
  // Research Youth Page - Student Mentoring & Youth Capacity Building
  {
    "id": "youth-mentoring-thesis-2025",
    "name": "Student Mentoring & Thesis Mentorship",
    "title": "Voluntarily Student Mentoring & Thesis Mentorship 2025",
    "description": "Providing voluntary mentorship to students for their thesis research, guiding them through experimental design, data analysis, and academic writing.",
    "image": "https://drive.google.com/file/d/1Ayvd06ryT-_H0BmhXtlD2ZqnKp9qjtby/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-keynote-lectures-1",
    "name": "Keynote Speeches & Youth Capacity Building",
    "title": "Keynote Speeches & Lectures and Youth Capacity Building at 2025",
    "description": "Delivering keynote speeches and lectures focused on empowering youth through knowledge sharing and capacity building initiatives.",
    "image": "https://drive.google.com/file/d/11CxkC8G6DEJhAAxj-jqma9gkHX6xpwaL/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-keynote-lectures-2",
    "name": "Keynote Speeches & Youth Capacity Building",
    "title": "Keynote Speeches & Lectures and Youth Capacity Building at 2025",
    "description": "Engaging with young researchers and students through inspirational keynote addresses and interactive lecture sessions.",
    "image": "https://drive.google.com/file/d/1XnBKj6i9mCz5hRCa6ZFyuBpPiwB6XCuB/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-keynote-lectures-3",
    "name": "Keynote Speeches & Youth Capacity Building",
    "title": "Keynote Speeches & Lectures and Youth Capacity Building at 2025",
    "description": "Building capacity among young professionals through targeted lectures and mentorship programs.",
    "image": "https://drive.google.com/file/d/1pUsoUt0lIvn9OaZBZkRv6ezGaLH-1JS3/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-unysab-rajshahi-2025",
    "name": "UNYSAB Rajshahi University",
    "title": "Keynote Speeches & Lectures and Youth Capacity Building at Rajshahi University UNYSAB 2025",
    "description": "Keynote presentation and youth capacity building session at UNYSAB event hosted by Rajshahi University.",
    "image": "https://drive.google.com/file/d/1pQE7bN9cfSzGusvMDA-bSqO9Z6q26TyC/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-unysab-2025-1",
    "name": "UNYSAB Youth Capacity Building",
    "title": "Keynote Speeches & Lectures and Youth Capacity Building at UNYSAB 2025",
    "description": "Contributing to youth development through keynote lectures and interactive workshops at UNYSAB event.",
    "image": "https://drive.google.com/file/d/1tZwbnN98g8MtWy4vZ3YA59XNVRKxJ5Z-/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-unysab-2025-2",
    "name": "UNYSAB Youth Capacity Building",
    "title": "Keynote Speeches & Lectures and Youth Capacity Building at UNYSAB 2025",
    "description": "Empowering the next generation of researchers and environmental professionals through knowledge sharing.",
    "image": "https://drive.google.com/file/d/1Sqa5mUombhXXa67dcNulkNFOwzx976Q_/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  },
  {
    "id": "youth-capacity-building-2025",
    "name": "Youth Capacity Building",
    "title": "Youth Capacity Building at 2025",
    "description": "Dedicated sessions focused on building capacity among youth in research methodology, environmental science, and professional development.",
    "image": "https://drive.google.com/file/d/1JSIdQMJnAvQ9CTvbBZHgRoTHQomDx0TG/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "research",
    "page": "/research/youth"
  }
  ,
  // {
  //   "id": "research-phd",
  //   "name": "My PhD Journey",
  //   "title": "PhD in Environmental Science",
  //   "description": "Doctoral research focusing on valorization of industrial waste for sustainable polymer composites.",
  //   "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
  //   "video": "",
  //   "videoEmbed": "",
  //   "type": "research",
  //   "page": "/research/phd"
  // },

  // {
  //   "id": "about",
  //   "name": "About Me",
  //   "title": "Hasan Ahmed",
  //   "description": "Environmental researcher and technical expert passionate about sustainability, waste management, and mentoring young scientists.",
  //   "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
  //   "video": "",
  //   "videoEmbed": "",
  //   "type": "about",
  //   "page": "/about"
  // },
  // {
  //   "id": "about",
  //   "name": "About Me",
  //   "title": "Hasan Ahmed",
  //   "description": "Environmental researcher and technical expert passionate about sustainability, waste management, and mentoring young scientists.",
  //   "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
  //   "video": "",
  //   "videoEmbed": "",
  //   "type": "about",
  //   "page": "/about"
  // },
{
  "id": "achievement-extracurricular-certificates",
  "name": "Extra-Curricular Activities",
  "title": "All Extra-Curricular Activities Certificates",
  "description": "A comprehensive collection of certificates recognizing participation and leadership in various extra-curricular initiatives.",
  "image": "https://drive.google.com/file/d/1_ExyHY0KMD3_ecXVTOTCo0zhuLlp6ri8/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "achievements",
  "page": "/achievements"
},
{
  "id": "achievement-scopus-conference-1",
  "name": "Conference Recognition",
  "title": "International Scopus Indexed Conference Certificates 2022-2025",
  "description": "Recognition of research contributions and presentations at various international Scopus-indexed conferences.",
  "image": "https://drive.google.com/file/d/1Ysotb5OcjCGccb1LdsG3U79QNkDbN_K3/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "achievements",
  "page": "/achievements"
},
{
  "id": "achievement-scopus-conference-2",
  "name": "Conference Recognition",
  "title": "International Scopus Indexed Conference Certificates 2022-2025",
  "description": "Certificates representing academic excellence and research dissemination in global scientific forums.",
  "image": "https://drive.google.com/file/d/17T-UOn5Fcm_6PNriHfGxW2fA6YlLEstU/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "achievements",
  "page": "/achievements"
},
{
  "id": "achievement-scopus-conference-3",
  "name": "Conference Recognition",
  "title": "International Scopus Indexed Conference Certificates 2022-2025",
  "description": "Validation of technical research and scholarly impact through indexed conference participations.",
  "image": "https://drive.google.com/file/d/1Pu1mkmkMXbvFW8ORMXqLhlOSc9GLQoSz/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "achievements",
  "page": "/achievements"
},
{
  "id": "achievement-scopus-conference-4",
  "name": "Conference Recognition",
  "title": "International Scopus Indexed Conference Certificates 2022-2025",
  "description": "Documentation of milestones achieved in international research collaboration and academic conferences.",
  "image": "https://drive.google.com/file/d/1-f0xC22OYZ3CnW52xj5XaKgeIUfRaDfD/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "achievements",
  "page": "/achievements"
},
{
  "id": "achievement-scopus-conference-5",
  "name": "Conference Recognition",
  "title": "International Scopus Indexed Conference Certificates 2022-2025",
  "description": "Formal certificates acknowledging scholarly contributions to the global research community from 2022 to 2025.",
  "image": "https://drive.google.com/file/d/1fav76ofVklg4IhpeXb2vTD5Um_qWGqYq/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "achievements",
  "page": "/achievements"
},

// achievements end


{
  "id": "edu-professional-masters-du-2025-1",
  "name": "Professional Master’s in Soil Water and Environment",
  "title": "Professional Master’s in Soil water and Environment from Dhaka University at 2025",
  "description": "Pursuing advanced studies in Soil, Water, and Environment at the University of Dhaka, focusing on environmental sustainability and resource management.",
  "image": "https://drive.google.com/file/d/10rEnNX5whLZsySPSLBrjM401cFOZJWUx/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "education",
  "page": "/education"
},
{
  "id": "edu-professional-masters-du-2025-2",
  "name": "Professional Master’s in Soil Water and Environment",
  "title": "Professional Master’s in Soil water and Environment from Dhaka University at 2025",
  "description": "Academic engagement and research development during the Professional Master's program at the University of Dhaka.",
  "image": "https://drive.google.com/file/d/1NshrRO2k2PM7b0dbQ7dyn-XNfYKJk6nk/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "education",
  "page": "/education"
},
{
  "id": "edu-bsc-leather-kuet-2022-1",
  "name": "B.Sc. in Leather Engineering",
  "title": "Bachelor of Science in Leather Engineering from Khulna University of Engineering and Technology at 2022",
  "description": "Completed undergraduate degree in Leather Engineering from KUET, gaining expertise in material science and industrial processes.",
  "image": "https://drive.google.com/file/d/1LFeWjUZG2QbGWRlT6bJHzOhwN_UM1kM2/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "education",
  "page": "/education"
},
{
  "id": "edu-bsc-leather-kuet-2022-2",
  "name": "B.Sc. in Leather Engineering",
  "title": "Bachelor of Science in Leather Engineering from Khulna University of Engineering and Technology at 2022",
  "description": "Showcasing academic milestones and technical training during the Bachelor of Science program at KUET.",
  "image": "https://drive.google.com/file/d/1JrlJbsEBluN4Gle3EEghjqBoKedhZ56L/view?usp=drive_link",
  "video": "",
  "videoEmbed": "",
  "type": "education",
  "page": "/education"
},
{
  "id": "edu-graduation-celebration-video",
  "name": "Graduation Celebration",
  "title": "Graduation Day Celebration",
  "description": "A celebratory look at the graduation milestones and academic journey highlights.",
  "image": "",
  "video": "https://youtube.com/shorts/P2VoCMz6H7k?feature=share",
  "videoEmbed": "https://www.youtube.com/embed/P2VoCMz6H7k",
  "type": "education",
  "page": "/education"
},

{
    "id": "training-waste-valorization-1",
    "name": "Waste Valorization Training",
    "title": "Training and Lecture on Waste Valorization for Biomedical Application 2024",
    "description": "Conducting specialized training for university students on transforming waste into valuable resources for biomedical applications.",
    "image": "https://drive.google.com/file/d/1NWUotkM2RViv0xK_CrTmpTKoiTyp6nOU/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "training-waste-valorization-2",
    "name": "Waste Valorization Training",
    "title": "Training and Lecture on Waste Valorization for Biomedical Application 2024",
    "description": "Academic lecture series focusing on the intersection of environmental sustainability and biomedical innovation.",
    "image": "https://drive.google.com/file/d/1QcMvjHVLw3yox0LuX1YTEWNHsUAD2whY/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "training-waste-valorization-3",
    "name": "Waste Valorization Training",
    "title": "Training and Lecture on Waste Valorization for Biomedical Application 2024",
    "description": "Engaging students in technical sessions regarding waste-to-wealth processes for the healthcare sector.",
    "image": "https://drive.google.com/file/d/1Qykcu3w-leZLYy4amBq3fzNeXBxsvJ6Q/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "training-waste-valorization-4",
    "name": "Waste Valorization Training",
    "title": "Training and Lecture on Waste Valorization for Biomedical Application 2024",
    "description": "A comprehensive lecture on the practical applications of waste valorization in modern biomedical research.",
    "image": "https://drive.google.com/file/d/1O95GcIaFrTGFkr_d5G123CtuP1esVnN5/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "training-project-management-1",
    "name": "Project Management Training",
    "title": "Training and Lecture on Project Management 2024 to 2025",
    "description": "Equipping university students with essential project management methodologies and professional leadership skills.",
    "image": "https://drive.google.com/file/d/11y4jrgdCmbY66c7pZfJJr8pZdszUeReT/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "training-project-management-2",
    "name": "Project Management Training",
    "title": "Training and Lecture on Project Management 2024 to 2025",
    "description": "Strategic sessions on project lifecycle, resource allocation, and management for future professionals.",
    "image": "https://drive.google.com/file/d/1_MjT_qiqb6o0dtdZiTK_jxYIRNDeRU-_/view?usp=drive_link",
    "video": "",
    "videoEmbed": "",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "lecture-sustainable-waste-unysab",
    "name": "Sustainable Waste Management Lecture",
    "title": "Lecture on Sustainable Waste Management at UNYSAB 2025",
    "description": "A deep dive into sustainable practices and waste management strategies delivered at the UNYSAB conference.",
    "image": "",
    "video": "https://youtu.be/_dRejSoWtpg",
    "videoEmbed": "https://www.youtube.com/embed/_dRejSoWtpg",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "lecture-youth-capacity-unysab-1",
    "name": "Youth Capacity Building",
    "title": "Lecture on Youth Capacity Building at UNYSAB",
    "description": "Inspirational and practical guidance for youth empowerment and professional development through UNYSAB.",
    "image": "",
    "video": "https://youtu.be/2plZ4Fe2sdg",
    "videoEmbed": "https://www.youtube.com/embed/2plZ4Fe2sdg",
    "type": "training",
    "page": "/achievements/training"
  },
  {
    "id": "lecture-youth-capacity-unysab-2",
    "name": "Youth Capacity Building",
    "title": "Lecture on Youth Capacity Building at UNYSAB",
    "description": "Fostering leadership and skill development among young researchers and change-makers.",
    "image": "",
    "video": "https://youtu.be/FqRYYJ9JozQ",
    "videoEmbed": "https://www.youtube.com/embed/FqRYYJ9JozQ",
    "type": "training",
    "page": "/achievements/training"
  },
// Media & Blog Pages
{
    "id": "media-keynote-just-2024",
    "name": "Research Seminar Keynote",
    "title": "Keynote Speaker: Converting Plastic Waste into Health-Enhancing Materials",
    "description": "Delivered a keynote lecture at the Central Gallery of JUST on November 16, focusing on sustainable waste management, circular economy solutions, and innovative environmental practices.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.facebook.com/story.php?story_fbid=122214043766032492&id=61550974770827",
    "videoEmbed": "",
    "type": "media",
    "page": "/media"
  },
  {
    "id": "media-tbs-national-engagement",
    "name": "National Stakeholder Engagement",
    "title": "TBS Meeting: National Plastic Policy Live Telecast",
    "description": "Participated in a live expert panel focusing on plastic policy for government stakeholders, contributing insights on pollution mitigation and circular economy approaches.",
    "image": "",
    "video": "https://www.youtube.com/live/F1tjBLBm994?feature=shared",
    "videoEmbed": "https://www.youtube.com/embed/F1tjBLBm994",
    "type": "media",
    "page": "/media"
  },
  {
    "id": "media-cattle-edible-bioplastic",
    "name": "Research Innovation Feature",
    "title": "Cattle-Edible Bioplastic from Shrimp Shells",
    "description": "Featured research innovation on sustainable, alternative bioplastics made from shrimp shells, providing a solution for plastic reduction and environmental sustainability.",
    "image": "",
    "video": "https://www.facebook.com/choltigolpo/videos/159112743805634/",
    "videoEmbed": "",
    "type": "media",
    "page": "/media"
  },
  {
    "id": "media-transitional-research-trainer",
    "name": "Research Workshop Trainer",
    "title": "Transitional Research Workshop: Applied Methods & Sustainability",
    "description": "Conducted training sessions for researchers focusing on applied research methodologies, innovation strategies, and sustainability solutions.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.facebook.com/unysab/posts/pfbid02YUQsSp8N5YnUL2HGbC12DnasxPMmQjYArpMvvi3tZhATgBL3VPqZpWeb5sReF6wjl",
    "videoEmbed": "",
    "type": "media",
    "page": "/media"
  },
  {
    "id": "media-unysab-workshop-trainer",
    "name": "Environmental Innovation Trainer",
    "title": "UNYSAB Workshop: Environmental Innovation & Circular Economy",
    "description": "Guided youth participants on circular economy practices and environmental innovation to promote active engagement in sustainability.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://www.facebook.com/unysab/posts/pfbid02DFbXDDS57y4CNpmWQSTVtoAB1yKy8PfsrUxzDNijf43zffp9qbTgrE4MjtMKVTicl",
    "videoEmbed": "",
    "type": "media",
    "page": "/media"
  },
  {
    "id": "media-international-collaboration-japan",
    "name": "International Knowledge Exchange",
    "title": "Explore Dhaka City: Collaboration with Imajo Kazuhisa, Japan",
    "description": "Participated in an international knowledge exchange program focusing on urban sustainability and innovative environmental approaches in collaboration with Japanese experts.",
    "image": "https://researcher-portfolio-nu.vercel.app/_next/image?url=%2Fimages%2Fachievement-1.jpg&w=1920&q=75",
    "video": "https://4travel.jp/travelogue/11863553",
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