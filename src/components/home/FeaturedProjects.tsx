'use client';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/lib/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import Button from '@/components/ui/Button';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Key initiatives in waste valorization and environmental sustainability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/projects" variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}