/* eslint-disable react-hooks/immutability */
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
  FiFileText,
  FiStar,
  FiCheckCircle,
  FiGlobe,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiMic,
  FiTool,
  FiCpu,
  FiUserCheck,
  FiZap
} from 'react-icons/fi';

import { 
  researcherInfo,
  images 
} from '@/lib/data';

// Get Research page data from images array (all items matching the ID)
const researchMediaItems = images.filter(page => page.id === 'research');
// Main page data
const researchPage = researchMediaItems[0];

const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/research/default.jpg';
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
const galleryImages = researchMediaItems.map((item) => ({ 
  id: item.id || `research-${Math.random()}`,
  title: item.title || item.name || 'Research Journey',
  description: item.description || 'Research gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Publications Data
const publications = [
  {
    title: "Biodegradable and flexible fiber-reinforced composite sheet from tannery solid wastes: An approach of waste minimization",
    authors: "Hasan Ahmed, Md Ashikur Rahaman Noyon, Md. Elias Uddin, Mamun Jamal, and Sathish Kumar Palaniappan",
    journal: "Wiley Publications",
    year: 2024,
    type: "Q1 Journal",
    impactFactor: "5.2",
    link: "#",
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
    link: "#",
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
    link: "#",
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
    link: "#",
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
    link: "#",
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
    year: 2024,
    link: "#"
  }
];

// Conference Presentations
const conferences = [
  {
    title: "Preparation of Biocomposite Sheet Incorporation of Buffing Dust and Sugarcane Fiber: Its Application for Footwear as a Reinforcing Material",
    event: "ICMIEE 2022, KUET",
    date: "22-24 December 2022",
    location: "Khulna, Bangladesh",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Cr removed collagen from leather waste-based chitosan composite to remove dye: A novel reusable adsorbent",
    event: "ICME 2023, BUET",
    date: "18-19 December 2023",
    location: "Dhaka, Bangladesh",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Fine Sand Blended with Phase Change Materials (PCM): Evaluation of Freeze-Thaw Performance",
    event: "ICME 2023, BUET",
    date: "18-19 December 2023",
    location: "Dhaka, Bangladesh",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Biodegradable and Antibacterial Chitosan-Based Tannic Acid-Coated Cellulosic Composite Insole for Wound Dressing",
    event: "ICME 2023, BUET",
    date: "18-19 December 2023",
    location: "Dhaka, Bangladesh",
    authors: "Mohammad Ali Tanvir, Popi Khatun, Aniqa Tasnim, Hasan Ahmed, Md Sabbir Hosen, Mustafizur Rahman, Md Elias Uddin",
    link: "#"
  },
  {
    title: "Conversion and Characterization of Biodiesel from Tannery Solid Waste",
    event: "ICTSE 2024, BUTEX",
    date: "23-24 May 2024",
    location: "Dhaka, Bangladesh",
    authors: "Saad Ahmed, Iftehaj Rafa Rian, Hasan Ahmed, Sadman Sadik, Pranta Bhowmik, Md Ashikul Islam, Shoeb Rahman, Md Sabbir Hosen",
    link: "#"
  },
  {
    title: "Sustainable and eco-friendly development of tannery solid waste-based chitosan/eggshell antibacterial composite sheets",
    event: "ICACE 2024, CUET",
    date: "12-14 December 2024",
    location: "Chittagong, Bangladesh",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Antibacterial Biocomposite Sheet from Tannery Waste: A Sustainable Waste-to-Worth Solution",
    event: "ICACE 2024, CUET",
    date: "12-14 December 2024",
    location: "Chittagong, Bangladesh",
    role: "Corresponding Author",
    link: "#"
  },
  {
    title: "Development and performance analysis of biodegradable, transparent antimicrobial bioplastic from tannery solid waste",
    event: "ICACE 2024, CUET",
    date: "12-14 December 2024",
    location: "Chittagong, Bangladesh",
    role: "Corresponding Author",
    link: "#"
  }
];

// Thesis Mentorship
const thesisMentorship = [
  {
    level: "Master's Student",
    institution: "University of Dhaka",
    department: "Biomedical and Physics Department",
    title: "Supervised the development and fabrication of antibacterial sandwich composites, leading to a publication in a peer-reviewed journal",
    count: 1
  },
  {
    level: "Undergraduate Students",
    institution: "Jessore University of Science and Technology",
    department: "Biomedical Departments",
    projects: [
      "Guided the fabrication of non-toxic resin, enhancing the project's safety and sustainability",
      "The creation of antibacterial customized shoes from water hyacinth, reducing material costs by 20%",
      "Oversaw the extraction of chitosan from crab shell using waste eggshells as chemical, improving the efficiency",
      "Identified and mitigated threats from cigarette filters, developing footwear that functions as a heavy metal separator, contributing to environmental protection"
    ],
    count: 4
  }
];

// Laboratories
const laboratories = [
  { name: "Auto, KUET", supervisor: "Dr. Mizan Sir (Professor, Mechanical Department, KUET)", link: "#" },
  { name: "Chemistry Lab, KUET", supervisor: "Dr. Mamun Jamal Sir (Publication collaboration)", link: "#" },
  { name: "Physics Lab, KUET", supervisor: "", link: "#" },
  { name: "Software Learning Lab, KUET", supervisor: "Dr. Elias Uddin", link: "#" },
  { name: "Mechanical Workshop Lab, KUET", supervisor: "", link: "#" },
  { name: "Basic Lab, BUET", supervisor: "", link: "#" },
  { name: "Biomedical Weight Lab, BUET", supervisor: "Dr. Tarek Arafat", link: "#" },
  { name: "Instrumentation Lab, BMBT, DU", supervisor: "Lecturer Imran Sir", link: "#" },
  { name: "Microbiology Lab, CARS, University of Dhaka", supervisor: "Dr. Latiful Bari", link: "#" }
];

// Advanced Lab Equipment
const labEquipment = [
  "FTIR", "XRD", "SEM", "HPLC", "AAS Machine", 
  "Cell Culture", "Cell Viability", "Cell Cytotoxicity", "Antibacterial Activity Analysis"
];

export default function ResearchPage() {
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <a href="#" className="flex items-center gap-2 text-primary hover:underline">
              <FiGlobe /> Google Scholar
            </a>
            <a href="#" className="flex items-center gap-2 text-primary hover:underline">
              <FiGlobe /> Research Gate
            </a>
            <a href="#" className="flex items-center gap-2 text-primary hover:underline">
              <FiGlobe /> ORCID ID
            </a>
          </motion.div>
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
          <h2 className="text-3xl font-light text-gray-900 mb-6">My Story in Biopolymers and Environment</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              My journey as a researcher began in 2020 when I joined KUET as a research associate under the mentorship of Dr. Elias Uddin. That year became a turning point in my life—I discovered my passion for biopolymers and began shaping my ability to conduct independent research.
            </p>
            <p>
              I started by exploring polymer composites and biodegradable alternatives to conventional plastics, with the aim of creating sustainable materials for real-world challenges. Over time, my work expanded into biomedical applications, where I contributed to the development of wound-healing biomaterials and hydrogels. Collaborating with Md. Ibrahim al Imran (University of Dhaka) and later working with Dr. Tarik Arafat (BUET), I gained valuable experience in biomedical engineering and mentored master's students in the same field.
            </p>
            <p>
              To push my research further, I realized the importance of microbiology and advanced analytical skills. This led me to join the Centre for Advanced Research in Sciences (CARS), University of Dhaka, first as a Research Fellow under Dr. Asma Rahman and later as a Research Associate under Dr. Latiful Bari. Here, I immersed myself in microbial studies, microbial identification, and advanced techniques such as AAS and HPLC, enabling me to design innovative biomaterials from waste resources.
            </p>
            <p>
              Alongside these experiences, I collaborated with scientists like Bipasha Sur (BORI) on antibiotic-resistant microbial identification and worked with Dr. Noor Hosain while participating in specialized training on food security and pathogen culture. My research journey also branched into phase-change materials for road construction, bioplastic development, and sustainable drainage sludge management models, broadening my expertise in sustainable material science.
            </p>
            <p>
              From transforming waste into high-value materials to engineering next-generation biomedical solutions, my research is driven by a single vision: to create sustainable biomaterials that protect both human health and the environment.
            </p>
          </div>
        </motion.section>

        {/* Thesis Mentorship Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiUserCheck className="text-primary" />
            Thesis Mentorship
          </h2>
          
          <div className="space-y-8">
            {thesisMentorship.map((mentor, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{mentor.level}</h3>
                    <p className="text-gray-600">{mentor.institution} | {mentor.department}</p>
                  </div>
                </div>
                
                {mentor.projects ? (
                  <ul className="space-y-3 pl-4">
                    {mentor.projects.map((project, i) => (
                      <li key={i} className="flex gap-2 text-gray-700">
                        <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{mentor.title}</p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* International Journal Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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
                <a href={pub.link} className="inline-flex items-center gap-1 text-primary text-sm mt-3 hover:underline">
                  View Publication <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* International Conferences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiMic className="text-primary" />
            International Conference Presentations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{conf.title}</h3>
                <p className="text-sm text-primary font-medium">{conf.event}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {conf.date}</span>
                  <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" /> {conf.location}</span>
                </div>
                {conf.role && <p className="text-xs text-gray-400 mt-2">Role: {conf.role}</p>}
                <a href={conf.link} className="inline-flex items-center gap-1 text-primary text-sm mt-3 hover:underline">
                  View Paper <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Laboratories Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiTool className="text-primary" />
            Laboratories
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
                    <a href={lab.link} className="inline-flex items-center gap-1 text-primary text-xs mt-2 hover:underline">
                      Learn More <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Advanced Lab Equipment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiCpu className="text-primary" />
            Skills in Advanced Lab Equipment
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {labEquipment.map((equipment, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors">
                {equipment}
              </span>
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
            Research Gallery
          </h2>
          <p className="text-gray-600 mb-8">
            Visual documentation of laboratory work, experiments, and research activities
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