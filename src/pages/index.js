import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{data.site.siteMetadata.description}</p>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>
          <article>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.excerpt}</p>
          </article>
        </li>
      ))}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
