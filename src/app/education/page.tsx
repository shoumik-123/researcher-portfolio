/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/immutability */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FiCalendar, 
  FiMapPin, 
  FiBook, 
  FiImage, 
  FiVideo,
  FiX, 
  FiChevronLeft, 
  FiChevronRight 
} from 'react-icons/fi';
import { images } from "@/lib/data";

// Filter education media items from central images array
const educationMediaItems = images.filter(
  item => item.page === "/education" && item.type === "education"
);

// Image URL Resolver (optimized for Google Drive)
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/education/default.jpg';

  try {
    if (image.includes('drive.google.com')) {
      let fileId = null;
      const fileMatch = image.match(/\/d\/([^/]+)/);
      if (fileMatch) fileId = fileMatch[1];

      const idMatch = image.match(/[?&]id=([^&]+)/);
      if (idMatch) fileId = idMatch[1];

      if (fileId) {
        return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
      }
    }
  } catch (error) {
    console.error('Error parsing image URL:', error);
  }

  return image;
};

// Separate Images and Videos for Gallery
const galleryImages = educationMediaItems
  .filter(item => item.image && !item.videoEmbed)
  .map((item, index) => ({
    id: item.id || `edu-img-${index}`,
    title: item.title || item.name || 'Education Milestone',
    description: item.description || '',
    image: resolveImageUrl(item.image),
  }));

const videoItems = educationMediaItems
  .filter(item => item.videoEmbed || item.video)
  .map((item, index) => ({
    id: item.id || `edu-video-${index}`,
    title: item.title || item.name || 'Education Video',
    description: item.description || '',
    image: resolveImageUrl(item.image) || 
           (item.videoEmbed ? `https://img.youtube.com/vi/${item.videoEmbed.split('/').pop()}/maxresdefault.jpg` : ''),
    videoEmbed: item.videoEmbed || '',
  }));

// Education Timeline Data
const educationData = [
  {
    id: 1,
    degree: "Professional Master's in Soil, Water and Environment",
    institution: "University of Dhaka",
    period: "Jun 2024 – Jul 2025",
    location: "Dhaka, Bangladesh",
    description: "This program strengthened my expertise in environmental systems with a focus on soil and water resource management, pollution control, and climate-resilient practices. Through advanced coursework and applied research, I developed a systems-level understanding of environmental challenges, including contamination pathways, ecosystem sustainability, and integrated resource management.",
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
    description: "My undergraduate studies provided a strong foundation in material science, industrial processing, and manufacturing systems, with a specialized focus on leather, footwear, and product engineering. This exposure shaped my transition toward environmental sustainability and circular economy solutions.",
    icon: <FiBook className="w-6 h-6" />,
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

export default function EducationPage() {
  const [key, setKey] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'images' | 'videos'>('images');

  useEffect(() => {
    const interval = setInterval(() => setKey(prev => prev + 1), 4000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number, tab: 'images' | 'videos') => {
    setActiveGalleryTab(tab);
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
    setCurrentItem(prev => (prev + 1) % currentItems.length);
  };

  const prevItem = () => {
    const currentItems = activeGalleryTab === 'images' ? galleryImages : videoItems;
    setCurrentItem(prev => (prev - 1 + currentItems.length) % currentItems.length);
  };

  // Keyboard navigation
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
            variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
          >
            {"Education".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
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
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Side */}
                  <div className="md:w-1/3">
                    <div className="sticky top-24 space-y-4">
                      <div className={`w-16 h-16 rounded-full ${edu.color} flex items-center justify-center`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{edu.degree}</h3>
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

                  {/* Right Side */}
                  <div className="md:w-2/3">
                    <p className="text-gray-700 leading-relaxed text-justify mb-6">
                      {edu.description}
                    </p>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FiBook className="text-primary" />
                      Key Areas of Study
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {idx < educationData.length - 1 && <hr className="border-gray-200 my-12" />}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Photo Gallery */}
        {galleryImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
              <FiImage className="text-primary" />
              Photo Gallery
              <span className="text-sm text-gray-500 font-normal">({galleryImages.length} photos)</span>
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

        {/* Video Gallery */}
        {videoItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6 flex items-center gap-3">
              <FiVideo className="text-primary" />
              Video Gallery
              <span className="text-sm text-gray-500 font-normal">({videoItems.length} videos)</span>
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
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FiVideo className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-gray-300 z-10">
            <FiX className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-10"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {activeGalleryTab === 'videos' && videoItems[currentItem] ? (
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`${videoItems[currentItem].videoEmbed}?autoplay=1`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ) : (
              galleryImages[currentItem] && (
                <img
                  src={galleryImages[currentItem].image}
                  alt={galleryImages[currentItem].title}
                  className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg shadow-2xl"
                />
              )
            )}

            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-semibold">
                {activeGalleryTab === 'videos' ? videoItems[currentItem]?.title : galleryImages[currentItem]?.title}
              </h3>
              <p className="text-gray-300 mt-3 text-lg">
                {activeGalleryTab === 'videos' ? videoItems[currentItem]?.description : galleryImages[currentItem]?.description}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 z-10"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {(activeGalleryTab === 'images' ? galleryImages : videoItems).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentItem(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentItem ? 'bg-white w-5' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}