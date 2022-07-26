import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import styled from "styled-components"
import Container from '../container'
import { Heading, Box } from "rebass/styled-components"
import Svglogo from '../svg/svglogo'
import PopupButton from '../UI/popup/popupButton';
import { useOnScreen } from '../../hooks/useOnScreen';

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

  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)

  const titles = ['НАРУЖНОЙ РЕКЛАМЫ ', 'ШИРОКОФОРМАТНОЙ ПЕЧАТИ ', 'ПОЛИГРАФИИ ']
  // const titles = ['НА ', 'ШИ ', 'ПО ']
  const [title, setTitle] = useState('');
  const [titileSpeed, setTitileSpeed] = useState(70)
  const [loopNum, setLoopNum] = useState(0)
  const [revertTitle, setRevertTitle] = useState(false)


  const tick = () => {
    if (!revertTitle) {
      let str = titles[loopNum].substring(0, title.length + 1)
      setTitle(str)
      if (str.length == titles[loopNum].length) {
        setRevertTitle(true)
        setTitileSpeed(1000)
      }
    } else {
      setTitle(title => title.slice(0, -1))
      setTitileSpeed(70)
      if (title.length === 0) {
        setLoopNum(loopNum => loopNum + 1)
        if (loopNum === titles.length - 1) {
          setLoopNum(0)
        }
        setRevertTitle(false)
      }
    }
  }

  useEffect(() => {
    if (isOnScreen) {
      const ticker = setInterval(() => {
        tick()
      }, titileSpeed)
      return () => { clearInterval(ticker) }
    }
  }, [isOnScreen, title, revertTitle])


  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
      sx={{ height: '100vh' }}
    >
      <Container as="div" sx={{ alignItems: 'center', height: 'calc(100vh - 120px)' }}>
        <Box ref={elementRef} sx={{ maxWidth: '700px', pb: [4, 5, 6] }}>
          <Heading variant='subTitle' as='h1' sx={{ mb: [2, 3, 4] }}>Рекламное агентство УфаПечать</Heading>
          <Heading mb={[2, 3, 4]} height={'60px'}>ВСЕ ВИДЫ {title}</Heading>
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
