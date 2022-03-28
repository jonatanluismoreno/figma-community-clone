import React from "react";
import "./styles.css";
import Header from "../../components/molecules/Header";
import Plugin from "../../components/molecules/Plugin";
import Navbar from "../../components/molecules/Navbar";
import Cards from "../../components/organisms/Cards";
import Info from "../../components/molecules/Info";
import { PLUGINS } from "../../components/organisms/Plugins/constants";

const WidgetsPage = () => {
  return (
    <div>
      <Navbar />
      <Header
        title="Widgets"
        subtitle="Interactive games, polls, trackers, and more - now in FigJam"
        activeSection="Widgets"
      />
      <div className="cardsContainer">
        <Info
          title="Enhance your metings with widgets ✨"
          subtitle="LEVEL UP YOUR JAM SESSIONS"
          mode="none"
        />
        <Cards />
      </div>
    </div>
  );
};

export default WidgetsPage;
