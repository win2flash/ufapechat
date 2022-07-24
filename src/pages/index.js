import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"

import FirstSection from '../components/mainpage/firstSection'
import Gallery from '../components/mainpage/gallery'
import Whyus from '../components/mainpage/whyus';
import Portfolio from '../components/mainpage/portfolio'
import About from '../components/mainpage/about'
import Contacts from '../components/mainpage/contacts'


const Index = ({ data }) => {

  return (
    <>
      <Seo title="Уфа Печать" />
      <Layout isHomePage>
        <FirstSection />

        <Gallery />

        <Whyus />

        <Portfolio />

        <About />
        <Contacts />
      </Layout >
    </>
  )
}

export default Index

// export const pageQuery = graphql`
//   query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
//     allWpPost(
//       sort: { fields: [date], order: DESC }
//       limit: $postsPerPage
//       skip: $offset
//     ) {
//       nodes {
//         excerpt
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//       }
//     }
//   }
// `