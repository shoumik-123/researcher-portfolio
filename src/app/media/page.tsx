// app/media/page.tsx
import Link from 'next/link';
import { FiMic, FiEdit, FiCalendar, FiEye, FiArrowRight } from 'react-icons/fi';

export default function MediaPage() {
  // Sample blog posts - you can replace with actual data later
  const featuredPosts = [
    {
      title: "The Future of Research in Developing Countries",
      excerpt: "Exploring opportunities and challenges for researchers in emerging economies",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Youth Engagement in Scientific Research",
      excerpt: "How to inspire and mentor the next generation of researchers",
      date: "February 28, 2024",
      readTime: "4 min read"
    },
    {
      title: "Balancing Industry Experience with Academic Research",
      excerpt: "Lessons learned from working across corporate and research sectors",
      date: "February 10, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <main className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-4">Media & Blog</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        Insights, articles, and media appearances
      </p>
      
      {/* Main Blog Link */}
      <div className="mb-16">
        <Link 
          href="/media/blog"
          className="group block p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl hover:from-primary/10 hover:to-primary/20 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-white p-4 rounded-xl group-hover:scale-110 transition-transform">
              <FiEdit className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-primary">Blog & Insights</h2>
              <p className="text-gray-600">Read my latest thoughts and analyses</p>
            </div>
          </div>
          <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Visit blog <FiArrowRight />
          </span>
        </Link>
      </div>
      
      {/* Featured Posts Preview */}
      <h2 className="text-2xl font-semibold text-primary mb-6">Recent Posts</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {featuredPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FiCalendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiEye size={14} /> {post.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Media Appearances Section */}
      <div className="mt-16 bg-primary/5 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <FiMic className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Media Appearances</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="font-medium text-primary">Interview on Research Innovation</p>
            <p className="text-sm text-gray-500">Research Today Podcast • March 2024</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-medium text-primary">Panel Discussion: Youth in Science</p>
            <p className="text-sm text-gray-500">National Science Conference • January 2024</p>
          </div>
        </div>
      </div>
      <div className="aspect-video rounded-2xl overflow-hidden shadow-sm">
        <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/gCKwgLgb2Z4"
            title="Encore - Neelanjana (নীলাঞ্জনা) | Official Audio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
        </div>
      
      {/* Newsletter Signup */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-primary mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6">Subscribe to get notified about new blog posts</p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
          />
          <button className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}