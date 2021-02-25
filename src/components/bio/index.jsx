import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Hello, I'm</span>
                <Link to={'/about'} className="author-name-content">
                  <span className="author-name-content-color">@{author}</span>
                </Link>
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {social.github && (
                    <a
                      href={`https://github.com/${social.github}`}
                      style={{ color: '#335c91' }}
                    >
                      GitHub
                    </a>
                  )}
                  {social.medium && (
                    <a href={`https://medium.com/${social.medium}`}>Medium</a>
                  )}
                  {social.til && (
                    <a href={`https://github.com/${social.til}`}>TIL</a>
                  )}
                  {social.facebook && (
                    <a href={`https://www.facebook.com/${social.facebook}`}>
                      Facebook
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      href={`https://www.instagram.com/${social.instagram}/`}
                      style={{ color: '#335c91' }}
                    >
                      Instagram
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          til
          github
          medium
          facebook
          instagram
        }
      }
    }
  }
`

export default Bio
