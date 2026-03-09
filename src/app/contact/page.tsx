'use client';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { researcherInfo } from '@/lib/data';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  return (
    <div className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect for research collaborations, mentoring opportunities, or professional inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 text-center h-full">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${researcherInfo.email}`} className="text-primary-600 hover:underline">
                {researcherInfo.email}
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 text-center h-full">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href={`tel:${researcherInfo.phone}`} className="text-primary-600 hover:underline">
                {researcherInfo.phone}
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 text-center h-full">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-700">{researcherInfo.location}</p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/hasan27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FiLinkedin className="text-blue-600 text-xl" />
                  <span>LinkedIn</span>
                </div>
                <FiExternalLink className="text-gray-400" />
              </a>
              
              <a
                href={`https://wa.me/${researcherInfo.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">WhatsApp</span>
                </div>
                <FiExternalLink className="text-gray-400" />
              </a>
            </div>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}