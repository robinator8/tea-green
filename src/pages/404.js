import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Seo"
import styled from 'styled-components'

const WhiteHeader = styled.h2`
  font-size: 8vw;
  text-align: center;
  padding: 5vw 0;
  margin: 0;
`

const BlackHeader = styled(WhiteHeader)`
  background-color: rgba(0,0,0,0.9);
  color: white;
  margin: 0;
`

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <WhiteHeader>Hey there!</WhiteHeader>
        <BlackHeader>This page doesn't exist.</BlackHeader>
        <WhiteHeader>Error 404</WhiteHeader>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
