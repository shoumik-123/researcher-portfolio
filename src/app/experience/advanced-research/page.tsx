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
  FiMic,
  FiTrendingUp,
  FiTool,
  FiEye,
  FiTarget
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Advanced Research page data from images array
const researchMediaItems = images.filter(page => page.id === 'advanced-research');
const researchPage = researchMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/achievement-1.jpg';

  try {
    const url = new URL(image);
    
    // Handle Next.js image optimization URLs
    if (url.pathname === '/_next/image' && url.searchParams.has('url')) {
      const inner = url.searchParams.get('url');
      if (inner) return decodeURIComponent(inner);
    }
    
    // Handle Google Drive URLs
    if (url.hostname.includes('drive.google.com')) {
      let fileId = null;
      
      // Extract file ID from /file/d/FILE_ID/view format
      const fileMatch = image.match(/\/file\/d\/([^/]+)/);
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
  } catch {
    // keep original
  }

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
const galleryImages = researchMediaItems.map((item) => ({ 
  id: item.id || `research-${Math.random()}`,
  title: item.title || item.name || 'Advanced Research',
  description: item.description || 'Research gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Research Experience
const researchExperience = [
  {
    id: 1,
    title: "Research Associate",
    supervisor: "Dr. Latiful Bari",
    organization: "Center for Advanced Research in Sciences (CARS), University of Dhaka",
    period: "Jan 2023 - Apr 2024",
    duration: "1 yr 4 mos",
    location: "Dhaka, Bangladesh",
    description: "As a research associate under the direct supervision of Dr. Latiful Bari, I developed a strong foundation in applied microbiological research and scientific innovation. This role strengthened my ability to identify critical research gaps, design problem-oriented studies, and translate laboratory findings into real-world applications.",
    contributions: [
      "Conducted microbial identification, culture, and analysis to support food safety and environmental microbiology studies.",
      "Applied innovative research methodologies to address gaps in existing literature and experimental designs.",
      "Developed skills in laboratory safety, sterile techniques, and microbial risk assessment.",
      "Contributed to research publications focused on sustainable materials and health-related microbial studies.",
      "Promoted interdisciplinary thinking by linking microbiological data to broader environmental and biomedical outcomes."
    ],
    icon: <FiBook className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 2,
    title: "Research Associate",
    supervisor: "Dr. Asma Rahman",
    organization: "Center for Advanced Research in Sciences (CARS), University of Dhaka",
    period: "Jun 2022 - Dec 2022",
    duration: "7 mos",
    location: "Dhaka, Bangladesh",
    description: "As a research associate under the direct supervision of Dr. Asma Rahman, I engaged in laboratory-based research at the intersection of food safety and environmental health. My work emphasized analytical detection of contaminants and contributed to advancing knowledge in the fields of environmental microbiology and sustainable food systems.",
    contributions: [
      "Conducted laboratory-based research focusing on food safety and environmental contaminants.",
      "Utilized High-Performance Liquid Chromatography (HPLC) for the identification and quantification of antibiotics in food items.",
      "Applied Atomic Absorption Spectrophotometry (AAS) to detect the presence of heavy metals in food matrices.",
      "Contributed to investigations on the occurrence of microplastics and antibiotic residues in various food products.",
      "Performed microbial identification and culture for foodborne pathogen surveillance.",
      "Addressed research gaps by applying innovative and interdisciplinary approaches to experimental design and data interpretation."
    ],
    icon: <FiTool className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  }
];

// Research Skills & Techniques
const researchSkills = [
  { category: "Microbiology", skills: ["Microbial Identification", "Bacterial Culture", "Microbial Risk Assessment", "Foodborne Pathogen Surveillance"] },
  { category: "Analytical Chemistry", skills: ["HPLC", "AAS", "UV Spectrophotometry", "Antibiotic Quantification", "Heavy Metal Detection"] },
  { category: "Laboratory Techniques", skills: ["Sterile Techniques", "Laboratory Safety", "Sample Preparation", "Quality Control"] },
  { category: "Research Methods", skills: ["Experimental Design", "Literature Review", "Data Analysis", "Problem-Oriented Studies"] }
];

// Research Focus Areas
const focusAreas = [
  {
    title: "Food Safety & Environmental Microbiology",
    description: "Research on microbial contamination in food systems and environmental samples, including antibiotic-resistant microorganisms and foodborne pathogens.",
    icon: <FiEye className="w-5 h-5" />
  },
  {
    title: "Contaminant Detection & Analysis",
    description: "Advanced analytical techniques for detecting antibiotics, heavy metals, and microplastics in food and environmental matrices.",
    icon: <FiTool className="w-5 h-5" />
  },
  {
    title: "Sustainable Materials & Health Studies",
    description: "Contributions to research publications focused on sustainable materials and health-related microbial studies.",
    icon: <FiTrendingUp className="w-5 h-5" />
  },
  {
    title: "Interdisciplinary Research Integration",
    description: "Linking microbiological data to broader environmental and biomedical outcomes through interdisciplinary approaches.",
    icon: <FiUsers className="w-5 h-5" />
  }
];

export default function AdvancedResearchPage() {
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
            {"Advanced Research".split("").map((letter, index) => (
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
            Applied Microbiological Research & Environmental Health Studies
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Research Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="space-y-12">
            {researchExperience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Left Column - Icon & Meta */}
                  <div className="md:w-1/3">
                    <div className="sticky top-24 space-y-4">
                      <div className={`w-16 h-16 rounded-full ${exp.color} flex items-center justify-center mb-4`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-gray-700 mt-1">Supervised by {exp.supervisor}</p>
                        <p className="text-gray-600">{exp.organization}</p>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{exp.period} · {exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{exp.location} · On-site</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Description & Contributions */}
                  <div className="md:w-2/3">
                    <div className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {exp.description}
                      </p>
                      
                      {/* Key Contributions */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FiStar className="text-primary" />
                          Key Research Contributions
                        </h4>
                        <ul className="space-y-2">
                          {exp.contributions.map((contribution, i) => (
                            <li key={i} className="flex gap-2 text-gray-700">
                              <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Divider between experiences */}
                {idx < researchExperience.length - 1 && (
                  <hr className="border-gray-200 my-12" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>



        {/* Gallery Section */}
        {galleryImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
              <FiImage className="text-primary" />
              Research Gallery
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