import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';

const Ice: React.FC = () => {
  const { t } = useTranslation('common');

  const iceProducts = [
    {
      name: 'Es Balok Kecil',
      size: '5 kg',
      description: 'Es balok kecil untuk kebutuhan rumah tangga dan usaha kecil',
      features: ['Food grade', 'Bersih dan jernih', 'Tahan lama'],
      price: 'Rp 15.000'
    },
    {
      name: 'Es Balok Sedang',
      size: '10 kg',
      description: 'Es balok sedang untuk kebutuhan usaha menengah',
      features: ['Food grade', 'Kualitas premium', 'Pengiriman cepat'],
      price: 'Rp 25.000'
    },
    {
      name: 'Es Balok Besar',
      size: '25 kg',
      description: 'Es balok besar untuk kebutuhan industri dan restoran',
      features: ['Food grade', 'Standar HACCP', 'Kemasan khusus'],
      price: 'Rp 50.000'
    },
    {
      name: 'Es Balok Jumbo',
      size: '50 kg',
      description: 'Es balok jumbo untuk kebutuhan industri perikanan',
      features: ['Food grade', 'Standar internasional', 'Pengiriman khusus'],
      price: 'Rp 90.000'
    }
  ];

  return (
    <>
      <Head>
        <title>Produk Es Balok - PT. Mitra Jaya Samudera</title>
        <meta name="description" content="Produk es balok berkualitas tinggi dari PT. Mitra Jaya Samudera" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="gradient-bg py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {t('navigation.ice')}
                </h1>
                <p className="text-xl text-sea-blue-700 mb-8 max-w-3xl mx-auto">
                  Produksi dan penjualan es balok berkualitas tinggi untuk berbagai kebutuhan industri
                </p>
              </div>
            </div>
          </section>

          {/* Ice Production Overview */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Produksi Es Balok Berkualitas
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Kami memproduksi es balok dengan standar food grade yang aman untuk konsumsi dan industri. 
                    Menggunakan teknologi modern dan air bersih berkualitas tinggi untuk memastikan kualitas 
                    es balok yang konsisten dan tahan lama.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Es balok kami cocok untuk berbagai kebutuhan mulai dari rumah tangga, usaha kuliner, 
                    hingga industri perikanan dan farmasi. Kami melayani pengiriman ke seluruh Indonesia 
                    dengan jaminan kualitas terbaik.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="btn-primary">
                      Pesan Sekarang
                    </a>
                    <a href="/products" className="btn-secondary">
                      Lihat Produk Ikan
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-sea-blue-100 to-sea-blue-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl text-white">🧊</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Es Balok Food Grade
                      </h3>
                      <p className="text-sea-blue-700">
                        Kualitas Terjamin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ice Products */}
          <section className="py-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Produk Es Balok Kami
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Berbagai ukuran es balok untuk memenuhi kebutuhan yang berbeda
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {iceProducts.map((product, index) => (
                  <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-sea-blue-100 to-sea-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🧊</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="bg-sea-blue-50 text-sea-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                        {product.size}
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="text-sm text-gray-600 space-y-1 mb-6">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <svg className="w-4 h-4 text-sea-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="text-2xl font-bold text-sea-blue-600 mb-4">
                        {product.price}
                      </div>
                      
                      <a href="/contact" className="btn-primary w-full text-center">
                        Pesan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality Features */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Mengapa Memilih Es Balok Kami?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Standar kualitas tinggi yang kami terapkan dalam setiap produksi
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Food Grade
                  </h3>
                  <p className="text-gray-600">
                    Es balok kami memenuhi standar food grade yang aman untuk konsumsi dan industri makanan.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Air Bersih
                  </h3>
                  <p className="text-gray-600">
                    Menggunakan air bersih berkualitas tinggi yang telah melalui proses filtrasi dan sterilisasi.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Tahan Lama
                  </h3>
                  <p className="text-gray-600">
                    Es balok kami memiliki daya tahan yang lebih lama berkat proses pembekuan yang optimal.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Pengiriman Cepat
                  </h3>
                  <p className="text-gray-600">
                    Sistem pengiriman yang efisien dengan cold chain management untuk menjaga kualitas es.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Standar HACCP
                  </h3>
                  <p className="text-gray-600">
                    Proses produksi mengikuti standar HACCP untuk memastikan keamanan dan kualitas produk.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Teknologi Modern
                  </h3>
                  <p className="text-gray-600">
                    Menggunakan mesin dan teknologi terbaru untuk produksi es balok yang efisien dan berkualitas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 ocean-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Butuh Es Balok Berkualitas?
              </h2>
              <p className="text-xl text-sea-blue-100 mb-8 max-w-2xl mx-auto">
                Hubungi kami untuk informasi harga dan pemesanan es balok sesuai kebutuhan Anda
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

export default Ice;
