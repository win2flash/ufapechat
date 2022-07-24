import React, { useState } from 'react'
import { Flex, Link } from "rebass/styled-components"
import styled from 'styled-components'

const StyledLink = styled(Link)`
  &::before{
    top: ${props => props.top || 0}px;
    left: ${props => props.left || 0}px;
  }
`

const ButtonAnimated = ({ link, title }) => {

  const [coors, setCoors] = useState({ x: 0, y: 0 })

  const changeHover = e => {
    const bounds = e.target.getBoundingClientRect();
    const x = e.clientX - bounds.left
    const y = e.clientY - bounds.top
    if (e.type === 'mouseenter') {
      setCoors({
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y,
      })
    }
    if (e.type === 'mouseleave') {
      setCoors({
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y,
      })
    }

  }

  return (
    <Flex variant='pageSubMenu' sx={{ minWidth: '250px' }}>
      <Flex onMouseEnter={changeHover} onMouseLeave={changeHover}>
        <StyledLink left={coors.x} top={coors.y} variant="link" backgroundColor='background' href={link}>
          <span>{title}</span>
        </StyledLink>
      </Flex>
    </Flex>
  )
}

export default ButtonAnimated