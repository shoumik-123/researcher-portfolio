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
  pages 
} from '@/lib/data';

// Get experience page data from pages array
const experiencePage = pages.find(page => page.id === 'experience');
const unopsPage = pages.find(page => page.id === 'experience-unops');
const bpclPage = pages.find(page => page.id === 'experience-bpcl');
const maskeetersPage = pages.find(page => page.id === 'experience-maskeeters');

// Experience data based on your content
const experiences = [
  {
    id: 'unops',
    title: "Technical Expert - Environment",
    organization: "UNOPS South Asia Multi-country Office (SAMCO)",
    project: "Support to the SACEP PLEASE Project",
    timeline: "1st April 2024 - 30th June 2025 · 1 yr 3 mos",
    location: "Dhaka, Bangladesh",
    description: "As Technical Expert – Environment for the $3.18M PLEASE Project (Plastic-free Rivers and Seas for South Asia) at UNOPS Bangladesh, I serve as the environmental technical lead for national implementation. I spearhead efforts to reduce plastic pollution in transboundary river and marine ecosystems through strategies that promote environmental sustainability and circular economy practices. In close coordination with the UNOPS South Asia Multi-Country Office and under regional guidance, my role includes promoting innovation, building institutional and community capacity, supporting policy advocacy, ensuring compliance with World Bank and SACEP Environmental and Social Standards (ESS), and fostering effective regional collaboration.",
    achievements: [
      "Guided national technical implementation of a $3.18M regional plastic waste initiative, contributing to coordinated efforts across South Asia.",
      "Supported a 20% reduction in plastic leakage into rivers and seas by promoting community-led, data-driven interventions.",
      "Strengthened capacity of community-based and women-led enterprises to integrate circular economy practices into their operations.",
      "Led technical development and contextualization of innovative solutions for plastic pollution mitigation in Bangladesh.",
      "Facilitated the environmental compliance and technical review of large-scale recycling infrastructure, ensuring alignment with sustainability and safeguard standards."
    ],
    image: unopsPage?.image,
    video: unopsPage?.video,
    videoEmbed: unopsPage?.videoEmbed,
    type: "unops",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 'bpcl',
    title: "Manager – Environment, Sustainability & MEAL",
    organization: "Bangladesh Petrochemical Company Limited (BPCL)",
    timeline: "October 2025 – January 2026",
    location: "Bangladesh",
    description: "BPCL is a leading petrochemical company in Bangladesh, advancing sustainable industrial development and promoting circular economy solutions in plastics recycling. Provide strategic leadership and managerial oversight for the $1.3M Plastic-free Rivers and Seas for South Asia (PLEASE) Project, implemented in partnership with UNOPS and SACEP.",
    achievements: [
      "Provide strategic leadership and managerial oversight for the $1.3M PLEASE Project, ensuring alignment with UNOPS operational guidelines and World Bank Environmental and Social Standards (ESS).",
      "Oversee environmental, social, and sustainability management, integrating risk mitigation, compliance monitoring, and stakeholder engagement.",
      "Lead a multidisciplinary team, applying Results-Based Management (RBM), Key Performance Indicators (KPIs), and performance measurement tools.",
      "Ensure donor compliance by managing project budgeting, financial reporting, and procurement processes according to SACEP/UNOPS rules.",
      "Develop and implement circular economy strategies and low-carbon solutions within BPCL operations, promoting SDG-aligned sustainable development outcomes.",
      "Coordinate and liaise with government authorities, private sector partners, UN agencies, and local communities.",
      "Facilitate capacity-building, learning, and knowledge-sharing initiatives to strengthen institutional sustainability.",
      "Apply UNOPS/World Bank managerial standards, including adaptive project management, risk assessment, stakeholder engagement, and periodic project audits."
    ],
    image: bpclPage?.image ,
    video: bpclPage?.video,
    videoEmbed: bpclPage?.videoEmbed,
    type: "bpcl",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 'cars1',
    title: "Research Associate",
    organization: "Centre for Advanced Research in Sciences (CARS), University of Dhaka",
    supervisor: "Dr. Latiful Bari",
    timeline: "Jan 2023 - Apr 2024 · 1 yr 4 mos",
    location: "Dhaka, Bangladesh",
    description: "As a Research Associate under the direct supervision of Dr. Latiful Bari, I developed a strong foundation in applied microbiological research and scientific innovation. This role strengthened my ability to identify critical research gaps, design problem-oriented studies, and translate laboratory findings into real-world applications.",
    achievements: [
      "Conducted microbial identification, culture, and analysis to support food safety and environmental microbiology studies.",
      "Applied innovative research methodologies to address gaps in existing literature and experimental designs.",
      "Developed skills in laboratory safety, sterile techniques, and microbial risk assessment.",
      "Contributed to research publications focused on sustainable materials and health-related microbial studies.",
      "Promoted interdisciplinary thinking by linking microbiological data to broader environmental and biomedical outcomes."
    ],
    image: bpclPage?.image ,
    type: "research",
    icon: <FiBook className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 'cars2',
    title: "Research Associate",
    organization: "Center for Advanced Research in Sciences (CARS), University of Dhaka",
    supervisor: "Dr. Asma Rahman",
    timeline: "Jun 2022 - Dec 2022 · 7 mos",
    location: "Dhaka, Bangladesh",
    description: "As a Research Associate under the direct supervision of Dr. Asma Rahman, I engaged in laboratory-based research at the intersection of food safety and environmental health. My work emphasized analytical detection of contaminants and contributed to advancing knowledge in the fields of environmental microbiology and sustainable food systems.",
    achievements: [
      "Conducted laboratory-based research focusing on food safety and environmental contaminants.",
      "Utilized High-Performance Liquid Chromatography (HPLC) for the identification and quantification of antibiotics in food items.",
      "Applied Atomic Absorption Spectrophotometry (AAS) to detect the presence of heavy metals in food matrices.",
      "Contributed to investigations on the occurrence of microplastics and antibiotic residues in various food products.",
      "Performed microbial identification and culture for foodborne pathogen surveillance.",
      "Addressed research gaps by applying innovative and interdisciplinary approaches to experimental design and data interpretation."
    ],
    image: bpclPage?.image ,
    type: "research",
    icon: <FiFileText className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-600"
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
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
              {/* Timeline connector (except last) */}
              {/* {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              )} */}
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left Column - Image & Meta */}
                <div className="md:w-1/3">
                  <div className="sticky top-24 space-y-4">
                    {/* Image */}
                    {exp.image && exp.image.trim() !== '' && (
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={exp.image}
                          alt={exp.organization}
                          fill
                          className="object-cover"
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
                      {exp.supervisor && (
                        <div className="flex items-center gap-2">
                          <FiUsers className="w-4 h-4" />
                          <span>Supervisor: {exp.supervisor}</span>
                        </div>
                      )}
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
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {exp.description}
                    </p>
                    
                    {/* Key Contributions/Achievements */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <FiAward className="text-primary" />
                        Key Contributions
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

        {/* TRAINING & WORKSHOPS SECTION */}
        <section className="mt-24 space-y-12">
          <h2 className="text-4xl font-bold uppercase tracking-wide text-center">
            Lectures, Training & Workshops
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Professional development activities during UNOPS tenure and beyond
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {training.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {training.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">
                    {training.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      
      </div>
    </div>
  );
}