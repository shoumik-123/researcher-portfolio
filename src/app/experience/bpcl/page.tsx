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
  FiZap,
  FiVideo
} from 'react-icons/fi';

import { 
  researcherInfo,
  images 
} from '@/lib/data';

// Get BPCL page data from images array - filter by page = "/experience/bpcl"
const bpclMediaItems = images.filter(item => item.page === "/experience/bpcl" && item.type === "experience");
const bpclVideos = images.filter(item => item.page === "/experience/bpcl" && item.type === "video");
// Main page data (first item for description)
const bpclPage = bpclMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/achievement-1.jpg';

  try {
    // Handle Google Drive URLs
    if (image.includes('drive.google.com')) {
      let fileId = null;
      
      // Extract file ID from /file/d/FILE_ID/view format
      const fileMatch = image.match(/\/d\/([^/]+)/);
      if (fileMatch) {
        fileId = fileMatch[1];
      }
      
      // Extract file ID from ?id=FILE_ID format
      const idMatch = image.match(/[?&]id=([^&]+)/);
      if (idMatch) {
        fileId = idMatch[1];
      }
      
      if (fileId) {
        // Convert to working thumbnail URL
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
      }
    }
    
    // Handle Next.js image optimization URLs
    if (image.includes('/_next/image') && image.includes('url=')) {
      const urlMatch = image.match(/url=([^&]+)/);
      if (urlMatch) {
        return decodeURIComponent(urlMatch[1]);
      }
    }
  } catch {
    // keep original
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

// Process gallery images from BPCL items
const galleryImages = bpclMediaItems.map((item, index) => ({ 
  id: item.id || `bpcl-${index}`,
  title: item.name || item.title || 'BPCL Experience',
  description: item.description || 'BPCL gallery image',
  image: resolveImageUrl(item.image),
  video: false,
  videoEmbed: ''
}));

// Process videos separately
const videoItems = bpclVideos.map((video, index) => ({
  id: video.id || `video-${index}`,
  title: video.title || 'BPCL Video',
  description: video.description || '',
  image: video.thumbnail || `https://img.youtube.com/vi/${video.id?.split('-').pop()}/maxresdefault.jpg`,
  video: true,
  videoEmbed: resolveVideoEmbed(video.embedUrl || video.url || ''),
  type: 'video'
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
  const [currentItem, setCurrentItem] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'images' | 'videos'>('images');

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number, type: 'images' | 'videos') => {
    setActiveGalleryTab(type);
    setCurrentItem(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextItem = () => {
    const currentItems = activeGalleryTab === 'images' ? galleryImages : videoItems;
    setCurrentItem((prev) => (prev + 1) % currentItems.length);
  };

  const prevItem = () => {
    const currentItems = activeGalleryTab === 'images' ? galleryImages : videoItems;
    setCurrentItem((prev) => (prev - 1 + currentItems.length) % currentItems.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextItem();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activeGalleryTab]);

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
            Manager – Environment, Sustainability & MEAL at Bangladesh Petrochemical Company Limited (BPCL)
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

        {/* Photo Gallery Section */}
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
              <span className="text-sm text-gray-500 font-normal ml-2">
                ({galleryImages.length} photos)
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index, 'images')}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                      }}
                    />
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

        {/* Video Gallery Section */}
        {videoItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
              <FiVideo className="text-primary" />
              Video Gallery
              <span className="text-sm text-gray-500 font-normal ml-2">
                ({videoItems.length} videos)
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index, 'videos')}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FiVideo className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
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

        {/* No Gallery Items Message */}
        {galleryImages.length === 0 && videoItems.length === 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <FiImage className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No gallery items available</p>
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
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            {activeGalleryTab === 'videos' && videoItems[currentItem] ? (
              <div className="aspect-video">
                <iframe
                  src={`${videoItems[currentItem].videoEmbed}?autoplay=1`}
                  title={videoItems[currentItem].title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              galleryImages[currentItem] && (
                <img
                  src={galleryImages[currentItem].image}
                  alt={galleryImages[currentItem].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                  }}
                />
              )
            )}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">
                {activeGalleryTab === 'videos' 
                  ? videoItems[currentItem]?.title 
                  : galleryImages[currentItem]?.title}
              </h3>
              <p className="text-gray-300 mt-2">
                {activeGalleryTab === 'videos' 
                  ? videoItems[currentItem]?.description 
                  : galleryImages[currentItem]?.description}
              </p>
            </div>
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {(activeGalleryTab === 'images' ? galleryImages : videoItems).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentItem(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentItem ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}