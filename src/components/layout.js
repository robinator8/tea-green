//import React from "react";
import { Grommet, Box, Grid, Heading, ResponsiveContext, Button } from "grommet";
import React from 'react'
import { Link, graphql, StaticQuery, navigate } from 'gatsby'

const theme = {
  global: {
    colors: {
      brand: '#191b52',
      'accent-1': '#d3f1c1',
      focus: 'brand'
    },
    breakpoints: {
      small: { value: 600 },
      medium: { value: 900 },
      large: 1300,
    }
  },
}

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"]
};

const rows = {
  small: ["xsmall", "xsmall", "xsmall", "fill"],
  medium: ["xsmall", "xsmall","fill"],
  large: ["xsmall","fill"],
  xlarge: ["xsmall","fill"]
};

const fixedGridAreas = {
  small: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "subtitle", start: [0, 1], end: [0, 1] },
    { name: "nav", start: [0, 2], end: [0, 2] },
    { name: "main", start: [0,3], end: [0,3] }
  ],
  medium: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "subtitle", start: [1, 0], end: [1, 0] },
    { name: "nav", start: [0, 1], end: [1, 1] },
    { name: "main", start: [0,2], end: [1,2] }
  ],
  large: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "subtitle", start: [1, 0], end: [1, 0] },
    { name: "nav", start: [2, 0], end: [2, 0] },
    { name: "main", start: [0,1], end: [2,1] }
  ],
  xlarge: [
    { name: "title", start: [0, 0], end: [0, 0] },
    { name: "subtitle", start: [1, 0], end: [1, 0] },
    { name: "nav", start: [2, 0], end: [2, 0] },
    { name: "main", start: [0,1], end: [2,1] }

  ]
};

const ResponsiveGrid = ({
  children,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

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

const NavButton = props => (
  <Button 
    margin={{ right: 'xsmall' }}
    {...props}
  />
)

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
    <Grommet plain theme={theme}>
      <Box>
        <ResponsiveGrid
          rows={rows}
          columns={columns}
          gap="small"
          areas={fixedGridAreas}
          margin={{ top: 'medium' }}
        >
          <Box
            gridArea="title"
            justify="center"
            align="center"
          >
            <Link to={''} style={{ 'text-decoration': 'none'}}>
              <Box background='brand'>
                <TitleHeading>{data.site.siteMetadata.title}</TitleHeading>
              </Box>
            </Link>
          </Box>
          <Box
            gridArea="subtitle"
            justify="center"
            align="center"
          >
            <SubTitleHeading>musical improvisation</SubTitleHeading>
          </Box>
          <Box
            gridArea="nav"
            justify="center"
            align="center"
            direction='row'
          >
            <Link to={'/'}>
              <NavButton label='home' primary={location.pathname == "/"} />
            </Link>
            <Link to={'/about'}>
              <NavButton label='about' primary={location.pathname == "/about"} />
            </Link>
          </Box>
          <Box
            gridArea="main"
            justify="center"
            align="center"
          >
            {children}
          </Box>
        </ResponsiveGrid>
      </Box>
    </Grommet>
    )}
  />
)

export default Layout