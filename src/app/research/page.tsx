/* eslint-disable react-hooks/immutability */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiCalendar, 
  FiMapPin, 
  FiUsers,
  FiFileText,
  FiStar,
  FiCheckCircle,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMic,
  FiTool,
  FiCpu,
  FiUserCheck,
  FiVideo
} from 'react-icons/fi';
import { images } from "@/lib/data";


// Get Research page data from images array
const researchMediaItems = images.filter(item => item.page === "/research" && item.type === "research");
const researchVideos = images.filter(item => item.page === "/research" && item.type === "video");

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/research/default.jpg';
  
  try {
    // Handle Google Drive URLs
    if (image.includes('drive.google.com')) {
      let fileId = null;
      const fileMatch = image.match(/\/d\/([^/]+)/);
      if (fileMatch) {
        fileId = fileMatch[1];
      }
      const idMatch = image.match(/[?&]id=([^&]+)/);
      if (idMatch) {
        fileId = idMatch[1];
      }
      if (fileId) {
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
    // return original
  }
  
  return videoUrl;
};

// Get YouTube thumbnail
const getYouTubeThumbnail = (videoUrl?: string): string => {
  if (!videoUrl) return '/images/placeholder.jpg';
  
  try {
    let videoId = null;
    if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
    }
    if (videoUrl.includes('youtube.com')) {
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
      videoId = urlParams.get('v');
    }
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
  } catch {
    // return placeholder
  }
  
  return '/images/placeholder.jpg';
};

// Process gallery images
const galleryImages = researchMediaItems.map((item, index) => ({
  id: item.id || `research-${index}`,
  title: item.title || item.name || 'Research Journey',
  description: item.description || 'Research documentation',
  image: resolveImageUrl(item.image)
}));

// Process videos
const videoItems = researchVideos.map((video, index) => ({
  id: video.id || `video-${index}`,
  title: video.title || 'Research Video',
  description: video.description || '',
  image: getYouTubeThumbnail(video.video || video.url),
  videoEmbed: resolveVideoEmbed(video.videoEmbed || video.video || video.url),
  video: true
}));

// Laboratories
const laboratories = [
  { name: "Automotive Lab, KUET", supervisor: "Dr. Mizan Sir (Professor, Mechanical Engineering Department)" },
  { name: "Chemistry Lab, KUET", supervisor: "Dr. Mamun Jamal Sir — co-author on a peer-reviewed publication" },
  { name: "Physics Lab, KUET", supervisor: "" },
  { name: "Software Learning Lab, KUET", supervisor: "" },
  { name: "Mechanical Workshop Lab, KUET", supervisor: "" },
  { name: "Basic Lab, BUET", supervisor: "" },
  { name: "Biomedical Engineering Lab, BUET", supervisor: "Dr. Tarek Arafat" },
  { name: "Instrumentation Lab, BMBT, University of Dhaka", supervisor: "Lecturer Imran Sir" },
  { name: "Microbiology Lab, Centre for Advanced Research in Sciences (CARS), University of Dhaka", supervisor: "Dr. Latiful Bari" }
];

// Lab Skills
const labSkills = [
  "FTIR", "XRD", "SEM", "HPLC", "AAS", "Cell Culture", 
  "Cell Viability & Cytotoxicity Assays", "Antibacterial Activity Analysis", 
  "UV Spectrophotometry", "pH Meter", "Vortex Mixer", "Electrospinning", 
  "Magnetic Stirring", "Hot Plate", "ISO Standard Testing"
];

