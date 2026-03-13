import Container from '@/components/ui/Container';
import { FiFileText, FiExternalLink, FiAward } from 'react-icons/fi';

export default function AchievementsPublicationsPage() {
  const publications = [
    {
      title: "Valorization of Industrial Waste for Polymer Composite Development",
      authors: "Ahmed H, Rahman A, Dewanjee S",
      journal: "Journal of Environmental Management",
      year: 2023,
      citations: 15,
      type: "Scopus-indexed"
    },
    {
      title: "Antibiotic-Resistant Microbes in Leather Processing Waste",
      authors: "Ahmed H, Bari L, Ahmed S",
      journal: "Environmental Science and Pollution Research",
      year: 2022,
      citations: 23,
      type: "Scopus-indexed"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Research Publications</h1>
        <p className="text-xl text-gray-600 mb-8">Peer-reviewed publications and research outputs</p>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-medium text-gray-900">{pub.title}</h2>
                <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs">{pub.type}</span>
              </div>
              <p className="text-gray-600 mb-2">{pub.authors}</p>
              <p className="text-primary mb-3">{pub.journal}, {pub.year}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FiAward /> Citations: {pub.citations}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}