import Container from '@/components/ui/Container';
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';
import Image from 'next/image';

export default function UNOPSExperiencePage() {
  const experiences = [
    {
      title: "Technical Expert - Environment",
      period: "2022 - Present",
      location: "Dhaka, Bangladesh",
      description: "Serving as Bangladesh country technical focal point for the World Bank-funded, SACEP-supported $3.18 million PLEASE project.",
      achievements: [
        "Provided technical leadership and environmental insights",
        "Led development and monitoring of 11+ ESMPs (approved by World Bank)",
        "Developed and monitored 4+ Environmental Screening (ESS) reports",
        "Technical guidance for SUP Recycling Facility for BRAC"
      ]
    },
    {
      title: "Technical Specialist",
      period: "2021 - 2022",
      location: "Dhaka, Bangladesh",
      description: "Provided technical expertise for environmental projects and recycling initiatives.",
      achievements: [
        "Supported mobile-based monitoring app development",
        "Technical guidance for 7 Recycling Business Units (RBUs)",
        "Environmental compliance monitoring"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">UNOPS Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Technical leadership and environmental expertise for sustainable development projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex flex-wrap gap-4 justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900 mb-2">{exp.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-primary" size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="text-primary" size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="bg-primary/5 px-4 py-2 rounded-full">
                  <FiBriefcase className="text-primary" size={20} />
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{exp.description}</p>
              
              <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <FiAward className="text-primary" />
                Key Achievements
              </h3>
              
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Project Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-primary/5 to-white p-6 rounded-xl border border-primary/10">
            <div className="text-3xl font-light text-primary mb-2">$3.18M</div>
            <div className="text-sm text-gray-600">Project Value</div>
          </div>
          <div className="bg-gradient-to-br from-secondary/5 to-white p-6 rounded-xl border border-secondary/10">
            <div className="text-3xl font-light text-secondary mb-2">11+</div>
            <div className="text-sm text-gray-600">ESMPs Developed</div>
          </div>
          <div className="bg-gradient-to-br from-accent/5 to-white p-6 rounded-xl border border-accent/10">
            <div className="text-3xl font-light text-accent mb-2">4+</div>
            <div className="text-sm text-gray-600">ESS Reports</div>
          </div>
        </div>
      </Container>
    </div>
  );
}