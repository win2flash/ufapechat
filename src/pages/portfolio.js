import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button, Flex, Heading, Box, Link } from "rebass/styled-components"
import Container from "../components/container"

const ObjectsIndex = ({ data }) => {
  const objects = data.allWpObject.nodes
  console.log(objects)
  const [objectsList, setObjectstList] = useState([...objects.slice(0, 6)])

  const [loadMore, setLoadMore] = useState(false)

  const [hasMore, setHasMore] = useState(objects.length > 3)

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = objectsList.length
      const isMore = currentLength < objects.length
      const nextList = isMore ? objects.slice(currentLength, currentLength + 6) : []
      setObjectstList([...objectsList, ...nextList])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  useEffect(() => {
    const isMore = objectsList.length < objects.length
    setHasMore(isMore)
  }, [objectsList]) //eslint-disable-line


  const handlerLoadMore = () => {
    setLoadMore(true)
  }

  if (!objects.length) {
    return (
      <Layout>
        <Seo title="Портфолио" />
        <p>
          Здесь пока ничего нет
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Портфолио" />

      {/* <Bio /> */}
      <Container sx={{
        justifyContent: 'center'
      }}>
        <Heading variant='heading' sx={{
          color: 'primary',
          width: '100%',
          textAlign: 'center',
          mb: [2, 3, 4]
        }}>
          Наши работы
        </Heading>
        <Box sx={{
          display: 'grid',
          gridTemplate: ['repeat(6, 1fr) / 1fr', '1fr 1fr/ 1fr 1fr 1fr',],
          gridGap: '45px',
          mb: [2, 3, 4]
        }}>
          {objectsList.map(object => {
            const title = object.title
            const featuredImage = {
              data: object.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
              alt: object.featuredImage?.node?.alt || ``,
            }
            return (
              <Flex sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'space-between',
              }} key={object.uri}>

                <Flex sx={{ flexDirection: 'column', alignItems: 'center', bg: 'primary', height: '100%', }}>
                  <Link href={object.uri} itemProp="url"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      px: [2, 2, 3],
                      py: [2, 3, 4],
                    }}>
                    <Heading variant="subtitle" sx={{ minHeight: '50px', mb: [1, 2, 3], textAlign: 'center', fontSize: [2, 3, 3] }}>
                      <span itemProp="headline">{parse(title)}</span>
                    </Heading>
                    {featuredImage?.data && (
                      <Flex sx={{ minHeight: '200px', alignItems: 'center' }}>
                        <GatsbyImage
                          image={featuredImage.data}
                          alt={featuredImage.alt}
                        />
                      </Flex>

                    )}
                  </Link>
                </Flex>
                {/* <section itemProp="description">{parse(post.excerpt)}</section> */}

              </Flex>
            )
          })}
        </Box>
        <Flex width="100%" justifyContent="center">
          {hasMore ? (
            <Button onClick={handlerLoadMore}>
              Загрузить еще
            </Button>
          ) : (
            null
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

export default ObjectsIndex

export const pageQuery = graphql`
  query ObjectArchive {
    allWpObject {
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
                  height: 200
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`