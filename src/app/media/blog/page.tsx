import Container from '@/components/ui/Container';
import { FiCalendar, FiUser } from 'react-icons/fi';

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Waste Management in Bangladesh",
      excerpt: "Exploring circular economy opportunities and challenges",
      date: "2024-01-15",
      author: "Hasan Ahmed"
    },
    {
      title: "Research Insights: Polymer Composites from Waste",
      excerpt: "Latest findings on sustainable materials development",
      date: "2023-12-10",
      author: "Hasan Ahmed"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">coming soon</h1>


      </Container>
    </div>
  );
}