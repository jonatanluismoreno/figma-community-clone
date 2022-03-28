import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface Props {
  title: string;
  subtitle: string;
  mode: "none" | "showMore" | "link";
  link?: string;
}

const Info: React.FC<Props> = ({ title, subtitle, mode, link }) => {
  return (
    <div className="info-main">
      <div className="bar-info">
        <h4 className="bar-subtitle">{subtitle} </h4>
        <h2 className="bar-title">{title} </h2>
      </div>
      {mode !== "none" && (
        <div className="bar-more">
          {mode == "showMore" ? (
            <h4 className="plugins-showmore">Show more</h4>
          ) : (
            <Link to={link}>
              <h4 className="plugins-showmore">Browse all plugins →</h4>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Info;
