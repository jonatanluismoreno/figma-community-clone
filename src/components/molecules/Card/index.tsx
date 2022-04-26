import React from "react";
import "./styles.css";

import Icon from "../../atoms/Icon";
import Image from "../../atoms/Image";

import { LikeIcon } from "../../../assets/LikeIcon";
import { DuplicateIcon } from "../../../assets/DuplicateIcon";
import { DuplicateIconHovered } from "../../../assets/DuplicateIconHovered";

import duplicate from "../../../assets/duplicate.svg";
import duplicateHover from "../../../assets/duplicateHover.svg";
interface Props {
  title: string;
  author: string;
  likes: number;
  duplicates: number;
  icon:
    | "profile1"
    | "profile2"
    | "profile3"
    | "profile4"
    | "profilefigma"
    | "main1"
    | "main2";
  image:
    | "profile1"
    | "profile2"
    | "profile3"
    | "profile4"
    | "profilefigma"
    | "main1"
    | "main2";
}

const Card: React.FC<Props> = ({
  image,
  icon,
  title,
  author,
  likes,
  duplicates,
}) => {
  var isBigger = (cant: number) => {
    if (cant > 999) {
      return `${cant / 1000}k`;
    }
    return `${cant}`;
  };

  return (
    <div className="card--container">
      <Image />
      <div className="card--footer">
        <Icon name={icon} size="small" />
        <div className="footer--mid">
          <h4 className="card--title"> {title} </h4>
          <h5 className="card--author"> {author} </h5>
        </div>
        <div className="info--section">
          <div className="info">
            <LikeIcon className="svg" />
            <h6 className="card--info"> {isBigger(likes)} </h6>
          </div>
          <div className="info">
            <div>
              <div className="svg-container">
                <img src={duplicate} alt="" className="svg-icon" />
              </div>
            </div>
            <h6 className="card--info"> {isBigger(duplicates)} </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
