'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const projects = [
  {
    id: 'komma',
    title: 'KOMMA',
    subtitle: 'Social Sports Platform',
    description: 'Full stack design and development of a fantasy sports app for fans of Mixed-Martial Arts',
    image: '/images/KOMMACoverMockup.png',
    tags: ['Full Stack Development', 'UX Research', 'UI Design', 'Figma'],
    duration: '2 years',
    role: 'Founder',
    year: '2023-Present',
    color: '#667eea'
  },
  {
    id: 'prommuni',
    title: 'Prommuni',
    subtitle: 'SaaS Web and Mobile Platform',
    description: 'A service for young professionals to find roommates and leases with similar minded people',
    image: '/images/PrommuniCoverMockup.png', // Updated to match your naming pattern
    tags: ['SaaS', 'User Research', 'Social Features', 'Figma'],
    duration: '8 months',
    role: 'Product Designer',
    year: '2024 - Present',
    color: '#43e97b'
  },
  {
    id: 'att',
    title: 'ATT',
    subtitle: 'Mobile App Redesign',
    description: 'Mobile app redesign focused on adding features to a gym app to improve member retention and engagement',
    image: '/images/ATTCoverMockup.png', // Updated to match your naming pattern
    tags: ['Mobile Design', 'Prototyping', 'User Interviews', 'User Flow'],
    duration: '6 months',
    role: 'UI/UX Designer',
    year: '2024',
    color: '#f093fb'
  },
  {
    id: 'sellmax',
    title: 'SellMax',
    subtitle: 'Web App Updates',
    description: 'Updating a car quoting questionnaire to reduce user abandonment rate',
    image: '/images/SellMaxCoverMockup.png',
    tags: ['Web Design', 'Conversion', 'Analytics', 'Figma'],
    duration: '5 months',
    role: 'Freelance Design Consultant',
    year: '2023',
    color: '#4facfe'
  }
];

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (projectId: string) => {
    console.log(`Image failed to load: ${projectId}`);
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  const handleImageLoad = (projectId: string) => {
    console.log(`Image loaded successfully: ${projectId}`);
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: '4rem 3rem', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(45, 55, 72, 0.1)',
            borderRadius: '50px',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            color: 'var(--primary-dark)'
          }}>
            🎨 Portfolio
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '700',
            margin: '0 0 1.5rem 0',
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-darker))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            All Projects
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            A comprehensive look at my design process, from research and ideation to final implementation. 
            Each project tells a story of problem-solving and user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '3rem',
          marginTop: '4rem',
          alignItems: 'stretch' // Makes all cards same height
        }}>
          {projects.map((project, index) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <article 
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  height: '100%', // Makes cards fill available height
                  display: 'flex', // Flexbox for content layout
                  flexDirection: 'column' // Stack content vertically
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Project Image */}
                <div style={{
                  position: 'relative',
                  height: '320px',
                  background: `linear-gradient(135deg, ${project.color}30, ${project.color}15)`,
                  overflow: 'hidden'
                }}>
                  {/* Real Image */}
                  {!imageErrors.has(project.id) && (
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                      }}
                      onLoad={() => handleImageLoad(project.id)}
                      onError={() => handleImageError(project.id)}
                    />
                  )}

                  {/* Fallback design - shows when image doesn't load */}
                  {imageErrors.has(project.id) && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      color: project.color,
                      fontWeight: '700'
                    }}>
                      {project.title}
                    </div>
                  )}

                  {/* Project Year Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: project.color,
                    backdropFilter: 'blur(10px)'
                  }}>
                    {project.year}
                  </div>

                  {/* View Case Study Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                  >
                    View Case Study →
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ 
                  padding: '2.5rem',
                  flex: 1, // Takes up remaining space
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between' // Distributes content evenly
                }}>
                  {/* Top Content */}
                  <div>
                    {/* Title & Subtitle */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        margin: '0 0 0.5rem 0',
                        color: 'var(--primary-dark)'
                      }}>
                        {project.title}
                      </h2>
                      <p style={{
                        fontSize: '1.2rem',
                        color: project.color,
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Project Meta Info */}
                    <div style={{
                      display: 'flex',
                      gap: '2rem',
                      marginBottom: '1.5rem',
                      padding: '1rem',
                      background: 'rgba(45, 55, 72, 0.03)',
                      borderRadius: '12px'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                          ROLE
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary-dark)' }}>
                          {project.role}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                          DURATION
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary-dark)' }}>
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: 'var(--text-secondary)',
                      margin: '0 0 2rem 0'
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    {/* Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '2rem'
                    }}>
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          style={{
                            padding: '0.5rem 1.25rem',
                            background: `${project.color}15`,
                            color: project.color,
                            borderRadius: '25px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            border: `1px solid ${project.color}30`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: project.color,
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    >
                      Read Full Case Study
                      <span style={{
                        fontSize: '1.4rem',
                        transition: 'transform 0.3s ease'
                      }}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '6rem',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.05), rgba(45, 55, 72, 0.02))',
          borderRadius: '24px'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            margin: '0 0 1rem 0',
            color: 'var(--primary-dark)'
          }}>
            Interested in working together?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            margin: '0 0 2rem 0',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Link 
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              borderRadius: '50px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 30px rgba(45, 55, 72, 0.2)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 55, 72, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(45, 55, 72, 0.2)';
            }}
          >
            Let's Connect
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </Link>
        </div>
      </main>
    </>
  );
}