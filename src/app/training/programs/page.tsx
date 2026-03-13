import Container from '@/components/ui/Container';

export default function TrainingProgramsPage() {
  const programs = [
    {
      title: "Environmental Management Training",
      organization: "UNOPS",
      participants: 50,
      year: "2023"
    },
    {
      title: "Recycling Technologies Workshop",
      organization: "BPCL",
      participants: 30,
      year: "2022"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Training Programs</h1>
        <p className="text-xl text-gray-600 mb-8">Conducted and facilitated trainings</p>

        <div className="grid gap-4">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-2">{program.title}</h2>
              <p className="text-primary mb-1">{program.organization}</p>
              <p className="text-gray-600">Participants: {program.participants} · {program.year}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}