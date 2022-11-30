import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const HomePage = () => { 
  return (
    <Layout pageTitle="Home" pageHeading ="Welcome to my Gatsby site!">
      <p>I am builing this site to learn Gatsby using the tutorial <a href="https://www.gatsbyjs.com/docs/tutorial/part-2/" target="_blank">here</a></p>
      <StaticImage
        alt="Portsmouth Harbour inlet"
        src="../images/Portsmouth01.jpg"
        loading="eager"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default HomePage