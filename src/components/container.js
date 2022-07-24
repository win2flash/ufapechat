import React from 'react'
import { Box } from "rebass/styled-components";


const Container = ({ children, ...props }) => {
  return (
    <Box variant={props.variant || "container"} as={props.as || 'section'} sx={props.sx}>
      {children}
    </Box >
  )
}

export default Container
