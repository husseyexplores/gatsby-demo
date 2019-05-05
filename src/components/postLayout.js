import React from 'react'
import { object, shape } from 'prop-types'
import { graphql } from 'gatsby'

import Layout from './layout'

function PostLayout({ data, location }) {
  if (!data) {
    return (
      <Layout>
        <h3>Data not found! ⚠️</h3>
      </Layout>
    )
  }

  const {
    markdownRemark: {
      html,
      frontmatter: { title, date },
    },
  } = data

  return (
    <Layout location={location}>
      <small style={{ textDecoration: 'underline' }}>{date}</small>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

PostLayout.propTypes = {
  location: object.isRequired,
  data: shape({
    markdownRemark: object.isRequired,
  }).isRequired,
}

export default PostLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        slug
      }
      html
    }
  }
`
