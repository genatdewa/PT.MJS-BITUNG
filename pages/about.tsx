import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';

const About: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Tentang Kami - PT. Mitra Jaya Samudera</title>
        <meta name="description" content="Tentang PT. Mitra Jaya Samudera - Perusahaan perikanan terpercaya" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="gradient-bg py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {t('about.title')}
                </h1>
                <p className="text-xl text-sea-blue-700 mb-8 max-w-3xl mx-auto">
                  Mengenal lebih dekat PT. Mitra Jaya Samudera
                </p>
              </div>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Profil Perusahaan
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {t('about.description')}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Dengan pengalaman bertahun-tahun di industri perikanan, kami telah membangun reputasi yang solid sebagai penyedia ikan berkualitas tinggi. Komitmen kami terhadap kualitas, keamanan pangan, dan kepuasan pelanggan menjadi landasan utama dalam setiap operasional perusahaan.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/products" className="btn-primary">
                      Lihat Produk Kami
                    </a>
                    <a href="/contact" className="btn-secondary">
                      Hubungi Kami
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/MJS_Dpn.jpg?w=800&h=600&fit=crop"
                      alt="PT. Mitra Jaya Samudera - Perusahaan Perikanan"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        PT. Mitra Jaya Samudera
                      </h3>
                      <p className="text-sea-blue-100">
                        Fresh & Frozen Fisheries Production & Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Detail */}
          <section className="py-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Layanan Kami
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Kami menyediakan layanan lengkap di bidang perikanan dengan standar internasional
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 ocean-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t('about.services.fishing')}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Melakukan penangkapan ikan dengan teknologi modern dan metode yang ramah lingkungan. Kami menggunakan kapal-kapal yang dilengkapi dengan peralatan canggih untuk memastikan hasil tangkapan yang optimal.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Kapal penangkap ikan modern</li>
                        <li>• Teknologi GPS dan sonar</li>
                        <li>• Metode penangkapan berkelanjutan</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 ocean-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t('about.services.fresh_fish')}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Menyediakan ikan segar berkualitas tinggi dengan proses pendinginan yang tepat untuk menjaga kesegaran dan kualitas produk.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cold chain management</li>
                        <li>• Pengemasan higienis</li>
                        <li>• Pengiriman cepat</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 ocean-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t('about.services.frozen_fish')}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Memproduksi ikan beku dengan teknologi flash freezing untuk menjaga kualitas dan nutrisi ikan dalam jangka waktu yang lebih lama.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Flash freezing technology</li>
                        <li>• Standar HACCP</li>
                        <li>• Kemasan vacuum seal</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <div className="flex items-start">
                    <div className="w-12 h-12 ocean-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t('about.services.ice_production')}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Memproduksi es balok berkualitas tinggi untuk kebutuhan industri perikanan dan kebutuhan komersial lainnya.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Es balok food grade</li>
                        <li>• Kapasitas produksi besar</li>
                        <li>• Pengiriman tepat waktu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nilai-Nilai Perusahaan
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Landasan yang memandu setiap aktivitas dan keputusan kami
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Kualitas Terbaik
                  </h3>
                  <p className="text-gray-600">
                    Kami berkomitmen menyediakan produk dengan kualitas terbaik melalui proses yang ketat dan standar internasional.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Keberlanjutan
                  </h3>
                  <p className="text-gray-600">
                    Kami mendukung praktik perikanan berkelanjutan untuk menjaga ekosistem laut dan masa depan industri perikanan.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Kepercayaan
                  </h3>
                  <p className="text-gray-600">
                    Membangun hubungan jangka panjang berdasarkan kepercayaan, transparansi, dan kepuasan pelanggan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 ocean-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bergabunglah dengan Kami
              </h2>
              <p className="text-xl text-sea-blue-100 mb-8 max-w-2xl mx-auto">
                Mari bekerja sama untuk memenuhi kebutuhan ikan berkualitas tinggi Anda
              </p>
              <a href="/contact" className="bg-white text-sea-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
                Hubungi Kami Sekarang
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

export default About;
