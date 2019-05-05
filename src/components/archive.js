import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const POSTS_ARCHIVE_QUERY = graphql`
  query PostsArchiveQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
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

const Archive = () => (
  <StaticQuery
    query={POSTS_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <h3>Archive</h3>
        <ArchiveList>
          {allMarkdownRemark.edges.map(
            ({
              node: {
                frontmatter: { title, slug, date }, // deep/nested destructuring
              },
            }) => (
              <li key={slug}>
                <Link to={`/posts/${slug}`}>{title}</Link>
                <small>{date}</small>
              </li>
            )
          )}
        </ArchiveList>
      </>
    )}
  />
)

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
    display: block;
  }

  li {
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 0 3px 10px rgba(25, 17, 34, 0.1);
    padding: 1rem;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 6px 20px rgba(25, 17, 34, 0.13);
    }
  }

  small {
    font-size: 0.7rem;
    display: block;
  }
`

export default Archive
