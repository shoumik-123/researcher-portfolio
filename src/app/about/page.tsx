/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiUsers,
  FiFileText,
  FiStar,
  FiCheckCircle,
  FiGlobe,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiTool,
  FiCpu,
  FiClipboard,
  FiBox,
  FiLayers,
  FiZap,
  FiActivity,
  FiEye,
  FiPackage,
  FiUserCheck,
  FiHeart,
  FiAward,
  FiTrendingUp,
  FiTarget,
  FiBriefcase as FiCareer,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiSend,
  FiBookOpen,
  FiCompass,
  FiDroplet
} from 'react-icons/fi';
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get About page data from images array
const aboutMediaItems = images.filter(page => page.id === 'about');
const aboutPage = aboutMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/about/default.jpg';
  return image;
};

// Gallery Images from images array
const galleryImages = aboutMediaItems.map((item) => ({ 
  id: item.id || `about-${Math.random()}`,
  title: item.title || item.name || 'About Me',
  description: item.description || 'About gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: item.videoEmbed || item.video
}));

// Contact Information
const contactInfo = {
  linkedin: "https://www.linkedin.com/in/hasan-ahmed-",
  email: "hasan.ahmed@email.com",
  phone: "+880 1234 567890"
};

// Key Expertise Areas
const expertiseAreas = [
  { title: "Environmental Specialist", icon: <FiGlobe className="w-5 h-5" /> },
  { title: "Climate & Biodiversity", icon: <FiDroplet className="w-5 h-5" /> },
  { title: "NbS & Ecosystem Restoration", icon: <FiHeart className="w-5 h-5" /> },
  { title: "UN Systems & International Development", icon: <FiUsers className="w-5 h-5" /> },
  { title: "ESG & Circular Economy", icon: <FiTrendingUp className="w-5 h-5" /> }
];

// Professional Background Highlights
const backgroundHighlights = [
  "Interdisciplinary background in Leather Engineering and Environmental Science",
  "Hands-on experience in environmental project execution and research",
  "Specialization in plastic waste management and sustainable materials",
  "Expertise in behavior-driven environmental interventions",
  "Focus on translating research into scalable, real-world applications"
];

// Current & Previous Roles
const roles = [
  {
    title: "Technical Lead – Environment, Sustainability & MEAL",
    organization: "Musketeers Idea Ltd.",
    period: "Present",
    icon: <FiBriefcase className="w-5 h-5" />
  },
  {
    title: "Professional Master's in Soil, Water, and Environment",
    organization: "University of Dhaka",
    period: "July 2025 (Completing)",
    icon: <FiBookOpen className="w-5 h-5" />
  },
  {
    title: "Technical Expert (Environment) & Bangladesh Country Technical Focal Point",
    organization: "UNOPS - PLEASE Project (World Bank-funded)",
    period: "$3.18M Project",
    icon: <FiGlobe className="w-5 h-5" />
  }
];

export default function AboutPage() {
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
            {"About Me".split("").map((letter, index) => (
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
            Environmental Specialist | Climate & Biodiversity | NbS & Ecosystem Restoration | UN | ESG & Circular Economy
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gray-700 leading-relaxed text-justify text-lg mb-6">
            I am an environmental professional with a strong interdisciplinary background in engineering and environmental science, currently working at the intersection of sustainability, research, and implementation. My academic journey—from Leather Engineering to advanced studies in Soil, Water and Environment—reflects a purposeful transition toward addressing complex environmental challenges through science-driven and practical solutions.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify text-lg">
            With hands-on experience in environmental project execution, research, and circular economy initiatives, I specialize in plastic waste management, sustainable materials, and behavior-driven environmental interventions. My work focuses on translating research into scalable, real-world applications that contribute to resource efficiency, pollution reduction, and climate resilience.
          </p>
        </motion.section>

        {/* Expertise Areas Pills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full">
                {area.icon}
                <span className="text-sm font-medium">{area.title}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Current & Previous Roles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiCareer className="text-primary" />
            Current & Previous Roles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{role.title}</h3>
                    <p className="text-sm text-gray-600">{role.organization}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">{role.period}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Professional Background Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiStar className="text-primary" />
            Professional Background
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {backgroundHighlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Open to Opportunities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <FiTarget className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Open to New Opportunities</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Open to new opportunities in environmental specialist, environmental consultant, sustainability, and circular economy roles within the UN system and international development organizations.
            </p>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FiTarget className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Mission</h3>
              </div>
              <p className="text-gray-700">
                To develop scalable, science-based solutions that turn waste into valuable resources while protecting ecosystems and public health.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <FiEye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">My Vision</h3>
              </div>
              <p className="text-gray-700">
                To contribute to a circular and regenerative environmental future where sustainable materials, innovative recycling systems, and collaborative research build resilient communities and a healthier planet.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiSend className="text-primary" />
            Get in Touch
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LinkedIn */}
              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaLinkedinIn className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Connect on</p>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                </div>
              </a>
              
              {/* Email */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email me at</p>
                  <p className="font-semibold text-gray-900">{contactInfo.email}</p>
                </div>
              </a>
              
              {/* Phone */}
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call me at</p>
                  <p className="font-semibold text-gray-900">{contactInfo.phone}</p>
                </div>
              </a>
            </div>
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
            <p className="text-gray-600 mb-8">
              Moments from professional engagements, field visits, and sustainability initiatives
            </p>

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