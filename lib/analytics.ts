// Simplified analytics without web-vitals dependency
function sendToAnalytics(metric: any) {
  // In development, just log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', metric);
    return;
  }

  // In production, you could send to analytics services
  console.log('Performance Metric:', metric);
}

export function reportWebVitals() {
  if (typeof window === 'undefined') return;

  // Use the built-in Next.js Web Vitals reporting
  // This will be available in the browser console
  console.log('Web Vitals tracking initialized');
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Observe long tasks (tasks > 50ms)
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Long task detected:', entry.duration + 'ms');
          sendToAnalytics({
            name: 'long-task',
            value: entry.duration,
            timestamp: entry.startTime
          });
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task observer not supported
    }

    // Observe largest contentful paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime + 'ms');
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          timestamp: Date.now()
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP observer not supported
    }

    // Observe first contentful paint
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FCP:', entry.startTime + 'ms');
          sendToAnalytics({
            name: 'FCP',
            value: entry.startTime,
            timestamp: Date.now()
          });
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // FCP observer not supported
    }
  }
}

// Alternative: Use Next.js built-in Web Vitals
export function useNextWebVitals() {
  if (typeof window !== 'undefined') {
    // Next.js automatically tracks Web Vitals
    // You can see them in Vercel Analytics or browser dev tools
    console.log('Using Next.js built-in Web Vitals tracking');
  }
}