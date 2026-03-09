
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { publications } from '@/lib/data';
import { Publication } from '@/types';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import Badge from '@/components/ui/Badge';

export default function PublicationList() {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference'>('all');
  
  const filteredPubs = filter === 'all' 
    ? publications 
    : publications.filter(p => p.type === filter);

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-all ${
            filter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('journal')}
          className={`px-4 py-2 rounded-lg transition-all ${
            filter === 'journal' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Journal Articles
        </button>
        <button
          onClick={() => setFilter('conference')}
          className={`px-4 py-2 rounded-lg transition-all ${
            filter === 'conference' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Conference Papers
        </button>
      </div>

      <div className="space-y-4">
        {filteredPubs.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant={pub.type === 'journal' ? 'primary' : 'warning'}>
                {pub.type}
              </Badge>
              {pub.featured && (
                <Badge variant="success">
                  <FiAward className="inline mr-1" /> Featured
                </Badge>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
            <p className="text-gray-700 mb-2">{pub.authors}</p>
            <p className="text-primary-600 mb-3">
              {pub.journal}, {pub.year}
              {pub.volume && `, ${pub.volume}`}
              {pub.issue && `(${pub.issue})`}
              {pub.pages && `:${pub.pages}`}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Citations: {pub.citations}
              </span>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
                >
                  <span>View Publication</span>
                  <FiExternalLink />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 