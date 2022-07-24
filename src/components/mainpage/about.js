import React from 'react'
import Container from '../container'
import { Box, Heading, Text } from "rebass/styled-components";

const About = () => {
  return (
    <Container variant="wrapper">
      <Container variant="section" as="div">
        <Box width="100%" mb={[2, 3, 4]} sx={{ textAlign: "center" }}>
          <Heading color='primary'>Немного о нас</Heading>
        </Box>
        <Box>
          <Text variant="text" sx={{ color: 'primary', lineHeight: '2' }}>
            Существуя на рынке не первый год, мы являемся компанией, заслуженно занимающей одно из лидирующих мест в нашем регионе на рынке полиграфических и рекламных услуг.

            Главным приоритетом нашей компании мы считаем полное осознание того, что мы делаем. Мы постоянно совершенствуем наши знания и повышаем уровень нашей квалификации, отслеживаем инновации в сфере оборудования и пополняем наш ассортимент, потому что мы хотим соответствовать любым Вашим требованиям, и выполнять их профессионально и четко.

            Имея большой опыт, мы выполняем заказы в максимально сжатые сроки, не забывая о качестве. Уважая и ценя мнение каждого клиента, мы стараемся обеспечить взаимовыгодное сотрудничество. И такой подход уже оценили многие наши клиенты. Предназначение нашей компании – создать качественную полиграфию, доступную каждому.

            Рекламное агентство полного цикла «Уфапечать.РФ» регулярно анализирует, отслеживает изменения в секторе печатных услуг и совершенствует свои умения, чтобы сохранить тенденцию предложения совершенных полиграфических услуг.
          </Text>
        </Box>

      </Container>
    </Container>

  )
}

export default About