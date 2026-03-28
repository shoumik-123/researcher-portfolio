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
  FiTool,
  FiAward,
  FiBriefcase,
  FiGlobe,
  FiZap,
  FiUser,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
  FiEye,
  FiTarget,
  FiTrendingUp,
  FiHeart,
  FiMenu,
  FiHome,
  FiInfo,
  FiFolder,
  FiUsers
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Education page data from images array (all items matching the ID)
const educationMediaItems = images.filter(page => page.id === 'education');
const educationPage = educationMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/education/default.jpg';
  return image;
};

// Video URL resolver - converts YouTube watch/youtu.be URLs to embed format
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
const galleryImages = educationMediaItems.map((item) => ({ 
  id: item.id || `education-${Math.random()}`,
  title: item.title || item.name || 'Education Journey',
  description: item.description || 'Education gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Education Data
const educationData = [
  {
    id: 1,
    degree: "Professional Master's in Soil, Water and Environment",
    institution: "University of Dhaka",
    period: "Jun 2024 – Jul 2025",
    location: "Dhaka, Bangladesh",
    description: "This program strengthened my expertise in environmental systems with a focus on soil and water resource management, pollution control, and climate-resilient practices. Through advanced coursework and applied research, I developed a systems-level understanding of environmental challenges, including contamination pathways, ecosystem sustainability, and integrated resource management. This academic experience is directly aligned with my career in environmental planning, circular economy solutions, and sustainable waste management, enabling me to design and implement impactful, science-based interventions.",
    icon: <FiBook className="w-6 h-6" />,
    color: "bg-green-100 text-green-600",
    courses: [
      "Soil and Water Resource Management",
      "Pollution Control and Remediation",
      "Climate-Resilient Practices",
      "Contamination Pathways Analysis",
      "Ecosystem Sustainability",
      "Integrated Resource Management"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science (B.Sc.) in Leather Engineering",
    institution: "Khulna University of Engineering and Technology (KUET)",
    period: "Feb 2017 – Apr 2022",
    location: "Khulna, Bangladesh",
    description: "My undergraduate studies provided a strong foundation in material science, industrial processing, and manufacturing systems, with a specialized focus on leather, footwear, and product engineering. Alongside technical skills, I developed a deep understanding of environmental impacts associated with industrial production, including waste generation, chemical use, and resource inefficiency. This exposure shaped my transition toward environmental sustainability, driving my interest in waste valorization, pollution mitigation, and the development of circular and eco-friendly material solutions.",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600",
    courses: [
      "Material Science and Engineering",
      "Industrial Processing Systems",
      "Leather and Footwear Engineering",
      "Product Engineering and Design",
      "Waste Generation and Management",
      "Chemical Use and Environmental Impact",
      "Circular Economy Principles",
      "Pollution Mitigation Strategies"
    ]
  }
];

// Key Skills Acquired
const keySkills = [
  { category: "Environmental Systems", skills: ["Soil & Water Management", "Pollution Control", "Climate Resilience", "Ecosystem Sustainability"] },
  { category: "Material Science", skills: ["Polymer Composites", "Biomaterials", "Waste Valorization", "Circular Economy"] },
  { category: "Industrial Processing", skills: ["Manufacturing Systems", "Product Engineering", "Quality Control", "Process Optimization"] },
  { category: "Analytical Methods", skills: ["FTIR", "XRD", "SEM", "HPLC", "AAS", "Microbial Analysis"] },
  { category: "Research & Analysis", skills: ["Scientific Writing", "Data Analysis", "Literature Review", "Experimental Design"] },
  { category: "Sustainability", skills: ["Environmental Impact Assessment", "Waste Management", "Resource Efficiency", "ESG Principles"] }
];

export default function EducationPage() {
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
            {"Education".split("").map((letter, index) => (
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
            Academic Journey in Environmental Science and Engineering
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Education Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Left Column - Icon & Meta */}
                  <div className="md:w-1/3">
                    <div className="sticky top-24 space-y-4">
                      <div className={`w-16 h-16 rounded-full ${edu.color} flex items-center justify-center mb-4`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-lg text-gray-700 mt-1">{edu.institution}</p>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Description & Courses */}
                  <div className="md:w-2/3">
                    <div className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {edu.description}
                      </p>
                      
                      {/* Key Courses */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <FiBook className="text-primary" />
                          Key Areas of Study
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Divider between degrees */}
                {idx < educationData.length - 1 && (
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
            transition={{ delay: 0.4 }}
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