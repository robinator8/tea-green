import React from 'react'
import { Link, graphql, StaticQuery, navigate } from 'gatsby'
import styled, { css } from 'styled-components'

const NavItemContainer = styled.div`
  &:hover {
    background-color: white;
  }
  &:active {
    background-color: white;
    border-left: 1vw solid rgba(0,0,0,0.9);
    border-right: 1vw solid rgba(0,0,0,0.9);

  }
  transition: 0.2s;
  display: flex;
  width: 100%;
  font-size: 5vw;
  cursor: pointer;
`

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0;
  width: 100%;
  text-align: center;
  ${NavItemContainer}:hover & {
    color: rgba(0,0,0,0.8);
  }
  ${NavItemContainer}:active & {
    color: rgba(0,0,0,0.8);
  }
`

const NavBar = styled.nav`
  display: grid;
  justify-items: stretch;
  grid-template-columns: repeat(2, 1fr);
  background-color: #191919;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23808080' fill-opacity='0.4'%3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Heebo:900&display=swap');
  font-family: 'Heebo', sans-serif;
`
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(0,0,0,0.9);
`

const Header = styled.h1`
  font-size: 15vw;
  padding: 8vw;
  color: white;
  margin: auto;
`
const Layout = ({ children, location }) => (
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
    <Container>
      <NavBar>
        <NavItemContainer>
          <NavItem to='/'>Home</NavItem>
        </NavItemContainer>
        <NavItemContainer>
          <NavItem to='/about'>About</NavItem>
        </NavItemContainer>
      </NavBar>
      <HeaderContainer>
        <Header>{data.site.siteMetadata.title}</Header>
      </HeaderContainer>
      {children}
    </Container>
    )}
  />
)
// const LayoutOld = ({ children, location }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//     <Grommet plain theme={theme}>
//       <Box>
//         <ResponsiveGrid
//           rows={rows}
//           columns={columns}
//           gap="small"
//           areas={fixedGridAreas}
//           margin={{ top: 'medium' }}
//         >
//           <Box
//             gridArea="title"
//             justify="center"
//             align="center"
//           >
//             <Link to={''} style={{ 'text-decoration': 'none'}}>
//               <Box background='brand'>
//                 <TitleHeading>{data.site.siteMetadata.title}</TitleHeading>
//               </Box>
//             </Link>
//           </Box>
//           <Box
//             gridArea="subtitle"
//             justify="center"
//             align="center"
//           >
//             <SubTitleHeading>musical improvisation</SubTitleHeading>
//           </Box>
//           <Box
//             gridArea="nav"
//             justify="center"
//             align="center"
//             direction='row'
//           >
//             <Link to={'/'}>
//               <NavButton label='home' primary={location.pathname == "/"} />
//             </Link>
//             <Link to={'/about'}>
//               <NavButton label='about' primary={location.pathname == "/about"} />
//             </Link>
//           </Box>
//           <Box
//             gridArea="main"
//             justify="center"
//             align="center"
//           >
//             {children}
//           </Box>
//         </ResponsiveGrid>
//       </Box>
//     </Grommet>
//     )}
//   />
// )

export default Layout