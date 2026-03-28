/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiCalendar, 
  FiMapPin, 
  FiUsers,
  FiCheckCircle,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiTool,
  FiCpu,
  FiBox,
  FiLayers,
  FiZap,
  FiActivity,
  FiCamera,
  FiPackage,
  FiDroplet,
  FiWind,
  FiThermometer,
  FiGrid,
  FiMic,
  FiBookOpen
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Lab Experimentations page data from images array (all items matching the ID)
const labMediaItems = images.filter(page => page.id === 'research-lab');
// Main page data
const labPage = labMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/research/lab-default.jpg';
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

// Gallery Images from images array
const galleryImages = labMediaItems.map((item) => ({ 
  id: item.id || `lab-${Math.random()}`,
  title: item.title || item.name || 'Lab Experimentations',
  description: item.description || 'Lab gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Material Preparation & Processing
const materialPreparation = [
  "BioPlastic Preparation",
  "Chitosan Extraction from Shrimp Shells",
  "Sugarcane Fiber Preparation",
  "3-Layer Composite Film Fabrication",
  "Hydrogel Sample Preparation",
  "Electrospun Nanofiber Production",
  "Toxic Dye Removal Composite",
  "Wound-Healing Bandage Material Development",
  "Antibacterial Insole Prototype"
];

// Analytical & Testing Procedures
const analyticalProcedures = [
  "HPLC Filtration & Analysis",
  "AAS (Atomic Absorption Spectroscopy)",
  "pH Adjustment & ISO Standard pH Check",
  "UV Spectrophotometry",
  "Bacterial Media Preparation & Culture Counting",
  "Pathogen Identification & Microbial Analysis",
  "Antibacterial Activity Testing",
  "Pesticide Identification",
  "Data Checking & Validation"
];

// Field & Supporting Processes
const fieldProcesses = [
  "Shrimp Shell Collection",
  "Chemical Loading & Weighing",
  "Hot Spot Visit & Sampling",
  "Sampling and Method Checking"
];

export default function LabExperimentationsPage() {
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
            {"Lab Experimentations".split("").map((letter, index) => (
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
            Hands-On Science: From Waste to Innovation
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
            This section showcases the practical laboratory work behind my research. Here you will find real-time experimentations, material preparation processes, analytical testing, and prototype development—all captured in videos from the various labs. I have worked across KUET, BUET, and the University of Dhaka. Every video reflects my commitment to transforming industrial and biological waste into sustainable, high-value biomaterials for environmental remediation, biomedical applications, and circular economy solutions.
          </p>
        </motion.section>

        {/* Material Preparation & Processing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiTool className="text-primary" />
            Material Preparation & Processing
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {materialPreparation.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Analytical & Testing Procedures */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiActivity className="text-primary" />
            Analytical & Testing Procedures
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {analyticalProcedures.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Field & Supporting Processes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiMapPin className="text-primary" />
            Field & Supporting Processes
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
            {fieldProcesses.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiCamera className="text-primary" />
            Video Gallery
          </h2>
          {/* <p className="text-gray-600 mb-8">
            Visual documentation of laboratory experiments, material preparation, analytical testing, and prototype development
          </p> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg">
                        <FiZap className="w-7 h-7 ml-0.5" />
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