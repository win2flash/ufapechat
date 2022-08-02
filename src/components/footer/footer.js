import React from "react"
import { Flex, Heading, Link, Box } from "rebass/styled-components"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import { faVk, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Menu from "../UI/menu"

const StyledFA = styled(FontAwesomeIcon)`
  color: #d7d9f4;
  transition: all 0.3s ease;
  margin-right: 8px;
`
const StyledFooter = styled(Box)``
const StyledContact = styled(Box)`
  &:hover svg {
    color: #2e9cca;
  }
`
const StyledBox = styled(Flex)`
  justify-content: space-between;
  max-width: 1100px;
  & li a {
    line-height: 1.2;
    text-align: center;
  }
  & li {
    font-weight: 700;
    list-style: none;
    position: relative;
    display: block;
    text-align: center;
  }
  & > ul > li > a {
    width: 100%;
    font-size: 16px;
  }
`

const Footer = ({ query }) => {
  const settings = query.wp.generalSettings.mainSettings
  const [phones, email, vk, insta] = [
    settings.phones,
    settings.email,
    settings.linkVk,
    settings.linkInstagram,
  ]

  return (
    <StyledFooter as="footer" backgroundColor="primary">
      <StyledBox
        as="nav"
        variant="nav"
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          backgroundColor: "primary",
          px: [2, 3, 4],
          py: [2, 3, 4],
        }}
      >
        <Menu
          query={query}
          location="footer"
          themeVariant={"menu.bottomMenu"}
          nest={3}
        />
        <Flex sx={{ flexDirection: "column", div: { mb: [1, 2, 2] } }}>
          <Heading
            sx={{
              display: "inline-block",
              fontSize: [1, 2, "18px"],
              mb: [1, 2, 3],
            }}
          >
            Контактная информация
          </Heading>
          <StyledContact>
            <Link variant="link.footerLink" href={"tel:" + phones.phoneNumber1}>
              <StyledFA icon={faPhone} size="1x" />
              {phones.phoneNumber1}
            </Link>
          </StyledContact>
          <StyledContact>
            <Link variant="link.footerLink" href={"tel:" + phones.phoneNumber2}>
              <StyledFA icon={faPhone} size="1x" />
              {phones.phoneNumber2}
            </Link>
          </StyledContact>
          <StyledContact>
            <Link variant="link.footerLink" href={"tel:" + phones.phoneNumber3}>
              <StyledFA icon={faPhone} size="1x" />
              {phones.phoneNumber3}
            </Link>
          </StyledContact>
          <StyledContact>
            <Link variant="link.footerLink" href={"mailto:" + email}>
              <StyledFA icon={faAt} size="1x" />
              {email}
            </Link>
          </StyledContact>
          <StyledContact>
            <Link variant="link.footerLink" href={vk}>
              <StyledFA icon={faVk} size="1x" />
              vk.com
            </Link>
          </StyledContact>
          <StyledContact>
            <Link variant="link.footerLink" href={insta}>
              <StyledFA icon={faInstagram} size="1x" />
              Instagram
            </Link>
          </StyledContact>
        </Flex>
      </StyledBox>
    </StyledFooter>
  )
}

export default Footer
