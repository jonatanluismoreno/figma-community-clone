import { Link } from "react-router-dom";
import "./styles.css";

import Header from "./../../molecules/Header";
import Navbar from "./../../molecules/Navbar";

import Cards from "./../../organisms/Cards";

export const CommonPage = () => {
  return (
    <>
      <Navbar />
      <Header
        activeSection="Wireframes"
        title="Wireframe"
        subtitle="Design faster with lo-fi mockups, user flows, simple prototypes, and diagrams"
      />
      <div className="commonpage_main">
        <div className="commonpage_cardscontainer">
          <Cards />
        </div>
        <div className="commonpage_sidecontent">
          <div className="commonpage_tags">
            <h3 className="commonpage_tags_title">Related tags</h3>
            <div className="commonpage_tags_list">
              <Link to="/">
                <span className="commonpage_tags_list_item">wireframe</span>
              </Link>
              <Link to="/">
                <span className="commonpage_tags_list_item">wireframing</span>
              </Link>
              <Link to="/">
                <span className="commonpage_tags_list_item">whiteboarding</span>
              </Link>
              <Link to="/">
                <span className="commonpage_tags_list_item">flows</span>
              </Link>
              <Link to="/">
                <span className="commonpage_tags_list_item">arrows</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
