'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

// Simplified loading component without styled-jsx
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    background: '#f9f9f9'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #2d3748',
      borderRadius: '50%',
      animationName: 'spin',
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Dynamic imports for below-the-fold content (removed ssr: false)
const ProjectsGrid = dynamic(() => import('../components/ProjectsGrid'), {
  loading: LoadingSpinner
});

export default function Home() {
  // Initialize performance monitoring on client side
  useEffect(() => {
    // Simple performance logging
    if (typeof window !== 'undefined') {
      console.log('Performance tracking initialized');
      
      // Basic performance observers
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log('Performance:', entry.name, entry.startTime + 'ms');
            }
          });
          observer.observe({ entryTypes: ['paint'] });
        } catch (e) {
          // Observer not supported
        }
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsGrid />
    </>
  );
}