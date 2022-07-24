// import React from "react"
// import { Link, graphql } from "gatsby"
// import parse from "html-react-parser"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const ObjectsIndex = ({
//   data,
//   pageContext: { nextPagePath, previousPagePath },
// }) => {
//   const objects = data.allWpObject.nodes

//   if (!objects.length) {
//     return (
//       <Layout isHomePage>
//         <Seo title="All objects" />
//         <p>
//           No blog objects found. Add objects to your WordPress site and they'll
//           appear here!
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout isHomePage>
//       <Seo title="All posts" />

//       {/* <Bio /> */}

//       <ol style={{ listStyle: `none` }}>
//         {objects.map(object => {
//           const title = object.title
//           return (
//             <li key={object.uri}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={object.uri} itemProp="url">
//                       <span itemProp="headline">{parse(title)}</span>
//                     </Link>
//                   </h2>
//                 </header>
//                 {/* <section itemProp="description">{parse(post.excerpt)}</section> */}
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default ObjectsIndex

// export const pageQuery = graphql`
//   query ObjectPostsArchive($offset: Int!, $postsPerPage: Int!) {
//     allWpObject(sort: { fields: [date], order: DESC }
//       limit: $postsPerPage
//       skip: $offset){
//         nodes {
//           uri
//           title
//           objectsQuery {
//             objectShortDesc
//           }
//           featuredImage {
//             node {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(width: 200)
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
  
// `