'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { navItems } from '@/lib/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());

  const toggleSubMenu = (itemName: string) => {
    const newOpenSubMenus = new Set(openSubMenus);
    if (newOpenSubMenus.has(itemName)) {
      newOpenSubMenus.delete(itemName);
    } else {
      newOpenSubMenus.add(itemName);
    }
    setOpenSubMenus(newOpenSubMenus);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenSubMenus(new Set());
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary-600">
            Hasan Ahmed
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button className={`flex items-center hover:text-primary-600 transition-colors ${
                      isActive(item.path) ? 'text-primary-600 font-semibold' : 'text-gray-700'
                    }`}>
                      {item.name}
                      <FiChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.path && (
                          <Link
                            href={item.path}
                            className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                              isActive(item.path) ? 'text-primary-600 font-semibold' : 'text-gray-700'
                            }`}
                          >
                            Overview
                          </Link>
                        )}
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path!}
                            className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                              isActive(child.path) ? 'text-primary-600 font-semibold' : 'text-gray-700'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path!}
                    className={`hover:text-primary-600 transition-colors ${
                      isActive(item.path) ? 'text-primary-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            {navItems.map((item) => (
              <div key={item.name} className="mb-1">
                {item.children ? (
                  <div className="border-b border-gray-100 pb-2 mb-2">
                    <button
                      onClick={() => toggleSubMenu(item.name)}
                      className="flex items-center justify-between w-full py-3 px-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                    >
                      <span className={`font-medium ${isActive(item.path) ? 'text-primary-600' : 'text-gray-700'}`}>
                        {item.name}
                      </span>
                      {openSubMenus.has(item.name) ? (
                        <FiChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <FiChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openSubMenus.has(item.name) && (
                      <div className="ml-4 mt-2 space-y-1 pl-4 border-l-2 border-primary-200">
                        {item.path && (
                          <Link
                            href={item.path}
                            className={`block py-2 px-3 text-sm rounded-md hover:bg-primary-50 transition-colors ${
                              isActive(item.path) ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            Overview
                          </Link>
                        )}
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path!}
                            className={`block py-2 px-3 text-sm rounded-md hover:bg-primary-50 transition-colors ${
                              isActive(child.path) ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700'
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path!}
                    className={`block py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      isActive(item.path) ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}