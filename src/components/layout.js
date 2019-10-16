//import React from "react"
// import { Link, StaticQuery, graphql } from "gatsby"

// import styled from "styled-components"
// import { rhythm, scale } from "../utils/typography"
// import BackgroundImage from 'gatsby-background-image'

// const BackgroundSection = ({ className, children }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(name: { eq: "plant-background" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//           opacity
//         >
//           {children}
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

// const Content = styled.div`
//   position: absolute;
//   top: 0;
//   min-width: 100%;
//   height: fill-content;
//   background-color: #d8e4d0;
//   color: #20225b;

// `
// // DBEBCD
// // d8e4d0
// // d8e4d0

// const TitleHeader = styled.h1`
//   background-color: #20225b;
//   padding: 0px 12px;
//   margin-top: 16px;
//   margin-left: 16px;
//   margin-right: 16px;
//   color: #d8e4d0;
//   display: inline-block;
// `

// const SloganHeader = styled.h1`
//   display: inline-block;
//   color: #20225b;
// `
// const AboutLink = styled.h1`
//   float: right;
//   display: inline-block;
//   color: #20225b;
//   margin-right: 16px;
// `

// const Container = styled.div`
//   max-width: ${rhythm(24)};
//   margin-left: auto;
//   margin-right: auto;
// `

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     return (

//         <Content>
//           <StyledBackgroundSection>
//           <TitleHeader>{ title }</TitleHeader>
//           <SloganHeader>musical improvisation</SloganHeader>
//           <AboutLink>about</AboutLink>
//             <Container>
              
//               <main>{ children }</main>
//             </Container>
//           </StyledBackgroundSection>
//        </Content>

//     )
//   }
// }

// 
// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     let header

//     if (location.pathname === rootPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <Container>
//         <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//           backgroundColor: '#d7f1c1',
//           color: '#20225b'
//         }}
//       >
//         <header>{header}</header>
//         <main>{children}</main>
//         { /*<footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer> */ }
//       </div>
//       </Container> 
//     )
//   }
// }

import React from 'react'
import { Box, Grommet, Button, Heading } from 'grommet'
import { Link, graphql, StaticQuery } from 'gatsby'

const theme = {
  global: {
    colors: {
      brand: '#191b52',
      'accent-1': '#d3f1c1',
      text: '#191b52'
    },
    active: {
      color: "brand"
    }
  },
  button: {
    color: 'brand'
  }
}

const AppBar = props => (
  <Box
    margin={{ vertical: 'medium', horizontal: 'medium'}}
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ vertical: 'xxsmall', horizontal: 'medium' }}
    {...props}
  />
);

const TitleHeading = props => (
 <Heading
  size='small'
  textAlign='center'
  color='accent-1'
  margin={{ vertical: 'small', horizontal: 'medium'}}
  underlin='none'
  {...props}
 />
)
const SubTitleHeading = props => (
  <Heading 
  size='small'
  textAlign='center'
  color='brand'
  level='3'
  margin={{ vertical: 'small', horizontal: 'small'}}
  {...props}
  />
)


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grommet plain theme={theme}>
      <AppBar>
        <Box direction='row' align="center">
          <Link to={'/'}>
            <Box background='brand'>
              <TitleHeading>{data.site.siteMetadata.title}</TitleHeading>
            </Box>
          </Link>
          <SubTitleHeading>musical improvisation</SubTitleHeading>
        </Box>
        <Box direction='row'>
          <Link to={'/'}><Button label='home' /></Link>
          <Link to={'/about'}><Button label='about' /></Link>
        </Box>
      </AppBar>
      {children}
    </Grommet>
    )}
  />
)

// class Layout extends React.Component {
//   render() {
//     const { children, data } = this.props
//     const { title }= data.site.siteMetadata
//     return  (
//       <StaticQuery 
      
//       />
//       <Grommet plain theme={theme}>
//         <AppBar>
//           <Box direction='row' align="center">
//             <Link to={'/'}>
//               <Box background='brand'>
//                 <TitleHeading>{title}</TitleHeading>
//               </Box>
//             </Link>
//             <SubTitleHeading>musical improvisation</SubTitleHeading>
//           </Box>
//           <Box direction='row'>
//             <Link to={'/'}><Button label='home' /></Link>
//             <Link to={'/about'}><Button label='about' /></Link>
//           </Box>
//         </AppBar>
//         {children}
//       </Grommet>
//     )
//   }
// }

export default Layout