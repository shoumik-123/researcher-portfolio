import Container from '@/components/ui/Container';
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function ResearchJourneyPage() {
  const journey = [
    {
      year: "2020 - Present",
      title: "Interdisciplinary Researcher",
      institution: "University of Dhaka & KUET",
      description: "Specializing in waste valorization and sustainable materials development",
      highlights: [
        "Polymer composites research",
        "Antibiotic-resistant microbes analysis",
        "Environmental policy research"
      ]
    },
    {
      year: "2019 - 2020",
      title: "Research Assistant",
      institution: "CARS, University of Dhaka",
      description: "Worked under Dr. Latiful Bari on microbiology and waste management projects",
      highlights: [
        "Microbiological analysis",
        "Waste characterization",
        "Lab-based research"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">My Research Journey</h1>
        <p className="text-xl text-gray-600 mb-12">A path of discovery and innovation</p>

        <div className="space-y-8">
          {journey.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><FiCalendar className="text-primary" /> {item.year}</span>
                <span className="flex items-center gap-1"><FiMapPin className="text-primary" /> {item.institution}</span>
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-primary">•</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}