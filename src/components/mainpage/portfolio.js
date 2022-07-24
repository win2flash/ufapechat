import React from 'react';
import Container from '../container'
import { Box, Flex, Heading, Text, Link, Button } from "rebass/styled-components";
import Slider from "react-slick";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Portfolio = () => {
  const portfolioQuery = useStaticQuery(graphql`
    query portfolioQuery {
      allWpObject(filter: {objectsQuery: {objectIsMain: {eq: true}}}) {
        nodes {
          uri
          title
          objectsQuery {
            objectShortDesc
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `).allWpObject.nodes

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    style: { width: '100%' },
  };

  return (
    <Container variant="wrapperBlue" sx={{ overflow: 'hidden' }}>
      <Container sx={{ px: [4, 4, 4] }} variant="section" >
        <Flex width="100%" mb={[2, 3, 4]} sx={{ justifyContent: 'space-between' }}>
          <Heading color='text'>Наши работы</Heading>
          <Link href='/portfolio' color='text' alignItems='end'>Посмотреть всё</Link>
        </Flex>
        <Slider {...settings}>
          {
            portfolioQuery.map(elem => {
              return (
                <Box key={elem.uri} sx={{ padding: [2, 3, 4], backgroundColor: 'primary' }}>
                  <Flex>
                    <Flex sx={{ mr: [3, 4, 4], flexDirection: 'column', justifyContent: 'center', width: '40%' }}>
                      <Heading variant="subTitle" sx={{ pb: 2, mb: [2, 3, 4], textAlign: 'center' }}>
                        {elem.title}
                      </Heading>
                      <Text variant="text" sx={{ mb: [2, 3, 4], overflowWrap: "break-word", }}>{elem.objectsQuery.objectShortDesc}</Text>
                      <Button as="a" href={elem.uri}>Посмотреть проект</Button>
                    </Flex>
                    <Box width="60%">
                      <GatsbyImage image={getImage(elem.featuredImage.node.localFile)} alt="" />
                    </Box>
                  </Flex>
                </Box>
              )
            })
          }
        </Slider>
      </Container>
    </Container>
  )
};

export default Portfolio;
