'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function SellMaxProject() {
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
              background: 'rgba(79, 172, 254, 0.1)',
              color: '#4facfe',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Web Design • Conversion Optimization
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #4facfe 0%, #00c6fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              SellMax
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Redesigning a car quote questionnaire to reduce user abandonment and improve conversion rates.
            </p>

            {/* Project Details - Updated to remove DURATION */}
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
                  Freelance Design Consultant
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TIMELINE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  December 2023 - May 2024
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
              {['User Research', 'UI Design', 'Conversion Optimization', 'User Testing'].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: 'rgba(79, 172, 254, 0.1)',
                    color: '#4facfe',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(79, 172, 254, 0.2)'
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
              background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 198, 251, 0.05))',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(79, 172, 254, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/SellMaxCoverMockup.png"
                alt="SellMax Project Cover"
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
            
            {/* The Challenge */}
            <section style={{ marginBottom: '5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 198, 251, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                marginBottom: '3rem'
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  The Challenge
                </h2>
                <p style={{
                  fontSize: '1.4rem',
                  lineHeight: '1.6',
                  color: '#4facfe',
                  fontWeight: '600',
                  margin: 0
                }}>
                  SellMax was experiencing high user abandonment rates in their car quote questionnaire, specifically on three critical forms in their conversion funnel.
                </p>
              </div>
              
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                Users were dropping off before completing their car quotes, directly impacting lead generation and revenue. These forms were critical touchpoints where potential customers consistently abandoned the quote process.
              </p>
            </section>

            {/* Context & Scope */}
            <section style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--primary-dark)'
              }}>
                Context & Scope
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '3rem'
              }}>
                I was provided with the three forms that had the highest user dropoff rate by SellMax. These forms were critical touchpoints in the user journey where potential customers were consistently abandoning the quote process.
              </p>

              {/* Original Forms */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {[
                  { title: 'Battery Form', image: '/images/SMBattery.png', alt: 'Original Battery Condition Form' },
                  { title: 'Title Form', image: '/images/SMTitle.png', alt: 'Original Vehicle Title Form' },
                  { title: 'Contact Form', image: '/images/SMForm.png', alt: 'Original Contact Form' }
                ].map((form, index) => (
                  <div key={index} style={{
                    background: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      marginBottom: '1rem'
                    }}>
                      {form.title}
                    </h3>
                    <div style={{
                      width: '100%',
                      height: '200px',
                      background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 198, 251, 0.05))',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <Image
                        src={form.image}
                        alt={form.alt}
                        fill
                        style={{
                          objectFit: 'contain',
                          padding: '1rem'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  'Provided with three specific forms that had the highest user dropoff rates',
                  'These forms were critical touchpoints where potential customers consistently abandoned the quote process',
                  'The project focused on identifying and solving conversion barriers'
                ].map((point, index) => (
                  <div key={index} style={{
                    background: 'rgba(79, 172, 254, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderLeft: '4px solid #4facfe'
                  }}>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-primary)',
                      margin: 0
                    }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Research & User Feedback */}
            <section style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--primary-dark)'
              }}>
                Research & User Feedback
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '3rem'
              }}>
                I collected user feedback that revealed several key issues with the existing forms:
              </p>

              {/* User Feedback Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem'
              }}>
                {[
                  "I had to read the battery condition and key fob question twice. I feel like those things aren't that related.",
                  "I'm not gonna lie, I have no idea what a clean title is",
                  "Why do I have to fill so much information out at the end?",
                  "Not that this matters a whole lot, but it doesn't look that professional",
                  "I kind of wish I could've got through it faster, but maybe that's just me being lazy."
                ].map((feedback, index) => (
                  <div key={index} style={{
                    background: 'rgba(79, 172, 254, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderLeft: '4px solid #4facfe'
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-primary)',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      "{feedback}"
                    </p>
                  </div>
                ))}
              </div>

              {/* Research Takeaways */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 198, 251, 0.02))',
                padding: '2rem',
                borderRadius: '20px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  Research Takeaways
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    {
                      title: 'Complex Questions Create Confusion',
                      description: 'Combining unrelated concepts in single questions forces users to re-read and increases cognitive load, leading to abandonment.'
                    },
                    {
                      title: 'Industry Jargon Blocks Progress',
                      description: 'Technical terminology without explanation creates immediate barriers that cause users to abandon the process rather than continue.'
                    },
                    {
                      title: 'Visual Design Impacts Trust',
                      description: 'Poor visual design undermines user confidence in the service, making them question legitimacy and reducing conversion rates.'
                    }
                  ].map((takeaway, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        color: '#4facfe',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        minWidth: '20px'
                      }}>
                        {index + 1}.
                      </span>
                      <div>
                        <h4 style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: 'var(--primary-dark)',
                          marginBottom: '0.5rem'
                        }}>
                          {takeaway.title}
                        </h4>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}>
                          {takeaway.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Solutions Implemented */}
            <section style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '3rem',
                color: 'var(--primary-dark)'
              }}>
                Solutions Implemented
              </h2>

              {/* Solution 1 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '3rem',
                padding: '2rem',
                background: '#f8f9fa',
                borderRadius: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    1. More Modern, Sleek UI
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    The original theme and layout were serviceable, but not the most clean and modern-looking which threw some of our users off. Some of the spacing in the original form was inconsistent as well, which is very unprofessional. With my new design, I updated the progress bar and the spacing to make the interface more user friendly and attractive.
                  </p>
                </div>
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 198, 251, 0.05))',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Image
                    src="/images/VehicleTitle.png"
                    alt="Redesigned Vehicle Title Form"
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '1rem'
                    }}
                  />
                </div>
              </div>

              {/* Solution 2 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '3rem',
                padding: '2rem',
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 198, 251, 0.05))',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Image
                    src="/images/VehicleTitle.png"
                    alt="Vehicle Title Form with Explanation"
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '1rem'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    2. Explanation for Clean Title
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    margin: 0
                  }}>
                    Some of the users were confused on what a clean title was. I added an informational icon under the question which opens a text box that explains all the potential options for the users.
                  </p>
                </div>
              </div>

              {/* Solution 3 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                marginBottom: '3rem',
                padding: '2rem',
                background: '#f8f9fa',
                borderRadius: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'var(--primary-dark)'
                  }}>
                    3. Split Battery/Key Fob Question
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem'
                  }}>
                    The battery and key fob question was raising a bit of confusion with the users. By splitting the question into 2 different screens, both are much more clear and easy to understand.
                  </p>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                  {[
                    { src: '/images/Battery.png', alt: 'Battery Condition Form' },
                    { src: '/images/Key.png', alt: 'Key Fob Form' }
                  ].map((image, index) => (
                    <div key={index} style={{
                      height: '200px',
                      background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 198, 251, 0.05))',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{
                          objectFit: 'contain',
                          padding: '0.5rem'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Results & Analytics */}
            <section style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--primary-dark)'
              }}>
                Tracking Metrics with Google Analytics & Hotjar
              </h2>
              
              {/* Setup */}
              <div style={{
                background: 'rgba(79, 172, 254, 0.05)',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '3rem'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Setup
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#4facfe',
                      marginBottom: '0.5rem'
                    }}>
                      Google Analytics 4
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Custom events for each form step, conversion goals, and abandonment tracking
                    </p>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#4facfe',
                      marginBottom: '0.5rem'
                    }}>
                      Hotjar
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Automatic form analytics, heatmaps, and session recordings on all three problematic forms
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 198, 251, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                marginBottom: '3rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: 'var(--primary-dark)'
                }}>
                  Key Findings After Redesign
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem'
                }}>
                  Comparative Results (6 weeks before vs. after):
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {[
                    { metric: 'Overall conversion rate', result: '34% → 48% (+14%)' },
                    { metric: 'Average form completion time', result: '8.5 min → 6.8 min (-20%)' },
                    { metric: 'User input time per question', result: '90 sec → 70 sec (-22%)' },
                    { metric: 'Drop-off at battery/key step', result: '42% → 18% (-24%)' }
                  ].map((stat, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '16px',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {stat.metric}
                      </h4>
                      <p style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: '#4facfe',
                        margin: 0
                      }}>
                        {stat.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Discovery */}
              <div style={{
                background: '#f8f9fa',
                padding: '2rem',
                borderRadius: '20px'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: 'var(--primary-dark)',
                  marginBottom: '1rem'
                }}>
                  How We Discovered the 20% Decrease:
                </h4>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  Hotjar's form analytics showed that users spent an average of 90 seconds on the original combined battery/key fob question. After splitting into two separate questions, the combined time dropped to 72 seconds total (36 seconds each), representing a <strong>20% reduction in user input time</strong> while maintaining the same information collection.
                </p>
              </div>
            </section>

            {/* Project Takeaways & Impact */}
            <section style={{ marginBottom: '5rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: 'var(--primary-dark)'
              }}>
                Takeaways & Impact
              </h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 198, 251, 0.02))',
                padding: '2rem',
                borderRadius: '20px'
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    {
                      title: 'User Feedback Reveals Hidden Conversion Barriers',
                      description: 'Direct user research uncovered critical issues (confusing combined questions, unclear terminology, trust concerns) that internal teams couldn\'t identify, proving user input is essential for solving real problems.'
                    },
                    {
                      title: 'Improved Conversion Rate by 14% Through Simple UX Changes',
                      description: 'Separating complex questions and modernizing the UI resulted in significant business impact: conversion rate jumped from 34% to 48%, directly increasing lead generation and revenue.'
                    },
                    {
                      title: 'Design Changes Reduced User Effort by 20%',
                      description: 'Streamlining the form experience decreased completion time from 8.5 to 6.8 minutes and reduced user input time by 20%, proving that better design creates measurably easier user experiences.'
                    }
                  ].map((takeaway, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '2rem',
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)'
                    }}>
                      <span style={{
                        color: '#4facfe',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        minWidth: '20px'
                      }}>
                        ✓
                      </span>
                      <div>
                        <h4 style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: 'var(--primary-dark)',
                          marginBottom: '0.5rem'
                        }}>
                          {takeaway.title}
                        </h4>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}>
                          {takeaway.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
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
                { name: 'ATT', href: '/projects/att', description: 'Mobile App Redesign' },
                { name: 'Prommuni', href: '/projects/prommuni', description: 'SaaS Platform' },
                { name: 'Macro Meal Generator', href: '/projects/macro-meal', description: 'AI-Powered Nutrition' }
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