// Publications Data
const publications = [
  {
    title: "Biodegradable and flexible fiber-reinforced composite sheet from tannery solid wastes: An approach of waste minimization",
    authors: "Hasan Ahmed, Md Ashikur Rahaman Noyon, Md. Elias Uddin, Mamun Jamal, and Sathish Kumar Palaniappan",
    journal: "Wiley Publications",
    year: 2024,
    type: "Q1 Journal",
    impactFactor: "5.2",
    highlights: [
      "Fabricated composite sheets from waste BD and SF",
      "Strong bonding and uniform surface quality were observed",
      "Improved thermal stability, gas barrier, and biodegradability",
      "Enhancements in tensile strength, elongation, hardness, and density",
      "Versatile, eco-friendly material for packaging and furnishings"
    ]
  },
  {
    title: "Automatic detection, classification, and segmentation of sagittal MR images for diagnosing prolapsed lumbar intervertebral disc",
    authors: "Hasan Ahmed (co-author)",
    journal: "Nature Publishing Group, Scientific Reports",
    year: 2024,
    type: "Q1 Journal",
    impactFactor: "4.996",
    highlights: [
      "Automated system for detecting and analyzing prolapsed lumbar intervertebral discs (PLID) in MRI images",
      "YOLOv8 framework for accurate region-of-interest detection (up to 99.50% mAP50)",
      "Weighted average ensemble models for classification (97.64% accuracy)",
      "Segmentation achieved 95.72% Dice score",
      "Enhances diagnostic accuracy and efficiency in PLID assessment"
    ]
  },
  {
    title: "Development and Characterization of Chitosan-Based Antimicrobial Films: A Sustainable Alternative to Plastic Packaging",
    authors: "Hasan Ahmed, Md. Ashikur Rahaman Noyon, Md. Elias Uddin*, Md. Mostoba Rafid, Md. Sabbir Hosen, and Rama Kanta Layek",
    journal: "Cleaner Chemical Engineering",
    year: 2025,
    volume: "11",
    issue: "21",
    pages: "100157",
    highlights: [
      "Biodegradable plastic film developed using chitosan from shrimp shells",
      "Material naturally breaks down in soil (81% in 2 months) and is safe for crops",
      "Antibacterial properties enhance food safety",
      "Sustainable path forward for food packaging"
    ]
  },
  {
    title: "Development of Chitosan-Based Hydrogel Containing Polyvinyl Alcohol, Cellulose and ZnO Nanoparticles for Potential Biomedical Applications",
    authors: "Suman Dewanjee, Hasan Ahmed, Mohammad Ali Tanvir, Muttakee Bin Ali, Safia Aktar Dipa, and Md. Ibrahim Al Imran",
    journal: "Biomedical Materials Journal",
    year: 2024,
    highlights: [
      "Biocompatible hydrogel developed using waste materials like shrimp shells and sugarcane bagasse",
      "Sustainable approach transforms discarded resources into valuable biomaterials",
      "Environmentally friendly solution for advanced healthcare needs"
    ]
  },
  {
    title: "Automated lumbar intervertebral disc identification and herniation detection in MR images using cascade CNN architecture",
    authors: "Md Abu Sayed, Ashiqur Rahman, Sadman Mohammad Nasif, Sudipto Halder, Akram Hossain, Hasan Ahmed, Muhammad Abdul Kadir",
    journal: "Medical Image Analysis Journal",
    year: 2024,
    highlights: [
      "Automated deep learning system for detecting and classifying lumbar intervertebral disc herniation",
      "YOLO framework for disc identification (up to 99.50% mAP50)",
      "Attention-enhanced VGG19 and ResNet50 models achieve 98.09% classification accuracy",
      "Aims to assist physicians by improving diagnostic efficiency"
    ]
  },
  {
    title: "Tannery Shaving Dust-Based Charcoal Blended Adsorbents for Efficient Heavy Metal Remediation: An Experimental and Machine Learning Approach",
    authors: "Md. Sabbir Hosen, Md. Sahariar Sahen, Hasan Ahmed, Md. Selim Reza, Pranta Bhowmik, Farzana Mim, Md. Badrul Islam, Md. Azizul Haque Khan Naim, Mohammad Majibur Rahman, Md. Mostafizur Rahman",
    journal: "Journal of Environmental Management",
    year: 2024
  },
  {
    title: "Fabrication of Tannic Acid-Functionalized Sugarcane Fiber Reinforced Chitosan-Based Biocomposite Sheet: A Sustainable Antibacterial Solution for Shoe Insoles",
    authors: "Rama Kanta Layek, Md. Sabbir Hosen, Md. Elias Uddin, Sadia Mim, Md. Ashikur Rahaman Noyon, Hasan Ahmed, Mst. Farhana Yeasmin, Subrata Paul",
    journal: "Bioresource Technology Reports (Elsevier)",
    volume: "32",
    year: 2025,
    highlights: [
      "Developed high-performance antibacterial biocomposite sheet using chitosan and tannic acid-functionalized cellulose fibers from sugarcane bagasse",
      "Achieved tensile strength of 29.58 MPa, 86% elongation, Shore D hardness of 54, and low water absorption (4.53%)",
      "Demonstrated strong antibacterial activity against 1.5 × 10⁵ CFU/mL bacterial suspension",
      "Effective, sustainable, and biodegradable solution for antibacterial shoe insoles and biomedical applications"
    ]
  }
];

