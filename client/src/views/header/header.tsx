import Logo from "components/logo/logo";
import NavBar from "components/navBar/navBar";
import "./header.scss";
const Header = () => {
  return (
    <div className="header ">
      <span className="logo ">
        <Logo />
      </span>
      <span className="navbar ">
        <NavBar />
      </span>
    </div>
  );
};
export default Header;
