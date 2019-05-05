import React from 'react'
import { object } from 'prop-types'

import Layout from '../components/layout'
import Listing from '../components/listing'
import SEO from '../components/seo'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`husseyexplores`, `gatsby-blog`, `react`]} />
    <Listing />
  </Layout>
)

IndexPage.propTypes = {
  location: object.isRequired,
}

export default IndexPage
