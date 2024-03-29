import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
        >
          <p>Hi, my name is</p>
          <h1 className={styles.name}>tiff.</h1>
          <p>
            I am a <span className="hilight space">former frontend engineer</span> pivoting to {" "}
            <span className="hilight space">cybersecurity & malware analysis</span>. i'm also passionate about home labs and devops.
          </p>
          <br />
          <p>If you'd like to contact me using encryption you can use this Fingerprint: <span className="hilight-norm">30E4CDB6EFF32A08</span></p>
          <SocialLinks />
          <p>
            <Link to={useBaseUrl("#main")}>
              <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-700 hover:bg-primary-800 transition text-secondary-300 text-lg cursor-pointer">
                whoami<span className="pl-1 animate-pulse">▎</span>
              </button>
            </Link>
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
      <div className={styles.aboutHeader}>
        <h2 className="border-0 border-b-4 border-solid border-success">Who am I</h2>
      </div>
       <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/hacker-cat-desk.jpeg")}
            />
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&duration=1000&pause=300&color=0F9E59&random=false&width=1100&height=120&lines=Dev;Pentester;Malcontent;An+error+has+occurred.+To+continue%3A;Press+Enter+to+return+to+Windows+;or+press+F+in+the+chat+to+pay+respect+;to+your+pwned+network" alt="Typing SVG" /></a>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Refer to</div>
                  <div className="pagination-nav__label">My analysis</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("t_keys.asc")}
                >
                  <div className="pagination-nav__sublabel">View</div>
                  <div className="pagination-nav__label">My PGP Key</div>
                </a>
              </div>
            </nav>
          </div>
        </section>
        <a style={{display:"none"}} rel="me" href="https://infosec.exchange/@tiff">Mastodon</a>
        <a style={{display:"none"}} rel="me" href="https://infosec.exchange/@0x8c">Mastodon</a>
      </main>
    </Layout>
  );
}

export default Home;
