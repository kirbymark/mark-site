import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const BlogPage = () => { 
  return (
    <Layout pageTitle="Blog" pageHeading ="This is my Blog Page">
      <p>Here are some children</p>
    </Layout>
  )
}

export default BlogPage