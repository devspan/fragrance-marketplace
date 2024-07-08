// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Pakistan Fragrance Marketplace</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              {/* Featured products will go here */}
              <div className="text-center pt-8">
                <h2 className="text-2xl font-semibold text-gray-700">Featured Products</h2>
                <p className="mt-2 text-gray-500">Coming soon...</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="/products" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Browse Products</h5>
              <p className="font-normal text-gray-700">Explore our wide range of fragrances from various vendors.</p>
            </Link>
            <Link href="/vendors" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Our Vendors</h5>
              <p className="font-normal text-gray-700">Discover the talented fragrance creators on our platform.</p>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Pakistan Fragrance Marketplace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;