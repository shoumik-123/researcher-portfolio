import Container from '@/components/ui/Container';
import { FiFileText } from 'react-icons/fi';

export default function CertificatesPage() {
  const certificates = [
    {
      name: "Environmental Screening Specialist",
      issuer: "World Bank/SACEP",
      year: "2023"
    },
    {
      name: "Project Management Professional",
      issuer: "UNOPS",
      year: "2022"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Certificates</h1>
        <p className="text-xl text-gray-600 mb-8">Professional certifications</p>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <FiFileText className="text-primary text-2xl mb-3" />
              <h2 className="text-lg font-medium text-gray-900 mb-1">{cert.name}</h2>
              <p className="text-primary text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}