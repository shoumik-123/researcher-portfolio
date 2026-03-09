'use client';
import { motion } from 'framer-motion';
import PublicationList from '@/components/publications/PublicationList';
import Container from '@/components/ui/Container';

export default function PublicationsPage() {
  return (
    <div className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            8+ international Scopus-indexed journals, 6+ conferences, and 2+ research posters
          </p>
        </motion.div>

        <PublicationList />
      </Container>
    </div>
  );
}