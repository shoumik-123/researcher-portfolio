
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import Badge from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const primaryMedia = project.media.find(m => m.isPrimary) || project.media[0];
  
  const typeColors = {
    research: 'research',
    industry: 'industry',
    consultancy: 'warning',
    mentoring: 'academic'
  };
  
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-48 overflow-hidden">
          {primaryMedia && (
            <Image
              src={primaryMedia.url}
              alt={project.title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          )}
          <div className="absolute top-2 right-2">
            <Badge variant={typeColors[project.type] as any}>
              {project.type}
            </Badge>
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant={project.status === 'completed' ? 'success' : 'warning'}>
              {project.status}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FiBriefcase className="text-primary-600" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-primary-600" />
              <span>{project.duration.start} - {project.duration.end || 'Present'}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-2">
                <FiMapPin className="text-primary-600" />
                <span>{project.location}</span>
              </div>
            )}
          </div>

          {project.impact && project.impact.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.impact.slice(0, 2).map((item, index) => (
                <span key={index} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                  {item}
                </span>
              ))}
              {project.impact.length > 2 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  +{project.impact.length - 2} more
                </span>
              )}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
