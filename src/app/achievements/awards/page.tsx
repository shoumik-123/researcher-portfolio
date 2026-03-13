import Container from '@/components/ui/Container';
import { FiAward } from 'react-icons/fi';

export default function AwardsPage() {
  const awards = [
    {
      title: "Research Excellence Award",
      organization: "University of Dhaka",
      year: "2023",
      description: "For outstanding contributions to environmental research"
    },
    {
      title: "Best Presentation Award",
      organization: "International Conference on Sustainable Development",
      year: "2022",
      description: "For research on polymer composites from industrial waste"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Awards & Recognition</h1>
        <p className="text-xl text-gray-600 mb-8">Honors and achievements</p>

        <div className="grid gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <FiAward className="text-primary text-2xl" />
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-1">{award.title}</h2>
                  <p className="text-primary mb-2">{award.organization} · {award.year}</p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}