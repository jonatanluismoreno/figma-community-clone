import React from "react";

import './styles.css'

import arrowbutton from '../../../assets/arrow-button.svg'

import extended1 from '../../../assets/extended/extended1.jpg'
import extended2 from '../../../assets/extended/extended2.png'
import extended3 from '../../../assets/extended/extended3.png'
import extended4 from '../../../assets/extended/extended4.png'
import extended5 from '../../../assets/extended/extended5.svg'
import extended6 from '../../../assets/extended/extended6.png'
import extended7 from '../../../assets/extended/extended7.png'
import extended8 from '../../../assets/extended/extended8.jpg'
import extended9 from '../../../assets/extended/extended9.png'
import extended10 from '../../../assets/extended/extended10.png'
import extended11 from '../../../assets/extended/extended11.png'

interface Props {
  picture : 'extended1' | 'extended2' | 'extended3' | 'extended4' | 'extended5' | 'extended6' | 'extended7' | 'extended8' | 'extended9' | 'extended10' | 'extended11';
  name : string;
  description : string;
  installs : number;
  lastUpdated : string;
  creator : string[];
}

const ExtendedPlugin: React.FC<Props> = ({ picture, name, description, installs, lastUpdated, creator }) => {
  const PICTURES = { extended1, extended2, extended3 ,extended4, extended5,extended6 ,extended7 ,extended8 ,extended9 ,extended10 ,extended11 }
  var isBigger = (cant:number) => {
    if (cant > 999) {
      return `${cant / 1000}k`
    }
    return `${cant}`
  }
  return (
    <div className="plugin-list">
      <div className="list-name">
        <div className="list-icon">
          <img src={PICTURES[picture]} alt="plugin icon" className="plugin-icon" />
        </div>
        <div className="list-tile">
          <h3 className="tile-title">{name}</h3>
          <h4 className="tile-description">{description}</h4>
        </div>
      </div>
      <div className="list-creator">
        <span className="creator-names">
          {creator.map((creatorName) => (
            <div className="name-creator">
              <span>{creatorName}</span>
            </div>
          ))}
        </span>
      </div>
      <div className="list-lastupd">
        <span>{lastUpdated}</span>
      </div>
      <div className="installs">
        <span>{isBigger(installs)}</span>
      </div>
      <div className="install-container">
        <div className="install-button">
          <div className="svg-arrow">
            <img src={arrowbutton} alt="svg button" className="arrow-button" />
          </div>
          <span className="button-text">Install</span>
        </div>
      </div>
    </div>
  );
};

export default ExtendedPlugin;
