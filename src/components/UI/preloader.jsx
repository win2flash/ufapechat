import React, { useEffect } from 'react'
import { useState } from 'react'
import { Flex } from 'rebass/styled-components'

const Preloader = () => {
  return (
    <Flex id={'loader-wrapper'} sx={{
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position:'fixed',
      backgroundColor:'#464866',
      alignItems:'center',
      justifyContent:'center',
      zIndex: 999999
    }}>Preloader</Flex>
  )
}

export default Preloader