import Container from '@/components/ui/Container';

export default function LaboratoryPage() {
  const labs = [
    {
      name: "CARS Laboratory",
      institution: "University of Dhaka",
      period: "2020 - Present",
      focus: "Polymer composites, Microbiology",
      techniques: ["Chemical modification", "Material characterization", "Microbiological analysis"]
    },
    {
      name: "Materials Science Lab",
      institution: "KUET",
      period: "2018 - 2019",
      focus: "Polymer composites",
      techniques: ["Composite preparation", "Mechanical testing", "SEM/TGA analysis"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Laboratory Experience</h1>
        <p className="text-xl text-gray-600 mb-8">Hands-on research experience</p>

        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-2">{lab.name}</h2>
              <p className="text-primary mb-1">{lab.institution}</p>
              <p className="text-sm text-gray-500 mb-4">{lab.period}</p>
              <p className="text-gray-700 mb-3">Focus: {lab.focus}</p>
              <div>
                <p className="font-medium text-sm text-gray-700 mb-2">Techniques:</p>
                <div className="flex flex-wrap gap-2">
                  {lab.techniques.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}