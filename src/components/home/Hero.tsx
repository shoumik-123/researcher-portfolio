'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { researcherInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {researcherInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-600 mb-6">
              {researcherInfo.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {researcherInfo.shortBio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/projects" size="lg">
                View Projects
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/profile.jpg"
              alt={researcherInfo.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}