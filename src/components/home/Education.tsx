'use client';
import { motion } from 'framer-motion';
import { education } from '@/lib/data';
import Card from '@/components/ui/Card';

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education Highlights</h2>
          <p className="section-subtitle mx-auto">
            Academic background and research collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                <p className="text-primary-600 font-medium mb-3">{item.institution}</p>
                <p className="text-gray-500 text-sm mb-4">{item.year}</p>
                <p className="text-gray-700">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}