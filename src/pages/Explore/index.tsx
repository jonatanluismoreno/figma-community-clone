import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import Header from "../../components/molecules/Header";
import Plugin from "../../components/molecules/Plugin";
import Navbar from "../../components/molecules/Navbar";
import Card from "../../components/molecules/Card";

import { PLUGINS } from "../../components/organisms/Plugins/constants";
import Cards from "../../components/organisms/Cards";
import Info from "../../components/molecules/Info";

export const ExplorePage = () => {
  const pluginsRef = useRef(null);
  return (
    <div className="explore-page">
      <Navbar />
      <Header
        title="Explore files and plugins made just for Figma"
        subtitle="Explore, install, use, and remix thousands of files and plugins"
        activeSection="Explore"
      />
      <section className="main">
        <div className="banner-container">
          <div className="banner">
            <Link to="/figjam" className="button-link">
              <div className="info-banner">
                <h3 className="banner-title">
                  Everything you need to get started in FigJam
                </h3>
                <button className="banner-button">Take a peek</button>
              </div>
            </Link>
          </div>
        </div>
        <section className="plugins-section">
          <Info
            title="Plugins for Documentation"
            subtitle="PLUGINS FOR DOCUMENTATION, ANNOTATION, AND COMMUNICATION OF YOUR
                DESIGNS"
            mode="showMore"
          />
          <div className="plugins-container">
            <div className="plugins">
              <div className="plugins-tile" ref={pluginsRef}>
                {PLUGINS.slice(0, 4).map((plugin) => (
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
          <Info
            title="Top plugins"
            subtitle="THIS WEEK"
            mode="link"
            link="/plugins"
          />

          <div className="plugins-container">
            <div className="plugins">
              <div className="plugins-tile" ref={pluginsRef}>
                {PLUGINS.slice(0, 4).map((plugin) => (
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
        <Info title="Trending files" subtitle="EXPLORE" mode="none" />
        <Cards />
      </section>
    </div>
  );
};

export default ExplorePage;
