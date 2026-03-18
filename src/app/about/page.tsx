// app/about/page.tsx
import Link from 'next/link';
import { FiAward, FiUsers, FiTrendingUp, FiFileText, FiArrowRight } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <main className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl">
        Professional background, achievements, and contributions
      </p>
      
      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-primary">HA</span>
              </div>
              <h2 className="text-2xl font-semibold text-primary">Hasan Ahmed</h2>
              <p className="text-gray-600">Researcher & Professional</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-primary mb-4">Biography</h3>
            <p className="text-gray-600 mb-4">
              I am a dedicated professional with extensive experience in research, project management, 
              and youth engagement. My journey spans across international organizations, corporate sectors, 
              and academic institutions, allowing me to develop a unique perspective on problem-solving 
              and innovation.
            </p>
            <p className="text-gray-600">
              Passionate about mentoring young researchers and contributing to meaningful projects that 
              create lasting impact in communities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Quick Links to Subpages */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link 
          href="/achievements"
          className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
        >
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiAward className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-3">Achievements</h2>
          <p className="text-gray-600 mb-4">
            Awards, recognitions, and key accomplishments throughout my career
          </p>
          <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            View achievements <FiArrowRight />
          </span>
        </Link>
        
        <Link 
          href="/achievements/training"
          className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
        >
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiUsers className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-3">Training & Consultancy</h2>
          <p className="text-gray-600 mb-4">
            Professional training programs and consultancy services offered
          </p>
          <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Explore programs <FiArrowRight />
          </span>
        </Link>
      </div>
    </main>
  );
}