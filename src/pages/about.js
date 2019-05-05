import React from 'react'
import { object } from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

function About({ location }) {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
        necessitatibus architecto ipsum quae saepe placeat sapiente labore cum
        error, blanditiis molestiae. Beatae repellat odit corporis, consequatur
        quo explicabo nihil.
      </p>
    </Layout>
  )
}

About.propTypes = {
  location: object.isRequired,
}

About.defaultProps = {}

export default About
