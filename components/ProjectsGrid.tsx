'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Replace the projects array in components/ProjectsGrid.tsx:

const projects = [
  {
    id: 'macro-meal',
    title: 'Macro Meal Generator',
    subtitle: 'AI-Powered Nutrition App',
    description: 'An AI-powered web application that eliminates the daily mental overhead of macro tracking by automatically generating personalized meal plans',
    image: '/images/MacroMealCoverMockup.png',
    tags: ['AI Integration', 'Full Stack Development', 'User Research', 'React'],
    color: '#f97316'
  },
  {
    id: 'prommuni',
    title: 'Prommuni',
    subtitle: 'SaaS Web and Mobile Platform',
    description: 'A service for young professionals to find roommates and leases with similar minded people',
    image: '/images/PrommuniCoverMockup.png',
    tags: ['SaaS', 'User Research', 'Social Features', 'Figma'],
    color: '#4facfe'
  },
  {
    id: 'att',
    title: 'ATT',
    subtitle: 'Mobile App Redesign',
    description: 'Redesigning the ATT mobile application to improve user experience and modernize the interface',
    image: '/images/ATTCoverMockup.png',
    tags: ['Mobile Design', 'UX Research', 'UI Design', 'Figma'],
    color: '#f093fb'
  },
  {
    id: 'sellmax',
    title: 'SellMax',
    subtitle: 'Web App Updates',
    description: 'Redesigning a car quote questionnaire to reduce user abandonment and improve conversion rates',
    image: '/images/SellMaxCoverMockup.png',
    tags: ['Conversion Optimization', 'Web Design', 'UX Research', 'Figma'],
    color: '#22c55e'
  }
];

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (projectId: string) => {
    console.log(`Image failed to load: ${projectId}`);
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  const handleImageLoad = (projectId: string) => {
    console.log(`Image loaded successfully: ${projectId}`);
  };

  return (
    <section 
      id="projects"
      style={{
        padding: '6rem 3rem',
        background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)',
        position: 'relative'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
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
            ✨ Featured Work
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            margin: '0 0 1rem 0',
            background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-darker))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Recent Projects
          </h2>
        
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {projects.map((project, index) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: hoveredProject === project.id 
                  ? '0 20px 60px rgba(0, 0, 0, 0.15)' 
                  : '0 8px 30px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredProject === project.id 
                  ? 'translateY(-8px) scale(1.02)' 
                  : 'translateY(0) scale(1)',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Project Image */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                  overflow: 'hidden'
                }}>
                  {/* Next.js Image with optimized settings */}
                  {!imageErrors.has(project.id) && (
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle}`}
                      fill
                      style={{
                        objectFit: 'cover'
                      }}
                      quality={90}
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onLoad={() => handleImageLoad(project.id)}
                      onError={() => handleImageError(project.id)}
                      unoptimized={false}
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
                      flexDirection: 'column',
                      gap: '1rem'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        color: project.color,
                        fontWeight: '700'
                      }}>
                        {project.title}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: project.color,
                        opacity: 0.7,
                        textAlign: 'center'
                      }}>
                        Image: {project.image}
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: hoveredProject === project.id 
                      ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)'
                      : 'transparent',
                    transition: 'all 0.3s ease'
                  }} />
                </div>

                {/* Project Content */}
                <div style={{ 
                  padding: '2rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Top Content */}
                  <div>
                    {/* Title & Subtitle */}
                    <div style={{ marginBottom: '1rem' }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        margin: '0 0 0.25rem 0',
                        color: 'var(--primary-dark)'
                      }}>
                        {project.title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        color: project.color,
                        margin: 0,
                        fontWeight: '600'
                      }}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: '0 0 1.5rem 0'
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
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          style={{
                            padding: '0.4rem 1rem',
                            background: `${project.color}15`,
                            color: project.color,
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            border: `1px solid ${project.color}30`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span style={{
                          padding: '0.4rem 1rem',
                          background: 'rgba(45, 55, 72, 0.1)',
                          color: 'var(--text-secondary)',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}>
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Project Link */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: project.color,
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      transform: hoveredProject === project.id ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease'
                    }}>
                      View Case Study
                      <span style={{
                        fontSize: '1.2rem',
                        transition: 'transform 0.3s ease',
                        transform: hoveredProject === project.id ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <Link
            href="/projects"
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
              boxShadow: '0 8px 30px rgba(45, 55, 72, 0.2)'
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
            View All Projects
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}