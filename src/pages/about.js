import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Box, Text } from 'grommet'
import { Link } from 'gatsby'

const SubTitleHeading = props => (
  <Heading 
  size='small'
  textAlign='center'
  color='brand'
  level='2'
  margin={{ vertical: 'small', horizontal: 'small'}}
  {...props}
  />
)

class AboutPage extends React.Component {
  render() {
    return (  
    <Layout location={this.props.location}>
      <SEO title="About" />
      <Box direction="column" align="center">
        <SubTitleHeading >About</SubTitleHeading>
        <Text>Hi, I'm Rob/Robert/Robbie Craig and this my musical improvisation blog, or implog if you will.</Text>
        <Text>Tea green is my first solo project.</Text>
        <Text>More information about me can be found on my personal website, <a href="https://robcraig.me">robcraig.me</a></Text>
        <Text>Tea Green is dedicated to my #1 fan, Grandma.</Text>
      </Box>
    </Layout>
    )
  }
}

export default AboutPage