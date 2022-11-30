import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo'

const AboutPage = () => { 
  return (
    <Layout pageTitle="About" pageHeading ="About Us">
      <p>We are learners</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutPage