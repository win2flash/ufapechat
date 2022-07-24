import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex, Heading, Text } from "rebass/styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from '../container'

const Whyus = () => {
  const whyusList = useStaticQuery(graphql`
    query WhyusQuery {
      wp{
        generalSettings {          
          whyus {            
            whyusList {
              title
              text                
              photo{
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED,quality: 80,  height: 150)
                  }
                }
              }
            }            
          }
        }
      }      
    }
  `).wp.generalSettings.whyus.whyusList
  return (
    <Container variant="wrapper">
      <Container variant="section" as="div">
        <Box width="100%" mb={[2, 3, 4]} sx={{ textAlign: "center" }}>
          <Heading color='primary'>ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС?</Heading>
        </Box>
        <Box sx={{
          display: 'grid',
          gridTemplate: ['repeat(6, 1fr) / 1fr', '1fr 1fr/ 1fr 1fr 1fr',],
          gridGap: '45px',
        }}>
          {whyusList.map((elem) => {
            return (
              <Flex sx={{
                backgroundColor: "primary",
                px: [2, 2, 3],
                py: [2, 3, 4],
                flexDirection: 'column',
                borderRadius: '7px',
                boxShadow: 'hide',
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                zIndex: 1,
                ':hover': {
                  transform: 'translateY(-3px)',
                },
                ':before': {
                  zIndex: 0,
                  content: "''",
                  borderRadius: '7px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transition: 'opacity 0.3s ease-in-out',
                  boxShadow: 'card',
                  opacity: 0,
                },
                ':hover:before': {
                  opacity: 1,
                },
              }}
                variant="flexCenter" key={elem.title}>
                <Flex sx={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  mb: [2, 2, 3],
                  height: '150px',
                }}
                  variant="flexCenter">
                  <GatsbyImage style={{ mmarginBottom: [2, 3, 4] }} image={getImage(elem.photo.localFile)} alt="" />
                </Flex>
                <Flex>
                  <Heading
                    as="h3"
                    sx={{
                      color: "text",
                      fontSize: [1, 1, 2],
                      mb: [2, 2, 3],
                      pb: [1, 1, 2],
                      lineHeight: "1.1",
                      borderBottom: '2px solid',
                      borderColor: 'secondary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                    {elem.title}
                  </Heading>
                </Flex>
                <Flex sx={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  display: 'none',
                }}>
                  <Text variant="text">{elem.text}</Text>
                </Flex>
              </Flex>
            )
          })}
        </Box>

      </Container>
    </Container>
  );
};

export default Whyus;
