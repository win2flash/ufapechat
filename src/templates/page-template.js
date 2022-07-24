import React from 'react'
import { graphql } from 'gatsby'
import parse from "html-react-parser"
import { Heading, Flex, Box } from "rebass/styled-components"

import Layout from "../components/layout"
import Container from '../components/container'
import Seo from "../components/seo"
import ButtonAnimated from '../components/UI/buttonAnimated'



const PageTemplate = ({ data: { page } }) => {
  
  return (
    <Layout>
      <Seo title={page.seo?.title} description={page.seo?.metaDesc} />
      <Container>
        <Flex sx={{ width: ['100%']}} variant="flexCenter">
          <Heading variant='heading' color='primary' as='h1'>{parse(page.title)}</Heading>
        </Flex>
        {page.wpChildren.nodes.length !== 0 &&
          <Flex width="100%" flexWrap='wrap' justifyContent={['center','center','start']}  mx={[-2, -2, -2]} my={4}>
            {page?.wpChildren.nodes.map(elem => (
              <ButtonAnimated key={elem.id} title={elem.title} link={elem.link}/>
            ))}
          </Flex>
        }
        <Box sx={{ width: ['100%'] }}>
          {page.content && parse(page.content)} 
        </Box>
      </Container>      
    </Layout>    
  )
}

export default PageTemplate

export const pageQuery = graphql`
    query PageByid($id: String!) {
      page: wpPage(id: {eq: $id}) {
        id
        title
        content
        uri
        seo {
          title
          metaDesc
        }
        wpChildren {
          nodes {
            link
            ... on WpPage {
              id
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              title
            }
          }
        }
      }
    }

`