'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { FiArrowLeft, FiCalendar, FiMapPin, FiLink, FiAward } from 'react-icons/fi';
import { getProjectBySlug } from '@/lib/projects';
import ProjectGallery from '@/components/projects/ProjectGallery';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <Link href="/projects" className="text-primary-600 hover:underline mt-4 block">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const primaryMedia = project.media.find(m => m.isPrimary) || project.media[0];

  return (
    <div className="py-12 bg-gray-50">
      <Container>
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          {primaryMedia && (
            <div className="relative h-96 w-full">
              <Image
                src={primaryMedia.url}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex gap-3 mb-3">
                  <Badge variant={project.type === 'research' ? 'research' : 'industry'}>
                    {project.type}
                  </Badge>
                  <Badge variant={project.status === 'completed' ? 'success' : 'warning'}>
                    {project.status}
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-xl text-gray-200">{project.summary}</p>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <div className="prose max-w-none">
                <ReactMarkdown>{project.fullDescription || project.description}</ReactMarkdown>
              </div>
            </div>

            {project.media.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
                <ProjectGallery media={project.media} />
              </div>
            )}

            {project.impact && project.impact.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact & Achievements</h2>
                <ul className="space-y-3">
                  {project.impact.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiAward className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Organization</p>
                  <p className="font-medium">{project.organization}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium flex items-center gap-2">
                    <FiCalendar className="text-primary-600" />
                    {project.duration.start} - {project.duration.end || 'Present'}
                  </p>
                </div>
                {project.location && (
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium flex items-center gap-1">
                      <FiMapPin className="text-primary-600" />
                      {project.location}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies & Methods</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.links && Object.keys(project.links).length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Links & Resources</h3>
                <div className="space-y-2">
                  {project.links.publication && (
                    <a 
                      href={project.links.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:underline"
                    >
                      <FiLink /> View Publication
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}