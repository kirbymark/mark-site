import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const HomePage = () => { 
  return (
    <Layout pageTitle="Home" pageHeading ="Welcome to my Gatsby site !">
      <p>I am using the Gatsby tutorial</p>
    </Layout>
  )
}

export default HomePage