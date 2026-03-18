// app/research/page.tsx
import Link from 'next/link';
import { FiBook, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi';

export default function ResearchPage() {
  return (
    <main className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-4">Research Journey</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        Exploring innovative solutions through systematic research and experimentation
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Link 
          href="/research/lab"
          className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
        >
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiBook className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-3">Lab Experimentations</h2>
          <p className="text-gray-600 mb-4">
            Hands-on laboratory work and experimental research across various domains
          </p>
          <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn more <FiArrowRight />
          </span>
        </Link>
        
        <Link 
          href="/research/youth"
          className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
        >
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiUsers className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-3">Youth Engagement</h2>
          <p className="text-gray-600 mb-4">
            Mentoring young researchers and fostering scientific curiosity in students
          </p>
          <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn more <FiArrowRight />
          </span>
        </Link>
        
        <Link 
          href="/research/phd"
          className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
        >
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiStar className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-3">My PhD Journey</h2>
          <p className="text-gray-600 mb-4">
            Doctoral research, dissertation work, and academic achievements
          </p>
          <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn more <FiArrowRight />
          </span>
        </Link>
      </div>
      
      {/* Research Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-primary/5 rounded-2xl p-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">10+</div>
          <div className="text-gray-600">Research Papers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">5+</div>
          <div className="text-gray-600">Conferences</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">20+</div>
          <div className="text-gray-600">Students Mentored</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">3</div>
          <div className="text-gray-600">Research Areas</div>
        </div>
      </div>
    </main>
  );
}