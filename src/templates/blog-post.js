import React from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Seo"
import { rhythm, scale } from "../utils/typography"
import { Heading, Text, Box, Button } from 'grommet'

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={'aa'}>
        <p>as</p>
      </Layout>
    )
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         mp3 {
//           publicURL
//         }
//         mid {
//           publicURL
//         }
//       }
//     }
//   }
// `
