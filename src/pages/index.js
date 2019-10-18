import React from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import MusicTable from "../components/musictable"

import { Box, Meter, Text } from 'grommet'

class BlogIndex extends React.Component {
  render() {
    const columns = [
      {
        property: 'date',
        primary: true,
        render: datum => (
          <Text margin={{ left: "small" }}>{datum.date}</Text>
        )
      },
      {
        property: 'artist',
      },
      {
        property: 'mp3',
        render: datum => (
          <audio controls={true} preload="none">
            <source src={datum.mp3} type="audio/mpeg" />
          </audio>
        )
      }]

      const musicdata = this.props.data.allMarkdownRemark.edges.map(({ node }) => ({
        date: node.frontmatter.date, 
        slug: node.fields.slug,
        artist: node.frontmatter.artist,
        mp3: node.frontmatter.mp3.publicURL,
      }))

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <MusicTable 
          columns={columns} 
          data={musicdata}
          onClickRow={
            ({ datum }) => navigate(datum.slug)
          }
        />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            mp3 {
              publicURL
            }
            mid {
              publicURL
            }
            artist
          }
        }
      }
    }
  }
`
