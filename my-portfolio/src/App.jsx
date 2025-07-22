import React, { useState } from 'react';
import { X, Github, Linkedin, Mail, Code } from 'lucide-react';

const App = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const projects = {
    building1: {
      title: "INDRA5G - B5G Open RAN System",
      tech: "Open5GS, srsRAN, xApp, Reinforcement Learning",
      description: "Intelligent B5G Open RAN system for real-time traffic classification and dynamic PRB allocation using PPO-based RL",
      color: "#8B4513"
      
    },
    building2: {
      title: "SQL Injection Prevention Extension", 
      tech: "PostgreSQL, Zero-shot Learning, Python",
      description: "PostgreSQL extension integrating query fingerprinting and semantic analysis for SQL injection prevention",
      color: "#696969"
    },
    building3: {
      title: "BRC Official Website",
      tech: "HTML5, CSS, JavaScript, React, PHP, SQL", 
      description: "Live website for MIT Book Reader's Club managing club activities and member exploration",
      color: "#CD853F"
    },
    building4: {
      title: "YourTube & Biometric Locker",
      tech: "Java Servlets, YouTube API, Arduino, C",
      description: "YouTube replica using Java servlets and Google APIs, plus award-winning biometric locker system",
      color: "#DC143C"
    }
  };

  const openModal = (buildingId) => {
    setSelectedBuilding(buildingId);
  };

  const closeModal = () => {
    setSelectedBuilding(null);
  };

  return (
    <div className="portfolio-village">
      {/* Header */}
      <header className="header">
        <h1 className="title">Krithika's Portfolio Village</h1>
        <div className="social-links">
          <a href="https://github.com/Kritzr" target="_blank" rel="noopener noreferrer">
            <Github className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/krithika-ravishankar" target="_blank" rel="noopener noreferrer">
            <Linkedin className="social-icon" />
          </a>
          <a href="mailto:krithikaravishankar4@gmail.com">
            <Mail className="social-icon" />
          </a>
        </div>
      </header>

      {/* Sun */}
      <div className="sun"></div>

      {/* Mountains Background */}
      <div className="mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
        <div className="mountain mountain-4"></div>
        <div className="mountain mountain-5"></div>
      </div>

      {/* Ground */}
      <div className="ground"></div>

      {/* Buildings */}
      <div className="village">
        {/* Building 1 - Brown */}
        <div 
          className="building building-1"
          onClick={() => openModal('building1')}
        >
          <div className="building-body" style={{backgroundColor: '#8B4513'}}>
            <div className="window"></div>
            <div className="window"></div>
            <div className="door"></div>
          </div>
        </div>

        {/* Building 2 - Gray */}
        <div 
          className="building building-2"
          onClick={() => openModal('building2')}
        >
          <div className="building-body tall" style={{backgroundColor: '#696969'}}>
            <div className="window"></div>
            <div className="window"></div>
          </div>
          <div className="building-base" style={{backgroundColor: '#CD853F'}}></div>
        </div>

        {/* Building 3 - Orange */}
        <div 
          className="building building-3"
          onClick={() => openModal('building3')}
        >
          <div className="building-body" style={{backgroundColor: '#CD853F'}}>
            <div className="window"></div>
            <div className="window"></div>
            <div className="door"></div>
          </div>
        </div>

        {/* Building 4 - Red */}
        <div 
          className="building building-4"
          onClick={() => openModal('building4')}
        >
          <div className="building-body" style={{backgroundColor: '#DC143C'}}>
            <div className="window"></div>
            <div className="window"></div>
          </div>
        </div>
      </div>

      {/* Trees */}
      <div className="trees">
        <div className="tree tree-1">
          <div className="tree-trunk"></div>
          <div className="tree-top"></div>
        </div>
        <div className="tree tree-2">
          <div className="tree-trunk"></div>
          <div className="tree-top"></div>
        </div>
        <div className="tree tree-3">
          <div className="tree-trunk"></div>
          <div className="tree-top"></div>
        </div>
        <div className="tree tree-4">
          <div className="tree-trunk"></div>
          <div className="tree-top"></div>
        </div>
        <div className="tree tree-5">
          <div className="tree-trunk"></div>
          <div className="tree-top"></div>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="welcome-text">
        <h2>Welcome to my Research & Development Village!</h2>
        <p>Computer Engineering Student | Research Associate @ IITM Pravartak</p>
        <p className="subtitle">Exploring B5G, Open RAN, ML & Cybersecurity</p>
      </div>

      {/* Modal */}
      {selectedBuilding && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <Code className="modal-icon" />
                <h2>Research & Projects</h2>
              </div>
              <X className="close-button" onClick={closeModal} />
            </div>
            <div className="modal-content">
              <div className="project-item">
                <div className="project-line" style={{backgroundColor: projects[selectedBuilding].color}}></div>
                <div className="project-info">
                  <h3 className="project-title">{projects[selectedBuilding].title}</h3>
                  <p className="project-tech">{projects[selectedBuilding].tech}</p>
                  <p className="project-description">{projects[selectedBuilding].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .portfolio-village {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(180deg, #87CEEB 0%, #98FB98 70%);
          overflow: hidden;
          position: relative;
          cursor: default;
        }

        .header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }

        .title {
          font-size: 2.5rem;
          color: white;
          font-weight: 300;
          margin: 0;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-links a {
          color: inherit;
          text-decoration: none;
        }

        .social-icon {
          width: 24px;
          height: 24px;
          color: white;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .social-icon:hover {
          transform: scale(1.1);
        }

        .sun {
          position: absolute;
          top: 120px;
          right: 120px;
          width: 120px;
          height: 120px;
          background: #DAA520;
          border-radius: 50%;
          z-index: 5;
        }

        .mountains {
          position: absolute;
          bottom: 200px;
          left: 0;
          right: 0;
          height: 200px;
          z-index: 3;
        }

        .mountain {
          position: absolute;
          bottom: 0;
          background: #228B22;
        }

        .mountain-1 {
          left: 50px;
          width: 0;
          height: 0;
          border-left: 80px solid transparent;
          border-right: 80px solid transparent;
          border-bottom: 120px solid #228B22;
          background: none;
        }

        .mountain-2 {
          left: 200px;
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 100px solid #228B22;
          background: none;
        }

        .mountain-3 {
          left: 400px;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 150px solid #228B22;
          background: none;
        }

        .mountain-4 {
          left: 700px;
          width: 0;
          height: 0;
          border-left: 70px solid transparent;
          border-right: 70px solid transparent;
          border-bottom: 110px solid #228B22;
          background: none;
        }

        .mountain-5 {
          right: 50px;
          width: 0;
          height: 0;
          border-left: 90px solid transparent;
          border-right: 90px solid transparent;
          border-bottom: 130px solid #228B22;
          background: none;
        }

        .ground {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: #32CD32;
          z-index: 4;
        }

        .village {
          position: absolute;
          bottom: 100px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          padding: 0 100px;
          z-index: 6;
        }

        .building {
          cursor: pointer;
          transition: transform 0.2s;
          position: relative;
        }

        .building:hover {
          transform: translateY(-5px);
        }

        .building-body {
          border-radius: 8px 8px 0 0;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;
          padding: 15px 10px 5px;
        }

        .building-1 .building-body {
          width: 120px;
          height: 140px;
        }

        .building-2 .building-body.tall {
          width: 100px;
          height: 180px;
        }

        .building-2 .building-base {
          width: 40px;
          height: 30px;
          margin: 0 auto;
        }

        .building-3 .building-body {
          width: 130px;
          height: 120px;
        }

        .building-4 .building-body {
          width: 110px;
          height: 160px;
        }

        .window {
          width: 20px;
          height: 20px;
          background: #FFFF99;
          border-radius: 3px;
          margin: 5px;
        }

        .door {
          width: 15px;
          height: 25px;
          background: #8B4513;
          border-radius: 3px 3px 0 0;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .trees {
          position: absolute;
          bottom: 100px;
          left: 0;
          right: 0;
          z-index: 5;
        }

        .tree {
          position: absolute;
          bottom: 0;
        }

        .tree-trunk {
          width: 8px;
          height: 30px;
          background: #8B4513;
          margin: 0 auto;
        }

        .tree-top {
          width: 40px;
          height: 40px;
          background: #228B22;
          border-radius: 50%;
          position: relative;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .tree-1 { left: 80px; }
        .tree-2 { left: 300px; }
        .tree-3 { left: 500px; }
        .tree-4 { left: 750px; }
        .tree-5 { right: 100px; }

        .welcome-text {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: white;
          z-index: 10;
        }

        .welcome-text h2 {
          font-size: 1.8rem;
          margin: 0 0 10px;
          font-weight: 300;
        }

        .welcome-text p {
          font-size: 1.1rem;
          margin: 5px 0;
          opacity: 0.9;
        }

        .welcome-text .subtitle {
          font-size: 0.95rem;
          opacity: 0.8;
          font-style: italic;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 12px;
          padding: 0;
          min-width: 500px;
          max-width: 600px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          border-bottom: 1px solid #eee;
        }

        .modal-title-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-icon {
          width: 24px;
          height: 24px;
          color: #333;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .close-button {
          width: 24px;
          height: 24px;
          color: #666;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-button:hover {
          color: #333;
        }

        .modal-content {
          padding: 25px;
        }

        .project-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .project-line {
          width: 4px;
          height: 80px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .project-info {
          flex: 1;
        }

        .project-title {
          margin: 0 0 8px;
          font-size: 1.3rem;
          color: #333;
          font-weight: 600;
        }

        .project-tech {
          margin: 0 0 12px;
          color: #4A90E2;
          font-weight: 500;
        }

        .project-description {
          margin: 0;
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
          }
          
          .village {
            padding: 0 20px;
          }
          
          .modal {
            min-width: 90vw;
            margin: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;