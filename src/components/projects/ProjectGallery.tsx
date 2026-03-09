
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectMedia } from '@/types';
import { FiX, FiPlay } from 'react-icons/fi';

interface ProjectGalleryProps {
  media: ProjectMedia[];
}

export default function ProjectGallery({ media }: ProjectGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<ProjectMedia | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === 'image' ? (
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={item.thumbnail || '/images/video-placeholder.jpg'}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <FiPlay className="text-white text-4xl" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-medium">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedMedia(null)}
            >
              <FiX size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <div className="relative h-full">
                  <Image
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  className="w-full h-full"
                  poster={selectedMedia.thumbnail}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{selectedMedia.title}</h3>
                {selectedMedia.description && (
                  <p className="text-gray-200">{selectedMedia.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
