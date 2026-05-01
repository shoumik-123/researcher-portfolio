/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/immutability */
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
  FiExternalLink,
  FiVideo
} from 'react-icons/fi';
import { images } from "@/lib/data";

// Get UNOPS page data - filter by page = "/experience/unops" and type = "experience"
const unopsMediaItems = images.filter(item => item.page === "/experience/unops" && item.type === "experience");
const unopsVideos = images.filter(item => item.type === "video");

const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/achievement-1.jpg';

  try {
    // Handle Google Drive URLs
    if (image.includes('drive.google.com')) {
      let fileId = null;
      
      // Extract file ID from various Google Drive URL formats
      const fileMatch = image.match(/\/d\/([^/]+)/);
      if (fileMatch) {
        fileId = fileMatch[1];
      }
      
      const idMatch = image.match(/[?&]id=([^&]+)/);
      if (idMatch) {
        fileId = idMatch[1];
      }
      
      if (fileId) {
        // Use the thumbnail format which works best
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
  } catch (error) {
    console.error('Error parsing image URL:', error);
  }

  return image;
};

// Process gallery images from UNOPS items
const galleryImages = unopsMediaItems.map((item, index) => ({
  id: item.id || `unops-${index}`,
  title: item.name || item.title || 'UNOPS Experience',
  description: item.description || 'UNOPS gallery image',
  image: resolveImageUrl(item.image),
  alt: item.name || 'UNOPS Experience',
  video: item.video || '',
  videoEmbed: item.videoEmbed || ''
}));

// Process videos separately
const videoItems = unopsVideos.map((video, index) => ({
  id: video.id || `video-${index}`,
  title: video.title || 'UNOPS Video',
  description: video.description || '',
  image: video.thumbnail || `https://img.youtube.com/vi/${video.id?.split('-').pop()}/maxresdefault.jpg`,
  video: video.url || '',
  videoEmbed: video.embedUrl || '',
  type: 'video'
}));

// Published ESMPs List
const publishedESMPs = [
  "Environmental and Social Management Plan (ESMP) for Plastic Recycling Facility - Dhaka",
  "ESMP for Community-Based Waste Collection System - Chattogram",
  "ESMP for Material Recovery Facility (MRF) - Khulna",
  "ESMP for River Cleanup Initiative - Buriganga River",
  "ESMP for Women-Led Recycling Enterprise - Rajshahi",
  "ESMP for Plastic Waste Sorting Facility - Sylhet",
  "ESMP for Composting Facility - Barishal",
  "ESMP for Awareness Campaign Implementation - Nationwide",
  "ESMP for Circular Economy Training Center - Dhaka",
  "ESMP for Waste-to-Resource Innovation Lab - Gazipur",
  "ESMP for Plastic Collection Hub - Rangpur"
];

export default function UNOPSExperiencePage() {
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

  const openLightbox = (index: number) => {
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
            {"UNOPS Experience".split("").map((letter, index) => (
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
            Technical Expert - Environment | Support to the SACEP PLEASE Project | UNOPS South Asia Multi-country Office (SAMCO)
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Project Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FiGlobe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Technical Expert - Environment
                  </h2>
                  <p className="text-gray-600">Support to the SACEP PLEASE Project | UNOPS South Asia Multi-country Office (SAMCO)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <FiBriefcase className="w-4 h-4" />
                  <span>Technical Expert - Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>April 2024 - June 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>$3.18M Project Value</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="bg-primary/10 px-6 py-3 rounded-full">
                <span className="text-primary font-semibold">UNOPS SAMCO</span>
              </div>
              <a 
                href="https://please-project.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <FiExternalLink className="w-4 h-4" />
                please-project.org
              </a>
            </div>
          </div>
        </motion.div>

        {/* Role Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">Role Overview</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            As Technical Expert – Environment for the $3.18M PLEASE Project (Plastic-free Rivers and Seas for South Asia) at UNOPS Bangladesh, I serve as the environmental technical lead for national implementation. I spearhead efforts to reduce plastic pollution in transboundary river and marine ecosystems through strategies that promote environmental sustainability and circular economy practices. In close coordination with the UNOPS South Asia Multi-Country Office and under regional guidance, my role includes promoting innovation, building institutional and community capacity, supporting policy advocacy, ensuring compliance with World Bank and SACEP Environmental and Social Standards (ESS), and fostering effective regional collaboration.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Provided strategic technical guidance on environmental and social safeguards for grantees under the PLEASE Project",
              "Developed and monitored Environmental Management Frameworks, ESSs, and ESMPs to improve project compliance and effectiveness",
              "Conducted due diligence on sub-grantees, ensuring environmental performance standards were upheld",
              "Delivered specialized training on plastic waste management, including source segregation and leakage prevention",
              "Supported grantees in innovation, development, prototyping, and verification",
              "Guided the preparation of SOPs for MRF facilities and led efficiency assessments",
              "Supported and guided grantees in the development of specifications for machinery and equipment",
              "Oversaw technical reporting, monitoring, and evaluation, ensuring alignment with project goals"
            ].map((contribution, index) => (
              <div key={index} className="flex gap-3 items-start">
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{contribution}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Image Gallery Section */}
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
                  onClick={() => {
                    setActiveGalleryTab('images');
                    openLightbox(index);
                  }}
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
                  onClick={() => {
                    setActiveGalleryTab('videos');
                    openLightbox(index);
                  }}
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
              // <div className="aspect-video">
                <iframe
                  src={videoItems[currentItem].videoEmbed}
                  title={videoItems[currentItem].title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              // </div>
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