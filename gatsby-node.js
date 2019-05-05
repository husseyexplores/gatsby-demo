/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postLayoutComponent = path.resolve('./src/components/postLayout.js')

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/posts/${edge.node.frontmatter.slug}`,
        component: postLayoutComponent,
        context: {
          slug: edge.node.frontmatter.slug,
        },
      })
    })
  })
}
