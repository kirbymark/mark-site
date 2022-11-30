import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'


const BlogPage = ( {data, children} ) => { 
  console.log("data:", data)
  return (
    <Layout pageTitle="Blog" pageHeading ="This is my Blog Page">
    {
      <ul>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <p>Modified: {node.parent.modifiedTime}</p>
        </article>
      ))}
      </ul>
    }
    </Layout>
  )
}


export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
        parent {
          ... on File {
            name
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`


export const Head = () => <Seo title="Blog Page" />

export default BlogPage