import React from "react"
import './styles.css'

interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  return (
    <input className="input--container" placeholder={placeholder}>
    </input>
  )
}

export default Input
