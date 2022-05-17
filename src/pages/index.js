import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "../components/HomepageFeatures"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {siteConfig.tagline} <br />
          Designed for computer graphics software
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/tutorials">
            Let's get started 🚀
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title=""
      description="An open-source C++ framework, designed for computer graphics software."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.grey}>
          {/* <b> */}
          <div className={styles.centered}>
            🚀 Our main goal is to build <i>Cool</i>, a modern framework for
            computer graphics software.
            <br />
            🛠️ In doing so we also develop many small libraries, independent of
            the big framework.
            <br />
            🎨 With this framework we build{" "}
            <a href="/lab">
              a generative-art software, <i>CoolLab</i>
            </a>
            .
            <br />
            📖 We also document our process as much as possible and{" "}
            <a href="/blog">share our learnings on our website</a>
            .
            <br />
            🤗 We support other open-source projects and contribute back to all
            the projects we rely on, either through pull requests or
            sponsorships.
            <br />
            👩‍🏫 We take on interns each year because we are happy to teach young
            developers and welcome new contributors.
            <br />
            <br />
            The philosophy of our libraries is to be:
            <ul>
              <li> 🎁 Open-source </li>
              <li> 🚀 Cross-platform </li>
              <li> 😎 Easy to integrate into any project through CMake </li>
              <li> 🛠️ Easy to build from source</li>
            </ul>
          </div>
          {/* </b> */}
        </div>
      </main>
    </Layout>
  )
}