// Conference Papers
const conferencePapers = [
  {
    title: "Secure Remote Patient Monitoring in Smart Wards using Blockchain and Encryption Techniques: A Functional Prototype",
    authors: "Md. Abu Sayed, Md. Alimul Islam, Hasan Ahmed, Muhammad Abdul Kadir, et al.",
    event: "International Conference on Telecommunications and Photonics (ICTP)",
    date: "December 2025",
    location: "Dhaka, Bangladesh",
    highlights: ["Developed a functional prototype integrating blockchain and encryption for secure, real-time remote patient monitoring in smart hospital wards."]
  },
  {
    title: "Mechanical Behavior of Hybrid Glass-Jute Fiber Composite Sheet in Honeycomb Core Sandwich Panels",
    authors: "Shafat Hasan, Hasan Ahmed, Md. Abu Sayed, Ahmed Seam, et al.",
    event: "15th International Conference on Mechanical Engineering (ICME 2025)",
    date: "December 2025"
  },
  {
    title: "Sustainable and Eco-Friendly Development of Tannery Solid Waste-Based Chitosan/Eggshell Antibacterial Composite Sheets",
    authors: "Hasan Ahmed*, Engr. Md. Sabbir Hosen, Muttakee Bin Ali et al.",
    event: "7th International Conference on Advances in Civil Engineering (ICACE 2024)",
    date: "December 2024"
  },
  {
    title: "Antibacterial Biocomposite Sheet from Tannery Waste: A Sustainable Waste-to-Worth Solution",
    authors: "Muttakee Bin Ali, Md. Ibrahim Al Imran, Rupok Kumar Nayak, Hasan Ahmed, et al.",
    event: "7th International Conference on Advances in Civil Engineering (ICACE 2024)",
    date: "December 2024"
  },
  {
    title: "Development and Performance Analysis of Biodegradable, Transparent Antimicrobial Bioplastic from Tannery Solid Waste",
    authors: "Nusrat Jahan, Aniqa Tasnim, Mohammad Ali Tanvir, Hasan Ahmed, et al.",
    event: "7th International Conference on Advances in Civil Engineering (ICACE 2024)",
    date: "December 2024"
  },
  {
    title: "Conversion and Characterization of Bio-Diesel from Tannery Solid Waste",
    authors: "Saad Ahmed, Iftehaj Rafa Rian, Hasan Ahmed, Engr. Md. Sabbir Hosen et al.",
    event: "2nd International Conference on Textile Science and Engineering (ICTSE 2024)",
    date: "May 2024"
  },
  {
    title: "Gentamicin-Loaded Sugarcane Fiber-Chitosan Hydrogel Sponge for Enhanced Skin Wound Healing",
    authors: "Hasan Ahmed, Md. Ibrahim Al Imran, Bipasha Sur, Kumar Paul, et al.",
    event: "International Conference on Physics in Medicine (ICPM-2025)",
    date: "October 2025",
    type: "Poster"
  },
  {
    title: "Enhancing Material Sustainability: A Review of Plastic and Rubber Manufacturing in Bangladesh",
    authors: "Hasan Ahmed*",
    event: "Master's Thesis",
    date: "June 2025"
  },
  {
    title: "Biodegradable and Antibacterial Chitosan-Based Tannic Acid-Coated Cellulosic Composite Film for Wound Dressing",
    authors: "Mohammad Ali Tanvir, Popi Khatun, Aniqa Tasnim, Hasan Ahmed, Md. Elias Uddin et al.",
    event: "International Conference on Mechanical Engineering (ICME 2023), BUET",
    date: "December 2023",
    type: "Poster"
  }
];

// Thesis Mentorship
const thesisMentorship = {
  masters: {
    title: "Supervised one master's student from the Biomedical and Physics Departments, University of Dhaka",
    description: "Led the development and fabrication of antibacterial sandwich composites, resulting in a publication in a peer-reviewed journal."
  },
  undergraduate: {
    title: "Guided four undergraduate students from the Biomedical Engineering Department, Jessore University of Science and Technology",
    projects: [
      "Developed non-toxic resin for improved project safety and sustainability",
      "Created customized antibacterial shoes from water hyacinth, reducing material costs by 20%",
      "Optimized chitosan extraction from crab shells using waste eggshells, enhancing efficiency",
      "Designed footwear using cigarette filters as a heavy metal separator, contributing to environmental protection"
    ]
  }
};

