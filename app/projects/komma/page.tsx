'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function KommaProject() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        {/* Back Navigation */}
        <div style={{ padding: '2rem 3rem 0 3rem', maxWidth: '1400px', margin: '0 auto' }}>
          <Link 
            href="/projects" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(-4px)';
              e.currentTarget.style.color = 'var(--primary-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <section style={{
          padding: '3rem 3rem 6rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center'
        }}>
          {/* Left - Project Info */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(102, 126, 234, 0.1)',
              color: '#667eea',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Full Stack Development • Sports Platform
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              KOMMA
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Full stack design and development of a fantasy sports app for fans of Mixed-Martial Arts, designed to engage both hardcore and casual MMA enthusiasts.
            </p>

            {/* Project Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  ROLE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  Founder
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  DURATION
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  2 years
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TIMELINE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  January 2023 - Present
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TOOLS
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  Figma
                </p>
              </div>
            </div>

            {/* Skills Used */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {['UX Research', 'UI Design', 'Full Stack Development', 'User Personas', 'Prototyping'].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(102, 126, 234, 0.2)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Cover Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/KOMMACoverMockup.png"
                alt="KOMMA Project Cover"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '30px'
                }}
                priority
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          backgroundColor: 'white',
          padding: '6rem 3rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Problem Statement */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                marginBottom: '3rem'
              }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  MIXED-MARTIAL ARTS FANS NEED A BETTER COMMUNITY
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: 'var(--primary-dark)',
                  marginBottom: '1.5rem'
                }}>
                  UFC fans want to play fantasy sports to showcase their knowledge of fighters while competing with their friends
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  It adds excitement, personal stakes, and monetary value in some cases. However, existing platforms either treat MMA as an afterthought or lack the sophisticated features fans deserve.
                </p>
              </div>
            </section>

            {/* Market Research */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  MARKET RESEARCH
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  A massive untapped opportunity
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  With 640 million global MMA fans and a fantasy sports market exploding from $30.4B to $84.98B by 2032, there's a clear gap for a dedicated MMA fantasy platform.
                </p>
              </div>

              {/* Market Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  {
                    number: '640M',
                    label: 'Global MMA Fans',
                    description: 'Rapidly growing digital engagement'
                  },
                  {
                    number: '$84.98B',
                    label: 'Fantasy Sports Market by 2032',
                    description: 'Up from $30.4B in 2023'
                  },
                  {
                    number: '37%',
                    label: 'Aged 18-29',
                    description: 'Mobile-native generation'
                  }
                ].map((stat, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(102, 126, 234, 0.1)'
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: '#667eea',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {stat.label}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Insight */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.02))',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  💡 Market Penetration Opportunity
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: 0,
                  maxWidth: '800px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}>
                  Current market fragmentation creates opening. Existing platforms are either large DFS operators treating MMA as an afterthought or small community sites lacking robust gaming features. No dedicated, comprehensive MMA fantasy platform exists.
                </p>
              </div>
            </section>

            {/* Competitive Analysis */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  COMPETITIVE LANDSCAPE
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  How KOMMA stands apart
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Current market is fragmented between large DFS operators and small community sites, creating an opportunity for a dedicated MMA platform.
                </p>
              </div>

              {/* Competitor Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {[
                  {
                    name: 'DraftKings',
                    category: 'Large DFS Operator',
                    marketShare: '28% market share',
                    strengths: ['Strong marketing', 'Comprehensive framework', 'Diverse contests'],
                    weaknesses: ['Highly regulated', 'High competition', 'Complex rules', 'Limited international'],
                    color: '#ff6b6b'
                  },
                  {
                    name: 'Verdict MMA',
                    category: 'Community Site',
                    marketShare: '50K+ Downloads',
                    strengths: ['Community-focused', 'Live scoring', 'XP/leveling', 'Multi-promotion info'],
                    weaknesses: ['Bugs in fighter records', 'No overall user base given', 'Limited features'],
                    color: '#4ecdc4'
                  },
                  {
                    name: 'Underdog Fantasy',
                    category: 'Pick\'Em Platform',
                    marketShare: 'Huge user base',
                    strengths: ['Pick\'Em popularity', 'Prop-betting feel', 'User-friendly', 'Impressive bonuses'],
                    weaknesses: ['Primarily Pick\'Em focused', 'No MMA specialization'],
                    color: '#45b7d1'
                  },
                  {
                    name: 'KOMMA',
                    category: 'Dedicated MMA Platform',
                    marketShare: 'Launching Soon',
                    strengths: ['MMA-first design', 'Balanced scoring system', 'Community features', 'Global market timing'],
                    weaknesses: ['New to market'],
                    color: '#667eea'
                  }
                ].map((competitor, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: competitor.name === 'KOMMA' 
                      ? '0 12px 40px rgba(102, 126, 234, 0.2)' 
                      : '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: competitor.name === 'KOMMA' 
                      ? '2px solid #667eea' 
                      : '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative'
                  }}>
                    {competitor.name === 'KOMMA' && (
                      <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#667eea',
                        color: 'white',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        Our Solution
                      </div>
                    )}
                    
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: competitor.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1.2rem',
                      marginBottom: '1rem'
                    }}>
                      {competitor.name.substring(0, 2)}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {competitor.name}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.9rem',
                      color: competitor.color,
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      {competitor.category}
                    </p>
                    
                    <p style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem'
                    }}>
                      {competitor.marketShare}
                    </p>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '0.5rem'
                      }}>
                        Strengths
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                          }}>
                            <span style={{ color: '#10b981', fontSize: '0.8rem' }}>✓</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'var(--primary-dark)',
                        marginBottom: '0.5rem'
                      }}>
                        Weaknesses
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {competitor.weaknesses.map((weakness, idx) => (
                          <li key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                          }}>
                            <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>×</span>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Understanding MMA Fans */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#667eea',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  TARGET AUDIENCE
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Understanding MMA fans beyond violence
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  MMA fans are seeking more than just violence - they want technical appreciation, community connection, and ways to prove their knowledge.
                </p>
              </div>

              {/* Core Motivations */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  {
                    icon: '🏆',
                    title: 'Sport Legitimacy',
                    description: 'Embracing MMA as technical, skilled competition beyond just fighting'
                  },
                  {
                    icon: '⭐',
                    title: 'Fighter Adoration',
                    description: 'Following individual athlete journeys, wanting behind-the-scenes access'
                  },
                  {
                    icon: '🎭',
                    title: 'Drama & Unpredictability',
                    description: 'Drawn to thrilling, uncertain outcomes and compelling storylines'
                  },
                  {
                    icon: '🎨',
                    title: 'Technical Aesthetics',
                    description: 'Appreciation for strategic artistry and technical execution'
                  },
                  {
                    icon: '🏅',
                    title: 'Vicarious Achievement',
                    description: 'Feeling accomplishment through favorite fighter wins'
                  },
                  {
                    icon: '👥',
                    title: 'Community Connection',
                    description: 'Seeking to share experiences and compete with peers'
                  }
                ].map((motivation, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(102, 126, 234, 0.1)'
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '1rem'
                    }}>
                      {motivation.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      marginBottom: '0.75rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {motivation.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {motivation.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Digital Behavior & Pain Points */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem'
              }}>
                <div style={{
                  background: 'rgba(102, 126, 234, 0.05)',
                  padding: '2rem',
                  borderRadius: '20px'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    📱 Digital Behavior Patterns
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Fight Night Ritual: Reddit, YouTube, TikTok for discussion',
                      'Multi-Platform Engagement: Fragmented experience',
                      'Social Virality: Leverage rivalries for organic growth',
                      'Active Participation: Want engagement, not passive consumption'
                    ].map((behavior, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)'
                      }}>
                        <span style={{ color: '#667eea', fontSize: '1rem', fontWeight: '700' }}>▶</span>
                        {behavior}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  padding: '2rem',
                  borderRadius: '20px'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    😤 Pain Points & Gaps
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'Subpar User Experience: Slow payouts, complex rules',
                      'No Unified Community Hub: Missing centralized platform',
                      'Limited Personalization: Lack of AI-driven insights',
                      'Scoring System Issues: Current systems favor grapplers'
                    ].map((pain, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)'
                      }}>
                        <span style={{ color: '#ef4444', fontSize: '1rem', fontWeight: '700' }}>⚡</span>
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>


          </div>
        </div>

        {/* Navigation to Other Projects */}
        <section style={{
          backgroundColor: '#f9f9f9',
          padding: '4rem 3rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Explore More Projects
            </h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '3rem',
              color: 'var(--text-secondary)'
            }}>
              Check out my other design work and case studies
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { name: 'Prommuni', href: '/projects/prommuni', description: 'SaaS Platform' },
                { name: 'ATT', href: '/projects/att', description: 'Mobile App Redesign' },
                { name: 'SellMax', href: '/projects/sellmax', description: 'Web App Updates' }
              ].map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  style={{
                    display: 'block',
                    padding: '2rem',
                    background: 'white',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    color: 'var(--primary-dark)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}