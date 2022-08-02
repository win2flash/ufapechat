import React from "react"
import { useState, useEffect } from "react"
import { Box } from "rebass/styled-components"
import styled from "styled-components"
import Menu from "../UI/menu"

const StyledWrapper = styled(Box)`
  width: 100%;
  background: ${props =>
    props.top ? "rgb(37 39 77 / 97%)" : "rgb(70 72 102 / 97%)"};
  border-bottom: 2px solid #2e9cca;
  transform: translateY(${props => (props.isHide ? "-20px" : "0px")});
  opacity: ${props => (props.isHide ? "0" : "1")};
  visibility: ${props => (props.isHide ? "hidden" : "visible")};
  transition: 0.3s all ease;
`

const StyledBottomHeader = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const Navbar = ({ query }) => {
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset

      setVisible(position > moving)
      setPosition(moving)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const isHide = visible ? false : true
  return (
    <StyledWrapper isHide={isHide}>
      <StyledBottomHeader>
        <Box as="nav" variant="nav">
          <Menu query={query} themeVariant="menu.topMenu" nest={3} />
        </Box>
      </StyledBottomHeader>
    </StyledWrapper>
  )
}

export default Navbar
