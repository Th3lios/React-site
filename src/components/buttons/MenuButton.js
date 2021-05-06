import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuButton = props => {
  const { item, index, handleClick } = props
  return (
    <Link key={index} to={item.link} onClick={handleClick}>
      <MenuItem title={item.title}>
        <Link to="/">
          <img alt="icon" src={item.icon} />
        </Link>
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  gap: ${props => (props.title ? "10px" : "0px")};
  grid-template-columns: repeat(2, auto);
  align-items: center;
  padding: 10px;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

export default MenuButton
