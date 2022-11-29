import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const HomePage = () => { 
  return (
    <Layout pageTitle="Home" pageHeading ="Welcome to my Gatsby site!">
      <p>I am builing this site to learn Gatsby using the tutorial <a href="https://www.gatsbyjs.com/docs/tutorial/part-2/" target="_blank">here</a></p>
    </Layout>
  )
}

export default HomePage