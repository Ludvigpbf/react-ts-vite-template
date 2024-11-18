import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, openMenu } from "@redux/slices/navSlice";
import { RootState } from "@redux/types";
import Nav from "@components/Nav";
import { Button } from "@flyckt-coding/buttons";
import LanguageToggleButton from "@components/common/languageButton";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.nav.isNavOpen);

  const toggleMenu = () => {
    if (isMenuOpen) {
      console.log("close menu");

      dispatch(closeMenu());
    } else {
      console.log("open menu");
      dispatch(openMenu());
    }
  };
  const toggleColorMode = () => {
    if (document.documentElement.classList.contains("dark-mode")) {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  };

  return (
    <>
      <div className="header">
        <LanguageToggleButton />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Button
          onClick={toggleColorMode}
          text="Light mode"
          fontSize="0.5rem"
          padding="0.1rem 0.3rem"
          color="white"
          bgColor="#363636"
        />
        <div className="menu-container">
          <button
            className={`toggle-button ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          {isMenuOpen && <Nav />}
        </div>
      </div>
    </>
  );
};

export default Header;
