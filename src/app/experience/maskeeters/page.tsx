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
  FiPenTool,
  FiClipboard,
  FiCompass,
  FiZap
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Maskeeters page data from images array (all items matching the ID)
const maskeetersMediaItems = images.filter(page => page.id === 'experience-maskeeters');
// Main page data
const maskeetersPage = maskeetersMediaItems[0];

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

const galleryImages = maskeetersMediaItems.map((item) => ({ 
  id: item.id || `maskeeters-${Math.random()}`,
  title: item.title || item.name || 'Maskeeters Experience',
  description: item.description || 'Maskeeters gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Key Contributions Data
const keyContributions = [
  "Lead grant proposal development and provide advisory support for innovation-driven applications.",
  "Conduct project evaluations ensuring technical soundness, contextual relevance, and alignment with best practices.",
  "Serve as team lead for training sessions, workshops, and field studies.",
  "Develop business models and field implementation guidelines.",
  "Oversee research and development on environmental and social aspects.",
  "Integrate circular economy approaches, climate resilience, and ESG considerations into projects."
];

// Focus Areas
const focusAreas = [
  { 
    title: "Grant Proposal Development", 
    description: "Leading innovation-driven applications and providing strategic advisory support",
    icon: <FiPenTool className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-600"
  },
  { 
    title: "Project Evaluation", 
    description: "Ensuring technical soundness, contextual relevance, and alignment with best practices",
    icon: <FiClipboard className="w-5 h-5" />,
    color: "bg-green-100 text-green-600"
  },
  { 
    title: "Training & Capacity Building", 
    description: "Leading training sessions, workshops, and field studies for skill development",
    icon: <FiUsers className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-600"
  },
  { 
    title: "Business Model Development", 
    description: "Creating sustainable business models and field implementation guidelines",
    icon: <FiCompass className="w-5 h-5" />,
    color: "bg-orange-100 text-orange-600"
  },
  { 
    title: "R&D on Environmental & Social Aspects", 
    description: "Overseeing research and development for sustainable solutions",
    icon: <FiBook className="w-5 h-5" />,
    color: "bg-red-100 text-red-600"
  },
  { 
    title: "Circular Economy & ESG Integration", 
    description: "Integrating circular economy approaches, climate resilience, and ESG considerations",
    icon: <FiGlobe className="w-5 h-5" />,
    color: "bg-teal-100 text-teal-600"
  }
];

export default function MaskeetersExperiencePage() {
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
            {"Maskeeters Experience".split("").map((letter, index) => (
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
            {maskeetersPage?.description || "Technical Head – Environment & Sustainability at Maskeeters Idea Limited, leading innovation-driven environmental solutions and sustainability initiatives"}
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
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <FiStar className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Maskeeters Idea Limited
                  </h2>
                  <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                Maskeeters Idea Limited is a forward-thinking organization based in Dhaka, Bangladesh, focused on developing innovative solutions for environmental challenges and promoting sustainable development practices.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-6">
                <div className="flex items-center gap-2">
                  <FiBriefcase className="w-4 h-4" />
                  <span>Technical Head – Environment & Sustainability</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>July 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-100 px-6 py-3 rounded-full">
              <span className="text-purple-700 font-semibold">Maskeeters</span>
            </div>
          </div>
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
            As Technical Head – Environment & Sustainability at Maskeeters Idea Limited, I lead the organization's environmental and sustainability initiatives, focusing on developing innovative solutions that address pressing environmental challenges. My role encompasses strategic leadership in grant proposal development, project evaluation, capacity building, and the integration of circular economy principles and ESG considerations into all organizational projects and initiatives.
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

        {/* Focus Areas */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-full ${area.color} flex items-center justify-center mb-3`}>
                  {area.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
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
            Visual documentation of training sessions, workshops, field studies, and sustainability initiatives during Maskeeters tenure
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
        {(maskeetersPage?.videoEmbed || maskeetersPage?.video) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">Project Overview Video</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={resolveVideoEmbed(maskeetersPage.videoEmbed || maskeetersPage.video)}
                title="Maskeeters Sustainability Initiatives"
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