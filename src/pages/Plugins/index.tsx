import { useState, useRef } from "react";
import "./styles.css";
import Plugin from "../../components/molecules/Plugin";
import Navbar from "../../components/molecules/Navbar";
import Header from "../../components/molecules/Header";
import ExtendedPlugin from "../../components/molecules/ExtendedPlugin";

import {
  PLUGINS,
  EXTENDEDPLUGINS,
} from "../../components/organisms/Plugins/constants";
import { Loading } from "../../assets/Loading";

export const PluginsPage = () => {
  const pluginsRef = useRef(null);
  const [filterActive, setFilterActive] = useState("All");
  return (
    <>
      <Navbar />
      <Header
        title="Powerful plugins made just for Figma"
        subtitle="Add new functionality and power up your workflow with these small but mighty apps"
        activeSection="Plugins"
      />
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
              {PLUGINS.slice(0, 2).map((plugin) => (
                <Plugin
                  name={plugin.name}
                  title={plugin.title}
                  description={plugin.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="plugin-filter">
          <h3
            className={filterActive === "All" ? "black" : "filter-text"}
            onClick={() => setFilterActive("All")}
          >
            All
          </h3>
          <h3
            className={
              filterActive === "Figma design" ? "black" : "filter-text"
            }
            onClick={() => setFilterActive("Figma design")}
          >
            Figma design
          </h3>
          <h3
            className={filterActive === "FigJam" ? "black" : "filter-text"}
            onClick={() => setFilterActive("FigJam")}
          >
            FigJam
          </h3>
        </div>
      </section>
      <section className="plugins-content">
        <div className="content-main">
          <div className="content-container">
            <div>
              <div className="plugins-list">
                <div className="plugins-table-cat">
                  <h3>Name</h3>
                  <h3>Creator</h3>
                  <h3>Last updated</h3>
                  <h3>Installs</h3>
                </div>
                <div className="plugins-table-view">
                  <div>
                    {EXTENDEDPLUGINS.map((extendedPlugin) => (
                      <ExtendedPlugin
                        picture={extendedPlugin.picture}
                        name={extendedPlugin.name}
                        description={extendedPlugin.description}
                        installs={extendedPlugin.installs}
                        lastUpdated={extendedPlugin.lastUpdated}
                        creator={extendedPlugin.creator}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="infinitescroll">
                <div className="loading">
                  <div className="loading-container">
                    <Loading className="loading-svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PluginsPage;
