import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const FilesPage = ({ data }) => (
  <Layout>
    <SEO title="Files" />
    <h1>Files</h1>
    <ul>
      {data.allFile.edges.map(({ node }) => (
        <li>
          {node.name} - {node.size}- {node.sourceInstanceName}- {node.birthTime}
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          name
          sourceInstanceName
          size
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default FilesPage
