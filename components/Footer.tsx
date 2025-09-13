import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gradient-to-r from-sea-blue-800 to-sea-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo_mjs.gif" 
                  alt="PT. Mitra Jaya Samudera Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">{t('footer.company')}</h3>
              </div>
            </div>
            <p className="text-sea-blue-100 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">              
              <a href="#" className="text-sea-blue-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100079767482773" className="text-sea-blue-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer" >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.505 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.296h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sea-blue-200 hover:text-white transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sea-blue-200 hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sea-blue-200 hover:text-white transition-colors">
                  {t('navigation.fish')}
                </Link>
              </li>
              <li>
                <Link href="/ice" className="text-sea-blue-200 hover:text-white transition-colors">
                  {t('navigation.ice')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sea-blue-200 hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-2 text-sea-blue-100">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://www.google.com/maps/place/PT.+MITRA+JAYA+SAMUDERA/@1.4277439,125.123264,17z/data=!3m1!4b1!4m6!3m5!1s0x328705d93f2c3433:0xa6847c6a1876b620!8m2!3d1.4277439!4d125.1258389!16s%2Fg%2F11y7bqgygc?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Bitung - Sulawesi Utara, Indonesia
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 813-5555-2588 [BUDI]</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>marketing.mjs.btg@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-sea-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sea-blue-200 text-sm">
              {t('footer.rights')}
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sea-blue-200 text-sm">
                by Gentadewa
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
