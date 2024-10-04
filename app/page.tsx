'use client';

import React from 'react';
import Link from 'next/link';

import './globals.css'

const HomePage: React.FC = () => {
  return (


    <section className="container py-5">
   
      <div className="hero-content text-center text-white py-5">
        <h1 className="display-4 fw-bold">Welcome to Dog Paradise</h1>
        <p className="lead">Find your favorite dog breeds and learn everything about them.</p>
        <div className="text-center my-4">
          <Link href="/dog" className="btn btn-primary btn-lg mx-2">Explore Breeds</Link>
          <Link href="/search" className="btn btn-secondary btn-lg mx-2">Look it</Link>
        </div>

      </div>

   
      
    </section>
  );
};

export default HomePage;
