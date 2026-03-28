import { Metadata } from 'next';
import Link from 'next/link';
import PublicationList from '@/components/publications/PublicationList';

export const metadata: Metadata = {
  title: 'Publications | Hasan Ahmed',
  description: 'Research publications and academic contributions by Hasan Ahmed',
};

export default function PublicationsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Publications</h1>
          <p className="text-lg text-gray-600 mb-8">
            A collection of my peer-reviewed publications, conference presentations, and academic contributions
            in the fields of environmental science, materials engineering, and sustainable development.
          </p>
        </div>

        <PublicationList />

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            For full-text access to publications or collaboration opportunities, please{' '}
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