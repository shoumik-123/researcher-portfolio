'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX, FiBook, FiAward, FiUsers, FiBriefcase, FiHome, FiMail, FiFileText } from 'react-icons/fi';
import { navItems, NavItem } from '@/lib/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (path?: string) => {
    if (!path) return false;
    return pathname === path;
  };

  const getItemIcon = (itemName: string) => {
    const iconMap: { [key: string]: React.JSX.Element } = {
      'Projects': <FiBriefcase className="icon-primary" size={14} />,
      'Publications': <FiBook className="icon-secondary" size={14} />,
      'Grants': <FiAward className="icon-accent" size={14} />,
      'Conference Contributions': <FiBook className="icon-secondary" size={14} />,
      'Awards': <FiAward className="icon-accent" size={14} />,
      'Media': <FiFileText className="icon-warm" size={14} />,
      'News': <FiFileText className="icon-warm" size={14} />,
      'Teaching': <FiUsers className="icon-secondary" size={14} />,
      'Supervision': <FiUsers className="icon-secondary" size={14} />,
      'Peer-Reviews': <FiFileText className="icon-warm" size={14} />,
      'Editorial Roles': <FiFileText className="icon-warm" size={14} />,
      'Committee and Board Duties': <FiUsers className="icon-secondary" size={14} />,
      'Home': <FiHome className="icon-primary" size={14} />,
      'Testimonials': <FiUsers className="icon-accent" size={14} />,
      'CV': <FiFileText className="icon-warm" size={14} />,
      'Contact': <FiMail className="icon-primary" size={14} />,
    };
    return iconMap[itemName] || <FiFileText className="icon-gray" size={14} />;
  };

  const NavLink = ({ item, isMobile = false }: { item: NavItem; isMobile?: boolean }) => {
    if (item.children) {
      const isOpen = openDropdown === item.name;
      
      return (
        <div className="relative">
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item.name)}
            className={`flex items-center gap-1 w-full text-left transition-colors duration-200
              ${isMobile ? 'mobile-nav-link' : 'dropdown-button'}
              ${isOpen ? 'dropdown-button-open' : ''}`}
          >
            <span>{item.name}</span>
            <FiChevronDown 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
                isOpen ? 'icon-primary' : 'icon-gray'
              }`}
              size={16} 
            />
          </button>
          
          {isOpen && (
            <div className={isMobile ? 'pl-4 space-y-1 mt-1 ml-2 border-l-2 border-primary/30' : 'dropdown-menu'}>
              {item.children.map((child) => {
                const icon = getItemIcon(child.name);
                const active = isActive(child.path);
                
                return (
                  <Link
                    key={child.path}
                    href={child.path || '#'}
                    className={`
                      ${isMobile ? 'mobile-dropdown-item' : 'dropdown-item'}
                      ${active ? 'dropdown-item-active' : ''}
                    `}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {icon}
                    <span>{child.name}</span>
                    {active && !isMobile && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    // Regular nav items
    const active = isActive(item.path);
    const icon = getItemIcon(item.name);
    
    return (
      <Link
        href={item.path || '#'}
        className={`
          ${isMobile ? 'mobile-nav-link' : 'nav-link'}
          ${active ? 'nav-link-active' : ''}
          flex items-center gap-2
        `}
      >
        {icon}
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container-custom">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="group relative"
          >
            <span className="logo-text">
              Hasan Ahmed
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <nav className="flex items-center space-x-2" ref={dropdownRef}>
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex justify-between items-center py-4">
            <Link 
              href="/" 
              className="logo-text text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hasan Ahmed
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`mobile-menu-button ${isMobileMenuOpen ? 'mobile-menu-button-open' : ''}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu animate-fadeIn">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} isMobile />
                ))}
              </nav>
              
              {/* Decorative gradient line */}
              <div className="h-1 mt-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full w-20 mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}