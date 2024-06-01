import LinkButton from "./LinkButton";

function Header() {
  return (
    <nav className="navigation container">
      <div className="nav-brand">Yatendra Sharma</div>
      <ul className="list-non-bullet nav-pills">
        <li className="list-inline-item">
          <LinkButton label="Home" url={"/"} btnType="primary"></LinkButton>
        </li>
        <li className="list-inline-item">
          <LinkButton
            label="Project"
            url={"./projects"}
            btnType="primary"
          ></LinkButton>
        </li>
        {/* <li className="list-inline-item">
          <LinkButton label="Blogs" url={"#"} btnType="primary"></LinkButton>
        </li> */}
      </ul>
    </nav>
  );
}

export default Header;
