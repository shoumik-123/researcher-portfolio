import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Hasan Ahmed</h3>
            <p className="text-gray-400 mb-4">
              Interdisciplinary researcher specializing in transforming waste into value-added materials.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/publications" className="text-gray-400 hover:text-white transition-colors">Publications</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail size={16} />
                <a href="mailto:hasan.kuet16@gmail.com" className="hover:text-white transition-colors">
                  hasan.kuet16@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={16} />
                <span>+8801747137476</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin size={16} />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hasan Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}