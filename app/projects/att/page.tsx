'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

export default function ATTProject() {
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
              background: 'rgba(240, 147, 251, 0.1)',
              color: '#f093fb',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              Mobile Design • User Research • Prototyping
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              American Top Team
            </h1>

            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '2rem'
            }}>
              Mobile app redesign focused on adding features to a gym app to improve member retention and engagement for one of the world's most respected MMA gyms.
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
                  Contract UI/UX Designer
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  DURATION
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  6 months
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  TIMELINE
                </h4>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-dark)', margin: 0 }}>
                  August - November 2024
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
              {['User Interviews', 'Mobile Design', 'Prototyping', 'User Flow', 'User Testing'].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: 'rgba(240, 147, 251, 0.1)',
                    color: '#f093fb',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid rgba(240, 147, 251, 0.2)'
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
              background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(240, 147, 251, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/ATTCoverMockup.png"
                alt="ATT Project Cover"
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
            
            {/* About ATT */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
              }}>
                <div>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#f093fb',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    About American Top Team
                  </p>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: 'var(--primary-dark)',
                    marginBottom: '1.5rem'
                  }}>
                    American Top Team (ATT) is one of the most respected and successful mixed martial arts (MMA) gyms in the world. ATT has a large network of gyms primary in the southern USA.
                  </h2>
                </div>
                <div style={{
                  height: '300px',
                  background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <Image
                    src="/images/ATT.png"
                    alt="ATT Logo"
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '3rem'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* The Challenge */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                padding: '3rem',
                borderRadius: '24px',
                marginBottom: '3rem'
              }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  The Prompt
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-dark)'
                }}>
                  Update the current mobile app to add the following features to allow:
                </h2>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)'
                }}>
                  {[
                    'Members to track their martial arts progression (belt, sparring notes, techniques).',
                    'Members to post workouts, training logs, and class notes to share with coaches or friends.',
                    'Encouragement for members to attend classes and maintain their memberships'
                  ].map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        color: '#f093fb',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        minWidth: '20px'
                      }}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* User Research */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
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
                  I ran informal interviews with 7 members of the gym ranging from fighters, enthusiasts, coaches, and other staff members. Some of my main takeaways were:
                </h2>
              </div>

              {/* Research Insights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  'Progress Tracking is Essential but Underdeveloped',
                  'Class Scheduling Needs Real-Time Info',
                  'Coaches Want Feedback Loops, Members Want More Coaching',
                  'Social + Community Features Matter',
                  'User Types Have Different Needs'
                ].map((insight, index) => (
                  <div key={index} style={{
                    background: 'rgba(240, 147, 251, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderLeft: '4px solid #f093fb',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: 'var(--primary-dark)',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Wireframes */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  WIREFRAMES
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Key Screen Designs
                </h2>
              </div>

              {/* Home & Comment Screens */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Image
                      src="/images/Home.png"
                      alt="Home Screen Wireframe"
                      fill
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                  <div style={{
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Image
                      src="/images/Comment.png"
                      alt="Comment Screen Wireframe"
                      fill
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  margin: 0
                }}>
                  These screens are part of a feature that allows users to share and engage with workout posts. The Home screen displays a feed of posts made by members along with attended class posts, which includes logs of the classes that have occurred. The Comment screen expands the post, enabling users to view details and add their thoughts, fostering community interaction and motivation among members.
                </p>
              </div>

              {/* Post Screen */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '300px',
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Image
                      src="/images/Post.png"
                      alt="Post Creation Screen Wireframe"
                      fill
                      style={{
                        objectFit: 'contain',
                        padding: '2rem'
                      }}
                    />
                  </div>
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  margin: 0
                }}>
                  The Post screen allows members to log and share their training experiences by selecting the workout type, data format (e.g., stats, reflections), and adding a title, description, and optional media.
                </p>
              </div>

              {/* Progress Screens */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    { src: '/images/Progress.png', alt: 'Progress Overview' },
                    { src: '/images/Belt Progress Opened.png', alt: 'Belt Progress Opened' },
                    { src: '/images/Belt Progress Closed.png', alt: 'Belt Progress Closed' },
                    { src: '/images/Badges Earned.png', alt: 'Badges Earned' }
                  ].map((screen, index) => (
                    <div key={index} style={{
                      height: '350px',
                      background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        style={{
                          objectFit: 'contain',
                          padding: '1rem'
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                <div style={{
                  background: 'rgba(240, 147, 251, 0.05)',
                  padding: '2rem',
                  borderRadius: '16px'
                }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'var(--text-secondary)'
                  }}>
                    {[
                      'Badges Earned: Displays achievements like class attendance and check-ins, with progress trackers for ongoing goals.',
                      'Belt Progress (Closed/Opened): Features an interactive calendar highlighting upcoming promotion tests, with detailed event information when expanded.',
                      'Progress Overview: Provides a snapshot of the user\'s current belt ranks alongside key badges.'
                    ].map((item, index) => (
                      <li key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}>
                        <span style={{
                          color: '#f093fb',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          minWidth: '20px'
                        }}>
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Testing Rounds */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  USER TESTING
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Two Rounds of Testing & Iteration
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem'
              }}>
                {/* Round 1 */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(240, 147, 251, 0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: 'var(--primary-dark)'
                  }}>
                    Round 1 of Testing
                  </h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#f093fb'
                    }}>
                      Objective
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Validate feature desirability and identify usability issues before moving into high-fidelity screens.
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#f093fb'
                    }}>
                      Participants
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      6 gym members, 2 gym coaches
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#f093fb'
                    }}>
                      Method
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Remote
                    </p>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f093fb'
                    }}>
                      Tasks
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {[
                        'Describe the information you see on the home screen, and (assuming they can see it\'s a post) click the button to comment on the post',
                        'Click the button you would use to create a post',
                        'Navigate to the progress tab, and walk me through the information you\'re seeing on the screen'
                      ].map((task, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          marginBottom: '0.75rem',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          color: 'var(--text-secondary)'
                        }}>
                          <span style={{
                            color: '#f093fb',
                            fontSize: '1rem',
                            fontWeight: '700',
                            minWidth: '16px'
                          }}>
                            •
                          </span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Round 2 */}
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(240, 147, 251, 0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: 'var(--primary-dark)'
                  }}>
                    Round 2 of Testing
                  </h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#f093fb'
                    }}>
                      Objective
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Validate UI compatibility and identify any other issues
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#f093fb'
                    }}>
                      Participants
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      6 gym members, 2 gym coaches
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#f093fb'
                    }}>
                      Method
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      Remote
                    </p>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      color: '#f093fb'
                    }}>
                      Tasks
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        color: 'var(--text-secondary)'
                      }}>
                        <span style={{
                          color: '#f093fb',
                          fontSize: '1rem',
                          fontWeight: '700',
                          minWidth: '16px'
                        }}>
                          •
                        </span>
                        Navigate to the home screen, create a post, and view all the elements in the progress bar
                      </li>
                    </ul>

                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      marginTop: '1.5rem',
                      color: '#f093fb'
                    }}>
                      Client Requests
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      color: 'var(--text-secondary)',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      Based on testing results, the client requested additional refinements to the progress tracking system and social features integration.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Prototype */}
            <section style={{ marginBottom: '6rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  FINAL PROTOTYPE
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  High-Fidelity Mobile App Design
                </h2>
              </div>

              <div style={{
                height: '500px',
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '3rem'
              }}>
                <Image
                  src="/images/ATTCoverMockup.png"
                  alt="ATT Final Prototype"
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '3rem'
                  }}
                />
              </div>
            </section>

            {/* Key Features & Outcomes */}
            <section style={{ marginBottom: '5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  KEY FEATURES
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  What We Delivered
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {[
                  {
                    icon: '📈',
                    title: 'Progress Tracking System',
                    description: 'Comprehensive belt progression tracking with interactive calendar for promotion tests and achievement badges for attendance and check-ins.'
                  },
                  {
                    icon: '👥',
                    title: 'Social Workout Sharing',
                    description: 'Members can post workouts, training logs, and class notes to share with coaches and friends, fostering community interaction.'
                  },
                  {
                    icon: '🎯',
                    title: 'Engagement Features',
                    description: 'Gamified elements including badges, streaks, and class attendance tracking to encourage regular participation and membership retention.'
                  },
                  {
                    icon: '💬',
                    title: 'Coach-Member Feedback',
                    description: 'Enhanced communication channels allowing coaches to provide feedback on member posts and track individual progress over time.'
                  }
                ].map((feature, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(240, 147, 251, 0.1)',
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
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--primary-dark)'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Takeaways */}
            <section style={{ marginBottom: '5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#f093fb',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  PROJECT LEARNINGS
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--primary-dark)'
                }}>
                  Key Takeaways
                </h2>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.02))',
                padding: '2rem',
                borderRadius: '20px'
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Different user types (fighters, enthusiasts, coaches) have distinct needs that must be balanced in the design',
                    'Progress tracking is essential for member motivation, but must be simple and visual to encourage regular use',
                    'Social features significantly impact member engagement when designed with community building in mind',
                    'Multiple rounds of testing with real gym members provided invaluable insights for feature refinement',
                    'Gamification elements like badges and streaks can effectively encourage consistent gym attendance'
                  ].map((takeaway, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem',
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)'
                    }}>
                      <span style={{
                        color: '#f093fb',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        minWidth: '20px'
                      }}>
                        ✓
                      </span>
                      {takeaway}
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
                { name: 'KOMMA', href: '/projects/komma', description: 'Social Sports Platform' },
                { name: 'Prommuni', href: '/projects/prommuni', description: 'SaaS Platform' },
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