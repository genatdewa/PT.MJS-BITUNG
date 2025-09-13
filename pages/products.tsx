import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';

const Products: React.FC = () => {
  const { t } = useTranslation('common');

  const fishTypes = [
    'cakalang', 'tuna', 'baby_tuna', 'maesang', 'tude', 
    'malalugis', 'suru', 'kababidak', 'deho', 'lamadang'
  ];

  const fishImages = {
    cakalang: '/images/ikan/cakalang.gif',
    tuna: '/images/ikan/tuna.gif',
    baby_tuna: '/images/ikan/baby_tuna.gif',
    maesang: '/images/ikan/maesang.gif',
    tude: '/images/ikan/tude.gif',
    malalugis: '/images/ikan/malalugis.gif',
    suru: '/images/ikan/suru.gif',
    kababidak: '/images/ikan/kababidak.gif',
    deho: '/images/ikan/deho.gif',
    lamadang: '/images/ikan/lamadang.gif'
  };

  return (
    <>
      <Head>
        <title>Produk Ikan - PT. Mitra Jaya Samudera</title>
        <meta name="description" content="Berbagai jenis ikan berkualitas tinggi dari PT. Mitra Jaya Samudera" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="gradient-bg py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {t('products.title')}
                </h1>
                <p className="text-xl text-sea-blue-700 mb-8 max-w-3xl mx-auto">
                  {t('products.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Fish Products Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {fishTypes.map((fishKey) => {
                  const fish = t(`products.fish_types.${fishKey}`, { returnObjects: true }) as any;
                  return (
                    <div key={fishKey} className="card group hover:scale-105 transition-transform duration-300">
                      <div className="fish-image-container mb-4">
                        <img
                          src={fishImages[fishKey as keyof typeof fishImages]}
                          alt={fish.name}
                          className="fish-image"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                          {fish.name}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {fish.description}
                        </p>
                        
                        <div className="flex justify-center space-x-2 lg:space-x-4">
                          <div className="bg-sea-blue-50 text-sea-blue-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                            Segar
                          </div>
                          <div className="bg-sea-blue-50 text-sea-blue-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                            Beku
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Quality Assurance Section */}
          <section className="py-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Standar Kualitas Internasional
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Semua produk ikan kami diproses dengan standar kualitas internasional untuk memastikan kesegaran dan keamanan pangan
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Kualitas Terjamin
                  </h3>
                  <p className="text-gray-600">
                    Semua ikan diproses dengan standar HACCP dan ISO
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Segar & Cepat
                  </h3>
                  <p className="text-gray-600">
                    Proses pendinginan cepat untuk menjaga kesegaran
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Lokal Indonesia
                  </h3>
                  <p className="text-gray-600">
                    Ditangkap langsung dari perairan Indonesia
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 ocean-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tertarik dengan Produk Ikan Kami?
              </h2>
              <p className="text-xl text-sea-blue-100 mb-8 max-w-2xl mx-auto">
                Hubungi kami untuk informasi harga dan pemesanan
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

export default Products;
