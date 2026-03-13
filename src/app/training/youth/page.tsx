import Container from '@/components/ui/Container';
import { FiUsers } from 'react-icons/fi';

export default function YouthPage() {
  const initiatives = [
    {
      name: "Student Mentoring Program",
      description: "Guiding university students in research and leadership",
      participants: 25,
      year: "2023"
    },
    {
      name: "Research Skills Workshop",
      description: "Training on research methodology and scientific writing",
      participants: 40,
      year: "2022"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Youth Engagement Initiatives</h1>
        <p className="text-xl text-gray-600 mb-8">Fostering next-generation researchers</p>

        <div className="grid gap-6">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start gap-3">
                <FiUsers className="text-primary text-2xl" />
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-2">{item.name}</h2>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.participants} participants · {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}