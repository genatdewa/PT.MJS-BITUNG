import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation('common');

  // Mapping untuk 5 ikan pertama yang ditampilkan di halaman utama
  const fishImages = {
    cakalang: '/images/ikan/cakalang.gif',
    tuna: '/images/ikan/tuna.gif',
    baby_tuna: '/images/ikan/baby_tuna.gif',
    maesang: '/images/ikan/maesang.gif',
    tude: '/images/ikan/tude.gif'
  };

  return (
    <>
      <Head>
        <title>PT. Mitra Jaya Samudera - Fisheries & Ice Production</title>
        <meta name="description" content="PT. Mitra Jaya Samudera - Specialist Fresh & Frozen Fish Production" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="gradient-bg py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-sea-blue-700 mb-8 max-w-4xl mx-auto">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                  {t('hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/products" className="btn-primary inline-block">
                    {t('hero.cta')}
                  </a>
                  <a href="/about" className="btn-secondary inline-block">
                    {t('navigation.about')}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('about.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('about.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.services.fishing')}
                  </h3>
                  <p className="text-gray-600">
                    Penangkapan ikan berkualitas tinggi dengan teknologi modern
                  </p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.services.fresh_fish')}
                  </h3>
                  <p className="text-gray-600">
                    Penjualan ikan segar dengan kualitas terbaik
                  </p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.services.frozen_fish')}
                  </h3>
                  <p className="text-gray-600">
                    Penjualan ikan beku dengan standar internasional
                  </p>
                </div>
                
                <div className="card text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.services.ice_production')}
                  </h3>
                  <p className="text-gray-600">
                    Produksi es balok berkualitas untuk industri perikanan
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fish Products Preview */}
          <section className="py-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('products.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('products.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Object.entries(t('products.fish_types', { returnObjects: true }) as Record<string, any>).slice(0, 5).map(([key, fish]) => (
                  <div key={key} className="card text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-sea-blue-100 to-sea-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <img 
                        src={fishImages[key as keyof typeof fishImages] || '/images/ikan/cakalang.gif'} 
                        alt={fish.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {fish.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {fish.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a href="/products" className="btn-primary">
                  Lihat Semua Produk Ikan
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 ocean-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tertarik dengan Produk Kami?
              </h2>
              <p className="text-xl text-sea-blue-100 mb-8 max-w-2xl mx-auto">
                Hubungi kami untuk informasi lebih lanjut tentang produk dan layanan kami
              </p>
              <a href="/contact" className="bg-white text-sea-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
                Hubungi Kami
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'id', ['common'])),
    },
  };
};

export default Home;
