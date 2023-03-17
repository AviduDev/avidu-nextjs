import styles from "../../styles/Details.module.css";
import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";

import { motion, AnimatePresence, useTransform } from "framer-motion";

const hygraph = new GraphQLClient(
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cl9s32g1q2oun01td822bh5s6/master"
);

export async function getStaticProps({ params }) {
  const { project } = await hygraph.request(
    `
    query MyQuery($slug: String!) {
      project(where: { slug: $slug }) {
        id
        title
        mainImage {
          url
          width
          height
        }
        slug
        description
        tags
        year
        company
        collaboration
        liveSite
        sourceUrl
        design
        demoUrl
        providedServices {
          html
        }
        usedTools {
          html
        }
        goals {
          html
        }
        problems {
          html
        }
        proposedSolution {
          html
        }
        projectScope {
          html
        }
    
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const { projects } = await hygraph.request(`
    {
      projects {
        id
        title
        mainImage {
          url
          width
          height
        }
        type
        slug
        description
        tags
        year
        company
        collaboration
        liveSite
        sourceUrl
        design
        demoUrl
        providedServices {
          html
        }
        usedTools {
          html
        }
        goals {
          html
        }
        problems {
          html
        }
        proposedSolution {
          html
        }
        projectScope {
          html
        }
    
      }
    }
  `);

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Project({ project }) {
  return (
    <main>
      <div className={styles.projectDetails}>
        <div className={styles.titleContainer}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.mainImage}
            src={project.mainImage.url}
            width={project.mainImage.width}
            height={project.mainImage.height}
            alt={project.title}
          ></Image>
        </div>

        <div className={styles.tagContainer}>
          <li>
            Type:<span class="bold">{project.type}</span>
          </li>
          <hr />
          <li>
            Company:<span class="bold">{project.company}</span>
          </li>
          <hr />
          <li>
            Collaboration:<span class="bold">{project.collaboration}</span>
          </li>
          <hr />
          <li>
            Date:<span class="bold">{project.year}</span>
          </li>
          <hr />
          <li>
            Design:
            <span class="bold">
              <a href={project.design} target="blank">
                Behance
              </a>
            </span>
          </li>
          <hr />
          <li>
            Source Code:
            <span class="bold">
              <a href={project.sourceUrl} target="blank">
                GitHub
              </a>
            </span>
          </li>
          <hr />
          <li>
            Live Site:
            <span class="bold">
              <a href={project.liveSite} target="blank">
                Open
              </a>
            </span>
          </li>
          <hr />
        </div>

        <div className={styles.moreDetails}>
          {/* ------------------------------------ */}
          <div className={styles.item}>
            <div className={styles.dtlttl}>
              <h3>goals</h3>
            </div>
            <div className={styles.dtldata}>
              <div
                className={styles.data}
                dangerouslySetInnerHTML={{ __html: project.goals.html }}
              />
            </div>
          </div>
          {/* ------------------------------------ */}
          <div className={styles.item}>
            <div className={styles.dtlttl}>
              <h3>problems</h3>
            </div>
            <div className={styles.dtldata}>
              <div
                className={styles.data}
                dangerouslySetInnerHTML={{ __html: project.problems.html }}
              />
            </div>
          </div>
          {/* ----------------------------------------- */}

          <div className={styles.item}>
            <div className={styles.dtlttl}>
              <h3>solutions</h3>
            </div>
            <div className={styles.dtldata}>
              <div
                className={styles.data}
                dangerouslySetInnerHTML={{
                  __html: project.proposedSolution.html,
                }}
              />
            </div>
          </div>

          {/* ----------------------------------------- */}

          <div className={styles.item}>
            <div className={styles.dtlttl}>
              <h3>provide services</h3>
            </div>
            <div className={styles.dtldata}>
              <div
                className={styles.data}
                dangerouslySetInnerHTML={{
                  __html: project.providedServices.html,
                }}
              />
            </div>
          </div>

          {/* ----------------------------------------- */}

          <div className={styles.item}>
            <div className={styles.dtlttl}>
              <h3>project scope</h3>
            </div>
            <div className={styles.dtldata}>
              <div
                className={styles.data}
                dangerouslySetInnerHTML={{ __html: project.projectScope.html }}
              />
            </div>
          </div>

          {/* ----------------------------------------- */}
        </div>
      </div>
    </main>
  );
}
