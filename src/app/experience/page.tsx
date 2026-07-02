"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiAward, 
  FiUsers,
  FiBook,
  FiFileText,
  FiStar,
  FiTrendingUp
} from 'react-icons/fi';

import { 
  researcherInfo,
  images 
} from '@/lib/data';

// Helper function to get Google Drive direct image URL
const getDriveImageUrl = (driveUrl: string) => {
  const fileIdMatch = driveUrl.match(/\/d\/(.+?)\//);
  if (fileIdMatch) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return driveUrl;
};

// Get experience page data from images array
const experienceMediaItems = images.filter(page => page.id === 'experience');
const experiencePage = experienceMediaItems[0];

const unopsMediaItems = images.filter(page => page.id === 'experience-unops');
const unopsPage = unopsMediaItems[0];

const bpclMediaItems = images.filter(page => page.id === 'experience-bpcl');
const bpclPage = bpclMediaItems[0];

const maskeetersMediaItems = images.filter(page => page.id === 'experience-maskeeters');
const maskeetersPage = maskeetersMediaItems[0];

const researchLabMediaItems = images.filter(page => page.id === 'research-lab');
const researchLabPage = researchLabMediaItems[0];

const researchYouthMediaItems = images.filter(page => page.id === 'research-youth');
const researchYouthPage = researchYouthMediaItems[0];

const researchPhdMediaItems = images.filter(page => page.id === 'research-phd');
const researchPhdPage = researchPhdMediaItems[0];

const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/achievement-1.jpg';

  try {
    const url = new URL(image);
    if (url.pathname === '/_next/image' && url.searchParams.has('url')) {
      const inner = url.searchParams.get('url');
      if (inner) return decodeURIComponent(inner);
    }
  } catch {
    // not a valid URL; return as-is
  }

  return image;
};

