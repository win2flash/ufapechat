const path = require(`path`)
const chunk = require(`lodash/chunk`)

// create pages
exports.createPages = async gatsbyUtilities => {
  const objects = await getObjects(gatsbyUtilities)
  const pages = await getPages(gatsbyUtilities)

  if (pages.length) await createIndividualPage({ pages, gatsbyUtilities })

  if (objects.length) await createIndividualObjectPage({ objects, gatsbyUtilities })

}

// custom
async function createIndividualObjectPage({ objects, gatsbyUtilities }) {
  Promise.all(
    objects.map(({ object }) =>
      gatsbyUtilities.actions.createPage({
        path: object.uri,
        component: path.resolve(`./src/templates/object-post.js`),
        context: {
          id: object.id,
        },
      })
    )
  )
}
async function getObjects({ graphql, reporter }) {
  const objectsQuery = await graphql(`
    query WpObjects {
      allWpObject {
        edges {
          object: node {
            id
            uri
          }
        }
      }
    }
  `)
  if (objectsQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      objectsQuery.errors
    )
    return
  }
  return objectsQuery.data.allWpObject.edges
}

// create printing-services pages
async function createIndividualPage({ pages, gatsbyUtilities }) {
  Promise.all(
    pages.map(({ page }) =>
      gatsbyUtilities.actions.createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/page-template.js`),
        context: {
          id: page.id,
        },
      })
    )
  )
}

async function getPages({ graphql, reporter }) {
  const pagesQuery = await graphql(`
    query WpPages {
      allWpPage {
        edges {
          page: node {
            id
            uri
          }
        }
      }
    }
  `)
  if (pagesQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      pagesQuery.errors
    )
    return
  }
  return pagesQuery.data.allWpPage.edges
}