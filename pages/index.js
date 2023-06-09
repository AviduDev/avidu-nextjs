import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";

import Hero from "@/components/Hero.module";

import Link from "next/link";


import { gql, GraphQLClient } from "graphql-request";
import Marquee from "@/components/Marquee";
import Description from "@/components/Description";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import Circle from "@/components/Circle";
import Notice from "@/components/Notice";

const hygraph = new GraphQLClient(
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cl9s32g1q2oun01td822bh5s6/master"
);

const QUERY = gql`
  {
    projects {
      id
      title
      slug
      tags
      mainImage {
        url
        width
        height
        id
      }
      year
    }
  }
`;

export async function getStaticProps() {
  const { projects } = await hygraph.request(QUERY);

  return {
    props: {
      projects,
    },
  };
}

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Avidu Web Designer and Developer from Sri Lanka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Notice />
        <Hero />
        <Marquee />
        <Description />
        <Services />
        <Process />

        {/* ---------------------------------------------- */}

        <div className={styles.projectContainer}>
          <h2 className={styles.workTtl}>work</h2>
          <ul className={styles.projectContainer}>
            {projects.map(({ id, title, mainImage, slug }) => (
              <li key={id} className={styles.project}>
                <Image
                  className={styles.mainImage}
                  src={mainImage.url}
                  width={mainImage.width}
                  height={mainImage.height}
                  alt={title}
                />

                <Link
                  className={styles.projectTitle}
                  href={`/projects/${slug}`}
                >
                  <h2 layoutId={id}>{title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------ */}
        
        <Faqs />
        <Contact id="contact" />
      </main>
    </>
  );
}
