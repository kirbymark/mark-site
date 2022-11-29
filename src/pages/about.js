import * as React from "react"
import { Link } from "gatsby"

const AboutPage = () => { 
  return (
    <main>
      <title>About Me</title>
      <h1>This is my About page</h1>
      <p>I'm learning this</p>
      <Link to="/">HomePage</Link>
    </main>
  )
}

export default AboutPage