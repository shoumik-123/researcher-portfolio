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
  FiCamera ,
  FiPackage 
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

// Lab Experiments Data
const labExperiments = [
  {
    id: 1,
    title: "Polymer Composite Development",
    description: "Development of biodegradable polymer composites from industrial waste materials",
    duration: "2023-2024",
    location: "Chemistry Lab, KUET",
    supervisor: "Dr. Mamun Jamal",
    techniques: ["FTIR", "SEM", "XRD", "Tensile Testing"],
    outcomes: [
      "Successfully developed biodegradable composite sheets",
      "Published in Q1 journal (Impact Factor 5.2)",
      "85% biodegradability achieved within 60 days"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SThJ0g90ZNmW96ZQLrSMXUY6Ne_K_pnKcr27FlALXIoOCmNbnuIw-Kje-D-0Q5O4lChhAXQIazkgrrgife8r1uc2in4JFGZ7ydqyWrA--mJ2UtFhQJ2jw7L9pu1U9K24_Dp-vyORxFIVRbVgjpPZ9npDzAAQbvWaSsm16voGZEgBnp1LZ3efK4XG4YPzfJxssUwGwYKqKwtmrxMmskdxLqhsq-ON-pE3KzxOoE=w1280"
  },
  {
    id: 2,
    title: "Chitosan-Based Hydrogel Synthesis",
    description: "Fabrication of biocompatible hydrogels for wound healing applications",
    duration: "2023-2024",
    location: "Biomedical Weight Lab, BUET",
    supervisor: "Dr. Tarek Arafat",
    techniques: ["Cell Culture", "Cell Viability", "FTIR", "Swelling Tests"],
    outcomes: [
      "Developed antibacterial hydrogel with 95% cell viability",
      "Published in biomedical materials journal",
      "Potential application for wound dressing"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSrczYcIBdL8JqECctYcZNeSdDNWjvMNQWgI34dbA0F1Mnf36UFQsDSo7h-C4IPGbxtnA9nc-nGLxozoiSBUs9VFRjpyrpENEul3LKAPEq4y6mDzh2VxjQlNfvxl0Ud1_9aagjbBhQ3n6RknCMiHKTSDkqIdvJiG1ldicgN5otaoeFWphJuQuUx4kS8ONEy5W49oRQJWouPfZnj9E1GiEgJe-b8JesMhQS7=w1280"
  },
  {
    id: 3,
    title: "Microbial Identification & Analysis",
    description: "Identification and characterization of antibiotic-resistant microorganisms",
    duration: "2022-2024",
    location: "Microbiology Lab, CARS, University of Dhaka",
    supervisor: "Dr. Latiful Bari",
    techniques: ["HPLC", "AAS", "Microbial Culture", "Antibacterial Analysis"],
    outcomes: [
      "Identified antibiotic-resistant strains in food samples",
      "Published in Environmental Science and Pollution Research",
      "23+ citations"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSrczYcIBdL8JqECctYcZNeSdDNWjvMNQWgI34dbA0F1Mnf36UFQsDSo7h-C4IPGbxtnA9nc-nGLxozoiSBUs9VFRjpyrpENEul3LKAPEq4y6mDzh2VxjQlNfvxl0Ud1_9aagjbBhQ3n6RknCMiHKTSDkqIdvJiG1ldicgN5otaoeFWphJuQuUx4kS8ONEy5W49oRQJWouPfZnj9E1GiEgJe-b8JesMhQS7=w1280"
  },
  {
    id: 4,
    title: "Chitosan Extraction from Shrimp Shells",
    description: "Sustainable extraction of chitosan using waste eggshells as chemical",
    duration: "2023",
    location: "Instrumentation Lab, BMBT, DU",
    supervisor: "Lecturer Imran Sir",
    techniques: ["AAS", "HPLC", "FTIR", "Thermal Analysis"],
    outcomes: [
      "85% extraction efficiency achieved",
      "Mentored 4 undergraduate students",
      "Eco-friendly extraction method"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SThJ0g90ZNmW96ZQLrSMXUY6Ne_K_pnKcr27FlALXIoOCmNbnuIw-Kje-D-0Q5O4lChhAXQIazkgrrgife8r1uc2in4JFGZ7ydqyWrA--mJ2UtFhQJ2jw7L9pu1U9K24_Dp-vyORxFIVRbVgjpPZ9npDzAAQbvWaSsm16voGZEgBnp1LZ3efK4XG4YPzfJxssUwGwYKqKwtmrxMmskdxLqhsq-ON-pE3KzxOoE=w1280"
  },
  {
    id: 5,
    title: "Phase Change Materials for Road Construction",
    description: "Evaluation of freeze-thaw performance using phase change materials",
    duration: "2023",
    location: "Physics Lab, KUET",
    supervisor: "Dr. Elias Uddin",
    techniques: ["Thermal Analysis", "DSC", "Mechanical Testing"],
    outcomes: [
      "Presented at ICME 2023 conference",
      "Improved freeze-thaw resistance by 40%",
      "Potential for cold region applications"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SThJ0g90ZNmW96ZQLrSMXUY6Ne_K_pnKcr27FlALXIoOCmNbnuIw-Kje-D-0Q5O4lChhAXQIazkgrrgife8r1uc2in4JFGZ7ydqyWrA--mJ2UtFhQJ2jw7L9pu1U9K24_Dp-vyORxFIVRbVgjpPZ9npDzAAQbvWaSsm16voGZEgBnp1LZ3efK4XG4YPzfJxssUwGwYKqKwtmrxMmskdxLqhsq-ON-pE3KzxOoE=w1280"
  },
  {
    id: 6,
    title: "Antibacterial Sandwich Composites",
    description: "Development of antibacterial sandwich composites for biomedical applications",
    duration: "2023-2024",
    location: "Software Learning Lab, KUET",
    supervisor: "Dr. Elias Uddin",
    techniques: ["Antibacterial Testing", "Mechanical Testing", "SEM Analysis"],
    outcomes: [
      "Supervised master's student",
      "Published in peer-reviewed journal",
      "99% antibacterial efficiency"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SThJ0g90ZNmW96ZQLrSMXUY6Ne_K_pnKcr27FlALXIoOCmNbnuIw-Kje-D-0Q5O4lChhAXQIazkgrrgife8r1uc2in4JFGZ7ydqyWrA--mJ2UtFhQJ2jw7L9pu1U9K24_Dp-vyORxFIVRbVgjpPZ9npDzAAQbvWaSsm16voGZEgBnp1LZ3efK4XG4YPzfJxssUwGwYKqKwtmrxMmskdxLqhsq-ON-pE3KzxOoE=w1280"
  }
];

// Equipment Used
const equipmentUsed = [
  { name: "FTIR (Fourier Transform Infrared Spectroscopy)", icon: <FiTool /> },
  { name: "XRD (X-ray Diffraction)", icon: <FiCpu /> },
  { name: "SEM (Scanning Electron Microscope)", icon: <FiCamera  /> },
  { name: "HPLC (High-Performance Liquid Chromatography)", icon: <FiActivity /> },
  { name: "AAS (Atomic Absorption Spectrophotometer)", icon: <FiZap /> },
  { name: "Cell Culture Facility", icon: <FiBox /> },
  { name: "Mechanical Testing Equipment", icon: <FiLayers /> },
  { name: "Thermal Analysis System (DSC/TGA)", icon: <FiPackage  /> }
];

// Research Techniques
const techniques = [
  "Polymer Synthesis & Characterization",
  "Biomaterials Development",
  "Microbial Culture & Identification",
  "Antibacterial Activity Analysis",
  "Cell Viability & Cytotoxicity Testing",
  "Spectroscopy (FTIR, AAS)",
  "Chromatography (HPLC)",
  "Microscopy (SEM, Optical)",
  "Mechanical Property Testing",
  "Thermal Analysis (DSC/TGA)"
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
            {labPage?.description || "Hands-on laboratory work focusing on industrial waste valorization, polymer composite development, and advanced material characterization"}
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
          <h2 className="text-3xl font-light text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            My laboratory research focuses on transforming waste materials into high-value products through sustainable chemical and biological processes. Working across multiple institutions including KUET, BUET, and University of Dhaka, I have developed expertise in polymer synthesis, biomaterial fabrication, microbial analysis, and advanced characterization techniques. This interdisciplinary approach enables the development of innovative solutions for environmental sustainability and biomedical applications.
          </p>
        </motion.section>

        {/* Lab Experiments Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiCamera className="text-primary" />
            Key Experiments
          </h2>
          
          <div className="space-y-12">
            {labExperiments.map((exp) => (
              <div key={exp.id} className="border-l-4 border-primary pl-6 py-2 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" /> {exp.duration}</span>
                      <span className="flex items-center gap-1"><FiMapPin className="w-4 h-4" /> {exp.location}</span>
                      <span className="flex items-center gap-1"><FiUsers className="w-4 h-4" /> {exp.supervisor}</span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Techniques Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.techniques.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Outcomes:</p>
                      <ul className="space-y-1">
                        {exp.outcomes.map((outcome, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-600">
                            <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Equipment Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiTool className="text-primary" />
            Equipment Used
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {equipmentUsed.map((equip, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {equip.icon}
                  </div>
                  <span className="text-sm text-gray-700">{equip.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Research Techniques */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiActivity className="text-primary" />
            Research Techniques & Methods
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {techniques.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                {tech}
              </span>
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
            <FiImage className="text-primary" />
            Laboratory Gallery
          </h2>
          <p className="text-gray-600 mb-8">
            Visual documentation of laboratory experiments, equipment, and research activities
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