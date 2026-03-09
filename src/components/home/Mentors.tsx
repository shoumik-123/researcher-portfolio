'use client';
import { motion } from 'framer-motion';
import { mentors } from '@/lib/data';
import Card from '@/components/ui/Card';
import { FiUser } from 'react-icons/fi';

export default function Mentors() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Mentors & Colleagues</h2>
          <p className="section-subtitle mx-auto">
            Grateful to the incredible mentors who shaped my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiUser className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-primary-600 text-sm mb-1">{mentor.title}</p>
                    <p className="text-gray-500 text-sm mb-2">{mentor.organization}</p>
                    {mentor.description && (
                      <p className="text-gray-700 text-sm">{mentor.description}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}