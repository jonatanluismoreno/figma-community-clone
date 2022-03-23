import React from "react"
import './styles.css'

import profile1 from '../../../assets/icon-profile1.png'
import profile2 from '../../../assets/icon-profile2.jpg'
import profile3 from '../../../assets/icon-profile3.jpg'
import profile4 from '../../../assets/icon-profile4.jpg'
import profilefigma from '../../../assets/icon-figma.png'

import main1 from '../../../assets/main-1.png'
import main2 from '../../../assets/main-2.png'

import plugin1 from '../../../assets/plugin-1.png'
import plugin2 from '../../../assets/plugin-2.png'
import plugin3 from '../../../assets/plugin-3.png'
import plugin4 from '../../../assets/plugin-4.png'

interface Props {
  name: 'profile1' | 'profile2' | 'profile3' | 'profile4' | 'profilefigma' | 'main1' | 'main2' | 'plugin1' | 'plugin2' | 'plugin3' | 'plugin4';
  size: 'small' | 'medium' | 'large';
}

const Icon: React.FC<Props> = ({ name, size }) => {
  const IMAGES = { profile1, profile2, profile3, profile4, profilefigma, main1, main2, plugin1, plugin2, plugin3, plugin4 }

  return (
    <img src={IMAGES[name]} alt="card-image" className={size}>
      
    </img>
  )
}
export default Icon