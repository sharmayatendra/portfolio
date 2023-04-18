import LinkButton from "./LinkButton";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">Social Media Presence</div>
      <ul className="social-links list-non-bullet">
        <li className="list-inline-item">
          <LinkButton
            url="https://github.com/sharmayatendra"
            label="Github"
            btnType="primary"
          />
        </li>
        <li className="list-inline-item">
          <LinkButton
            url="https://www.linkedin.com/in/yatendra-sharma-5177091aa/"
            label="Linkedin"
            btnType="primary"
          />
        </li>
        <li className="list-inline-item">
          <LinkButton
            url="https://twitter.com/yaten_sharma"
            label="Twitter"
            btnType="primary"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
