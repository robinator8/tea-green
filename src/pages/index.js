import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MusicDisplay from '../components/MusicDisplay/MusicDisplay'
import moment from "moment"

class BlogIndex extends React.Component {
  render() {
    // const columns = [
    //   {
    //     property: 'date',
    //     primary: true,
    //     render: datum => (
    //       <Text margin={{ left: "small" }}>{datum.date}</Text>
    //     )
    //   },
    //   {
    //     property: 'artist',
    //   },
    //   {
    //     property: 'mp3',
    //     render: datum => (
    //       <audio controls={true} preload="none">
    //         <source src={datum.mp3} type="audio/mpeg" />
    //       </audio>
    //     )
    //   }]

      const musicdata = this.props.data.allMarkdownRemark.edges.map(({ node }) => ({
        date: node.frontmatter.date, 
        artist: node.frontmatter.artist,
        src: node.frontmatter.mp3.publicURL,
        title: moment.utc(node.frontmatter.date).format("MMM D, YYYY")
      }))
    console.log("ABC!123")
    console.log(musicdata)
    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <MusicDisplay 
          songs={musicdata}
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
          frontmatter {
            date
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