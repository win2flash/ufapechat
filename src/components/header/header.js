import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import Navbar from "./navbar"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PopupButton from "../UI/popup/popupButton"
import { Box, Link as RebassLink } from "rebass/styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

const StyledFA = styled(FontAwesomeIcon)`
  color:#D7D9F4;
  transition: all .3s ease;
  margin-right:8px;
`

const StyledHeader = styled.header`
  background-color: transparent;
  position: ${props => props.sticky ? 'sticky' : 'relative'} ;
  z-index: 2;
  top:0;
  left:0;
  width: 100%;
`

const StyledWrapper = styled(Box)`
  width: 100%;
  background: ${props => props.top ? "rgb(37 39 77 / 97%)" : "rgb(70 72 102 / 97%)"};      
  border-bottom: 2px solid #2E9CCA;
  transform: translateY(${props => props.isHide ? "-20px" : "0px"});
  opacity: ${props => props.isHide ? "0" : "1"};
  visibility: ${props => props.isHide ? "hidden" : "visible"};
  transition: .3s all ease;
`
const StyledTopHeader = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  max-width: 1100px;
  margin: 0 auto;
`
const StyledBottomHeader = styled.div`  
  padding: 0px 20px;
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const Header = ({ query, sticky, ...props }) => {
  const siteTitle = query.wp.generalSettings.title
  const settings = query.wp.generalSettings.mainSettings
  const logoImage = getImage(settings.logoHeader.localFile)
  const phoneLink = settings.phones.phoneNumber1

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // TODO доделать балансировщик
  const isHide = (offset > 400) ? true : false

  return (
    <StyledHeader sticky={true}>
      <StyledWrapper top >
        <StyledTopHeader >
          <Link to="/">
            <GatsbyImage image={logoImage} alt={siteTitle} objectFit="contain" style={{ height: '55px' }} />
          </Link>
          <RebassLink sx={{ ':hover svg': { 'color': '#2E9CCA' } }} px={[1, 1, 2]} href={"tel:" + phoneLink}>
            <StyledFA icon={faPhone} size="1x" />{phoneLink}
          </RebassLink>
          <RebassLink sx={{ ':hover svg': { 'color': '#2E9CCA' } }} px={[1, 1, 2]} href={"https://wa.me/" + phoneLink.substr(1)}>
            <StyledFA icon={faWhatsapp} size="1x" />WhatsApp
          </RebassLink>
          <PopupButton variant={'callBack'}>Заказать звонок</PopupButton>
        </StyledTopHeader>
      </StyledWrapper>
      <StyledWrapper isHide={isHide}>
        <StyledBottomHeader>
          <Navbar query={query} />
        </StyledBottomHeader>
      </StyledWrapper>
    </StyledHeader >
  )
}

export default Header