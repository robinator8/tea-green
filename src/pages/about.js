import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from 'grommet'

class AboutPage extends React.Component {
  render() {
    return (  
    <Layout location={this.props.location}>
      <SEO title="About" />
      <Heading>About</Heading>
    </Layout>
    )
  }
}

export default AboutPage