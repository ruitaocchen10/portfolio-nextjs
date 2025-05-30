'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: 'komma',
    title: 'KOMMA',
    subtitle: 'Social Platform Design',
    description: 'UX research and design for a social networking platform focused on community building and user engagement.',
    image: '/images/komma-cover.jpg', // Add your project images
    tags: ['UX Research', 'UI Design', 'Figma', 'User Testing'],
    color: '#667eea' // Custom accent color for each project
  },
  {
    id: 'att',
    title: 'AT&T',
    subtitle: 'Mobile App Redesign',
    description: 'Complete mobile app redesign focused on improving user experience and reducing customer service calls.',
    image: '/images/att-cover.jpg',
    tags: ['Mobile Design', 'Prototyping', 'iOS/Android', 'User Flow'],
    color: '#f093fb'
  },
  {
    id: 'sellmax',
    title: 'SellMax',
    subtitle: 'E-commerce Platform',
    description: 'E-commerce platform optimization with focus on conversion rate improvement and user journey mapping.',
    image: '/images/sellmax-cover.jpg',
    tags: ['E-commerce', 'Web Design', 'Conversion', 'Analytics'],
    color: '#4facfe'
  },
  {
    id: 'prommuni',
    title: 'Prommuni',
    subtitle: 'Community Platform',
    description: 'Community-driven platform design with advanced social features and content management system.',
    image: '/images/prommuni-cover.jpg',
    tags: ['Community Design', 'Social Features', 'Mobile First', 'CMS'],
    color: '#43e97b'
  }
];

export default function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section 
      id="projects" // Add ID for scrolling
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
          
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Explore my latest UX/UI design projects, each showcasing different aspects of user-centered design and creative problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
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
                position: 'relative'
              }}>
                {/* Project Image */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                  overflow: 'hidden'
                }}>
                  {/* Image placeholder - replace with your actual images */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: project.color,
                    fontWeight: '700'
                  }}>
                    {project.title}
                  </div>
                  
                  {/* Uncomment when you add real images */}
                  {/*
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  */}
                  
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
                <div style={{ padding: '2rem' }}>
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
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <button 
            onClick={() => {
              // Scroll to top of page smoothly
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-darker) 100%)',
              color: 'white',
              border: 'none',
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
            Back to Top
            <span style={{ fontSize: '1.2rem' }}>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}