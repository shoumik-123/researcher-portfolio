/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
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
  FiTrendingUp,
  FiCheckCircle,
  FiGlobe,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiBarChart2,
  FiTarget,
  FiDollarSign,
  FiZap
} from 'react-icons/fi';

import { 
  researcherInfo,
  images 
} from '@/lib/data';

// Get BPCL page data from images array (all items matching the ID)
const bpclMediaItems = images.filter(page => page.id === 'experience-bpcl');
// Main page data
const bpclPage = bpclMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/achievement-1.jpg';
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

const galleryImages = bpclMediaItems.map((item) => ({ 
  id: item.id || `bpcl-${Math.random()}`,
  title: item.title || item.name || 'BPCL Experience',
  description: item.description || 'BPCL gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Key Contributions Data
const keyContributions = [
  "Provide strategic leadership and managerial oversight for the $1.3M Plastic-free Rivers and Seas for South Asia (PLEASE) Project, implemented in partnership with UNOPS and SACEP, ensuring alignment with UNOPS operational guidelines and World Bank Environmental and Social Standards (ESS).",
  "Oversee environmental, social, and sustainability management, integrating risk mitigation, compliance monitoring, and stakeholder engagement in line with UN and World Bank project management frameworks.",
  "Lead a multidisciplinary team, applying Results-Based Management (RBM), Key Performance Indicators (KPIs), and performance measurement tools to ensure effective project implementation and accountability.",
  "Ensure donor compliance by managing project budgeting, financial reporting, and procurement processes according to SACEP/UNOPS rules and international best practices.",
  "Develop and implement circular economy strategies and low-carbon solutions within BPCL operations, promoting SDG-aligned sustainable development outcomes.",
  "Coordinate and liaise with government authorities, private sector partners, UN agencies, and local communities to harmonize project execution with national sustainability policies and international standards.",
  "Facilitate capacity-building, learning, and knowledge-sharing initiatives to strengthen institutional sustainability, data-driven decision-making, and organizational resilience.",
  "Apply UNOPS/World Bank managerial standards, including adaptive project management, risk assessment, stakeholder engagement, and periodic project audits for transparency and impact."
];

// Project Metrics
const projectMetrics = [
  { label: "Project Value", value: "$1.3M", icon: <FiDollarSign className="w-5 h-5" /> },
  { label: "Partners", value: "UNOPS, SACEP", icon: <FiGlobe className="w-5 h-5" /> },
  { label: "Standards", value: "World Bank ESS", icon: <FiTarget className="w-5 h-5" /> },
  { label: "Management", value: "RBM & KPIs", icon: <FiBarChart2 className="w-5 h-5" /> }
];

export default function BPCLExperiencePage() {
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

  // Handle keyboard navigation
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
            {"BPCL Experience".split("").map((letter, index) => (
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
            {bpclPage?.description || "Manager – Environment, Sustainability & MEAL at Bangladesh Petrochemical Company Limited (BPCL)"}
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Company Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Bangladesh Petrochemical Company Limited (BPCL)
                  </h2>
                  <p className="text-gray-600">Manager – Environment, Sustainability & MEAL</p>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                BPCL is a leading petrochemical company in Bangladesh, advancing sustainable industrial development and promoting circular economy solutions in plastics recycling.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-6">
                <div className="flex items-center gap-2">
                  <FiBriefcase className="w-4 h-4" />
                  <span>Manager – Environment, Sustainability & MEAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>October 2025 – January 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="bg-green-100 px-6 py-3 rounded-full">
              <span className="text-green-700 font-semibold">BPCL</span>
            </div>
          </div>
        </motion.div>

        {/* Project Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {projectMetrics.map((metric, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                {metric.icon}
              </div>
              <div className="text-xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Role Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">Role Overview</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            As Manager – Environment, Sustainability & MEAL at BPCL, I provide strategic leadership and managerial oversight for the $1.3M Plastic-free Rivers and Seas for South Asia (PLEASE) Project, implemented in partnership with UNOPS and SACEP. My role focuses on ensuring alignment with UNOPS operational guidelines and World Bank Environmental and Social Standards (ESS), while advancing sustainable industrial development and promoting circular economy solutions in plastics recycling.
          </p>
        </motion.section>

        {/* Key Contributions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6">Key Contributions</h2>
          <div className="grid grid-cols-1 gap-4">
            {keyContributions.map((contribution, index) => (
              <div key={index} className="flex gap-3 items-start">
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{contribution}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Focus Areas */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <FiTarget className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strategic Leadership</h3>
              <p className="text-sm text-gray-600">Leading multidisciplinary teams with Results-Based Management (RBM) and KPIs for effective project implementation</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
                <FiGlobe className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Circular Economy</h3>
              <p className="text-sm text-gray-600">Developing and implementing circular economy strategies and low-carbon solutions aligned with SDGs</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                <FiUsers className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stakeholder Coordination</h3>
              <p className="text-sm text-gray-600">Liaising with government, private sector, UN agencies, and local communities for harmonized execution</p>
            </div>
          </div>
        </motion.section> */}

        {/* Photo Gallery Section */}
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
          {/* <p className="text-gray-600 mb-8">
            Visual documentation of leadership activities, stakeholder engagements, and project implementations during BPCL tenure
          </p> */}

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

        {/* Video Section (if video exists in pages array) */}
        {bpclPage?.videoEmbed && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">Project Overview Video</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={bpclPage.videoEmbed}
                title="BPCL PLEASE Project Overview"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
          
          <div className="max-w-5xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            {galleryImages[currentImage]?.video && galleryImages[currentImage]?.videoEmbed ? (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black shadow-2xl">
                <iframe
                  src={`${galleryImages[currentImage].videoEmbed}?autoplay=1`}
                  title={galleryImages[currentImage].title}
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