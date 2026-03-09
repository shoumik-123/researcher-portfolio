'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import { ProjectType } from '@/types';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilters from '@/components/projects/ProjectFilters';
import Container from '@/components/ui/Container';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectType | 'all'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming waste into value through innovative research and industrial implementation
          </p>
        </motion.div>

        <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found for this category.</p>
          </div>
        )}
      </Container>
    </div>
  );
}