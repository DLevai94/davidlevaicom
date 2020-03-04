import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          const { title, social, author } = data.site.siteMetadata
          return (
            <Wrapper>
              <div
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  maxWidth: rhythm(24),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                <header>{header}</header>
                <main>{children}</main>
              </div>
              <Footer>
                © {new Date().getFullYear()}, {`${author} - ${title} `}
                <a
                  style={{
                    boxShadow: "none",
                    marginRight: `0.5em`,
                    color: "#000",
                  }}
                  href={`https://instagram.com/${social.twitter}`}
                >
                  <FiInstagram />
                </a>
                <a
                  style={{
                    boxShadow: "none",
                    marginRight: `0.5em`,
                    color: "#000",
                  }}
                  href={`https://twitter.com/${social.twitter}`}
                >
                  <FiTwitter />
                </a>
                <a
                  style={{
                    boxShadow: "none",
                    marginRight: `0.5em`,
                    color: "#000",
                  }}
                  href={`https://linkedin.com/in/${social.twitter}`}
                >
                  <FiLinkedin />
                </a>
                <a
                  style={{ boxShadow: "none", color: "#000" }}
                  href={`https://github.com/${social.twitter}`}
                >
                  <FiGithub />
                </a>
              </Footer>
            </Wrapper>
          )
        }}
      />
    )
  }
}

const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        author
        title
        social {
          twitter
          instagram
          linkedin
          github
        }
      }
    }
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
