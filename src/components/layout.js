import * as React from "react"
import { Link } from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'
console.log("container: ", container)

const Layout = ({ pageTitle, pageHeading, children }) => { 
  return (
    <main>
        <title>{pageTitle}</title>
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </div>
    </main>
  )
}

export default Layout