'use client';
import { motion } from 'framer-motion';
import { researcherInfo, education, expertise } from '@/lib/data';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

export default function AboutPage() {
  return (
    <div className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 whitespace-pre-line">
              {researcherInfo.longBio}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-primary-600 pl-4"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {expertise.map((item, index) => (
              <Badge key={index} variant="primary" className="text-base px-4 py-2">
                {item.icon} {item.name}
              </Badge>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}