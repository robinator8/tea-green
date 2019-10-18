import React from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Heading, Text, Box, Button } from 'grommet'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={"Daily music from " + post.frontmatter.date}
          description={"Tea Green daily improvisational music: " + post.frontmatter.date}
        />
        <Box justify="center" align="center">
            <Heading>
              {post.frontmatter.date}
            </Heading>
          <audio controls>
            <source src={ post.frontmatter.mp3.publicURL } type="audio/mpeg" />
            Your browser does not support this audio element.
          </audio>
          
          {/* {
            post.frontmatter.mid != null &&
            <a href={ post.frontmatter.mid.publicURL }>mid</a>
          } */}
          
          {/* <section dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        </Box>

        <nav>
          {/* {previous && (
            <Button label="Previous" onclick={() => navigate(previous.fields.slug)} />
          )}
          {next && (
            <Button label="Next" onClick={() => navigate(next.fields.slug)} />
          )} */}
            {previous && (
              <Button label="←" onClick={()=>{navigate(previous.fields.slug, {rel: 'prev'})}} margin={'large'} />
            )}
            {next && (
              <Button label="→" onClick={()=>{navigate(next.fields.slug, {rel: 'next'})}} margin={'large'}/>
            )}
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        mp3 {
          publicURL
        }
        mid {
          publicURL
        }
      }
    }
  }
`
