'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { 
  FiChevronDown, FiMenu, FiX, FiHome, FiBriefcase, 
  FiBook, FiAward, FiUsers, FiMic, FiTrendingUp,
  FiGlobe, FiFileText, FiStar, FiCalendar, FiMapPin
} from 'react-icons/fi';
import { navItems, NavItem } from '../../lib/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Handle mouse enter with delay
  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return pathname === path || pathname.startsWith(path.split('/')[1]);
  };

  // Get icon for menu items
  const getMenuIcon = (itemName: string, isChild: boolean = false, isWhite: boolean = false) => {
    const iconColor = isWhite ? "text-white" : "text-primary";
    const size = isChild ? 14 : 16;
    
    const iconMap: { [key: string]: React.JSX.Element } = {
      'Home': <FiHome size={size} className={iconColor} />,
      'Professional Experience': <FiBriefcase size={size} className={iconColor} />,
      'UNOPS Experience': <FiGlobe size={size} className={iconColor} />,
      'BPCL Experience': <FiTrendingUp size={size} className={iconColor} />,
      'Maskeeters Experience': <FiUsers size={size} className={iconColor} />,
      'Research Journey': <FiBook size={size} className={iconColor} />,
      'My Research Journey': <FiBook size={size} className={iconColor} />,
      'Publications': <FiFileText size={size} className={iconColor} />,
      'International Conferences': <FiCalendar size={size} className={iconColor} />,
      'Laboratory Experience': <FiMapPin size={size} className={iconColor} />,
      'Mentoring & Student Supervision': <FiUsers size={size} className={iconColor} />,
      'My PhD Journey': <FiStar size={size} className={iconColor} />,
      'Achievements': <FiAward size={size} className={iconColor} />,
      'Career Achievements': <FiTrendingUp size={size} className={iconColor} />,
      'Research Publications': <FiFileText size={size} className={iconColor} />,
      'Awards & Recognition': <FiAward size={size} className={iconColor} />,
      'Certificates': <FiFileText size={size} className={iconColor} />,
      'Training & Consultancy': <FiUsers size={size} className={iconColor} />,
      'SAIBES Activities': <FiGlobe size={size} className={iconColor} />,
      'Training Programs': <FiBook size={size} className={iconColor} />,
      'Consultancy Work': <FiBriefcase size={size} className={iconColor} />,
      'Youth Engagement Initiatives': <FiUsers size={size} className={iconColor} />,
      'Media & Blog': <FiMic size={size} className={iconColor} />,
      'Media Coverage': <FiMic size={size} className={iconColor} />,
      'Blog & Insights': <FiFileText size={size} className={iconColor} />,
    };
    return iconMap[itemName] || <FiFileText size={size} className={iconColor} />;
  };

  const NavLink = ({ item, isMobile = false }: { item: NavItem; isMobile?: boolean }) => {
    if (item.children) {
      const isOpen = openDropdown === item.name;
      
      return (
        <div 
          className="relative"
          onMouseEnter={() => !isMobile && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => isMobile ? setOpenDropdown(isOpen ? null : item.name) : null}
            className={`
              flex items-center gap-1.5 w-full text-left transition-all duration-200
              ${isMobile ? 'py-3 px-4 text-white/80 hover:text-white' : 'px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white'}
              ${isOpen ? 'text-white' : ''}
              group
            `}
          >
            <span className="flex items-center gap-2">
              {getMenuIcon(item.name, false, true)}
              <span>{item.name}</span>
            </span>
            <FiChevronDown 
              className={`transition-transform duration-200 ml-auto ${isOpen ? 'rotate-180 text-white' : 'text-white/60'}`}
              size={14} 
            />
          </button>
          
          {isOpen && (
            <div 
              className={`
                ${isMobile 
                  ? 'pl-6 space-y-1 mt-1 bg-white/5' 
                  : 'absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50'
                }
              `}
              onMouseEnter={() => !isMobile && setOpenDropdown(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children.map((child) => {
                const active = isActive(child.path);
                
                return (
                  <Link
                    key={child.path}
                    href={child.path || '#'}
                    className={`
                      flex items-center gap-3 transition-all duration-200
                      ${isMobile 
                        ? 'py-2.5 px-4 text-sm text-white/80 hover:text-white hover:bg-white/5' 
                        : 'px-4 py-2.5 text-sm hover:bg-primary/5'
                      }
                      ${active ? (isMobile ? 'text-white bg-white/10' : 'text-primary bg-primary/5') : (isMobile ? 'text-white/80' : 'text-gray-600 hover:text-primary')}
                      group/item
                    `}
                    onClick={() => {
                      setOpenDropdown(null);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <span className={active ? 'text-primary' : 'text-gray-400 group-hover/item:text-primary transition-colors'}>
                      {getMenuIcon(child.name, true, false)}
                    </span>
                    <span className="flex-1">{child.name}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    // Regular nav item (only Home)
    const active = isActive(item.path);
    
    return (
      <Link
        href={item.path || '#'}
        className={`
          flex items-center gap-2 transition-all duration-200
          ${isMobile 
            ? 'py-3 px-4 text-white/80 hover:text-white' 
            : 'px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white'
          }
          ${active ? 'text-white' : ''}
          relative
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {getMenuIcon(item.name, false, true)}
        <span>{item.name}</span>
        {active && !isMobile && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></span>
        )}
      </Link>
    );
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container-custom ">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="logo-text hover:opacity-90 transition-opacity"
          >
            Hasan Ahmed
          </Link>
          
          <nav className="flex items-center space-x-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>
        </div>

        {/* Tablet/Mobile Header */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="text-xl font-light text-white"
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
            <div className="mobile-menu">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} isMobile />
                ))}
              </nav>
              
              {/* Decorative line */}
              <div className="h-1 mt-6 bg-white/20 rounded-full w-20 mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}