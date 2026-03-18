// app/experience/page.tsx
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <main className="container-custom py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Professional Experience</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Link 
          href="/experience/unops"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">UNOPS Experience</h2>
          <p className="text-gray-600">View my experience with UNOPS</p>
        </Link>
        
        <Link 
          href="/experience/bpcl"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">BPCL Experience</h2>
          <p className="text-gray-600">View my experience with BPCL</p>
        </Link>
        
        <Link 
          href="/experience/maskeeters"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Maskeeters Experience</h2>
          <p className="text-gray-600">View my experience with Maskeeters</p>
        </Link>
      </div>
    </main>
  );
}