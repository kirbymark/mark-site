import * as React from "react"
import { Link } from "gatsby"

const HomePage = () => { 
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site !</h1>
      <p>I'm making this by following the Gatsby Tutorial</p>
      <Link to="/about">About</Link>
    </main>
  )
}

export default HomePage