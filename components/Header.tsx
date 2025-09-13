import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProductsOpen(!isProductsOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <header className="bg-gradient-to-r from-sea-blue-50 to-white shadow-lg sticky top-0 z-50 wave-header overflow-visible">
      {/* Wave Animation Elements */}
      <div className="wave"></div>
      <div className="wave-second"></div>
      <div className="wave-third"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/images/logo_mjs.gif" 
                  alt="PT. Mitra Jaya Samudera Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">PT. Mitra Jaya Samudera</h1>
                <p className="text-sm text-gray-600">Specialist in Fresh & Frozen Fish Production</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sea-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('navigation.home')}
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-sea-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('navigation.about')}
            </Link>
            
            {/* Products Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                onClick={toggleProducts}
                className="text-gray-700 hover:text-sea-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                aria-expanded={isProductsOpen ? 'true' : 'false'}
                aria-haspopup="true"
              >
                {t('navigation.products')}
                <svg className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isProductsOpen ? 'rotate-180' : ''
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[9999] border border-gray-100 transition-all duration-200 ${
                isProductsOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link 
                  href="/products" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-sea-blue-50 hover:text-sea-blue-600 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  {t('navigation.fish')}
                </Link>
                <Link 
                  href="/ice" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-sea-blue-50 hover:text-sea-blue-600 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  {t('navigation.ice')}
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="text-gray-700 hover:text-sea-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              {t('navigation.contact')}
            </Link>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage('id')}
                className={`px-3 py-1 text-sm rounded ${
                  router.locale === 'id' 
                    ? 'bg-sea-blue-600 text-white' 
                    : 'text-gray-600 hover:text-sea-blue-600'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm rounded ${
                  router.locale === 'en' 
                    ? 'bg-sea-blue-600 text-white' 
                    : 'text-gray-600 hover:text-sea-blue-600'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sea-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sea-blue-600 hover:bg-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sea-blue-600 hover:bg-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about')}
              </Link>
              <Link 
                href="/products" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sea-blue-600 hover:bg-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.fish')}
              </Link>
              <Link 
                href="/ice" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sea-blue-600 hover:bg-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.ice')}
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sea-blue-600 hover:bg-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
