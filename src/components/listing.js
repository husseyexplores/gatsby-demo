import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const POSTS_LISTING_QUERY = graphql`
  query HomepagePostsQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

function Listing() {
  return (
    <StaticQuery
      query={POSTS_LISTING_QUERY}
      render={({ allMarkdownRemark }) => (
        <>
          {allMarkdownRemark.edges.map(
            ({
              node: {
                excerpt,
                frontmatter: { slug, title, date }, // destructure
              },
            }) => (
              <Post key={slug}>
                <h2>
                  <Link to={`/posts/${slug}`}>{title}</Link>
                </h2>
                <small>{date}</small>
                <p>{excerpt}</p>
                <Link className="read-more" to={`/posts/${slug}`}>
                  Read More
                </Link>
              </Post>
            )
          )}
        </>
      )}
    />
  )
}

const Post = styled.article`
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.1);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 6px 20px rgba(25, 17, 34, 0.13);
  }

  a {
    color: #222;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    font-size: 0.8rem;
  }

  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

export default Listing
