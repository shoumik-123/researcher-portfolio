/* eslint-disable react-hooks/immutability */
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
  FiStar,
  FiCheckCircle,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiTool,

  FiUserCheck,
  FiHeart,
  FiAward,
  FiZap
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Youth Engagement page data from images array (all items matching the ID)
const youthMediaItems = images.filter(page => page.id === 'research-youth');
// Main page data
const youthPage = youthMediaItems[0];

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/research/youth-default.jpg';
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
const galleryImages = youthMediaItems.map((item) => ({ 
  id: item.id || `youth-${Math.random()}`,
  title: item.title || item.name || 'Youth Engagement',
  description: item.description || 'Youth gallery',
  image: resolveImageUrl(item.image),
  video: !!item.video || !!item.videoEmbed,
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
}));

// Mentorship Programs
const mentorshipPrograms = [
  {
    id: 1,
    title: "Research Mentorship Program",
    description: "Comprehensive mentorship program for undergraduate students interested in environmental research",
    duration: "2023 - Present",
    participants: "15+ students",
    activities: [
      "Weekly research guidance sessions",
      "Lab training and safety protocols",
      "Literature review techniques",
      "Research paper writing workshops"
    ],
    outcomes: [
      "5 research papers published",
      "3 conference presentations",
      "2 students pursuing higher studies abroad"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  },
  {
    id: 2,
    title: "Thesis Supervision",
    description: "Supervising undergraduate and master's thesis projects in biomedical and environmental sciences",
    duration: "2022 - Present",
    participants: "5 students",
    activities: [
      "Thesis topic selection and development",
      "Experimental design guidance",
      "Data analysis and interpretation",
      "Thesis writing and presentation preparation"
    ],
    outcomes: [
      "1 master's thesis completed with publication",
      "4 undergraduate theses completed",
      "2 students awarded best thesis"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  },
  {
    id: 3,
    title: "Summer Research Internship",
    description: "Intensive summer program introducing students to hands-on laboratory research",
    duration: "2023 Summer",
    participants: "8 students",
    activities: [
      "Laboratory technique training",
      "Research project execution",
      "Scientific writing workshops",
      "Research presentation skills"
    ],
    outcomes: [
      "8 students completed internship",
      "2 collaborative research projects",
      "1 research paper under preparation"
    ],
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  }
];

// Workshops & Training Sessions
const workshops = [
  {
    id: 1,
    title: "Introduction to Polymer Science",
    date: "March 2024",
    location: "KUET",
    participants: 25,
    description: "Workshop covering fundamentals of polymer synthesis, characterization, and applications",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  },
  {
    id: 2,
    title: "Research Methodology and Scientific Writing",
    date: "December 2023",
    location: "University of Dhaka",
    participants: 40,
    description: "Training on research design, data analysis, and academic paper preparation",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  },
  {
    id: 3,
    title: "Environmental Microbiology Techniques",
    date: "October 2023",
    location: "CARS, University of Dhaka",
    participants: 15,
    description: "Hands-on training on microbial culture, identification, and antibiotic resistance analysis",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  },
  {
    id: 4,
    title: "Circular Economy and Waste Management",
    date: "August 2023",
    location: "BUET",
    participants: 30,
    description: "Workshop on sustainable waste management and circular economy principles",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSRD5vI5t7_jetgsM2JY4P2neVT4eCr17oL-wfD3OpPQIpZ589_6lwwQ7Ks9cO1zCMxYS6BIPJs_OJErgnFJ_HbS3LExYULw4XhBUM66_25QRKfY3UGnriV0hJTfYBkAjsRtIDCBIdIs1xurhLtGKrr2oVQLTqliACxmNzZat1M4qdNbF0xamS4YEOxp3ymb5aeO0uxzEl4yMibCvKJrEHcVKygAEjzXYGDVuA=w1280"
  }
];

// Student Achievements
const studentAchievements = [
  {
    id: 1,
    student: "Suman Dewanjee",
    achievement: "Published research paper on chitosan-based hydrogel in peer-reviewed journal",
    year: "2024",
    type: "Publication"
  },
  {
    id: 2,
    student: "Mohammad Ali Tanvir",
    achievement: "Best presentation award at ICME 2023 conference",
    year: "2023",
    type: "Award"
  },
  {
    id: 3,
    student: "Popi Khatun",
    achievement: "Secured research fellowship for higher studies abroad",
    year: "2024",
    type: "Fellowship"
  },
  {
    id: 4,
    student: "Aniqa Tasnim",
    achievement: "Co-authored paper on antibacterial composites in international journal",
    year: "2023",
    type: "Publication"
  },
  {
    id: 5,
    student: "Md. Ashikur Rahaman Noyon",
    achievement: "Presented research at international conference (ICMIEE 2022)",
    year: "2022",
    type: "Conference"
  },
  {
    id: 6,
    student: "Saad Ahmed",
    achievement: "Research on biodiesel from tannery waste presented at ICTSE 2024",
    year: "2024",
    type: "Conference"
  }
];

// Mentoring Approach
const mentoringApproach = [
  {
    title: "Personalized Guidance",
    description: "One-on-one mentoring sessions tailored to each student's research interests and career goals",
    icon: <FiUserCheck className="w-6 h-6" />
  },
  {
    title: "Hands-on Training",
    description: "Practical laboratory training and real-world research experience",
    icon: <FiTool className="w-6 h-6" />
  },
  {
    title: "Career Development",
    description: "Guidance on academic pathways, graduate school applications, and research careers",
    icon: <FiAward className="w-6 h-6" />
  },
  {
    title: "Collaborative Research",
    description: "Encouraging teamwork and interdisciplinary research collaboration",
    icon: <FiUsers className="w-6 h-6" />
  }
];

export default function YouthEngagementPage() {
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
            {"Youth Engagement".split("").map((letter, index) => (
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
            {youthPage?.description || "Passionate about mentoring young researchers and fostering the next generation of scientists through guidance, training, and collaborative research opportunities"}
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
          <h2 className="text-3xl font-light text-gray-900 mb-4 flex items-center gap-3">
            <FiHeart className="text-primary" />
            My Commitment to Youth Development
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            I am deeply committed to mentoring and supporting the next generation of researchers. Through personalized guidance, hands-on training, and collaborative research opportunities, I strive to help young scientists develop the skills, confidence, and vision needed to pursue impactful careers in science and innovation. My mentoring approach emphasizes critical thinking, ethical research practices, and interdisciplinary collaboration, preparing students to address complex environmental and biomedical challenges.
          </p>
        </motion.section>

        {/* Mentorship Programs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiUserCheck className="text-primary" />
            Mentorship Programs
          </h2>
          
          <div className="space-y-12">
            {mentorshipPrograms.map((program) => (
              <div key={program.id} className="border-l-4 border-primary pl-6 py-2 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" /> {program.duration}</span>
                      <span className="flex items-center gap-1"><FiUsers className="w-4 h-4" /> {program.participants}</span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Activities:</p>
                      <ul className="space-y-1">
                        {program.activities.map((activity, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-600">
                            <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Outcomes:</p>
                      <ul className="space-y-1">
                        {program.outcomes.map((outcome, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-600">
                            <FiStar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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

        {/* Workshops & Training */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiBook className="text-primary" />
            Workshops & Training Sessions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{workshop.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" /> {workshop.date}</span>
                    <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" /> {workshop.location}</span>
                    <span className="flex items-center gap-1"><FiUsers className="w-3 h-3" /> {workshop.participants} participants</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Student Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiAward className="text-primary" />
            Student Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studentAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-gray-50 rounded-lg p-4 hover:bg-primary/5 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <FiStar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.student}</h3>
                    <p className="text-sm text-gray-600 mt-1">{achievement.achievement}</p>
                    <div className="flex gap-3 mt-2 text-xs">
                      <span className="text-primary">{achievement.year}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-500">{achievement.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mentoring Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiHeart className="text-primary" />
            My Mentoring Approach
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentoringApproach.map((approach, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {approach.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{approach.title}</h3>
                <p className="text-sm text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiImage className="text-primary" />
            Engagement Gallery
          </h2>
          <p className="text-gray-600 mb-8">
            Moments from mentorship sessions, workshops, and student research activities
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