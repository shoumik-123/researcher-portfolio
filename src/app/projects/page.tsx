import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | Hasan Ahmed',
  description: 'Research projects and initiatives by Hasan Ahmed',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Projects</h1>
          <p className="text-lg text-gray-600">
            A comprehensive overview of my research projects and initiatives in sustainable materials science,
            waste-to-resource innovation, and circular economy solutions.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sustainable Materials Development</h2>
            <p className="text-gray-700 mb-4">
              Development of biodegradable polymer composites and bioplastics from industrial and agricultural waste materials.
              Focus on creating high-value sustainable materials that can replace conventional plastics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Biopolymers</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Waste-to-Resource</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Circular Economy</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biomedical Hydrogels</h2>
            <p className="text-gray-700 mb-4">
              Research and development of advanced biomedical hydrogels for wound healing and tissue engineering applications.
              Integration of antimicrobial properties and controlled drug release mechanisms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Biomedical Engineering</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Hydrogels</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Wound Healing</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Environmental Remediation</h2>
            <p className="text-gray-700 mb-4">
              Development of innovative solutions for environmental remediation, including antibiotic-resistant
              microorganism control and ocean-bound plastic pollution mitigation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Environmental Science</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Microbiology</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Pollution Control</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            For detailed project information and collaboration opportunities, please{' '}
            <Link href="/contact" className="text-primary hover:text-primary-dark transition-colors font-medium">
              get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}