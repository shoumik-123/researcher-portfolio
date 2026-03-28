/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiCalendar, 
  FiMapPin, 
  FiBook,
  FiStar,
  FiCheckCircle,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiAward,
  FiBriefcase,
  FiGlobe,
  FiZap,
  FiUsers,
  FiFileText,
  FiExternalLink,
  FiMic,
  FiTrendingUp,
  FiHeart,
  FiTool,
  FiUserCheck,
  FiClipboard,
  FiCompass
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Training page data from images array
const trainingMediaItems = images.filter(page => page.id === 'training');
const trainingPage = trainingMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/training/default.jpg';
  return image;
};

// Video URL resolver
const resolveVideoEmbed = (videoUrl?: string): string => {
  if (!videoUrl) return '';
  
  try {
    if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (videoUrl.includes('youtube.com')) {
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
      const videoId = urlParams.get('v');
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (videoUrl.includes('youtube.com/embed/')) {
      return videoUrl;
    }
  } catch {
    // return original if parsing fails
  }
  
  return videoUrl;
};

// Gallery Images from images array
const galleryImages = trainingMediaItems.map((item) => ({ 
  id: item.id || `training-${Math.random()}`,
  title: item.title || item.name || 'Training & Capacity Building',
  description: item.description || 'Training gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Topics Covered
const topicsCovered = [
  "Sustainable Waste Management Approaches",
  "Circular Economy & Innovation Implementation",
  "Environmental & Social Management Plans (ESMP)",
  "Risk Assessment and Compliance Monitoring",
  "Research Skills, Career Growth, and SDG Integration",
  "Project Management & Effective Communication Strategies"
];

// Training Categories
const trainingCategories = [
  {
    title: "Capacity Building & Workshops",
    description: "Delivered hands-on training on circular economy practices, innovation preparation, and sustainability strategies. Conducted workshops on ESMP formulation, World Bank Environmental and Social Standards (ESS), and data validation. Mentored students, researchers, and project teams on SDG implementation, interdisciplinary research, and career development in environmental sciences.",
    icon: <FiUsers className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Field-Based Training & Technical Guidance",
    description: "Led project site visits, including RBU setup, waste hotspot mapping, and ETP inspections. Provided technical guidance on risk assessment, stakeholder engagement, and compliance monitoring. Supervised environmental, social, and safety standards implementation for industrial and community projects.",
    icon: <FiMapPin className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Stakeholder Engagement & Policy Support",
    description: "Participated in high-level discussions with government officials, UN agencies, and SACEP, promoting sustainable waste management and plastic pollution mitigation. Facilitated knowledge sharing, technical briefings, and capacity building for women-led enterprises and community organizations.",
    icon: <FiGlobe className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Applied Research & Innovation Guidance",
    description: "Supported the development of innovation-driven solutions and research manuscripts aligned with sustainability and circular economy principles. Guided teams in data-driven decision-making, environmental compliance, and project monitoring.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-600"
  }
];

// Professional Experience for Training Delivery
const professionalExperience = [
  {
    organization: "Maskeeters Idea Limited",
    role: "Technical Lead—Environment Sustainability & MEAL",
    contributions: [
      "Lead grant proposal development and provide advisory support for innovation-driven applications.",
      "Conduct project evaluations ensuring technical soundness, contextual relevance, and alignment with best practices.",
      "Serve as team lead for training sessions, workshops, and field studies.",
      "Develop business models and field implementation guidelines.",
      "Oversee research and development on environmental and social aspects.",
      "Integrate circular economy approaches, climate resilience, and ESG considerations into projects."
    ],
    icon: <FiBriefcase className="w-5 h-5" />
  },
  {
    organization: "Bangladesh Petrochemical Company Limited (BPCL)",
    role: "Manager – Environment, Sustainability & MEAL",
    period: "July 2025 – January 2026",
    contributions: [
      "Provide strategic leadership and managerial oversight for the $1.3M PLEASE Project",
      "Oversee environmental, social, and sustainability management",
      "Lead a multidisciplinary team applying Results-Based Management (RBM) and KPIs",
      "Ensure donor compliance and manage project budgeting",
      "Develop and implement circular economy strategies",
      "Coordinate with government authorities, UN agencies, and local communities",
      "Facilitate capacity-building and knowledge-sharing initiatives"
    ],
    achievements: [
      "Designed and operationalized a comprehensive MEAL system",
      "Positioned BPCL as a national leader in sustainable plastic recycling",
      "Strengthened multi-stakeholder collaboration",
      "Integrated international compliance standards and data analytics",
      "Implemented risk mitigation and adaptive management approaches"
    ],
    icon: <FiTrendingUp className="w-5 h-5" />
  },
  {
    organization: "United Nations Office for Project Services (UNOPS)",
    role: "Technical Expert (Environment)",
    period: "April 2024 – June 2025",
    contributions: [
      "Served as national environmental technical lead for the $3.18M PLEASE Project",
      "Designed and monitored environmental and social safeguards (ESS, ESMPs, EIA)",
      "Guided national partners on environmental compliance and sustainability integration",
      "Supported innovation, prototyping, and validation of circular plastic solutions",
      "Conducted site assessments across 25+ project locations",
      "Delivered training on source segregation, waste handling, and leakage prevention",
      "Developed SOPs for Material Recovery Facilities (MRFs)"
    ],
    achievements: [
      "20% reduction in plastic leakage into riverine and marine ecosystems",
      "Developed 11 ESMPs, 4 ESS reports, and 1 EIA",
      "Supported establishment of 8 plastic recycling business units",
      "Strengthened environmental capacity of community and women-led enterprises"
    ],
    icon: <FiGlobe className="w-5 h-5" />
  },
  {
    organization: "Center for Advanced Research in Sciences (CARS), University of Dhaka",
    role: "Research Assistant",
    period: "Jun 2022 – April 2024",
    contributions: [
      "Conducted laboratory research on biodegradable polymers and bioplastics",
      "Performed FTIR, XRD, SEM, PCR, AAS, and HPLC analyses",
      "Supported projects on antibacterial biomaterials and heavy metal remediation",
      "Assisted in technical documentation and research manuscript preparation",
      "Coordinated laboratory operations ensuring safety and accuracy"
    ],
    achievements: [
      "Co-authored 8+ peer-reviewed scientific papers in international journals",
      "Contributed to development of biodegradable chitosan-based materials",
      "Presented findings in academic seminars and mentored undergraduate students",
      "Strengthened interdisciplinary collaboration between environmental engineering and materials science"
    ],
    icon: <FiBook className="w-5 h-5" />
  }
];

export default function TrainingPage() {
  const [key, setKey] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1
            key={key}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase mb-6 text-center leading-tight"
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
            {"Training & Capacity Building".split("").map((letter, index) => (
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
            className="text-xl text-gray-600 max-w-3xl mx-auto text-center"
          >
            Bridging Research, Policy Compliance, and Practical Implementation
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gray-700 leading-relaxed text-justify text-lg">
            I provide hands-on training, technical guidance, and consultancy in environmental sustainability, circular economy, and project management, bridging research, policy compliance, and practical implementation. My work focuses on building institutional and community capacity, promoting innovation, and ensuring alignment with international environmental and social standards.
          </p>
        </motion.section>

        {/* Topics Covered */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiBook className="text-primary" />
            Topics Covered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {topicsCovered.map((topic, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Training Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiTool className="text-primary" />
            List of Training
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingCategories.map((category, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Professional Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiBriefcase className="text-primary" />
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {professionalExperience.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 py-2 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-primary">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.organization}</h3>
                    <p className="text-gray-600">{exp.role}</p>
                    {exp.period && <p className="text-sm text-gray-500">{exp.period}</p>}
                  </div>
                </div>
                
                <div className="ml-8 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {exp.contributions.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-600 text-sm">
                          <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.achievements && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex gap-2 text-gray-600 text-sm">
                            <FiStar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        {galleryImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
              <FiImage className="text-primary" />
              Photo Gallery
            </h2>
           

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.video && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                          <FiZap className="w-6 h-6 fill-current" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-200 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <FiX className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] mx-4 w-full" onClick={(e) => e.stopPropagation()}>
            {galleryImages[currentImage]?.video && galleryImages[currentImage]?.videoEmbed ? (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black shadow-2xl">
                <iframe
                  src={`${galleryImages[currentImage].videoEmbed}?autoplay=1`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={galleryImages[currentImage]?.image}
                alt={galleryImages[currentImage]?.title}
                className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg shadow-2xl"
              />
            )}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{galleryImages[currentImage]?.title}</h3>
              <p className="text-gray-300 mt-2">{galleryImages[currentImage]?.description}</p>
            </div>
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}