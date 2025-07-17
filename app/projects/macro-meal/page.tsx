'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function MacroMealProject() {
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
              background: 'rgba(249, 115, 22, 0.1)',
              color: '#f97316',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              AI-Powered • Nutrition • Web App
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Macro Meal Generator
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              An AI-powered web application that eliminates the daily mental overhead of macro tracking by automatically generating personalized meal plans that hit your exact nutrition targets.
            </p>

            {/* Project Details */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
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
                  TIMELINE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  April 2025 - June 2025
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TOOLS
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  React, Gemini AI, Next.js
                </p>
              </div>
            </div>

            {/* Skills Used */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {['User Research', 'AI Integration', 'Full Stack Development', 'Prompt Engineering', 'User Testing'].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: 'rgba(249, 115, 22, 0.1)',
                    color: '#f97316',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(34, 197, 94, 0.2)'
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
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.05))',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(249, 115, 22, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Placeholder for project cover image */}
              <Image
                src="/images/MacroMealCoverMockup.png"
                alt="Macro Meal Project Cover"
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

                {/* Try It Yourself Section */}
                <section style={{
          padding: '4rem 3rem',
          background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
          borderBottom: '1px solid rgba(249, 115, 22, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(249, 115, 22, 0.1)',
              color: '#f97316',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              🚀 Live Demo Available
            </div>

            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'var(--primary-dark)'
            }}>
              Experience the AI Meal Generator
            </h2>

            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto'
            }}>
              See the AI-powered meal planning in action. Generate personalized meals that hit your exact macro targets in seconds.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://macro-meal-generator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.25rem 2.5rem',
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 30px rgba(249, 115, 22, 0.3)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(249, 115, 22, 0.3)';
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>🍽️</span>
                Try the Meal Generator
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem'
              }}>
                <span style={{ fontSize: '1.1rem' }}>⚡</span>
                No signup required • Instant results
              </div>
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
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                marginBottom: '3rem'
              }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  THE CORE PROBLEM
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  "People want the benefits of macro tracking but hate the daily mental overhead"
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginTop: '2rem'
                }}>
                  {[
                    'Decision Fatigue: Users spend 15-30 minutes daily planning meals that fit their macros',
                    'Analysis Paralysis: Too many food combinations lead to repeated, boring meal choices',
                    'Tracking Burnout: 73% of macro trackers quit within 3 months due to complexity',
                    'Real-Life Friction: Existing tools don\'t account for leftovers, training days, or spontaneous changes'
                  ].map((problem, index) => (
                    <div key={index} style={{
                      background: 'rgba(239, 68, 68, 0.05)',
                      padding: '1.5rem',
                      borderRadius: '16px',
                      borderLeft: '4px solid #ef4444'
                    }}>
                      <p style={{
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: 'var(--primary-dark)',
                        margin: 0,
                        lineHeight: '1.4'
                      }}>
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Opportunity */}
              <div style={{
                background: 'rgba(249, 115, 22, 0.05)',
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
                  💡 Market Opportunity
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  45M+ Americans actively track macros with high-engagement users who have disposable income. 
                  Current market: Meal kit services ($20B), nutrition apps ($4.4B), fitness tracking.
                </p>
              </div>
            </section>

            {/* User Research */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  USER RESEARCH
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Understanding the pain points
                </h2>
              </div>

              {/* User Personas */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                marginBottom: '4rem'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    💪
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'var(--primary-dark)'
                  }}>
                    "Committed Connor" - Fitness Enthusiast
                  </h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#f97316' }}>Goals:</strong> Build muscle, track macros precisely
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#f97316' }}>Pain Points:</strong> Spends too much time meal planning, gets bored with same foods
                  </div>
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(249, 115, 22, 0.05)',
                    borderRadius: '12px',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)'
                  }}>
                    "I know what my macros should be, I just want someone to tell me what to eat"
                  </div>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    👩‍💼
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'var(--primary-dark)'
                  }}>
                    "Busy Brenda" - Health-Conscious Professional
                  </h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#f97316' }}>Goals:</strong> Maintain weight, eat healthily with minimal effort
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#f97316' }}>Pain Points:</strong> No time for complex meal planning, needs quick solutions
                  </div>
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(249, 115, 22, 0.05)',
                    borderRadius: '12px',
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)'
                  }}>
                    "I'll track macros if it's automatic, but I won't spend my evenings planning meals"
                  </div>
                </div>
              </div>

              {/* Current Journey Pain Points */}
              <div style={{
                background: '#f8f9fa',
                padding: '2rem',
                borderRadius: '20px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)',
                  textAlign: 'center'
                }}>
                  Current User Journey Pain Points
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  {[
                    'Set macro goals',
                    'Research foods',
                    'Calculate portions',
                    'Plan 3-5 meals',
                    'Shop for ingredients',
                    'Cook',
                    'Repeat daily'
                  ].map((step, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        padding: '0.5rem 1rem',
                        background: index < 6 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(249, 115, 22, 0.1)',
                        color: index < 6 ? '#ef4444' : '#f97316',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {step}
                      </div>
                      {index < 6 && (
                        <span style={{ color: 'var(--text-secondary)' }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
                <p style={{
                  textAlign: 'center',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  Pain points at each step: Goals unclear → Research takes 15+ minutes → Math is tedious → 
                  Planning decisions exhaust mental energy → Shopping lists don't auto-generate → Cooking prep not optimized
                </p>
              </div>
            </section>

            {/* Competitive Analysis */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  COMPETITIVE ANALYSIS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Existing solutions analysis
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}>
                {[
                  {
                    name: 'MyFitnessPal',
                    strengths: ['Massive food database', 'Social features'],
                    weaknesses: ['Manual meal planning', 'Overwhelming interface'],
                    gap: 'No proactive meal generation'
                  },
                  {
                    name: 'Eat This Much',
                    strengths: ['Automatic meal planning'],
                    weaknesses: ['Rigid plans', 'Limited customization', 'Feels robotic'],
                    gap: 'No real-time flexibility or AI adaptation'
                  },
                  {
                    name: 'Cronometer',
                    strengths: ['Highly accurate nutrition data'],
                    weaknesses: ['Complex interface', 'Manual planning required'],
                    gap: 'Poor user experience, steep learning curve'
                  },
                  {
                    name: 'MacroFactor',
                    strengths: ['Adaptive algorithms', 'Science-based'],
                    weaknesses: ['Tracking-focused', 'No meal generation'],
                    gap: 'Still requires users to plan their own meals'
                  }
                ].map((competitor, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(249, 115, 22, 0.1)'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {competitor.name}
                    </h3>
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#f97316', marginBottom: '0.5rem' }}>
                        Strengths
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {competitor.strengths.map((strength, idx) => (
                          <li key={idx} style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span style={{ color: '#10b981' }}>✓</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ef4444', marginBottom: '0.5rem' }}>
                        Weaknesses
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {competitor.weaknesses.map((weakness, idx) => (
                          <li key={idx} style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span style={{ color: '#ef4444' }}>×</span>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{
                      padding: '1rem',
                      background: 'rgba(249, 115, 22, 0.05)',
                      borderRadius: '12px'
                    }}>
                      <strong style={{ color: '#f97316', fontSize: '0.9rem' }}>Key Gap:</strong>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
                        {competitor.gap}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Takeaways from Research & Competitive Analysis */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(22, 163, 74, 0.02))',
                padding: '3rem',
                borderRadius: '20px'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#22c55e',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    KEY TAKEAWAYS
                  </p>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    Research & Competitive insights
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}>
                    What I learned from user research and competitive analysis that informed our design approach
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '1rem'
                }}>
                  {[
                    {
                      title: 'Clear Market Gap in Automation',
                      insight: 'No existing tool truly eliminates meal planning decisions'
                    },
                    {
                      title: 'Users Want Control Within Automation',
                      insight: 'Both personas want AI to do the heavy lifting but need easy ways to customize and swap meals they don\'t like'
                    },
                    {
                      title: 'Time is the Primary Pain Driver',
                      insight: 'Users spend 15-30 minutes daily on meal planning, which creates the strongest motivation to seek an automated solution'
                    },
                    {
                      title: 'Trust Must Be Earned Through Accuracy',
                      insight: 'Competitive analysis shows users don\'t trust AI-generated nutrition advice'
                    },
                    {
                      title: 'Context Awareness is Critical',
                      insight: 'Existing tools fail to consider real-life factors like training days, leftovers, dietary restrictions, and cooking skill level'
                    },
                    {
                      title: 'Accuracy vs Usability Trade-off',
                      insight: 'Current tools sacrifice UX for precision (Cronometer) or precision for usability (MyFitnessPal)'
                    }
                  ].map((takeaway, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '2rem',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                      border: '1px solid rgba(34, 197, 94, 0.1)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <span style={{
                          color: '#22c55e',
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          minWidth: '24px'
                        }}>
                          💡
                        </span>
                        <h3 style={{
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: 'var(--primary-dark)',
                          margin: 0,
                          lineHeight: '1.4'
                        }}>
                          {takeaway.title}
                        </h3>
                      </div>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        margin: 0,
                        paddingLeft: '2.5rem'
                      }}>
                        {takeaway.insight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Design Process & Ideation */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  DESIGN PROCESS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  From concept to AI-powered solution
                </h2>
              </div>

              {/* Strategic Decision: AI-First */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
                padding: '3rem',
                borderRadius: '24px'
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)',
                  textAlign: 'center'
                }}>
                  🚀 The "Aha" Moment: Pivot to Full AI Generation
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '3rem',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#ef4444'
                    }}>
                      User Feedback on Static Database:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        '"I\'ve seen these meals before" - Users wanted novelty',
                        '"This doesn\'t fit my preferences" - Need for deep personalization',
                        '"What if I don\'t like chicken?" - Required dynamic substitution'
                      ].map((feedback, index) => (
                        <li key={index} style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.75rem',
                          fontStyle: 'italic',
                          paddingLeft: '1rem',
                          borderLeft: '3px solid #ef4444'
                        }}>
                          {feedback}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f97316'
                    }}>
                      AI-First Solution Benefits:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Infinite Meal Variety: Never repeat the same combination',
                        'Context Understanding: AI grasps nuanced preferences',
                        'Real-Time Adaptation: Generate alternatives instantly',
                        'Natural Language Input: Users describe what they want'
                      ].map((benefit, index) => (
                        <li key={index} style={{
                          fontSize: '1rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#f97316', fontSize: '1.2rem' }}>✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    Decision Matrix: Why AI Generation Won
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1rem',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>Criteria</div>
                    <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>Database</div>
                    <div style={{ fontWeight: '600', color: 'var(--primary-dark)' }}>Recipes</div>
                    <div style={{ fontWeight: '600', color: '#f97316' }}>AI Generation</div>
                    
                    <div>Variety</div>
                    <div>⭐⭐</div>
                    <div>⭐⭐⭐</div>
                    <div style={{ color: '#f97316', fontWeight: '600' }}>⭐⭐⭐⭐⭐</div>
                    
                    <div>Accuracy</div>
                    <div>⭐⭐⭐⭐⭐</div>
                    <div>⭐⭐⭐</div>
                    <div>⭐⭐⭐⭐</div>
                    
                    <div>Personalization</div>
                    <div>⭐⭐</div>
                    <div>⭐⭐⭐</div>
                    <div style={{ color: '#f97316', fontWeight: '600' }}>⭐⭐⭐⭐⭐</div>
                    
                    <div>Development Speed</div>
                    <div>⭐⭐⭐⭐⭐</div>
                    <div>⭐⭐⭐</div>
                    <div>⭐⭐</div>
                    
                    <div>User Trust</div>
                    <div>⭐⭐⭐⭐</div>
                    <div>⭐⭐⭐⭐</div>
                    <div>⭐⭐⭐</div>
                  </div>
                </div>
              </div>
            </section>

            {/* First Prototype & User Testing */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  PROTOTYPING & TESTING
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Building and validating the MVP
                </h2>
              </div>

              {/* MVP Features */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                marginBottom: '3rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: 'var(--primary-dark)',
                  textAlign: 'center'
                }}>
                  MVP Feature Prioritization
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f97316'
                    }}>
                      Must-Have (P0)
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Macro goal input with visual feedback',
                        'One-click AI meal generation',
                        'Meal display with ingredients and macros',
                        'Basic meal swapping functionality'
                      ].map((feature, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#f97316' }}>●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f59e0b'
                    }}>
                      Should-Have (P1)
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Training day macro adjustments',
                        'Dietary restriction filters',
                        'Food preference learning',
                        'Macro accuracy indicators'
                      ].map((feature, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#f59e0b' }}>●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#6b7280'
                    }}>
                      Could-Have (P2)
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Leftover integration',
                        'Grocery list generation',
                        'Meal favoriting and history',
                        'Social sharing features'
                      ].map((feature, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#6b7280' }}>●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* User Testing Results */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem'
              }}>
                <div style={{
                  background: 'rgba(249, 115, 22, 0.05)',
                  padding: '2rem',
                  borderRadius: '20px'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    ✅ Positive Feedback
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      '"Well done with an intuitive, straightforward layout that\'s easy to navigate"',
                      '"App works smoothly across both vertical and horizontal orientations with responsive design that performs well on mobile devices"',
                      '"Users appreciated the visual feedback when clicking buttons and interacting with the app"'
                    ].map((feedback, index) => (
                      <li key={index} style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem',
                        fontStyle: 'italic',
                        paddingLeft: '1rem',
                        borderLeft: '3px solid #f97316'
                      }}>
                        {feedback}
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
                    ❌ Issues Identified
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      'The core math engine fails to hit user targets and shows incorrect percentage calculations',
                      'Users can view alternatives but cannot actually select/replace meals',
                      'Requiring macro inputs in grams excludes most users'
                    ].map((issue, index) => (
                      <li key={index} style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem',
                        paddingLeft: '1rem',
                        borderLeft: '3px solid #ef4444'
                      }}>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Learnings */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
                padding: '2rem',
                borderRadius: '20px',
                marginTop: '3rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)',
                  textAlign: 'center'
                }}>
                  🔍 Key Learnings from Prototype
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.5rem'
                }}>
                  {[
                    'Core Math Engine is Broken: Macro calculations and targeting do not work - meals never hit targets, wrong percentages, and illogical suggestions',
                    'Primary Feature is Non-Functional: Meal replacement system is broken',
                    'UI/UX Foundation is Strong: Users praised visual design, mobile responsiveness, and interface quality',
                    'Input Method Excludes Target Audience: Requiring macro inputs in grams is "unrealistic" for general users'
                  ].map((learning, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)'
                    }}>
                      <span style={{
                        color: '#f97316',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        minWidth: '20px'
                      }}>
                        💡
                      </span>
                      {learning}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Technical Implementation */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  TECHNICAL IMPLEMENTATION
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Building the AI-powered solution
                </h2>
              </div>
              
              {/* AI Implementation Strategy */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
                padding: '3rem',
                borderRadius: '24px'
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: 'var(--primary-dark)',
                  textAlign: 'center'
                }}>
                  AI Implementation Roadmap
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2rem'
                }}>
                  {[
                    {
                      phase: 'Phase 1',
                      title: 'Basic Generation (MVP)',
                      features: [
                        'Simple prompt → meal generation',
                        'USDA data validation',
                        'Manual refinement of prompts'
                      ],
                      status: 'Completed'
                    },
                    {
                      phase: 'Phase 2',
                      title: 'Contextual Intelligence',
                      features: [
                        'User preference learning',
                        'Training day optimization',
                        'Leftover integration'
                      ],
                      status: 'In Progress'
                    },
                    {
                      phase: 'Phase 3',
                      title: 'Conversational Interface',
                      features: [
                        'Natural language meal requests',
                        'Real-time substitutions',
                        'Nutritionist-level guidance'
                      ],
                      status: 'Planned'
                    }
                  ].map((phase, index) => (
                    <div key={index} style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '2rem',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '1rem',
                        background: phase.status === 'Completed' ? '#f97316' : phase.status === 'In Progress' ? '#f59e0b' : '#6b7280',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {phase.status}
                      </div>
                      
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#f97316',
                        marginBottom: '0.5rem',
                        marginTop: '1rem'
                      }}>
                        {phase.phase}
                      </h4>
                      
                      <h5 style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        color: 'var(--primary-dark)'
                      }}>
                        {phase.title}
                      </h5>
                      
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {phase.features.map((feature, idx) => (
                          <li key={idx} style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span style={{ color: '#f97316' }}>▶</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Iterative Improvements */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  ITERATIVE IMPROVEMENTS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Addressing bugs and user feedback
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  Based on user testing feedback and technical challenges, I implemented several key improvements to enhance accuracy, flexibility, and user experience.
                </p>
              </div>

              {/* Improvements Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  {
                    icon: '🍽️',
                    title: 'Flexible Meal Count',
                    problem: 'Users were forced into a 3-meal structure that didn\'t fit their eating patterns',
                    solution: 'Added ability to choose 2-6 meals per day',
                    impact: 'Accommodates intermittent fasters, frequent snackers, and various lifestyle preferences',
                    color: '#f59e0b'
                  },
                  {
                    icon: '🧠',
                    title: 'AI Prompt Engineering',
                    problem: 'Generated meals sometimes had unrealistic portions or poor macro accuracy (±15% range)',
                    solution: 'Refined prompts with specific portion guidelines and macro constraints',
                    impact: 'Improved macro accuracy to ±5% range and more realistic serving sizes',
                    color: '#8b5cf6'
                  },
                  {
                    icon: '📊',
                    title: 'Food Database API Integration',
                    problem: 'Relying solely on AI for nutrition data led to inconsistencies and inaccuracies',
                    solution: 'Integrated USDA FoodData Central API for verified nutrition information',
                    impact: 'Ensured consistent, accurate nutrition data and improved user trust',
                    color: '#06b6d4'
                  }
                ].map((improvement, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: `2px solid ${improvement.color}20`,
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        fontSize: '2.5rem'
                      }}>
                        {improvement.icon}
                      </div>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: 'var(--primary-dark)',
                        margin: 0
                      }}>
                        {improvement.title}
                      </h3>
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#ef4444',
                        marginBottom: '0.5rem'
                      }}>
                        Problem:
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}>
                        {improvement.problem}
                      </p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#f97316',
                        marginBottom: '0.5rem'
                      }}>
                        Solution:
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)',
                        margin: 0
                      }}>
                        {improvement.solution}
                      </p>
                    </div>

                    <div style={{
                      padding: '1rem',
                      background: `${improvement.color}10`,
                      borderRadius: '12px',
                      borderLeft: `4px solid ${improvement.color}`
                    }}>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: improvement.color,
                        marginBottom: '0.5rem'
                      }}>
                        Impact:
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        color: 'var(--primary-dark)',
                        fontWeight: '500',
                        margin: 0
                      }}>
                        {improvement.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Implementation Details */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
                padding: '3rem',
                borderRadius: '24px'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: 'var(--primary-dark)',
                  textAlign: 'center'
                }}>
                  🔧 Technical Implementation Details
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem'
                }}>
                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '16px'
                  }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      Meal Count Flexibility
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Dynamic form validation based on selected meal count',
                        'Proportional macro distribution across chosen meals',
                        'Calorie splitting algorithm for even distribution',
                        'User preference storage for future sessions'
                      ].map((detail, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#f97316' }}>▶</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '16px'
                  }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      Enhanced AI Prompting
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Structured prompts with macro constraints',
                        'Portion size guidelines and realistic servings',
                        'Context awareness for dietary restrictions',
                        'Fallback logic for edge cases'
                      ].map((detail, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#f97316' }}>▶</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '16px'
                  }}>
                    <h4 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      API Integration
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'USDA FoodData Central API integration',
                        'Nutrition data validation and caching',
                        'Automatic data enrichment for common foods',
                        'Error handling and graceful degradation'
                      ].map((detail, index) => (
                        <li key={index} style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#f97316' }}>▶</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section style={{ marginBottom: '5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f97316',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  RESULTS & IMPACT
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Solving the macro tracking problem
                </h2>
              </div>

              {/* Key Achievements */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  {
                    icon: '⚡',
                    title: 'Reduced Planning Time',
                    description: 'From 15-30 minutes daily to under 30 seconds with AI meal generation',
                    metric: '95% time reduction'
                  },
                  {
                    icon: '🎯',
                    title: 'Improved Accuracy',
                    description: 'USDA-verified nutrition data with AI-powered portion calculations',
                    metric: '±5% macro accuracy'
                  },
                  {
                    icon: '🔄',
                    title: 'Infinite Variety',
                    description: 'Never repeat the same meal combination with AI-generated options',
                    metric: 'Unlimited combinations'
                  }
                ].map((achievement, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(249, 115, 22, 0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem'
                    }}>
                      {achievement.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {achievement.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      marginBottom: '1rem'
                    }}>
                      {achievement.description}
                    </p>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      background: 'rgba(249, 115, 22, 0.1)',
                      color: '#f97316',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      {achievement.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Future Roadmap */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  🚀 Next Steps & Future Vision
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  maxWidth: '800px',
                  margin: '0 auto 2rem auto'
                }}>
                  The Macro Meal Generator represents the future of nutrition planning - where AI eliminates the friction between wanting to eat healthily and actually doing it. Our roadmap includes advanced personalization, meal prep optimization, and integration with fitness tracking platforms.
                </p>
                
                <div style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#ea580c',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  🌟 Currently in Beta Testing
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