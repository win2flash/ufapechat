import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Container from '../components/container'
import Seo from "../components/seo"

const ObjectPostTemplate = ({ data: { object } }) => {
  const featuredImage = {
    data: object.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: object.featuredImage?.node?.alt || ``,
  }
  console.log(object)
  return (
    <Layout>
      <Seo title={object.title} description={object.objectsQuery.objectShortDesc} />
      <Container>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{parse(object.title)}</h1>
            {featuredImage?.data && (
              <GatsbyImage
                image={featuredImage.data}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }}
              />
            )}
          </header>
          {!!object.objectsQuery.objectCity && (
            <section itemProp="articleCity">{parse(object.objectsQuery.objectCity)}</section>
          )}
          {!!object.objectsQuery.objectDesc && (
            <section style={{ 'overflowWrap': 'anywhere' }}  itemProp="articleBody">{parse(object.objectsQuery.objectDesc)}</section>
          )}

          <footer>
            
          </footer>
        </article>
      </Container>      
    </Layout>
  )
}

export default ObjectPostTemplate

export const pageQuery = graphql`
    query ObjectPostByid($id: String!) {
      object: wpObject(id: {eq: $id}) {
        id
        title
        objectsQuery {
          objectCity
          objectDesc
          objectShortDesc
          objectGallery {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
        uri
      }
    }

`