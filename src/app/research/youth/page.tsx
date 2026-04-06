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
  FiZap,
  FiMic,
  FiVideo
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Youth Engagement page data from images array
const youthMediaItems = images.filter(item => item.page === "/research/youth" && item.type === "research");
const youthVideos = images.filter(item => item.page === "/research/youth" && item.type === "video");

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/research/youth-default.jpg';
  
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
      // Handle shorts URLs
      if (videoUrl.includes('/shorts/')) {
        const videoId = videoUrl.split('/shorts/')[1]?.split('?')[0];
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
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

// Get YouTube thumbnail from video URL
const getYouTubeThumbnail = (videoUrl?: string): string => {
  if (!videoUrl) return '/images/placeholder.jpg';
  
  try {
    let videoId = null;
    
    // Handle youtu.be short URLs
    if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
    }
    
    // Handle standard youtube.com URLs
    if (videoUrl.includes('youtube.com')) {
      // Handle shorts URLs
      if (videoUrl.includes('/shorts/')) {
        videoId = videoUrl.split('/shorts/')[1]?.split('?')[0];
      } else {
        const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
        videoId = urlParams.get('v');
      }
    }
    
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
  } catch {
    // return placeholder
  }
  
  return '/images/placeholder.jpg';
};

// Process gallery images (items with images and no video)
const galleryImages = youthMediaItems
  .filter(item => item.image && !item.video && !item.videoEmbed)
  .map((item) => ({ 
    id: item.id || `youth-${Math.random()}`,
    title: item.title || item.name || 'Youth Engagement',
    description: item.description || 'Youth gallery',
    image: resolveImageUrl(item.image),
    video: false,
    videoEmbed: ''
  }));

// Process videos (items with video URLs)
const videoItems = youthVideos
  .filter(item => item.video || item.videoEmbed)
  .map((item) => ({ 
    id: item.id || `youth-video-${Math.random()}`,
    title: item.title || item.name || 'Youth Video',
    description: item.description || 'Youth engagement video',
    image: getYouTubeThumbnail(item.video || item.videoEmbed),
    video: true,
    videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video)
  }));

// JUST Mentorship Projects
const justProjects = [
  "Antibacterial customized shoes from water hyacinth (reduced material cost by 20%)",
  "Non-toxic resin development for improved project safety and sustainability",
  "Chitosan extraction from crab shells using waste eggshells as a green chemical",
  "Footwear designed as a heavy metal separator using cigarette filters for environmental protection"
];

// Keynote Topics
const keynoteTopics = [
  "Interdisciplinary research collaboration for advanced materials fabrication",
  "Research skills and career growth toolkit",
  "Sustainable waste management approaches",
  "Project management, effective communication, and SDG implementation"
];

export default function YouthEngagementPage() {
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
    if (currentItems.length === 0) return;
    setCurrentItem((prev) => (prev + 1) % currentItems.length);
  };

  const prevItem = () => {
    const currentItems = activeGalleryTab === 'images' ? galleryImages : videoItems;
    if (currentItems.length === 0) return;
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
            Inspiring and Empowering the Next Generation
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
          <p className="text-gray-700 leading-relaxed text-justify text-lg mb-6">
            I am passionate about mentoring young students and building the capacity of future environmental leaders through hands-on guidance, thesis supervision, and inspirational talks at universities.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify text-lg">
            <span className="font-semibold">My Commitment:</span> Through mentoring and speaking engagements, I help students bridge academic knowledge with real-world impact—turning ideas into sustainable solutions for a greener Bangladesh. I strongly believe that investing in young minds today is the most powerful way to create a circular and regenerative future.
          </p>
        </motion.section>

        {/* Student Mentoring & Thesis Mentorship */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiUserCheck className="text-primary" />
            Student Mentoring & Thesis Mentorship
          </h2>
          
          <div className="space-y-8">
            {/* JUST Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FiUsers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Jessore University of Science and Technology (JUST)</h3>
                  <p className="text-gray-600">Mentored four undergraduate students from the Biomedical Engineering Department on their final-year thesis projects</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">Guided them in developing practical, sustainable solutions including:</p>
              <ul className="space-y-2">
                {justProjects.map((project, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* University of Dhaka Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FiBook className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">University of Dhaka</h3>
                  <p className="text-gray-600">Supervised one Master's student from the Biomedical and Physics Departments</p>
                </div>
              </div>
              <p className="text-gray-700">Supervised the development and fabrication of antibacterial sandwich composites, which resulted in a peer-reviewed journal publication.</p>
            </div>
          </div>
        </motion.section>

        {/* Keynote Speeches & Lectures */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
            <FiMic className="text-primary" />
            Keynote Speeches & Lectures
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jessore University of Science and Technology (JUST)</h3>
              <p className="text-gray-700 mb-3">Delivered keynote lectures and interactive sessions on:</p>
              <ul className="space-y-2">
                {keynoteTopics.map((topic, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">United Nations Youth and Students Association of Bangladesh (UNYSAB)</h3>
              <p className="text-gray-700 mb-3">
                Served as Keynote Speaker and Trainer, inspiring young leaders on environmental innovation, research excellence, and youth empowerment.
              </p>
              <p className="text-gray-700 mt-3">
                Received an appreciation certificate from the President of UNYSAB for contributions to youth capacity building.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Photo Gallery Section */}
        {galleryImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
              <FiImage className="text-primary" />
              Photo Gallery
              <span className="text-sm text-gray-500 font-normal ml-2">
                ({galleryImages.length} photos)
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              Moments from mentorship sessions, keynote speeches, and student engagement activities
            </p>

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
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
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
            transition={{ delay: 0.35 }}
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
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                        <FiVideo className="w-7 h-7 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-gray-200 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* No Items Message */}
        {galleryImages.length === 0 && videoItems.length === 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <FiImage className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No gallery items available yet. Check back soon!</p>
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
          
          <div className="max-w-5xl max-h-[90vh] mx-4 w-full" onClick={(e) => e.stopPropagation()}>
            {activeGalleryTab === 'videos' && videoItems[currentItem] ? (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black shadow-2xl">
                <iframe
                  src={`${videoItems[currentItem].videoEmbed}?autoplay=1`}
                  title={videoItems[currentItem].title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              galleryImages[currentItem] && (
                <img
                  src={galleryImages[currentItem].image}
                  alt={galleryImages[currentItem].title}
                  className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg shadow-2xl"
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