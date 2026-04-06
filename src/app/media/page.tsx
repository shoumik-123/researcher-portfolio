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
  FiMic,
  FiTrendingUp,
  FiTool,
  FiEye,
  FiTarget,
  FiVideo,
  FiPlay,
  FiTv,
  FiSpeaker,
  FiMessageSquare,
  FiExternalLink,
  FiFacebook,
  FiYoutube
} from 'react-icons/fi';

import { 
  researcherInfo,
  images
} from '@/lib/data';

// Get Media page data from images array
const mediaItems = images.filter(item => item.page === "/media" && item.type === "media");

// Image URL resolver
const resolveImageUrl = (image?: string): string => {
  if (!image) return '/images/media/default.jpg';
  
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

// Video URL resolver - converts various video URLs to embed format
const resolveVideoEmbed = (videoUrl?: string): string => {
  if (!videoUrl) return '';
  
  try {
    // Handle Facebook videos
    if (videoUrl.includes('facebook.com')) {
      // Extract Facebook video ID
      const fbMatch = videoUrl.match(/\/videos\/(\d+)/);
      if (fbMatch) {
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=0&autoplay=1`;
      }
      return videoUrl;
    }
    
    // Handle youtu.be short URLs
    if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    
    // Handle standard youtube.com URLs
    if (videoUrl.includes('youtube.com')) {
      // Handle live URLs
      if (videoUrl.includes('/live/')) {
        const videoId = videoUrl.split('/live/')[1]?.split('?')[0];
        if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      }
      // Handle watch URLs
      const urlParams = new URLSearchParams(videoUrl.split('?')[1]);
      const videoId = urlParams.get('v');
      if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
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
      if (videoUrl.includes('/live/')) {
        videoId = videoUrl.split('/live/')[1]?.split('?')[0];
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

// Process media items as blog-style posts
const mediaPosts = mediaItems.map((item, index) => ({
  id: item.id || `media-${index}`,
  title: item.title || item.name || 'Media Feature',
  description: item.description || '',
  image: resolveImageUrl(item.image),
  video: item.video || item.videoEmbed || '',
  videoEmbed: resolveVideoEmbed(item.videoEmbed || item.video),
  type: item.video || item.videoEmbed ? 'video' : 'image',
  thumbnail: item.video || item.videoEmbed ? getYouTubeThumbnail(item.video || item.videoEmbed) : resolveImageUrl(item.image)
}));

// Helper function to get platform icon
const getPlatformIcon = (url: string) => {
  if (url.includes('facebook.com')) return <FiFacebook className="w-4 h-4" />;
  if (url.includes('youtube.com') || url.includes('youtu.be')) return <FiYoutube className="w-4 h-4" />;
  return <FiExternalLink className="w-4 h-4" />;
};

// Helper function to get platform name
const getPlatformName = (url: string) => {
  if (url.includes('facebook.com')) return 'Facebook';
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'YouTube';
  return 'External Link';
};

export default function MediaPage() {
  const [key, setKey] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'images'>('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (index: number) => {
    setCurrentPost(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextPost = () => {
    const filteredPosts = getFilteredPosts();
    setCurrentPost((prev) => (prev + 1) % filteredPosts.length);
  };

  const prevPost = () => {
    const filteredPosts = getFilteredPosts();
    setCurrentPost((prev) => (prev - 1 + filteredPosts.length) % filteredPosts.length);
  };

  const getFilteredPosts = () => {
    if (activeTab === 'videos') return mediaPosts.filter(post => post.type === 'video');
    if (activeTab === 'images') return mediaPosts.filter(post => post.type === 'image');
    return mediaPosts;
  };

  const filteredPosts = getFilteredPosts();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextPost();
      if (e.key === 'ArrowLeft') prevPost();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activeTab]);

  // Media Statistics
  const mediaStats = [
    { label: "Keynote Speeches", value: mediaPosts.filter(p => p.title.includes('Keynote')).length.toString(), icon: <FiMic className="w-5 h-5" /> },
    { label: "Live Telecasts", value: mediaPosts.filter(p => p.title.includes('Live') || p.title.includes('TBS')).length.toString(), icon: <FiTv className="w-5 h-5" /> },
    { label: "Training Sessions", value: mediaPosts.filter(p => p.title.includes('Workshop') || p.title.includes('Trainer')).length.toString(), icon: <FiUsers className="w-5 h-5" /> },
    { label: "Research Features", value: mediaPosts.filter(p => p.title.includes('Research') || p.title.includes('Innovation')).length.toString(), icon: <FiFileText className="w-5 h-5" /> },
    { label: "International Collab", value: mediaPosts.filter(p => p.title.includes('Japan') || p.title.includes('International')).length.toString(), icon: <FiGlobe className="w-5 h-5" /> }
  ];

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
            {"Media & Features".split("").map((letter, index) => (
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
            Featured as Keynote Speaker, Trainer, and Expert in Environmental Sustainability
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
          <p className="text-gray-700 leading-relaxed text-justify text-lg">
            Hasan Ahmed has been featured in multiple platforms as a keynote speaker, trainer, and expert in environmental sustainability, circular economy, and innovative research. His media presence highlights his contributions to sustainable materials, waste management, and policy advocacy.
          </p>
        </motion.section>

    

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex gap-3 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'all'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              All Posts ({mediaPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'videos'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FiVideo className="w-4 h-4" />
              Videos ({mediaPosts.filter(p => p.type === 'video').length})
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-3 font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'images'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FiImage className="w-4 h-4" />
              Photos ({mediaPosts.filter(p => p.type === 'image').length})
            </button>
          </div>
        </motion.div>

        {/* Blog-style Media Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12"
        >
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Media Thumbnail */}
                  <div className="relative md:w-80 h-56 bg-gray-100 overflow-hidden">
                    {post.type === 'video' ? (
                      <>
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                            <FiPlay className="w-6 h-6 text-primary ml-0.5" />
                          </div>
                        </div>
                        {post.video && (
                          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 text-xs text-white flex items-center gap-1">
                            {getPlatformIcon(post.video)}
                            <span>{getPlatformName(post.video)}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                        }}
                      />
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        post.type === 'video' 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {post.type === 'video' ? <FiVideo className="w-3 h-3" /> : <FiImage className="w-3 h-3" />}
                        {post.type === 'video' ? 'Video' : 'Photo'}
                      </span>
                      {post.video && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          {getPlatformIcon(post.video)}
                          {getPlatformName(post.video)}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <span>View {post.type === 'video' ? 'video' : 'photo'}</span>
                        <FiExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <FiImage className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No media posts available in this category.</p>
            </div>
          )}
        </motion.section>
      </div>

      {/* Lightbox Modal for Media Posts */}
      {lightboxOpen && filteredPosts[currentPost] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <FiX className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevPost(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] mx-4 w-full" onClick={(e) => e.stopPropagation()}>
            {filteredPosts[currentPost]?.type === 'video' && filteredPosts[currentPost]?.videoEmbed ? (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black shadow-2xl">
                <iframe
                  src={filteredPosts[currentPost].videoEmbed}
                  title={filteredPosts[currentPost].title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={filteredPosts[currentPost]?.image}
                alt={filteredPosts[currentPost]?.title}
                className="max-w-full max-h-[80vh] mx-auto object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                }}
              />
            )}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{filteredPosts[currentPost]?.title}</h3>
              <p className="text-gray-300 mt-2">{filteredPosts[currentPost]?.description}</p>
              {filteredPosts[currentPost]?.video && (
                <a 
                  href={filteredPosts[currentPost].video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-primary hover:underline text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  {getPlatformIcon(filteredPosts[currentPost].video)}
                  View on {getPlatformName(filteredPosts[currentPost].video)}
                  <FiExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextPost(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredPosts.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentPost(idx); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentPost ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}