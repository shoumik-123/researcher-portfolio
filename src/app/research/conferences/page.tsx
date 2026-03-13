import Container from '@/components/ui/Container';
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';

export default function ConferencesPage() {
  const conferences = [
    {
      title: "International Conference on Sustainable Development",
      location: "Dhaka, Bangladesh",
      date: "2023",
      presentation: "Circular Economy Approaches in Bangladesh",
      type: "Oral Presentation"
    },
    {
      title: "Global Waste Management Symposium",
      location: "Virtual",
      date: "2022",
      presentation: "Polymer Composites from Industrial Waste",
      type: "Poster Presentation"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">International Conferences</h1>
        <p className="text-xl text-gray-600 mb-8">6+ international conference presentations</p>

        <div className="grid gap-6">
          {conferences.map((conf, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-3">{conf.title}</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-500">
                <span className="flex items-center gap-2"><FiCalendar className="text-primary" /> {conf.date}</span>
                <span className="flex items-center gap-2"><FiMapPin className="text-primary" /> {conf.location}</span>
                <span className="flex items-center gap-2"><FiUsers className="text-primary" /> {conf.type}</span>
              </div>
              <p className="text-gray-700">Presentation: {conf.presentation}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}