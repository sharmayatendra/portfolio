import { Footer, Header, AboutMe, Section, LinkButton } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio-Yatendra</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutMe />
      <div className="flex flex-col">
        <Section
          heading="Technologies"
          description="I am familiar with HTML5, CSS3 & Its Box Model, Git, JavaScript, NodeJS, WebHosting, ReactJS"
          bgIsGrey={true}
        />

        <Section
          heading="Projects"
          description="I like to showcase my work & thus, you can see my projects hosted online."
        >
          <LinkButton
            label="See Projects"
            btnType="primary"
            url={"./projects"}
          />
        </Section>

        <Section
          heading="Blogs"
          description="I am working on some technical & non-technical blogs.I like to document my journey of learning"
          bgIsGrey={true}
        >
          <LinkButton label="Browse Blogs" btnType="secondary" url={""} />
        </Section>
      </div>
      <Footer />
    </>
  );
}
