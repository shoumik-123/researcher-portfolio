import Container from '@/components/ui/Container';
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';

export default function BPCLExperiencePage() {
  const experiences = [
    {
      title: "Technical Lead - Recycling Business Units",
      period: "2021 - 2022",
      location: "Bangladesh",
      description: "Provided technical guidance to establish 7 Recycling Business Units (RBUs) across Bangladesh.",
      achievements: [
        "Established 7 RBUs nationwide",
        "500+ tons recycled annually",
        "200+ direct beneficiaries",
        "Quality assurance protocols development"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">BPCL Experience</h1>
        <p className="text-xl text-gray-600 mb-12">Technical leadership in recycling and waste management</p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">{experiences[0].title}</h2>
              <div className="flex gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FiCalendar className="text-primary" /> {experiences[0].period}</span>
                <span className="flex items-center gap-1"><FiMapPin className="text-primary" /> {experiences[0].location}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-6">{experiences[0].description}</p>
          
          <h3 className="font-medium text-gray-900 mb-3">Key Achievements</h3>
          <ul className="grid md:grid-cols-2 gap-2">
            {experiences[0].achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600">
                <span className="text-primary">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}