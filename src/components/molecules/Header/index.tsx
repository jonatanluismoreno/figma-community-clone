import React from "react"
import './styles.css'

import { Link, NavLink } from "react-router-dom"

import Button from "../../atoms/Button"
import Input from "../../atoms/Input"

import { SearchIcon } from '../../../assets/SearchIcon'

import { BUTTONS } from './constants'

interface Props {
  title: string;
  subtitle: string;
  activeSection: string;
}

const Header: React.FC<Props> = ({ title, subtitle, activeSection }) => {
  return (
    <div className="header--container">
      <div className="header--buttons">
        {
          BUTTONS.map(({ name, id, route }) => (
            <NavLink to={`/${route}`}>
              <Button key={id} content={name} active={activeSection === name ? true : false}/>
            </NavLink>
          ))
        }
      </div>
      <h1 className="header--title">{title}</h1> 
      <h4 className="header--subtitle">{subtitle}</h4>
      <div className="header--form">
        <div className='header--form--cont'>
          <form>
            <div className="header--input">
              <Input placeholder="Search for files, plugins, and creators"/>
              <div className="search--icon">
                <SearchIcon/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
