import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Hasan Ahmed</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Interdisciplinary researcher specializing in transforming waste into value-added, 
              health-enhancing materials. Committed to advancing innovative environmental solutions 
              and nurturing future changemakers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <FiLinkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <FiTwitter size={18} />
              </a>
              <a 
                href="https://scholar.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-white/80 hover:text-white transition-colors">
                  Research Journey
                </Link>
              </li>
              <li>
                <Link href="/experience/unops" className="text-white/80 hover:text-white transition-colors">
                  UN Experience
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-white/80 hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <FiMail size={16} className="text-white/60" />
                <a href="mailto:hasan.kuet16@gmail.com" className="hover:text-white transition-colors">
                  hasan.kuet16@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={16} className="text-white/60" />
                <span>+8801747137476</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin size={16} className="text-white/60" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Hasan Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}