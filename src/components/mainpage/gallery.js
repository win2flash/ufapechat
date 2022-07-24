import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Box, Text, Link } from "rebass/styled-components";
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import Container from '../container'



const Gallery = ({ ...props }) => {
  const GalleryQuery = useStaticQuery(graphql`
    query GalleryQuery {
      wp{
        generalSettings {          
          gallery {            
            block1 {
              fieldGroupName
              link {
                title
                url                
              }
              photo{
                altText
                localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED,quality: 80, width: 500)
                }
              }
              }
            },
            block2 {
              fieldGroupName
              link {
                title
                url
              }
              photo{
                altText
                localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED,quality: 80, width: 500)
                }
              }
              }
            },
            block3 {
              fieldGroupName
              link {
                title
                url
              }
              photo{
                altText
                localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED,quality: 80, width: 500)
                }
              }
              }
            },
            block4 {
              fieldGroupName
              link {
                title
                url
              }
              photo{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED,quality: 80, width: 500)
                  }
                }
              }
            },
            block5 {
              fieldGroupName
              link {
                title
                url
              }
              photo{
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED,quality: 80, width: 500)
                  }
                }
              }
            }
          }
        }
      }      
    }
  `)
  const gallery = GalleryQuery.wp.generalSettings.gallery

  return (
    <Container variant="gallery" >
      <Box sx={{
        display: 'grid',
        gap: '3 px',
        height: '100%',
        width: '100%',
        gridTemplate: `"block_1 block_2 block_2 block_3" 23vw
                     "block_1 block_4 block_5 block_5" 23vw / 20% 1fr 1fr 1fr;

      `,

      }}>
        {Object.values(gallery).map((elem) => {
          const photo = getImage(elem.photo.localFile)
          return (
            <BgImage
              Tag="div"
              key={elem.fieldGroupName}
              style={{
                width: '100%',
                height: '100%',
                gridArea: elem.fieldGroupName,
                zIndex: 1,
              }}
              alt=""
              image={photo}
              preserveStackingContext
            >
              <Link href={elem.link.url}
                sx={{
                  height: '100%',
                  alignItems: 'start',
                  justifyContent: 'start',

                  ':before': {
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 1,
                    backgroundColor: '#25274D',
                    mixBlendMode: 'color',
                  },
                  ':hover:before': {
                    backgroundColor: 'inherit',
                    mixBlendMode: 'unset',
                  },
                  ':hover': {
                    '&>div': {
                      border: '2px solid #2E9CCA',
                    }
                  },
                }}>
                <Text variant="buttonText" sx={{
                  backgroundColor: '#25274df5',
                  border: '2px solid #25274df5',
                  transition: 'all .2s ease',
                  mt: [1, 1, 2],
                  ml: [1, 1, 2],
                }}>
                  {elem.link.title}
                </Text>
              </Link>
            </BgImage>

            // </Box>
          )
        })}
      </Box>
    </Container>
  );
};

export default Gallery