import React, { useState } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const buildings = [
    {
      id: 1,
      name: 'Cozy House',
      projects: [
        { name: 'E-Commerce Platform', tech: 'React, Node.js', date: '2024', team: '4 members' },
        { name: 'Inventory System', tech: 'Vue.js, MySQL', date: '2023', team: '2 members' },
        { name: 'Payment Gateway', tech: 'Stripe API, Express', date: '2024', team: '3 members' },
        { name: 'Admin Dashboard', tech: 'React, Charts.js', date: '2023', team: '1 member' }
      ]
    },
    {
      id: 2,
      name: 'Apartment Complex',
      projects: [
        { name: 'Social Media App', tech: 'React Native, Firebase', date: '2024', team: '5 members' },
        { name: 'Chat System', tech: 'Socket.io, Node.js', date: '2023', team: '3 members' },
        { name: 'Content CMS', tech: 'Next.js, Prisma', date: '2024', team: '2 members' },
        { name: 'User Analytics', tech: 'Python, D3.js', date: '2023', team: '4 members' }
      ]
    },
    {
      id: 3,
      name: 'Office Tower',
      projects: [
        { name: 'Learning Platform', tech: 'Angular, MongoDB', date: '2024', team: '6 members' },
        { name: 'Quiz Engine', tech: 'React, PostgreSQL', date: '2023', team: '3 members' },
        { name: 'Video Streaming', tech: 'WebRTC, Node.js', date: '2024', team: '4 members' },
        { name: 'Progress Tracker', tech: 'Vue.js, Redis', date: '2023', team: '2 members' }
      ]
    },
    {
      id: 4,
      name: 'Corner Shop',
      projects: [
        { name: 'IoT Dashboard', tech: 'React, MQTT', date: '2024', team: '3 members' },
        { name: 'Sensor Network', tech: 'Python, InfluxDB', date: '2023', team: '5 members' },
        { name: 'Mobile Controller', tech: 'Flutter, BLE', date: '2024', team: '2 members' },
        { name: 'Data Visualizer', tech: 'D3.js, WebSockets', date: '2023', team: '4 members' }
      ]
    },
    {
      id: 5,
      name: 'Modern House',
      projects: [
        { name: 'Fintech App', tech: 'React, Blockchain', date: '2024', team: '7 members' },
        { name: 'Crypto Wallet', tech: 'Web3.js, Solidity', date: '2023', team: '4 members' },
        { name: 'Trading Bot', tech: 'Python, TensorFlow', date: '2024', team: '3 members' },
        { name: 'Risk Analysis', tech: 'R, Shiny', date: '2023', team: '2 members' }
      ]
    },
    {
      id: 6,
      name: 'Skyscraper',
      projects: [
        { name: 'Health Tracker', tech: 'React Native, GraphQL', date: '2024', team: '4 members' },
        { name: 'Telemedicine', tech: 'WebRTC, Express', date: '2023', team: '6 members' },
        { name: 'Medical Records', tech: 'Next.js, PostgreSQL', date: '2024', team: '3 members' },
        { name: 'Symptom Checker', tech: 'ML, FastAPI', date: '2023', team: '5 members' }
      ]
    },
    {
      id: 7,
      name: 'Warehouse',
      projects: [
        { name: 'Travel Planner', tech: 'Vue.js, Maps API', date: '2024', team: '4 members' },
        { name: 'Booking System', tech: 'React, Stripe', date: '2023', team: '3 members' },
        { name: 'Review Platform', tech: 'Angular, MongoDB', date: '2024', team: '5 members' },
        { name: 'Route Optimizer', tech: 'Python, Algorithms', date: '2023', team: '2 members' }
      ]
    }
  ];

  const openBuilding = (building) => {
    setSelectedBuilding(building);
  };

  const closeModal = () => {
    setSelectedBuilding(null);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: isDark 
        ? 'linear-gradient(to bottom, #1f2937, #1e3a8a, #581c87)' 
        : 'linear-gradient(to bottom, #93c5fd, #60a5fa, #4ade80)',
      transition: 'all 0.7s ease',
      overflow: 'hidden'
    },
    sunMoon: {
      position: 'fixed',
      top: '32px',
      right: '32px',
      zIndex: 20,
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    moon: {
      width: '64px',
      height: '64px',
      backgroundColor: '#e5e7eb',
      borderRadius: '50%',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      position: 'relative'
    },
    moonCrater1: {
      position: 'absolute',
      top: '12px',
      right: '16px',
      width: '8px',
      height: '8px',
      backgroundColor: '#d1d5db',
      borderRadius: '50%'
    },
    moonCrater2: {
      position: 'absolute',
      top: '24px',
      right: '8px',
      width: '4px',
      height: '4px',
      backgroundColor: '#9ca3af',
      borderRadius: '50%'
    },
    moonCrater3: {
      position: 'absolute',
      bottom: '16px',
      left: '12px',
      width: '6px',
      height: '6px',
      backgroundColor: '#d1d5db',
      borderRadius: '50%'
    },
    sunContainer: {
      position: 'relative',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sunRays: {
      position: 'absolute',
      inset: '0'
    },
    sunRay: {
      position: 'absolute',
      backgroundColor: '#fbbf24',
      borderRadius: '9999px'
    },
    sunBody: {
      width: '40px',
      height: '40px',
      backgroundColor: '#fbbf24',
      borderRadius: '50%',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 10,
      animation: 'pulse 2s infinite'
    },
    sunGlow: {
      position: 'absolute',
      inset: '0',
      backgroundColor: '#fef3c7',
      borderRadius: '50%',
      filter: 'blur(4px)',
      opacity: 0.5
    },
    starsContainer: {
      position: 'fixed',
      inset: '0',
      zIndex: 0
    },
    star: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      backgroundColor: 'white',
      borderRadius: '50%',
      animation: 'twinkle 3s infinite'
    },
    cloudsContainer: {
      position: 'fixed',
      inset: '0',
      zIndex: 0
    },
    cloud: {
      position: 'absolute',
      opacity: 0.6,
      animation: 'float 8s ease-in-out infinite'
    },
    cloudPart1: {
      width: '24px',
      height: '16px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'inline-block'
    },
    cloudPart2: {
      width: '32px',
      height: '24px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'inline-block',
      marginLeft: '-8px',
      marginBottom: '4px'
    },
    cloudPart3: {
      width: '24px',
      height: '16px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'inline-block',
      marginLeft: '-8px'
    },
    scrollContainer: {
      display: 'flex',
      overflowX: 'auto',
      padding: '80px 32px',
      gap: '48px',
      minWidth: 'max-content',
      height: '100vh',
      alignItems: 'center'
    },
    contentBlock: {
      flexShrink: 0,
      width: '320px',
      height: '240px',
      borderRadius: '12px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '24px',
      transition: 'colors 0.7s ease',
      backgroundColor: isDark ? '#374151' : 'white',
      color: isDark ? 'white' : '#1f2937'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    text: {
      fontSize: '18px',
      lineHeight: '1.6'
    },
    list: {
      fontSize: '18px',
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      marginBottom: '8px'
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Sun/Moon Toggle */}
      <div 
        style={styles.sunMoon}
        onClick={toggleTheme}
      >
        {isDark ? (
          <div style={styles.moon}>
            <div style={styles.moonCrater1} />
            <div style={styles.moonCrater2} />
            <div style={styles.moonCrater3} />
          </div>
        ) : (
          <div style={styles.sunContainer}>
            <div style={styles.sunRays}>
              {/* 8 sun rays */}
              <div style={{...styles.sunRay, top: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '16px'}} />
              <div style={{...styles.sunRay, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', height: '16px'}} />
              <div style={{...styles.sunRay, left: 0, top: '50%', transform: 'translateY(-50%)', width: '16px', height: '2px'}} />
              <div style={{...styles.sunRay, right: 0, top: '50%', transform: 'translateY(-50%)', width: '16px', height: '2px'}} />
              <div style={{...styles.sunRay, top: '8px', left: '8px', width: '2px', height: '12px', transform: 'rotate(45deg)'}} />
              <div style={{...styles.sunRay, top: '8px', right: '8px', width: '2px', height: '12px', transform: 'rotate(-45deg)'}} />
              <div style={{...styles.sunRay, bottom: '8px', left: '8px', width: '2px', height: '12px', transform: 'rotate(-45deg)'}} />
              <div style={{...styles.sunRay, bottom: '8px', right: '8px', width: '2px', height: '12px', transform: 'rotate(45deg)'}} />
            </div>
            <div style={styles.sunBody}>
              <div style={styles.sunGlow} />
            </div>
          </div>
        )}
      </div>

      {/* Stars (only in dark mode) */}
      {isDark && (
        <div style={styles.starsContainer}>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.star,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Clouds (only in light mode) */}
      {!isDark && (
        <div style={styles.cloudsContainer}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.cloud,
                left: `${5 + i * 12}%`,
                top: `${15 + (i % 3) * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            >
              <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <div style={styles.cloudPart1} />
                <div style={styles.cloudPart2} />
                <div style={styles.cloudPart3} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Ground */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '120px',
        backgroundColor: isDark ? '#374151' : '#4ade80',
        transition: 'background-color 0.7s ease',
        zIndex: 5
      }} />

      {/* Horizontal Scrolling Buildings */}
      <div style={{
        display: 'flex',
        overflowX: 'scroll',
        overflowY: 'hidden',
        padding: '0 32px',
        gap: '40px',
        minWidth: 'fit-content',
        width: '100%',
        height: '100vh',
        alignItems: 'flex-end',
        paddingBottom: '120px',
        scrollBehavior: 'smooth'
      }}>
        
        {/* Building 1 - House */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[0])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          {/* Roof */}
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: `60px solid ${isDark ? '#dc2626' : '#ef4444'}`,
            marginBottom: '-5px',
            zIndex: 2
          }} />
          {/* House Body */}
          <div style={{
            width: '80px',
            height: '100px',
            backgroundColor: isDark ? '#fbbf24' : '#f59e0b',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Door */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '35px',
              backgroundColor: isDark ? '#92400e' : '#b45309',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px'
            }} />
            {/* Windows */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '10px',
              width: '15px',
              height: '15px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '2px solid #92400e'
            }} />
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '10px',
              width: '15px',
              height: '15px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '2px solid #92400e'
            }} />
          </div>
        </div>

        {/* Building 2 - Apartment */}
        <div style={{
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[1])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          <div style={{
            width: '90px',
            height: '180px',
            backgroundColor: isDark ? '#1e40af' : '#3b82f6',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Flat roof */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-5px',
              width: '100px',
              height: '10px',
              backgroundColor: isDark ? '#1e3a8a' : '#2563eb'
            }} />
            {/* Windows grid */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${15 + (i % 3) * 25}px`,
                  top: `${20 + Math.floor(i / 3) * 35}px`,
                  width: '12px',
                  height: '12px',
                  backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
                  border: '1px solid #1e40af'
                }}
              />
            ))}
            {/* Entrance */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '25px',
              height: '40px',
              backgroundColor: '#92400e'
            }} />
          </div>
        </div>

        {/* Building 3 - Office Tower */}
        <div style={{
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[2])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          <div style={{
            width: '70px',
            height: '250px',
            backgroundColor: isDark ? '#6b7280' : '#9ca3af',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Windows */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${10 + (i % 2) * 30}px`,
                  top: `${15 + Math.floor(i / 2) * 25}px`,
                  width: '15px',
                  height: '15px',
                  backgroundColor: Math.random() > 0.3 ? (isDark ? '#fef3c7' : '#fffbeb') : (isDark ? '#374151' : '#6b7280'),
                  border: '1px solid #4b5563'
                }}
              />
            ))}
          </div>
        </div>

        {/* Building 4 - Shop */}
        <div style={{
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[3])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          <div style={{
            width: '100px',
            height: '120px',
            backgroundColor: isDark ? '#16a34a' : '#22c55e',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Awning */}
            <div style={{
              position: 'absolute',
              top: '60px',
              left: '-5px',
              width: '110px',
              height: '15px',
              backgroundColor: isDark ? '#dc2626' : '#ef4444',
              borderRadius: '0 0 15px 15px'
            }} />
            {/* Shop window */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '10px',
              width: '80px',
              height: '35px',
              backgroundColor: isDark ? '#e0f2fe' : '#f0f9ff',
              border: '3px solid #0891b2'
            }} />
            {/* Door */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: '15px',
              width: '25px',
              height: '45px',
              backgroundColor: '#92400e'
            }} />
          </div>
        </div>

        {/* Building 5 - Modern House */}
        <div style={{
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[4])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          <div style={{
            width: '85px',
            height: '140px',
            backgroundColor: isDark ? '#7c3aed' : '#a855f7',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Flat modern roof */}
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '-3px',
              width: '91px',
              height: '8px',
              backgroundColor: isDark ? '#5b21b6' : '#7c2d12'
            }} />
            {/* Large window */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '15px',
              width: '55px',
              height: '40px',
              backgroundColor: isDark ? '#e0f2fe' : '#f0f9ff',
              border: '2px solid #0891b2'
            }} />
            {/* Small windows */}
            <div style={{
              position: 'absolute',
              top: '80px',
              left: '15px',
              width: '20px',
              height: '20px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '1px solid #7c3aed'
            }} />
            <div style={{
              position: 'absolute',
              top: '80px',
              right: '15px',
              width: '20px',
              height: '20px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '1px solid #7c3aed'
            }} />
            {/* Modern door */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '22px',
              height: '35px',
              backgroundColor: '#1f2937'
            }} />
          </div>
        </div>

        {/* Building 6 - Skyscraper */}
        <div style={{
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[5])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          <div style={{
            width: '60px',
            height: '300px',
            backgroundColor: isDark ? '#1f2937' : '#374151',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Antenna */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '20px',
              backgroundColor: '#ef4444'
            }} />
            {/* Windows pattern */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${8 + (i % 3) * 18}px`,
                  top: `${10 + Math.floor(i / 3) * 25}px`,
                  width: '8px',
                  height: '12px',
                  backgroundColor: Math.random() > 0.4 ? (isDark ? '#fef3c7' : '#fbbf24') : (isDark ? '#1f2937' : '#374151'),
                  border: '0.5px solid #6b7280'
                }}
              />
            ))}
          </div>
        </div>

        {/* Building 7 - Warehouse */}
        <div style={{
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          minWidth: '120px'
        }}
        onClick={() => openBuilding(buildings[6])}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0px)'}
        >
          <div style={{
            width: '120px',
            height: '100px',
            backgroundColor: isDark ? '#b91c1c' : '#dc2626',
            position: 'relative',
            transition: 'background-color 0.7s ease'
          }}>
            {/* Curved roof */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '-5px',
              width: '130px',
              height: '30px',
              backgroundColor: isDark ? '#991b1b' : '#b91c1c',
              borderRadius: '65px 65px 0 0'
            }} />
            {/* Large door */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '20px',
              width: '35px',
              height: '70px',
              backgroundColor: '#92400e',
              border: '2px solid #451a03'
            }} />
            {/* Small windows */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              width: '15px',
              height: '15px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '1px solid #b91c1c'
            }} />
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '20px',
              width: '15px',
              height: '15px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '1px solid #b91c1c'
            }} />
          </div>
        </div>

        {/* Extra space for scrolling */}
        <div style={{ minWidth: '100px', height: '1px' }} />

      </div>

      {/* Project Modal */}
      {selectedBuilding && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 30,
          padding: '16px'
        }}>
          <div style={{
            backgroundColor: isDark ? '#374151' : 'white',
            color: isDark ? 'white' : '#1f2937',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            maxWidth: '32rem',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto',
            transition: 'colors 0.3s ease'
          }}>
            
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px',
              borderBottom: `1px solid ${isDark ? '#6b7280' : '#e5e7eb'}`
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                margin: 0
              }}>
                🏢 {selectedBuilding.name} Projects
              </h2>
              <button 
                onClick={closeModal}
                style={{
                  padding: '8px',
                  backgroundColor: isDark ? '#6b7280' : '#f3f4f6',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'background-color 0.2s ease'
                }}
              >
                ✕
              </button>
            </div>

            {/* Projects Grid */}
            <div style={{ padding: '24px' }}>
              {selectedBuilding.projects.map((project, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '16px',
                    marginBottom: '16px',
                    borderRadius: '8px',
                    backgroundColor: isDark ? '#4b5563' : '#f9fafb',
                    transition: 'background-color 0.2s ease',
                    borderLeft: '4px solid #3b82f6'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{
                      fontWeight: '600',
                      fontSize: '18px',
                      margin: 0
                    }}>{project.name}</h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{
                        cursor: 'pointer',
                        fontSize: '16px',
                        opacity: 0.7,
                        transition: 'opacity 0.2s ease'
                      }}>🔗</span>
                      <span style={{
                        cursor: 'pointer',
                        fontSize: '16px',
                        opacity: 0.7,
                        transition: 'opacity 0.2s ease'
                      }}>📱</span>
                    </div>
                  </div>
                  
                  <p style={{
                    color: isDark ? '#d1d5db' : '#6b7280',
                    marginBottom: '12px',
                    margin: 0
                  }}>
                    <span style={{ fontWeight: '500' }}>Tech Stack:</span> {project.tech}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '14px'
                  }}>
                    <div style={{
                      color: isDark ? '#9ca3af' : '#6b7280',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      📅 {project.date}
                    </div>
                    <div style={{
                      color: isDark ? '#9ca3af' : '#6b7280',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      👥 {project.team}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}: '65px 65px 0 0'
            }} />
            {/* Large door */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '20px',
              width: '35px',
              height: '70px',
              backgroundColor: '#92400e',
              border: '2px solid #451a03'
            }} />
            {/* Small windows */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              width: '15px',
              height: '15px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '1px solid #b91c1c'
            }} />
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '20px',
              width: '15px',
              height: '15px',
              backgroundColor: isDark ? '#fef3c7' : '#fffbeb',
              border: '1px solid #b91c1c'
            }} />
          </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Custom scrollbar */
        div::-webkit-scrollbar {
          height: 12px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 6px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.3);
          border-radius: 6px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default App;