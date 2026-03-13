import Container from '@/components/ui/Container';
import { FiExternalLink } from 'react-icons/fi';

export default function MediaCoveragePage() {
  const media = [
    {
      title: "Feature on Environmental Innovation",
      outlet: "Daily Star",
      date: "2023",
      link: "#"
    },
    {
      title: "Interview on Waste Management",
      outlet: "Dhaka Tribune",
      date: "2022",
      link: "#"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Media Coverage</h1>
        <p className="text-xl text-gray-600 mb-8">In the news and media</p>

        <div className="grid gap-4">
          {media.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h2>
                <p className="text-primary text-sm">{item.outlet} · {item.date}</p>
              </div>
              <a href={item.link} className="text-gray-400 hover:text-primary">
                <FiExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}