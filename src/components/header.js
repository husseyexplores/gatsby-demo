import React from 'react'
import { string } from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <div className="inner-wrapper">
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
      <h3>
        <Link to="/">{siteTitle}</Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: string.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default styled(Header)`
  background: #524763;
  margin-bottom: 0;

  .inner-wrapper {
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  img {
    width: 140px;
    margin: 0 20px 0 0;
  }

  h3 {
    margin: 0;
    display: inline-block;

    a {
      color: white;
      text-decoration: none;
      vertical-align: text-top;
    }
  }
`
