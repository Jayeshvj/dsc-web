import { useRef } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const headerRef = useRef(null);
  const logoLightRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <Layout
      page="home"
      headerRef={headerRef}
      logoLightRef={logoLightRef}
      logoRef={logoRef}
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="main" id="home">
        <div className="main-text-holder">
          <div className="main-text-holder-heading" ref={headerRef}>
            <picture>
              <source type="image/webp" srcSet="images/DSC_JSSSTU-dark.webp" />
              <source type="image/png" srcSet="images/DSC_JSSSTU-dark.png" />
              <img
                src="images/DSC_JSSSTU-dark.png"
                data-aos="fade-up"
                className="logo"
                alt="DSC JSSSTU"
                ref={logoRef}
              />
            </picture>
            <picture>
              <source type="image/webp" srcSet="images/DSC_JSSSTU-color.webp" />
              <source type="image/png" srcSet="images/DSC_JSSSTU-color.png" />
              <img
                src="images/DSC_JSSSTU-color.png"
                data-aos="fade-up"
                className="logo-light"
                alt="DSC JSSSTU"
                ref={logoLightRef}
              />
            </picture>
          </div>
          <h2 data-aos="fade-up">Powered by Google Developers</h2>
          <p data-aos="fade-up" className="continous-text">
            At DSC JSSSTU, our aim is to learn and teach. Developers, designers
            and managers come together under one roof to create a community
            which inspires thousands. Join Us!
          </p>
        </div>
        <Link href="#our-work">
          <div className="main-down-arrow" id="down-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.55 44.393">
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-966 -967.48)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M982,967.98V1011.1"
                  transform="translate(-1.5)"
                  fill="none"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeWidth={1}
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M966.813,997.8l13.973,13.577L994.363,997.8"
                  transform="translate(-0.313)"
                  fill="none"
                  stroke="#141414"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </div>
        </Link>
        <img src="images/landing.svg" className="main-image" alt="Home Page" />
      </div>
      <div className="container-main holded-container" id="our-work">
        <h1 data-aos="fade-up" className=" text-center">
          Our Focus
        </h1>
        <p
          data-aos="fade-up"
          className="continous-text text-center extra-break"
        >
          We think slightly out of the box, we believe that a club’s resources
          must not only be channeled into conducting events but also to
          propagate learning and teaching, symbiotically.
        </p>
        <p data-aos="fade-up" className="text-center">
          That said, we conduct two flagship events, namely, DevFest and
          WomenTechies, and tons of insightful workshops!
        </p>
      </div>
      <div className="container-main holded-container" id="team">
        <h1 data-aos="fade-up" className=" text-center">
          Get to know the team
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We’ve got a strong team filled with caffeine addicted developers,
          gradients loving designers and machine like working managers.
        </p>
        <Link href="/team">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Meet The Team</div>
          </div>
        </Link>
      </div>
      <div className="container-main holded-container" id="updates">
        <h1 data-aos="fade-up" className=" text-center">
          Updates
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We are actively conducting workshops, and also contributing to the
          development side by churning out high quality projects.
        </p>
        <Link href="/projects">
        <div data-aos="fade-up" className="buttons">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Projects</div>
            </div>
        </div>
        </Link>
      </div>
      <div className="container-main holded-container" id="blog">
        <h1 data-aos="fade-up" className=" text-center">
          Our Blogs
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Our prime focus is to learn and disseminate knowledge. Our team roll
          out blogs regularly on medium.
        </p>
        <div data-aos="fade-up" className="buttons">
          <a href="/blog">
            <div className="button-maker" id="projects-button">
              <div className="button-text">Check out</div>
            </div>
          </a>
        </div>
      </div>
      <div className="container-main holded-container" id="contact">
        <h1 data-aos="fade-up" className=" text-center">
          Contact us
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          We’re very active on social media.
        </p>
        <div data-aos="fade-up" className="icons small-icons">
          <a
            href="https://instagram.com/dscjssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Instagram.svg"
              className="circle-icon"
              alt="DSC JSSSTU Instagram"
            />
          </a>
          {/* <a href="https://twitter.com/dscvit" target="_blank" rel="noopener">
            <img
              src="images/Twitter.svg"
              className="circle-icon"
              alt="DSC JSSSTU Twitter"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/company/dsc-jssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Linkedin.svg"
              className="circle-icon"
              alt="DSC JSSSTU Linkedin"
            />
          </a>
          {/* <a
            href="https://facebook.com/dscvitvellore"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Facebook.svg"
              className="circle-icon"
              alt="DSC JSSSTU Facebook"
            />
          </a> */}
          <a
            href="https://github.com/dsc-jssstu"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Github.svg"
              className="circle-icon"
              alt="DSC JSSSTU GitHub"
            />
          </a>
          {/* <a
            href="https://www.behance.net/dsc-vit"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Behance.svg"
              className="circle-icon"
              alt="DSC JSSSTU Behance"
            />
          </a> */}
          <a href="https://medium.com/dscjssstu" target="_blank" rel="noopener">
            <img
              src="images/Medium.svg"
              className="circle-icon"
              alt="DSC JSSSTU Medium"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UChpUfrwmW4MdNHRSC09cK2g"
            target="_blank"
            rel="noopener"
          >
            <img
              src="images/Youtube.svg"
              className="circle-icon"
              alt="DSC JSSSTU Youtube"
            />
          </a>
        </div>
      </div>
      <div className="container-main holded-container">
        <h1 data-aos="fade-up" className=" text-center">
          Submit an idea
        </h1>
        <p data-aos="fade-up" className="text-center extra-break">
          Didn’t get the chance to implement your favourite idea? Why not give
          us a chance to bring it to real life.
        </p>
        <a href="/ideas" target="_blank" rel="noopener">
          <div data-aos="fade-up" className="button-maker">
            <div className="button-text">Submit idea</div>
          </div>
        </a>
      </div>

      <div className="footer container-main  container-main-last">
        <div className="dark-light-toggle  text-center" id="dark-light-toggle">
          <p>I want dark mode</p>
        </div>
      </div>
    </Layout>
  );
}
