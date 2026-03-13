import Container from '@/components/ui/Container';
import { FiUsers } from 'react-icons/fi';

export default function MentoringPage() {
  const students = [
    {
      name: "Student Name",
      program: "Master's Research",
      topic: "Biomedical Materials",
      period: "2023"
    },
    {
      name: "Student Name",
      program: "Undergraduate Thesis",
      topic: "Polymer Composites",
      period: "2022"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Mentoring & Student Supervision</h1>
        <p className="text-xl text-gray-600 mb-8">Guiding the next generation of researchers</p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-4 mb-6">
            <FiUsers className="text-primary text-3xl" />
            <div>
              <h2 className="text-2xl font-medium">Supervision Experience</h2>
              <p className="text-gray-600">Guided master's and undergraduate research</p>
            </div>
          </div>
          
          <div className="grid gap-4">
            {students.map((student, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 py-4">
                <h3 className="font-medium text-gray-900">{student.name}</h3>
                <p className="text-primary text-sm">{student.program}</p>
                <p className="text-gray-600 text-sm">Topic: {student.topic} · {student.period}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}