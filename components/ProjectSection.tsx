import LinkButton from "./LinkButton";

type ProjectProps = {
  heading: string;
  description: string;
  bgIsGrey?: boolean;
  time: string;
  srcLink: string;
  liveLink: string;
};

function ProjectSection({
  heading,
  description,
  bgIsGrey,
  time,
  srcLink,
  liveLink,
}: ProjectProps) {
  return (
    <div
      className={`container container-center flex flex-col project-section mt-8 gap ${
        bgIsGrey ? "ow" : ""
      } `}
    >
      <h2>{heading}</h2>
      <small>{time}</small>
      <p>{description}</p>
      <LinkButton url={liveLink} btnType="primary" label="Play Now" />

      <LinkButton
        url={srcLink}
        btnType="secondary"
        label="View Source on Github"
      />
    </div>
  );
}

export default ProjectSection;
