import { Footer, Header, ProjectSection } from "@/components";
import { projectsArray } from "@/utils/constants";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio-Projects</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col">
        {projectsArray.map((project, idx) => {
          const { heading, description, liveLink, srcLink, time } = project;
          return (
            <ProjectSection
              key={heading}
              heading={heading}
              description={description}
              liveLink={liveLink}
              srcLink={srcLink}
              time={time}
              bgIsGrey={idx % 2 === 0}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
