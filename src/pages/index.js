import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeContext } from '../../provider'

const IndexPage = () => (
  <Layout>
    <ThemeContext.Consumer>
      {context => (
        <>
          <SEO title="Home" />
          <h1>{context.isLight ? "Light Theme" : "Dark Theme"}</h1>
          <button onClick={() => context.changeTheme()}>{context.isLight ? "Dark" : "Light"}</button>
          <Link to="/page-2/">Go to page 2</Link> <br />
        </>
      )}
    </ThemeContext.Consumer>
  </Layout>
)

export default IndexPage
