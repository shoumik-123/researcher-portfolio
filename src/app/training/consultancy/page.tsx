import Container from '@/components/ui/Container';

export default function ConsultancyPage() {
  const consultancies = [
    {
      project: "SUP Recycling Facility",
      client: "BRAC",
      role: "Technical Expert",
      year: "2022-2023"
    },
    {
      project: "Recycling Business Units",
      client: "BPCL",
      role: "Technical Lead",
      year: "2021-2022"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Consultancy Work</h1>
        <p className="text-xl text-gray-600 mb-8">Professional consulting experience</p>

        <div className="grid gap-4">
          {consultancies.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-2">{item.project}</h2>
              <p className="text-primary mb-1">Client: {item.client}</p>
              <p className="text-gray-600">Role: {item.role} · {item.year}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}