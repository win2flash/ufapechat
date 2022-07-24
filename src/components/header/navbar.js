import React from 'react'
import { Box } from "rebass/styled-components";
import Menu from '../UI/menu';


const Navbar = ({ query }) => {
  return (
    <Box as="nav" variant="nav">
      <Menu query={query} themeVariant='menu.topMenu' nest={3} />
    </Box>
  )
}

export default Navbar