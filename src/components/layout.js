import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, } from './layout.module.css'

const Layout = ({ pageTitle, pageHeading, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    console.log("data: ", data)

    return (
        <main>
            <title>{pageTitle}</title>
            <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
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