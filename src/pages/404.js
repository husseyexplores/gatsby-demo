import React from 'react'
import { object } from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

NotFoundPage.propTypes = {
  location: object.isRequired,
}

export default NotFoundPage
