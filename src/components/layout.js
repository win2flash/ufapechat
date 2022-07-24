import React, { useState } from "react"
import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import Footer from "./footer/footer";
import Theme from "../themes/theme";
import Popup from "./UI/popup/popup";
import { PopupProvider } from "../contexts/popup-context";

// import { ApolloProvider } from "react-apollo";
// import { client } from "../contexts/ApolloContext"

const GlobalWrapper = styled(Box)`
  filter: ${props => props.isBlur ? 'blur(10px)' : 'none'};
  pointer-events: ${props => props.isBlur ? 'none' : 'inherit'};
`
const ThemeWrapper = styled(Theme)`
  position: relative;
  background-color: #25274d;
`

const StyledMain = styled.main`
  width: 100%;
  z-index: 1;
  position: relative;
`

const Layout = ({ isHomePage, children }) => {

  const LayoutQuery = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
          mainSettings {
            logoHeader {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE, breakpoints: [750, 1080, 1366, 1920], width: 400)
                }
              }
            }
            phones {
              phoneNumber1
              phoneNumber2
              phoneNumber3
              whatsappNumber
            }
            email
            linkInstagram
            linkVk
          }
        }               
      }   
      headerMenu: wpMenu(locations: {eq: GATSBY_HEADER_MENU}) {
        menuItems {
          nodes {
            id
            url
            label
            parentId
          }
        }
      }
      footerMenu: wpMenu(locations: {eq: GATSBY_FOOTER_MENU}) {
        menuItems {
          nodes {
            id
            url
            label
            parentId
          }
        }
      }
    }
  `)

  return (
    // <ApolloProvider client={client}>
    <ThemeWrapper data-is-root-path={isHomePage}>
      <PopupProvider>
        <Popup />
        <GlobalWrapper >
          <Header query={LayoutQuery} sticky={isHomePage} />

          <StyledMain>
            {children}
          </StyledMain>

          <Footer query={LayoutQuery} />
        </GlobalWrapper>
      </PopupProvider>
    </ThemeWrapper>
    // </ApolloProvider>
  )
}

export default Layout