// Video URL resolver - converts YouTube watch/youtu.be URLs to embed format
const resolveVideoEmbed = (videoUrl?: string): string => {
  if (!videoUrl) return '';
  
  try {
    // Handle youtu.be short URLs
    if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle standard youtube.com URLs
    if (videoUrl.includes('youtube.com')) {
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
      const videoId = urlParams.get('v');
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Already an embed URL
    if (videoUrl.includes('youtube.com/embed/')) {
      return videoUrl;
    }
  } catch {
    // return original if parsing fails
  }
  
  return videoUrl;
};

const experiences = [
  {
    id: 'unops',
    title: "United Nations Office for Project Services (UNOPS)",
    organization: "UNOPS",
    project: "",
    timeline: "April 2024 – June 2025 & May 2026 – Present",
    location: "Dhaka, Bangladesh",
    description: "Served as national environmental technical lead for the $3.18M PLEASE Project (Plastic-free Rivers and Seas for South Asia). Designed, implemented, and monitored environmental and social safeguards (ESS, ESMPs, EIA) in alignment with World Bank and SACEP standards. Guided national partners and grantees on environmental compliance, risk screening, and sustainability integration. Supported innovation, prototyping, and validation of circular plastic solutions through community and private-sector engagement. Coordinated with regional UNOPS offices to align national implementation with South Asia–wide objectives. Conducted site assessments and environmental audits across 25+ project locations. Delivered training on source segregation, waste handling, and leakage prevention to local governments and enterprises. Developed SOPs for Material Recovery Facilities (MRFs) and advised on environmentally appropriate machinery specifications.\n\nCurrently serving as Business Development Associate, supporting strategic partnerships, proposal development, and stakeholder engagement initiatives to strengthen sustainable development programming in Bangladesh. Working closely with the Partnerships Advisor to identify funding opportunities, develop high-quality concept notes and business proposals, and coordinate high-level donor and corporate engagement events.",
    achievements: [
      "Directed implementation leading to 20% reduction in plastic leakage into riverine and marine ecosystems.",
      "Developed 11 ESMPs, 4 ESS reports, and 1 EIA, ensuring full donor compliance.",
      "Supported establishment of 8 plastic recycling business units, embedding circular economy principles.",
      "Strengthened environmental capacity of community and women-led enterprises through structured training and mentoring.",
      "Represented Bangladesh in regional dialogues with World Bank, SACEP, and UNOPS on sustainable waste management strategies.",
      "Developing concept notes, grant applications, EOIs, and partnership proposals",
      "Conducting donor mapping, market research, and opportunity analysis",
      "Coordinating networking events, workshops, webinars, and partnership ceremonies",
      "Preparing briefing notes, presentation decks, and post-event reports",
      "Collaborating with technical teams to synthesize project data and impact stories",
      "Monitoring proposal deadlines and ensuring compliance with donor requirements",
      "Supporting partnership development aligned with SDGs and resilient development priorities"
    ],
    type: "UNOPS",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600",
    image: resolveImageUrl(experienceMediaItems.find(item => item.type === 'UNOPS')?.image),
    video: "",
    videoEmbed: ""
  },
  {
    id: 'bpcl',
    title: "Manager – Environment, Sustainability & MEAL",
    organization: "Bangladesh Petrochemical Company Limited (BPCL)",
    project: "PLEASE Project (Plastic-free Rivers and Seas for South Asia)",
    timeline: "July 2025 – January 2026",
    location: "Bangladesh",
    description: "Provide strategic leadership and managerial oversight for the $1.3M Plastic-free Rivers and Seas for South Asia (PLEASE) Project, implemented in partnership with UNOPS and SACEP, ensuring alignment with UNOPS operational guidelines and World Bank Environmental and Social Standards (ESS). Oversee environmental, social, and sustainability management, integrating risk mitigation, compliance monitoring, and stakeholder engagement in line with UN and World Bank project management frameworks. Lead a multidisciplinary team, applying Results-Based Management (RBM), Key Performance Indicators (KPIs), and performance measurement tools to ensure effective project implementation and accountability. Ensure donor compliance by managing project budgeting, financial reporting, and procurement processes according to UNOPS rules and international best practices. Develop and implement circular economy strategies and low-carbon solutions within BPCL operations, promoting SDG-aligned sustainable development outcomes. Coordinate and liaise with government authorities, private sector partners, UN agencies, and local communities to harmonize project execution with national sustainability policies and international standards. Facilitate capacity-building, learning, and knowledge-sharing initiatives to strengthen institutional sustainability, data-driven decision-making, and organizational resilience. Apply UNOPS/World Bank managerial standards, including adaptive project management, risk assessment, stakeholder engagement, and periodic project audits for transparency and impact.",
    achievements: [
      "Designed and operationalized a comprehensive MEAL system aligned with UNOPS accountability and World Bank ESS, enhancing learning, transparency, and impact measurement.",
      "Positioned BPCL as a national leader in sustainable plastic recycling and circular economy practices, supporting SDG 12 (Responsible Consumption and Production) and SDG 13 (Climate Action).",
      "Strengthened multi-stakeholder collaboration among government, private sector, and development partners, improving sustainable waste management and policy coherence.",
      "Successfully integrated international compliance standards, managerial oversight, and data analytics, increasing project efficiency, transparency, and donor confidence.",
      "Implemented risk mitigation and adaptive management approaches consistent with UNOPS operational guidance, improving responsiveness to environmental and social challenges."
    ],
    type: "BPCL",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "bg-green-100 text-green-600",
    image: resolveImageUrl(experienceMediaItems.find(item => item.type === 'BPCL')?.image),
    video: experienceMediaItems.find(item => item.type === 'BPCL')?.video,
    videoEmbed: experienceMediaItems.find(item => item.type === 'BPCL')?.videoEmbed
  },
  {
    id: 'maskeeters',
    title: "Technical Head – Environment, Sustainability & MEAL",
    organization: "Maskeeters Idea Limited",
    timeline: "Current",
    location: "Bangladesh",
    description: "Lead grant proposal development and provide advisory support for innovation-driven applications. Conduct project evaluations ensuring technical soundness, contextual relevance, and alignment with best practices. Serve as team lead for training sessions, workshops, and field studies. Develop business models and field implementation guidelines. Oversee research and development on environmental and social aspects. Integrate circular economy approaches, climate resilience, and ESG considerations into projects.",
    achievements: [
      "Lead grant proposal development for more than 10 projects for NGOs, INGOs, and CSOs.",
      "Provide environmental consultancy for policy development and new sustainability initiatives.",
      "Conduct project evaluations ensuring technical soundness and contextual relevance.",
      "Develop business models and field implementation guidelines for sustainable projects.",
      "Integrate circular economy approaches, climate resilience, and ESG considerations into project frameworks."
    ],
    type: "Maskeeters",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-teal-100 text-teal-600",
    image: resolveImageUrl(experienceMediaItems.find(item => item.type === 'Maskeeters')?.image),
    video: experienceMediaItems.find(item => item.type === 'Maskeeters')?.video,
    videoEmbed: experienceMediaItems.find(item => item.type === 'Maskeeters')?.videoEmbed
  },
  {
    id: 'cars',
    title: "Research Assistant",
    organization: "Center for Advanced Research in Sciences (CARS), University of Dhaka",
    timeline: "Jun 2022 – April 2024",
    location: "Dhaka, Bangladesh",
    description: "Conducted laboratory research on biodegradable polymers, bioplastics, and advanced composite materials from tannery waste and natural polymers. Performed FTIR, XRD, SEM, PCR, AAS, and HPLC analyses for chemical and environmental characterization. Supported projects on antibacterial biomaterials and heavy metal remediation using bio-based adsorbents. Assisted in technical documentation, literature reviews, and preparation of research manuscripts for publication. Coordinated laboratory operations ensuring safety, accuracy, and reproducibility of results.",
    achievements: [
      "Co-authored 8+ peer-reviewed scientific papers in international journals (e.g., Cleaner Chemical Engineering, Polymer Composites).",
      "Contributed to development of biodegradable chitosan-based materials and tannery waste-derived composites for pollution mitigation.",
      "Presented findings in academic seminars and mentored undergraduate students on research methods.",
      "Strengthened interdisciplinary collaboration between environmental engineering and materials science research groups."
    ],
    type: "CARS",
    icon: <FiBook className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600",
    image: resolveImageUrl(experienceMediaItems.find(item => item.type === 'CARS')?.image),
    video: experienceMediaItems.find(item => item.type === 'CARS')?.video,
    videoEmbed: experienceMediaItems.find(item => item.type === 'CARS')?.videoEmbed
  }
];

// Training & Workshops data
const trainings = [
  {
    title: "Hands-on Training: Innovation preparation approaches for advancing the circular economy",
    type: "Training",
    icon: <FiStar className="w-5 h-5" />
  },
  {
    title: "Workshop: Manuscript preparation and data validation techniques",
    type: "Workshop",
    icon: <FiFileText className="w-5 h-5" />
  },
  {
    title: "Training Session: Pros and cons of World Bank–approved Environmental and Social Standards (ESS) and ESS formulation process",
    type: "Training",
    icon: <FiBook className="w-5 h-5" />
  },
  {
    title: "Field Monitoring: ESS implementation and monitoring at project locations",
    type: "Field Work",
    icon: <FiMapPin className="w-5 h-5" />
  },
  {
    title: "Guided Practice: Drafting and preparing World Bank–compliant Environmental and Social Management Plans (ESMPs)",
    type: "Practice",
    icon: <FiFileText className="w-5 h-5" />
  },
  {
    title: "Risk Assessment: Project-specific risk identification and management strategies",
    type: "Assessment",
    icon: <FiAward className="w-5 h-5" />
  },
  {
    title: "Industry Site Visit: Initial project site verification and on-site risk identification",
    type: "Site Visit",
    icon: <FiMapPin className="w-5 h-5" />
  },
  {
    title: "ESMP Oversight: Field monitoring for effective ESMP implementation",
    type: "Monitoring",
    icon: <FiTrendingUp className="w-5 h-5" />
  },
  {
    title: "Stakeholder Engagement: Participation in regular meetings with the Ministry of Environment and the Department of Environment (DoE) representatives",
    type: "Engagement",
    icon: <FiUsers className="w-5 h-5" />
  },
  {
    title: "Compliance Monitoring: Routine inspection of factory operations, material flow, Effluent Treatment Plants (ETPs), Social Grievance Redress Mechanisms (GRM), Labor Management Plans (LMP), and gender-awareness programs",
    type: "Monitoring",
    icon: <FiAward className="w-5 h-5" />
  },
  {
    title: "Technical Review: Evaluation of ETABS models, architectural and structural drawings, BOQs, and verification of legal documentation required for industrial setup within the national regulatory framework",
    type: "Review",
    icon: <FiFileText className="w-5 h-5" />
  }
];

export default function ExperiencePage() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-28 pb-16 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            key={key}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {"Professional Experience".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {experiencePage?.description || "Overview of my professional experience across international organizations, research institutions, and corporate sectors."}
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* EXPERIENCE TIMELINE */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left Column - Image & Meta */}
                <div className="md:w-1/3">
                  <div className="sticky top-24 space-y-4">
                    {/* Image */}
                    {exp.image && exp.image.trim() !== '' && (
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={resolveImageUrl(exp.image)}
                          alt={exp.organization}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        {exp.videoEmbed && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <a 
                              href={exp.video} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              Watch Video
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Icon & Type */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.organization}</h3>
                        {exp.project && (
                          <p className="text-sm text-gray-500">{exp.project}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Timeline & Location */}
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Description & Achievements */}
                <div className="md:w-2/3">
                  <div className="space-y-6">
                    {/* Title */}
                    <h2 className="text-3xl font-light text-gray-900">
                      {exp.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                      {exp.description}
                    </p>
                    
                    {/* Key Contributions/Achievements */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <FiAward className="text-primary" />
                        Key Achievements & Responsibilities
                      </h3>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="flex gap-3 text-gray-700"
                          >
                            <span className="text-primary font-bold">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider between experiences */}
              {index < experiences.length - 1 && (
                <hr className="border-gray-200 my-12" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}