export default function ResearchPage() {
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
            {"Research Journey".split("").map((letter, index) => (
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
            Building a Sustainable Future Through Science
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* My Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6">My Story in Biomaterials and Environment</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              My research journey began in 2020 at Khulna University of Engineering & Technology (KUET), where I joined as a research associate under the mentorship of Dr. Elias Uddin. That year marked a turning point — it was where I discovered my deep passion for biopolymers and developed the skills to conduct independent, high-quality research.
            </p>
            <p>
              I began by exploring polymer composites and biodegradable alternatives to conventional plastics, focusing on sustainable materials that address real-world environmental challenges. Over time, my work expanded into biomedical applications, where I contributed to the development of wound-healing biomaterials and hydrogels. Through collaborations with Md. Ibrahim Al Imran (University of Dhaka) and Dr. Tarek Arafat (BUET), I gained strong expertise in biomedical engineering while also mentoring master's students in the field.
            </p>
            <p>
              Recognizing the critical role of microbiology and advanced analytical techniques, I joined the Centre for Advanced Research in Sciences (CARS) at the University of Dhaka—first as a research fellow under Dr. Asma Rahman and later as a research associate under Dr. Latiful Bari. There, I specialized in microbial identification, antibiotic-resistant microorganisms, and analytical methods such as AAS and HPLC, enabling me to design innovative biomaterials derived from waste resources.
            </p>
            <p>
              My research has also extended into phase-change materials for construction, bioplastic development, sustainable drainage sludge management, and marine microbial studies. From transforming industrial waste into high-value green materials to engineering next-generation biomedical solutions, my work is guided by a clear vision: to create sustainable biomaterials that protect both human health and the environment.
            </p>
          </div>
        </motion.section>

        {/* Laboratories Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiTool className="text-primary" />
            Labs Where I Have Worked
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {laboratories.map((lab, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <FiMic className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{lab.name}</h3>
                    {lab.supervisor && <p className="text-xs text-gray-500 mt-1">{lab.supervisor}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Lab Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiCpu className="text-primary" />
            Lab Skills
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {labSkills.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Thesis Mentorship Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiUserCheck className="text-primary" />
            Thesis Mentorship & Student Guidance
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FiUsers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Master's Student</h3>
              </div>
              <p className="text-gray-700 font-medium mb-2">{thesisMentorship.masters.title}</p>
              <p className="text-gray-600">{thesisMentorship.masters.description}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FiUsers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Undergraduate Students</h3>
              </div>
              <p className="text-gray-700 font-medium mb-3">{thesisMentorship.undergraduate.title}</p>
              <ul className="space-y-2">
                {thesisMentorship.undergraduate.projects.map((project, i) => (
                  <li key={i} className="flex gap-2 text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* International Journal Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiFileText className="text-primary" />
            International Journal Publications
          </h2>
          
          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 py-2 hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                  <span>{pub.journal}</span>
                  <span>{pub.year}</span>
                  {pub.type && <span className="text-primary font-medium">{pub.type}</span>}
                  {pub.impactFactor && <span>IF: {pub.impactFactor}</span>}
                  {pub.volume && <span>Vol. {pub.volume}</span>}
                </div>
                {pub.highlights && (
                  <ul className="space-y-1 mt-3">
                    {pub.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 text-sm flex gap-2">
                        <FiStar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* International Conference Papers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiMic className="text-primary" />
            International Conference Papers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferencePapers.map((paper, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{paper.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
                <p className="text-sm text-primary font-medium">{paper.event}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {paper.date}</span>
                  {paper.location && <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" /> {paper.location}</span>}
                  {paper.type && <span className="text-primary">{paper.type}</span>}
                </div>
                {paper.highlights && (
                  <ul className="mt-3 space-y-1">
                    {paper.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 text-xs flex gap-2">
                        <FiStar className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Photo Gallery Section */}
        {galleryImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
                    <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
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
            transition={{ delay: 0.65 }}
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
                    <h3 className="font-semibold text-sm line-clamp-1">{item.title}</h3>
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