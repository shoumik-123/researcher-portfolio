/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiBook, 
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
  FiTarget
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get PhD Journey page data from images array (all items matching the ID)
const phdMediaItems = images.filter(page => page.id === 'research-phd');
// Main page data
const phdPage = phdMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/research/phd-default.jpg';
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
const galleryImages = phdMediaItems.map((item) => ({ 
  id: item.id || `phd-${Math.random()}`,
  title: item.title || item.name || 'PhD Journey',
  description: item.description || 'PhD gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// PhD Overview
const phdOverview = {
  title: "Valorization of Industrial Waste for Sustainable Polymer Composites",
  field: "Environmental Science & Materials Engineering",
  institution: "University of Dhaka",
  supervisor: "Dr. Latiful Bari & Dr. Asma Rahman",
  duration: "2021 - Present",
  description: "My doctoral research focuses on transforming industrial waste materials into high-value polymer composites with applications in packaging, biomedical, and environmental sectors. The research integrates materials science, polymer chemistry, and environmental sustainability to develop biodegradable and biocompatible materials from waste resources."
};

// Research Timeline
const researchTimeline = [
  {
    phase: "Literature Review & Gap Analysis",
    period: "2021",
    status: "completed",
    description: "Comprehensive review of polymer composites, waste valorization, and sustainable materials. Identified key research gaps in industrial waste utilization.",
    outcomes: ["Identified 5 major research gaps", "Published review paper", "Established research methodology"]
  },
  {
    phase: "Material Collection & Characterization",
    period: "2022",
    status: "completed",
    description: "Collection and characterization of industrial waste materials including tannery waste, shrimp shells, and sugarcane bagasse.",
    outcomes: ["Collected 50+ waste samples", "Characterization using FTIR, XRD, SEM", "Established baseline properties"]
  },
  {
    phase: "Polymer Composite Development",
    period: "2022-2023",
    status: "completed",
    description: "Development and optimization of polymer composites from waste materials using various processing techniques.",
    outcomes: ["Developed 3 composite formulations", "Optimized processing parameters", "Achieved 85% biodegradability"]
  },
  {
    phase: "Characterization & Testing",
    period: "2023",
    status: "completed",
    description: "Comprehensive testing of mechanical, thermal, and biological properties of developed composites.",
    outcomes: ["Published 3 Q1 journal papers", "15+ citations", "Patent application filed"]
  },
  {
    phase: "Biomedical Applications",
    period: "2023-2024",
    status: "in-progress",
    description: "Exploring biomedical applications including wound healing, drug delivery, and tissue engineering.",
    outcomes: ["Hydrogel development", "Cell viability studies", "Antibacterial testing"]
  },
  {
    phase: "Thesis Writing & Submission",
    period: "2024-2025",
    status: "upcoming",
    description: "Compilation of research findings, thesis writing, and final submission.",
    outcomes: ["Thesis chapters", "Publications", "PhD defense"]
  }
];

// Publications During PhD
const phdPublications = [
  {
    title: "Valorization of Industrial Waste for Polymer Composite Development",
    authors: "Ahmed H, Rahman A, Dewanjee S",
    journal: "Journal of Environmental Management",
    year: 2023,
    impact: "Q1, IF: 8.9",
    citations: 15,
    link: "#"
  },
  {
    title: "Development and Characterization of Chitosan-Based Antimicrobial Films",
    authors: "Ahmed H, Noyon MAR, Uddin ME, et al.",
    journal: "Cleaner Chemical Engineering",
    year: 2025,
    impact: "Q1",
    citations: 5,
    link: "#"
  },
  {
    title: "Chitosan-Based Hydrogel Containing PVA, Cellulose and ZnO Nanoparticles",
    authors: "Dewanjee S, Ahmed H, Tanvir MA, et al.",
    journal: "Biomedical Materials",
    year: 2024,
    impact: "Q2",
    citations: 8,
    link: "#"
  },
  {
    title: "Tannery Shaving Dust-Based Charcoal Blended Adsorbents",
    authors: "Hosen MS, Sahen MS, Ahmed H, et al.",
    journal: "Journal of Environmental Management",
    year: 2024,
    impact: "Q1, IF: 8.9",
    citations: 3,
    link: "#"
  }
];

// Conference Presentations During PhD
const phdConferences = [
  {
    title: "Biodegradable and flexible fiber-reinforced composite sheet from tannery solid wastes",
    event: "ICMIEE 2022",
    location: "KUET, Bangladesh",
    date: "December 2022",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Cr removed collagen from leather waste-based chitosan composite to remove dye",
    event: "ICME 2023",
    location: "BUET, Bangladesh",
    date: "December 2023",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Sustainable and eco-friendly development of tannery solid waste-based chitosan/eggshell antibacterial composite sheets",
    event: "ICACE 2024",
    location: "CUET, Bangladesh",
    date: "December 2024",
    role: "Corresponding Author",
    link: "#"
  }
];

// Research Collaborations
const collaborations = [
  {
    institution: "Virginia Tech, USA",
    collaborator: "Suman Dewanjee (PhD Fellow)",
    focus: "Biomedical applications of chitosan composites",
    period: "2023-2024"
  },
  {
    institution: "KACST, Saudi Arabia",
    collaborator: "Prof. Obaid Alharabi",
    focus: "Emerging contaminants and environmental analytics",
    period: "2023-Present"
  },
  {
    institution: "BUET, Bangladesh",
    collaborator: "Dr. Tarik Arafat",
    focus: "Biomedical materials and wound healing",
    period: "2022-2024"
  },
  {
    institution: "University of Dhaka, Bangladesh",
    collaborator: "Md. Ibrahim al Imran",
    focus: "Hydrogel synthesis and characterization",
    period: "2022-2023"
  }
];

// Skills Developed
const skillsDeveloped = [
  { category: "Polymer Synthesis", skills: ["Solution casting", "Compression molding", "Electrospinning"] },
  { category: "Characterization", skills: ["FTIR", "XRD", "SEM", "TGA/DSC", "Tensile Testing"] },
  { category: "Biomedical", skills: ["Cell Culture", "Cell Viability", "Antibacterial Testing", "Cytotoxicity"] },
  { category: "Analytical", skills: ["HPLC", "AAS", "Microbial Culture", "Spectroscopy"] },
  { category: "Software", skills: ["OriginLab", "EndNote", "LaTeX", "ImageJ", "SPSS"] },
  { category: "Academic", skills: ["Scientific Writing", "Grant Writing", "Peer Review", "Presentation"] }
];

// Research Impact Metrics
const impactMetrics = [
  { label: "Publications", value: "8+", icon: <FiFileText className="w-5 h-5" /> },
  { label: "Citations", value: "30+", icon: <FiTrendingUp className="w-5 h-5" /> },
  { label: "Conference Presentations", value: "6+", icon: <FiGlobe className="w-5 h-5" /> },
  { label: "Collaborations", value: "4+", icon: <FiUsers className="w-5 h-5" /> },
  { label: "Q1 Publications", value: "4", icon: <FiStar className="w-5 h-5" /> },
  { label: "Students Mentored", value: "8", icon: <FiUserCheck className="w-5 h-5" /> }
];

export default function PhDJourneyPage() {
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase mb-6 text-center"
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
            {"PhD Journey".split("").map((letter, index) => (
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
            {phdPage?.description || "Doctoral research focusing on valorization of industrial waste for sustainable polymer composites and biomedical applications"}
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* PhD Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{phdOverview.title}</h2>
              <p className="text-gray-600 mb-4">{phdOverview.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <FiBook className="text-primary" />
                  <span className="text-gray-600">Field: {phdOverview.field}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-primary" />
                  <span className="text-gray-600">Institution: {phdOverview.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-primary" />
                  <span className="text-gray-600">Supervisors: {phdOverview.supervisor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-primary" />
                  <span className="text-gray-600">Duration: {phdOverview.duration}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <div className="bg-primary/10 rounded-full p-6">
                <FiTarget className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Impact Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-2">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Research Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiCalendar className="text-primary" />
            Research Timeline
          </h2>
          
          <div className="space-y-6">
            {researchTimeline.map((phase, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-gray-200 hover:border-primary transition-colors">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500' : 
                  phase.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                }`} />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                  <span className="text-sm text-gray-500">{phase.period}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-100 text-green-700' : 
                    phase.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{phase.description}</p>
                <ul className="space-y-1">
                  {phase.outcomes.map((outcome, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-500">
                      <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Publications During PhD */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiFileText className="text-primary" />
            Publications During PhD
          </h2>
          
          <div className="space-y-4">
            {phdPublications.map((pub, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-4 py-2 hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold text-gray-900">{pub.title}</h3>
                <p className="text-sm text-gray-600">{pub.authors}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs">
                  <span className="text-primary">{pub.journal}</span>
                  <span className="text-gray-400">|</span>
                  <span>{pub.year}</span>
                  <span className="text-gray-400">|</span>
                  <span>Impact: {pub.impact}</span>
                  <span className="text-gray-400">|</span>
                  <span>Citations: {pub.citations}</span>
                </div>
                <a href={pub.link} className="inline-flex items-center gap-1 text-primary text-xs mt-2 hover:underline">
                  View Publication <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Conference Presentations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiGlobe className="text-primary" />
            Conference Presentations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phdConferences.map((conf, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{conf.title}</h3>
                <p className="text-sm text-primary">{conf.event}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" /> {conf.location}</span>
                  <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {conf.date}</span>
                </div>
                {conf.role && <p className="text-xs text-gray-400 mt-2">Role: {conf.role}</p>}
                <a href={conf.link} className="inline-flex items-center gap-1 text-primary text-xs mt-3 hover:underline">
                  View Paper <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Research Collaborations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiUsers className="text-primary" />
            Research Collaborations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaborations.map((collab, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{collab.institution}</h3>
                    <p className="text-sm text-gray-600">{collab.collaborator}</p>
                    <p className="text-sm text-gray-500 mt-1">{collab.focus}</p>
                    <p className="text-xs text-gray-400 mt-1">{collab.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Developed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiTool className="text-primary" />
            Skills Developed
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsDeveloped.map((skill, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-white text-gray-600 rounded-md text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiImage className="text-primary" />
            PhD Journey Gallery
          </h2>
          <p className="text-gray-600 mb-8">
            Moments from laboratory work, conferences, and research collaborations during my PhD journey
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