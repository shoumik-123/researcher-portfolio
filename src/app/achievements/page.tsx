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
  FiExternalLink,
  FiMic,
  FiTrendingUp,
  FiHeart
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Achievements page data from images array
const achievementsMediaItems = images.filter(page => page.id === 'achievements');
const achievementsPage = achievementsMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/achievements/default.jpg';
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
const galleryImages = achievementsMediaItems.map((item) => ({ 
  id: item.id || `achievements-${Math.random()}`,
  title: item.title || item.name || 'Achievements',
  description: item.description || 'Achievements gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Key Achievements
const keyAchievements = [
  {
    title: "Keynote Speaker & Knowledge Contributor",
    description: "Delivered keynote speeches and lectures on environmental sustainability, plastic waste management, and circular economy approaches across seminars and academic platforms.",
    icon: <FiMic className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Publications & Research Contributions",
    description: "Contributed to research in environmental sustainability, plastic waste recycling, and advanced materials, with publications and participation in international conferences and knowledge forums.",
    icon: <FiFileText className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Environmental Project Implementation (UNOPS)",
    description: "Played a key role in implementing Environmental and Social Management Plans (ESMP), ensuring compliance, sustainability integration, and measurable environmental impact in field projects.",
    icon: <FiGlobe className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Project Development & Completion (Maskeeters)",
    description: "Led and contributed to the development and successful completion of innovative projects focused on plastic waste recycling, product development, and sustainable material solutions, translating research into practical applications.",
    icon: <FiBriefcase className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Innovation in Circular Economy Solutions",
    description: "Advanced the concept of waste-to-resource by working on initiatives that convert plastic waste into value-added and health-enhancing materials.",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "International Engagement & Collaboration",
    description: "Engaged in international research discussions and collaborative platforms, sharing insights on environmental innovation and sustainable development.",
    icon: <FiUsers className="w-6 h-6" />,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Mentorship & Capacity Building",
    description: "Supported students and young professionals through mentoring, promoting research engagement and sustainability-driven thinking.",
    icon: <FiHeart className="w-6 h-6" />,
    color: "bg-red-100 text-red-600"
  }
];

// Completed Projects
const completedProjects = [
  {
    title: "Plastic Free Rivers and Seas for South Asia (PLEASE Project)",
    organization: "UNOPS",
    period: "Apr 2024 – Jun 2025",
    description: "Successfully implemented interventions to reduce plastic pollution in rivers and coastal ecosystems across South Asia through integrated waste management and circular economy approaches.",
    link: "https://please-project.org/",
    icon: <FiGlobe className="w-5 h-5" />
  },
  {
    title: "Community-Based Reduction of Plastic Pollution in Bangladesh",
    organization: "UNOPS | In collaboration with Institute of Marine Sciences (University of Chittagong)",
    period: "Jun 2024 – Jun 2025",
    description: "Completed community-level initiatives promoting circular economy models and biodegradable product adoption, significantly reducing plastic pollution in targeted areas.",
    icon: <FiUsers className="w-5 h-5" />
  },
  {
    title: "Improved Flood Mitigation and Plastic Waste Management in Kallyanpur",
    organization: "UNOPS | In collaboration with RedOrange Communications",
    period: "Jun 2024 – Jun 2025",
    description: "Implemented integrated solutions combining flood risk mitigation with enhanced plastic waste collection and management in urban communities.",
    icon: <FiMapPin className="w-5 h-5" />
  },
  {
    title: "PRISTINE Project – Plastic Reduction in Sundarbans Ecosystem",
    organization: "UNOPS | In collaboration with Arannayk Foundation",
    period: "Jun 2024 – Jun 2025",
    description: "Successfully reduced plastic pollution in transboundary Sundarbans ecosystems through ecosystem-based and sustainable waste management strategies.",
    icon: <FiHeart className="w-5 h-5" />
  },
  {
    title: "Formalizing the Plastic Recycling Value Chain (RBU Initiative)",
    organization: "UNOPS | In collaboration with Bangladesh Petrochemical Company Limited (BPCL)",
    period: "Apr 2024 – Jun 2025",
    description: "Developed structured recycling business units, ensuring steady collection of recyclable plastics and promoting circular plastic economy practices.",
    icon: <FiTrendingUp className="w-5 h-5" />
  },
  {
    title: "Human-Centred Plastic Waste Management in Cox's Bazar",
    organization: "UNOPS | In collaboration with BRAC (UDP)",
    period: "Apr 2024 – Jun 2025",
    description: "Completed human-centered, community-driven waste management interventions in refugee-affected regions, combining environmental sustainability with social impact.",
    icon: <FiUsers className="w-5 h-5" />
  }
];

// Selected Publications
const selectedPublications = [
  {
    title: "Biodegradable and Flexible Fiber-Reinforced Composite Sheet from Tannery Solid Wastes: An Approach of Waste Minimization",
    journal: "Polymer Composites",
    year: "2023",
    citations: "30",
    description: "Developed sustainable composite materials from tannery waste, contributing to waste minimization and circular material innovation."
  },
  {
    title: "Development and Characterization of Chitosan-Based Antimicrobial Films: A Sustainable Alternative to Plastic Packaging",
    journal: "Cleaner Chemical Engineering",
    year: "2025",
    citations: "28",
    description: "Explores biodegradable packaging solutions as alternatives to conventional plastics with enhanced antimicrobial properties."
  },
  {
    title: "Tannery Shaving Dust-Based Charcoal Blended Adsorbent for Efficient Heavy Metal Remediation: An Experimental and Machine Learning Approach",
    journal: "Case Studies in Chemical and Environmental Engineering",
    year: "2025",
    description: "Combines material innovation and machine learning for effective environmental remediation of heavy metals."
  },
  {
    title: "Development of Chitosan-Based Hydrogel Containing Polyvinyl Alcohol, Cellulose and ZnO Nanoparticles for Biomedical Applications",
    journal: "Dhaka University Journal of Science",
    year: "2025",
    description: "Focuses on advanced biomaterials with potential environmental and biomedical applications."
  },
  {
    title: "Automatic Detection, Classification, and Segmentation of Sagittal MR Images for Diagnosing Prolapsed Lumbar Intervertebral Disc",
    journal: "Scientific Reports",
    year: "2025",
    description: "Demonstrates interdisciplinary application of AI in medical imaging and diagnostics."
  },
  {
    title: "Fabrication of Tannic Acid-Functionalized Sugarcane Fiber Reinforced Chitosan-Based Biocomposite Sheet",
    journal: "Bioresource Technology Reports",
    year: "2025",
    description: "Introduces sustainable antibacterial biocomposite materials for footwear applications."
  }
];

// Conference Contributions
const conferenceContributions = [
  "Biodegradable Composite Fabrication from Tannery Waste for Dye Removal (ICME 2024)",
  "PCM-Based Freeze-Thaw Performance Analysis (ICME 2024)",
  "Biocomposite Applications in Footwear Materials (ICMIEE 2022)",
  "Biodiesel Production from Tannery Waste"
];

export default function AchievementsPage() {
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
            {"Achievements".split("").map((letter, index) => (
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
            Key Milestones in Environmental Sustainability, Research, and Project Implementation
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Key Achievements Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiAward className="text-primary" />
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyAchievements.map((achievement, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Completed Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiBriefcase className="text-primary" />
            Completed Projects
          </h2>
          
          <div className="space-y-6">
            {completedProjects.map((project, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 py-2 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-primary mt-1">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.organization}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <FiCalendar className="w-3 h-3" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 ml-8">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm mt-2 ml-8 hover:underline"
                  >
                    <FiExternalLink className="w-3 h-3" />
                    please-project.org
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Selected Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiFileText className="text-primary" />
            Selected Publications
          </h2>
          
          <div className="space-y-5">
            {selectedPublications.map((pub, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{pub.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-2">
                  <span className="text-primary">{pub.journal}</span>
                  <span>{pub.year}</span>
                  {pub.citations && <span>Cited by {pub.citations}</span>}
                </div>
                <p className="text-gray-600 text-sm">{pub.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Conference & Early Research Contributions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiMic className="text-primary" />
            Conference & Early Research Contributions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conferenceContributions.map((contribution, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{contribution}</span>
              </div>
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
            <p className="text-gray-600 mb-8">
              Moments from project implementations, conferences, and professional engagements
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