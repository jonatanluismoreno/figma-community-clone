import React from "react";
import "./styles.css";
import Card from "../../molecules/Card";

const Cards = () => {
  return (
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
        <Card
          title="Figma Auto Layout playground"
          author="Figma"
          likes={3800}
          duplicates={108000}
          icon="profilefigma"
          image="main2"
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
          title="Figma Auto Layout playground"
          author="Figma"
          likes={3800}
          duplicates={108000}
          icon="profilefigma"
          image="main2"
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
  );
};

export default Cards;
