/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { node, object } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Spring, animated } from 'react-spring/renderprops'
import styled from 'styled-components'

import Header from './header'
import Archive from './archive'
import Image from './image'
import './layout.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          native
          from={{ height: location.pathname === '/' ? 100 : 300 }}
          to={{ height: location.pathname === '/' ? 300 : 100 }}
        >
          {({ height }) => (
            <animated.div style={{ overflow: 'hidden', height }}>
              <Image imgName="bg.jpeg" />
            </animated.div>
          )}
        </Spring>
        {/* {location.pathname === '/' && } */}
        <MainLayout>
          <main>{children}</main>

          <aside>
            <Archive />
          </aside>
        </MainLayout>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: node.isRequired,
  location: object.isRequired,
}

Layout.defaultProps = {
  location: {
    pathname: '/',
  },
}

const MainLayout = styled.div`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

export default Layout
