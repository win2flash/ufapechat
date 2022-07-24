import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import styled from "styled-components"
import Container from '../container'
import { Heading, Button, Box } from "rebass/styled-components"
import Svglogo from '../svg/svglogo'
import PopupButton from '../UI/popup/popupButton';

const StyledDiv = styled.div`
  position: absolute;
  bottom:0;
  left:0;
  width: 100%;
  z-index: -1;
`

const FirstSection = ({ ...props }) => {
  const FirstSectionQuery = useStaticQuery(graphql`
    query FirstSectionQuery {
      wp{
        generalSettings {
          mainSettings {
            backgroundFirstScreen {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 100, width: 1100)
                }
              }
            }
          },
        }
      }      
    }
  `)
  const bgImage = convertToBgImage(getImage(FirstSectionQuery.wp.generalSettings.mainSettings.backgroundFirstScreen.localFile))

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
      sx={{ height: '100vh' }}
    >
      <Container as="div" sx={{ alignItems: 'center', height: 'calc(100vh - 120px)' }}>
        <Box sx={{ maxWidth: '700px', pb: [4, 5, 6] }}>
          <Heading variant='subTitle' as='h1' sx={{ mb: [2, 3, 4] }}>Рекламное агентство УфаПечать</Heading>
          <Heading mb={[2, 3, 4]}>ВСЕ ВИДЫ НАРУЖНОЙ РЕКЛАМЫ,
            ШИРОКОФОРМАТНАЯ ПЕЧАТЬ,
            ПОЛИГРАФИЯ</Heading>
          <PopupButton variant='leaveRequest'>Оставить заявку</PopupButton>
        </Box>
      </Container>
      <StyledDiv>
        <Svglogo />
      </StyledDiv>
    </BackgroundImage>
  );
};

export default FirstSection;
