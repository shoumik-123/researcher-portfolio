'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
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
    setOpenMobileSubmenu(null);
  }, [pathname]);

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

  const handleMobileNavigation = (path: string) => {
    console.log('Navigating to:', path);
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
    // Use router.push for client-side navigation
    router.push(path);
  };

  const getMenuIcon = (itemName: string, isChild: boolean = false, isWhite: boolean = false) => {
    const iconColor = isWhite ? "text-white" : "text-primary";
    const size = isChild ? 14 : 16;
    
    const nameLower = itemName.toLowerCase();
    
    if (nameLower.includes('home')) 
      return <FiHome size={size} className={iconColor} />;
    if (nameLower.includes('experience')) {
      if (nameLower.includes('unops')) return <FiGlobe size={size} className={iconColor} />;
      if (nameLower.includes('bpcl')) return <FiTrendingUp size={size} className={iconColor} />;
      if (nameLower.includes('maskeeters')) return <FiUsers size={size} className={iconColor} />;
      return <FiBriefcase size={size} className={iconColor} />;
    }
    if (nameLower.includes('research')) {
      if (nameLower.includes('phd')) return <FiStar size={size} className={iconColor} />;
      return <FiBook size={size} className={iconColor} />;
    }
    if (nameLower.includes('about')) {
      return <FiUser size={size} className={iconColor} />;
    }
    if (nameLower.includes('media')) {
      return <FiMic size={size} className={iconColor} />;
    }
    if (nameLower.includes('achievement')) return <FiAward size={size} className={iconColor} />;
    if (nameLower.includes('training')) return <FiUsers size={size} className={iconColor} />;
    
    return <FiFileText size={size} className={iconColor} />;
  };

  // Mobile menu item renderer
  const renderMobileMenuItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isSubmenuOpen = openMobileSubmenu === item.name;

    if (hasChildren) {
      return (
        <div key={item.name} className="border-b border-white/10">
          {/* Parent item */}
          <div className="flex items-center justify-between">
            {item.path ? (
              <button
                onClick={() => handleMobileNavigation(item.path!)}
                className="flex-1 py-3 px-4 text-white/80 hover:text-white text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  {getMenuIcon(item.name, false, true)}
                  <span>{item.name}</span>
                </div>
              </button>
            ) : (
              <div className="flex-1 py-3 px-4 text-white/80">
                <div className="flex items-center gap-2">
                  {getMenuIcon(item.name, false, true)}
                  <span>{item.name}</span>
                </div>
              </div>
            )}
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMobileSubmenu(isSubmenuOpen ? null : item.name);
              }}
              className="p-3 text-white/80 hover:text-white"
            >
              <FiChevronDown 
                className={`transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                size={16} 
              />
            </button>
          </div>
          
          {/* Children */}
          {isSubmenuOpen && item.children && (
            <div className="pl-8 pb-2 space-y-1">
              {item.children.map((child) => (
                <button
                  key={child.path}
                  onClick={() => handleMobileNavigation(child.path!)}
                  className="w-full text-left block py-2 px-4 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {getMenuIcon(child.name, true, false)}
                    <span>{child.name}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Regular item (no children)
    return (
      <div key={item.name} className="border-b border-white/10">
        <button
          onClick={() => handleMobileNavigation(item.path!)}
          className="w-full text-left py-3 px-4 text-white/80 hover:text-white transition-colors"
        >
          <div className="flex items-center gap-2">
            {getMenuIcon(item.name, false, true)}
            <span>{item.name}</span>
          </div>
        </button>
      </div>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'
    }`}>
      <div className="container-custom">
        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-light text-white hover:opacity-90 transition-opacity"
          >
            Hasan Ahmed
          </Link>
          
          <nav className="flex items-center space-x-1" ref={dropdownRef}>
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.name;
              
              if (hasChildren) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center">
                      {item.path ? (
                        <Link
                          href={item.path}
                          className={`px-3 py-2 rounded-l-md text-sm font-medium text-white/80 hover:text-white transition-all duration-200 ${
                            isActive(item.path) ? 'text-white' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {getMenuIcon(item.name, false, true)}
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ) : (
                        <div className="px-3 py-2 text-sm font-medium text-white/80">
                          <div className="flex items-center gap-2">
                            {getMenuIcon(item.name, false, true)}
                            <span>{item.name}</span>
                          </div>
                        </div>
                      )}
                      
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                        className="px-2 py-2 rounded-r-md text-white/80 hover:text-white border-l border-white/20"
                      >
                        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={14} />
                      </button>
                    </div>
                    
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path!}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                              isActive(child.path) 
                                ? 'text-primary bg-primary/5' 
                                : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className={isActive(child.path) ? 'text-primary' : 'text-gray-400'}>
                              {getMenuIcon(child.name, true, false)}
                            </span>
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.path!}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white transition-all duration-200 ${
                    isActive(item.path) ? 'text-white' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {getMenuIcon(item.name, false, true)}
                    <span>{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Header */}
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
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="py-4 pb-6 bg-primary/95 backdrop-blur-md rounded-b-2xl max-h-[calc(100vh-64px)] overflow-y-auto">
              <nav className="space-y-0">
                {navItems.map((item) => renderMobileMenuItem(item))}
              </nav>
              
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