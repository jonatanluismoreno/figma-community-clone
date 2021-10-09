import React from 'react'

import './styles.css'

interface Props {
  content: string;
  active: boolean
}

const Button: React.FC<Props> = ({ content, active }) => {
  return (
    <button className={`button ${active ? 'button--active' : ""}`}>
      {content}
    </button>
  )
}

export default Button