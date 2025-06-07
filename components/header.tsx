"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Khóa học', href: '#courses' },
    { name: 'Giáo viên', href: '#teachers' },
    { name: 'Về WOO GROUP', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fadeInLeft">
            <div className="relative">
              <Globe className="h-8 w-8 text-[#FFEA00] animate-float" />
              <div className="absolute inset-0 h-8 w-8 text-[#083D77] opacity-30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#083D77] to-[#FFEA00] bg-clip-text text-transparent">
              WOO GROUP
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#083D77] hover:text-[#FFEA00] transition-all duration-300 font-medium relative group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFEA00] to-[#083D77] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block animate-fadeInRight">
            <Button className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFEA00] text-[#083D77] font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
              Liên hệ tư vấn
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#083D77] hover:text-[#FFEA00] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#083D77] hover:text-[#FFEA00] transition-colors duration-300 font-medium animate-fadeInLeft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-[#FFEA00] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFEA00] text-[#083D77] font-semibold px-6 py-2 rounded-full transition-all duration-300 w-fit animate-scaleIn">
                Liên hệ tư vấn
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}