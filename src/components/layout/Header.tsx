'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { 
  FiChevronDown, FiMenu, FiX, FiHome, FiBriefcase, 
  FiBook, FiAward, FiUsers, FiMic, FiTrendingUp,
  FiGlobe, FiFileText, FiStar, FiCalendar, FiMapPin,
  FiUser, FiEdit
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
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  // Get icon for menu items with better matching
  const getMenuIcon = (itemName: string, isChild: boolean = false, isWhite: boolean = false) => {
    const iconColor = isWhite ? "text-white" : "text-primary";
    const size = isChild ? 14 : 16;
    
    // More flexible icon matching using includes and lower case
    const nameLower = itemName.toLowerCase();
    
    if (nameLower.includes('home')) 
      return <FiHome size={size} className={iconColor} />;
    if (nameLower.includes('experience')) {
      if (nameLower.includes('unops')) return <FiGlobe size={size} className={iconColor} />;
      if (nameLower.includes('bpcl')) return <FiTrendingUp size={size} className={iconColor} />;
      if (nameLower.includes('maskeeters')) return <FiUsers size={size} className={iconColor} />;
      return <FiBriefcase size={size} className={iconColor} />;
    }
    if (nameLower.includes('research') || nameLower.includes('publication') || nameLower.includes('conference')) {
      if (nameLower.includes('publication')) return <FiFileText size={size} className={iconColor} />;
      if (nameLower.includes('conference')) return <FiCalendar size={size} className={iconColor} />;
      if (nameLower.includes('laboratory')) return <FiMapPin size={size} className={iconColor} />;
      if (nameLower.includes('mentor')) return <FiUsers size={size} className={iconColor} />;
      if (nameLower.includes('phd')) return <FiStar size={size} className={iconColor} />;
      return <FiBook size={size} className={iconColor} />;
    }
    if (nameLower.includes('about') || nameLower.includes('achievement') || nameLower.includes('training')) {
      if (nameLower.includes('achievement')) return <FiAward size={size} className={iconColor} />;
      if (nameLower.includes('training')) return <FiUsers size={size} className={iconColor} />;
      return <FiUser size={size} className={iconColor} />;
    }
    if (nameLower.includes('media') || nameLower.includes('blog')) {
      if (nameLower.includes('blog')) return <FiEdit size={size} className={iconColor} />;
      return <FiMic size={size} className={iconColor} />;
    }
    
    // Default icon
    return <FiFileText size={size} className={iconColor} />;
  };

const NavLink = ({ item, isMobile = false }: { item: NavItem; isMobile?: boolean }) => {
  if (item.children) {
    const isOpen = openDropdown === item.name;
    
    // If item has both path and children, make it a link with dropdown
    if (item.path) {
      return (
        <div 
          className="relative"
          onMouseEnter={() => !isMobile && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center">
            <Link
              href={item.path}
              className={`
                flex items-center gap-2 transition-all duration-200
                ${isMobile 
                  ? 'py-3 px-4 text-white/80 hover:text-white flex-1' 
                  : 'px-3 py-2 rounded-l-md text-sm font-medium text-white/80 hover:text-white'
                }
                ${isActive(item.path) ? 'text-white' : ''}
                relative group
              `}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              {getMenuIcon(item.name, false, true)}
              <span>{item.name}</span>
              {isActive(item.path) && !isMobile && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></span>
              )}
            </Link>
            
            {/* Dropdown toggle button */}
            <button
              onClick={() => setOpenDropdown(isOpen ? null : item.name)}
              className={`
                transition-all duration-200
                ${isMobile 
                  ? 'p-3 text-white/80 hover:text-white' 
                  : 'px-2 py-2 rounded-r-md text-sm font-medium text-white/80 hover:text-white border-l border-white/20'
                }
                ${isOpen ? 'text-white' : ''}
              `}
              aria-label="Toggle dropdown"
            >
              <FiChevronDown 
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                size={14} 
              />
            </button>
          </div>
          
          {/* Dropdown menu */}
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
    
    // If item has only children (no path), render as button only
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
        
        {/* Dropdown menu */}
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

  // Regular nav item (no children)
  if (!item.path) return null;
  
  const active = isActive(item.path);
  
  return (
    <Link
      href={item.path}
      className={`
        flex items-center gap-2 transition-all duration-200
        ${isMobile ? 'py-3 px-4 text-white/80 hover:text-white' : 'px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white'}
        ${active ? 'text-white' : ''}
        relative group
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'
    }`}>
      <div className="container-custom">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-2xl font-light text-white hover:opacity-90 transition-opacity"
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
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="py-4 pb-6 bg-primary/95 backdrop-blur-md rounded-b-2xl">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} isMobile />
                ))}
              </nav>
              
              {/* Decorative line */}
              <div className="h-px mt-6 bg-white/20 w-full"></div>
              <p className="text-center text-white/40 text-xs mt-4">
                © {new Date().getFullYear()} Hasan Ahmed
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}