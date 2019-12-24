import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const BigSpan = styled.span`
  font-size: 10vw;
`

const LightP = styled.p`
  font-size: 5vw;
  text-align: center;
  margin: 0;
  padding: 6vw 3vw;
`

const DarkP = styled(LightP)`
  color: white;
  background-color: rgba(0,0,0,0.9);
`

class AboutPage extends React.Component {
  render() {
    return (  
    <Layout location={this.props.location}>
      <SEO title="About" />
      <LightP><BigSpan>Hi, </BigSpan> I'm Rob Craig and this my musical improvisation blog, or implog if you will.</LightP>
      <DarkP>Tea green is my first solo project.</DarkP>
      <LightP>More information about me can be found on my personal website, <a href="https://robcraig.me">robcraig.me</a></LightP>
      <DarkP>Tea Green is dedicated to my #1 fan, Grandma. Thank you for everything.</DarkP>
    </Layout>
    )
  }
}

export default AboutPage