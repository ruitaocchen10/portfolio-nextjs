import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export const metadata: Metadata = {
  title: 'KOMMA Project - Rui Tao Portfolio',
  description: 'UX Research and Design case study for KOMMA social platform',
};

export default function KommaProject() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Back button */}
        <Link 
          href="/projects" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            textDecoration: 'none'
          }}
        >
          ← Back to Projects
        </Link>

        {/* Project header */}
        <div style={{ marginBottom: '3rem' }}>
          <h1>KOMMA</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>
            UX Research and Design for a social platform
          </p>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['UX Research', 'UI Design', 'Figma', 'User Personas'].map((tag, index) => (
              <span 
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--primary-dark)',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '0.875rem'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project content sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <section>
            <h2>Project Overview</h2>
            <p>Add your project overview content here...</p>
          </section>

          <section>
            <h2>User Research</h2>
            <p>Detail your research process and findings...</p>
          </section>

          <section>
            <h2>User Personas</h2>
            <p>This section will contain your persona cards...</p>
          </section>

          <section>
            <h2>Wireframes & Prototypes</h2>
            <p>Show your design process and iterations...</p>
          </section>

          <section>
            <h2>Final Design</h2>
            <p>Present your final design solutions...</p>
          </section>

          <section>
            <h2>Results & Impact</h2>
            <p>Share the outcomes and learnings...</p>
          </section>
        </div>

        {/* Navigation to other projects */}
        <div style={{ 
          marginTop: '4rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Previous Project</p>
            <Link href="/projects/prommuni" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
              Prommuni
            </Link>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>Next Project</p>
            <Link href="/projects/att" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
              AT&T
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}