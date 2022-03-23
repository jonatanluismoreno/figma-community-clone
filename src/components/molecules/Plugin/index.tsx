import React from 'react'

import './styles.css'

import Icon from '../../atoms/Icon'

interface Props {
  name: 'profile1' | 'profile2' | 'profile3' | 'profile4' | 'profilefigma' | 'main1' | 'main2' | 'plugin1' | 'plugin2' | 'plugin3' | 'plugin4';
  title: string;
  description: string;
}

const Plugin: React.FC<Props> = ({ name, title, description }) => {
  return (
    <a href="" className='plugin--container'>
      <div className='plugin--icon'>
        <Icon name={name} size='medium'/>
      </div>
      <div className='plugin--info'>
        <h4 className='plugin--title'>{title}</h4>
        <h6 className='plugin--description'>{description} </h6>
      </div>
    </a>
  )
}

export default Plugin
