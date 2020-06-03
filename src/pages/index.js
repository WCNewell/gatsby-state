import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ThemeContext } from '../../provider'

const IndexPage = () => (
  <Layout>
    <ThemeContext.Consumer>
      {context => (
        <>
          <SEO title="Home" />
          <h1>{context.isDark ? "Dark Theme" : "Light Theme"}</h1>
          <button onClick={() => context.changeTheme()}>{context.isDark ? "Light" : "Dark"}</button>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </>
      )}
    </ThemeContext.Consumer>
  </Layout>
)

export default IndexPage
