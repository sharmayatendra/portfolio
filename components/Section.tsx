import { ReactNode } from "react";

type SectionProps = {
  heading: string;
  description: string;
  children?: ReactNode;
  bgIsGrey?: boolean;
};

function Section({ heading, description, children, bgIsGrey }: SectionProps) {
  return (
    <section className={`section ${bgIsGrey ? "ow" : ""} `}>
      <div className="container-center">
        <h2>{heading}</h2>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}

export default Section;
