import { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import Header from "./components/molecules/Header";
import Navbar from "./components/molecules/Navbar";
import Icon from "./components/atoms/Icon";
import Card from "./components/molecules/Card";
import Plugin from "./components/molecules/Plugin";

import ExtendedPlugin from "./components/molecules/ExtendedPlugin";

import loading from "../src/assets/loading.svg";

import arrowbutton from "../src/assets/arrow-button.svg";

import { Loading } from "./assets/Loading";

import extended1 from "./assets/extended/extended1.jpg";

import {
  PLUGINS,
  EXTENDEDPLUGINS,
} from "./components/organisms/Plugins/constants";

interface Props {
  name:
    | "profile1"
    | "profile2"
    | "profile3"
    | "profile4"
    | "profilefigma"
    | "main1"
    | "main2"
    | "plugin1"
    | "plugin2"
    | "plugin3"
    | "plugin4";
  title: string;
  description: string;
  id: number;
}
{
  /* <Header title="Explore files and plugins made just for Figma" subtitle='Explore, install, use, and remix thousands of files and plugins' />
      <div className='banner-container'>
        <div className='banner'>
          <div className='info-banner'>
            <h3 className='banner-title'>Everything you need to get started in FigJam</h3>
            <button className='banner-button'>Take a peek</button>
          </div>
        </div>
      </div>
      <section className='plugins-section'>
        <div className='plugins-bar'>
          <div className='plugins-bar-info'>
            <h4 className='plugins-bar-subtitle'>PLUGINS FOR DOCUMENTATION, ANNOTATION, AND COMMUNICATION OF YOUR DESIGNS</h4>
            <h2 className='plugins-bar-title'>Plugins for Documentation</h2>
          </div>
          <div className='plugins-bar-more'>
            <h4 className='plugins-showmore'>Show more</h4>
          </div>
        </div>
        <div className='plugins-container'>
          
          <div  className='plugins'>
            <div className='plugins-tile' ref={pluginsRef}>
            {
              PLUGINS.slice(0, 3).map((plugin) => (
                <Plugin name={plugin.name} title={plugin.title} description={plugin.description}/>
                )
              )
            }
            </div>
          </div>
          <div className='none'>
            
          </div>
        </div>
      </section>

      <section className='plugins-section'>
        <div className='plugins-bar'>
          <div className='plugins-bar-info'>
            <h4 className='plugins-bar-subtitle'>THIS WEEK</h4>
            <h2 className='plugins-bar-title'>Top plugins</h2>
          </div>
          <div className='plugins-bar-more'>
            <h4 className='plugins-showmore'>Browse all plugins →</h4>
          </div>
        </div>
        <div className='plugins-container'>
          
          <div  className='plugins'>
            <div className='plugins-tile' ref={pluginsRef}>
            {
              PLUGINS.slice(0, 3).map((plugin) => (
                <Plugin name={plugin.name} title={plugin.title} description={plugin.description}/>
                )
              )
            }
            </div>
          </div>
          <div className='none'>
            
          </div>
        </div>
      </section>
      
      <div className='plugins-bar'>
          <div className='plugins-bar-info'>
            <h4 className='plugins-bar-subtitle'>EXPLORE</h4>
            <h2 className='plugins-bar-title'>Trending files</h2>
          </div>
        </div>
      <div className='cards-container'>
        <div className='cards'>
          <Card title='IBM Carbon Design System' author='HARSH KUMAR' likes={101} duplicates={1300} icon='profile1' image='main1' />
          <Card title='Figma Auto Layout playground' author='Figma' likes={3800} duplicates={108000} icon='profilefigma' image='main2' />
          <Card title='IBM Carbon Design System' author='HARSH KUMAR' likes={101} duplicates={1300} icon='profile1' image='main1' />
          <Card title='Figma Auto Layout playground' author='Figma' likes={3800} duplicates={108000} icon='profilefigma' image='main2' />
        </div>
      </div>
              
             */
}

/*  <Navbar/>
      <Header title="Powerful plugins made just for Figma" subtitle='Add new functionality and power up your workflow with these small but mighty apps' activeSection='Plugins'/>
      <section className='plugins-section'>
        <div className='plugins-bar'>
          <div className='plugins-bar-info'>
            <h4 className='plugins-bar-subtitle'>PLUGINS FOR DOCUMENTATION, ANNOTATION, AND COMMUNICATION OF YOUR DESIGNS</h4>
            <h2 className='plugins-bar-title'>Plugins for Documentation</h2>
          </div>
          <div className='plugins-bar-more'>
            <h4 className='plugins-showmore'>Show more</h4>
          </div>
        </div>
        <div className='plugins-container'>
          <div  className='plugins'>
            <div className='plugins-tile' ref={pluginsRef}>
            {
              PLUGINS.slice(0, 2).map((plugin) => (
                <Plugin name={plugin.name} title={plugin.title} description={plugin.description}/>
                )
              )
            }
            </div>
          </div>
        </div>
        <div className='plugin-filter'>
          <h3 className={filterActive === "All" ? "black" : "filter-text"} onClick={() => setFilterActive('All')}>All</h3>
          <h3 className={filterActive === "Figma design" ? "black" : "filter-text"} onClick={() => setFilterActive('Figma design')}>Figma design</h3>
          <h3 className={filterActive === "FigJam" ? "black" : "filter-text"} onClick={() => setFilterActive('FigJam')}>FigJam</h3>
        </div>
      </section>
      <section className='plugins-content'>
        <div className='content-main'>
          <div className='content-container'>
            <div>
              <div className='plugins-list'>
                <div className="plugins-table-cat">
                  <h3>Name</h3>
                  <h3>Creator</h3>
                  <h3>Last updated</h3>
                  <h3>Installs</h3>
                </div>
                <div className="plugins-table-view">
                  <div>
                    {
                      EXTENDEDPLUGINS.map((extendedPlugin) => (
                        <ExtendedPlugin picture={extendedPlugin.picture} name={extendedPlugin.name} description={extendedPlugin.description} installs={extendedPlugin.installs} lastUpdated={extendedPlugin.lastUpdated} creator={extendedPlugin.creator} />
                        )
                      )
                    }
                  </div>
                </div>
              </div>
              <div className="infinitescroll">
                <div className='loading'>
                  <div className='loading-container'>
                      <Loading className="loading-svg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/
function App() {
  const [showPlugins, setShowPlugins] = useState(4);

  const pluginsRef = useRef(null);

  const [filterActive, setFilterActive] = useState("All");

  return <div className="App"></div>;
}

export default App;
