import Container from '@/components/ui/Container';
import { FiAward, FiBriefcase, FiGlobe } from 'react-icons/fi';

export default function CareerAchievementsPage() {
  const achievements = [
    {
      title: "UNOPS Technical Expert",
      achievement: "Bangladesh country technical focal point for $3.18M PLEASE project",
      year: "2022-2023"
    },
    {
      title: "7 Recycling Business Units",
      achievement: "Technical guidance for RBUs establishment for BPCL",
      year: "2021-2022"
    },
    {
      title: "SUP Recycling Facility",
      achievement: "Technical guidance for large-scale facility with ETP for BRAC",
      year: "2022-2023"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Career Achievements</h1>
        <p className="text-xl text-gray-600 mb-8">Professional milestones and contributions</p>

        <div className="space-y-4">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4">
              <FiBriefcase className="text-primary text-2xl flex-shrink-0" />
              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-1">{item.title}</h2>
                <p className="text-gray-700 mb-2">{item.achievement}</p>
                <p className="text-sm text-primary">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}