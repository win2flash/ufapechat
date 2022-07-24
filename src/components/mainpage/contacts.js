import React from 'react'
import Container from '../container'
import { Flex, Heading, Text } from "rebass/styled-components";
import Map from '../UI/map';

const Contacts = () => {
  return (
    <Container variant="wrapperBlue" sx={{ position: 'relative' }}>
      <Map />
      <Flex p="40px" sx={{
        width: '100%',
        maxWidth: '400px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '20%',
        zIndex: 10,
        flexDirection: 'column',
        backgroundColor: 'primary',
      }}>
        <Heading variant="subtitle" mb="15px" color="#fff">
          Как нас найти:
        </Heading>
        <Text color="#fff" mb="10px">
          Адрес: Юрия Гагарина, 26/2 — 1 этаж
        </Text >
        <Text color="#fff">
          Тел.: +7 (347) 244‒34‒92
        </Text>

      </Flex>
    </Container>

  )
}

export default Contacts