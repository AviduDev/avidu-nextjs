import styles from "../../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

import { gql, GraphQLClient } from "graphql-request";

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

export default function Projects({ projects }) {
  return (
    <main>
      <section className={styles.section}>
        <h1>works</h1>
        {/* --------------------------PROJECTS------------------------- */}
        <ul className={styles.projectContainer}>
          {projects.map(({ id, title, mainImage, slug }) => (
            <li key={id} className={styles.project}>
              {/* --------------------IMAGE--------------------- */}
              <div className={styles.imageContainer}>
                <Image
                  className={styles.mainImage}
                  src={mainImage.url}
                  width={mainImage.width}
                  height={mainImage.height}
                  alt={title}
                />
              </div>
              {/* -----------------------TITLE------------------ */}
              <Link className={styles.projectTitle} href={`/projects/${slug}`}>
                <h2 layoutId={id}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
