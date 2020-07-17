import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle, Container } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import { breakpoints } from '../utils/styles'
import { Link } from 'gatsby'

const Footer = styled.footer`
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 0 2.5rem;
  background-color: #dcaea4;
  color: white;
`

const Contact = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  text-align: center;

  a {
    color: white;
  }

  @media (min-width: ${breakpoints.m}px) {
    font-size: 28px;
  }
`

const PolicyLink = styled.div`
  margin-top: .25rem;
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Layout = ({ children }) => (
  <ContextProvider>
    <GlobalStyle />
    <Helmet
      meta={[
        { name: 'google-site-verification', content: 'TLgnY50wT-BoIuauRT5YRer5lmpwVM2ilxvEhEVZo7I' }
      ]}
    />
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
        <>
          <Navigation siteTitle={data.site.siteMetadata.title} />
          <Container>
            {children}
          </Container>
          <Footer>
            <Contact>Questions? Email us <a href="mailto:magicspoon16@gmail.com">here.</a></Contact>
            <PolicyLink>
              <Link to="/policy/">Integritetspolicy & Leveransinformation</Link>
            </PolicyLink>
          </Footer>
        </>
      )}
    />
  </ContextProvider>
)

export default Layout
