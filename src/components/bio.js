import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Hey{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>{" "}
              I'm <strong>{author}</strong> and I write about software
              development, freelancing & productivity.
              <br />
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
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/davidlevaiprofile-square.jpeg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
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

const Container = styled.div`
  display: flex;
`

export default Bio
