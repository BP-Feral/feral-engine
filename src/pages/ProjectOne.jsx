
import React, { useEffect, useState } from 'react';
import "../styles/ProjectPage.css";

const ProjectOne = () => {
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    setActiveTab('description');
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div id="description">
            <p><strong>Project details</strong> and description. Built by Feral Works.</p>
            <p><strong>Second Line:</strong> More details here.</p>
            <p><strong>Some more</strong>details.</p>
            <a className="download-button" href="/downloads/optimi-light-latest.zip">Download Latest</a>
          </div>
        );
      case 'gallery':
        return (
          <div id="gallery">
            <p>Gallery goes here (embed images or sliders).</p>
          </div>
        );
      case 'changelog':
        return (
          <div id="changelog">
            <p>Changelog for each version listed here.</p>
          </div>
        );
      case 'versions':
        return (
          <div id="versions">
            <ul>
              <li><strong>v1.2.0</strong> - Updated files</li>
              <li><strong>v1.1.0</strong> - Initial public release</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="projectpage">
      <header>
        <h1>Project Two Title</h1>
        <p>Project Description</p>
      </header>

      <main>
        <div className="content">
          <div className="tabs">
            {['description', 'gallery', 'changelog', 'versions'].map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>

        <div className="sidebar">
          <div className="section-title">Compatibility</div>
          <p>Frameworks: - </p>
          <p>Platform: pc?</p>
          <p>Client-side only</p>

          <div className="section-title">Links</div>
          <p><a href="https://github.com/BP-Feral/optimi-light" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
          <p><a href="https://discord.gg/xcEYBpn2k2" target="_blank" rel="noopener noreferrer">Join Discord</a></p>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 Feral Works</p>
      </footer>
    </div>
  );
};

export default ProjectOne;
