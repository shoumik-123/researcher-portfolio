
'use client';
import { motion } from 'framer-motion';
import { ProjectType } from '@/types';

interface ProjectFiltersProps {
  activeFilter: ProjectType | 'all';
  onFilterChange: (filter: ProjectType | 'all') => void;
}

const filters: { value: ProjectType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'research', label: 'Research' },
  { value: 'industry', label: 'Industry' },
  { value: 'consultancy', label: 'Consultancy' },
  { value: 'mentoring', label: 'Mentoring' }
];

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            activeFilter === filter.value
              ? 'bg-primary-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-primary-50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}
