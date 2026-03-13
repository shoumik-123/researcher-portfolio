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
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <h1 className="text-4xl font-light text-gray-900 mb-4">Blog & Insights</h1>
        <p className="text-xl text-gray-600 mb-8">Thoughts on research and innovation</p>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-medium text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FiCalendar /> {post.date}</span>
                <span className="flex items-center gap-1"><FiUser /> {post.author}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}