import { useState, useRef } from "react";
import "./styles.css";

import Header from "../../components/molecules/Header";
import Plugin from "../../components/molecules/Plugin";
import Card from "../../components/molecules/Card";

import { PLUGINS } from "../../components/organisms/Plugins/constants";

export const ExplorePage = () => {
  const pluginsRef = useRef(null);
  return (
    <>
      <Header
        title="Explore files and plugins made just for Figma"
        subtitle="Explore, install, use, and remix thousands of files and plugins"
        activeSection="Explore"
      />
      <div className="banner-container">
        <div className="banner">
          <div className="info-banner">
            <h3 className="banner-title">
              Everything you need to get started in FigJam
            </h3>
            <button className="banner-button">Take a peek</button>
          </div>
        </div>
      </div>
      <section className="plugins-section">
        <div className="plugins-bar">
          <div className="plugins-bar-info">
            <h4 className="plugins-bar-subtitle">
              PLUGINS FOR DOCUMENTATION, ANNOTATION, AND COMMUNICATION OF YOUR
              DESIGNS
            </h4>
            <h2 className="plugins-bar-title">Plugins for Documentation</h2>
          </div>
          <div className="plugins-bar-more">
            <h4 className="plugins-showmore">Show more</h4>
          </div>
        </div>
        <div className="plugins-container">
          <div className="plugins">
            <div className="plugins-tile" ref={pluginsRef}>
              {PLUGINS.slice(0, 3).map((plugin) => (
                <Plugin
                  name={plugin.name}
                  title={plugin.title}
                  description={plugin.description}
                />
              ))}
            </div>
          </div>
          <div className="none"></div>
        </div>
      </section>

      <section className="plugins-section">
        <div className="plugins-bar">
          <div className="plugins-bar-info">
            <h4 className="plugins-bar-subtitle">THIS WEEK</h4>
            <h2 className="plugins-bar-title">Top plugins</h2>
          </div>
          <div className="plugins-bar-more">
            <h4 className="plugins-showmore">Browse all plugins →</h4>
          </div>
        </div>
        <div className="plugins-container">
          <div className="plugins">
            <div className="plugins-tile" ref={pluginsRef}>
              {PLUGINS.slice(0, 3).map((plugin) => (
                <Plugin
                  name={plugin.name}
                  title={plugin.title}
                  description={plugin.description}
                />
              ))}
            </div>
          </div>
          <div className="none"></div>
        </div>
      </section>

      <div className="plugins-bar">
        <div className="plugins-bar-info">
          <h4 className="plugins-bar-subtitle">EXPLORE</h4>
          <h2 className="plugins-bar-title">Trending files</h2>
        </div>
      </div>
      <div className="cards-container">
        <div className="cards">
          <Card
            title="IBM Carbon Design System"
            author="HARSH KUMAR"
            likes={101}
            duplicates={1300}
            icon="profile1"
            image="main1"
          />
          <Card
            title="Figma Auto Layout playground"
            author="Figma"
            likes={3800}
            duplicates={108000}
            icon="profilefigma"
            image="main2"
          />
          <Card
            title="IBM Carbon Design System"
            author="HARSH KUMAR"
            likes={101}
            duplicates={1300}
            icon="profile1"
            image="main1"
          />
          <Card
            title="Figma Auto Layout playground"
            author="Figma"
            likes={3800}
            duplicates={108000}
            icon="profilefigma"
            image="main2"
          />
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
