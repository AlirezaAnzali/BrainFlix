import "./Header.scss"
import User from "../User/User";
import UploadButton from "../UploadButton/UploadButton";
import logo from "../../assets/images/BrainFlix-logo.svg";

function Header () {

    return (
      <header className="header">
        <div className="header__left">
          <img
            className="header__left__logo"
            src={logo}
            alt="brainflix logo"
          />
        </div>
        <div className="header__right">
          <div className="header__right__search">
            <input
              className="header__right__search__box"
              type="text"
              placeholder="Search"
            />
            <User />
          </div>
          <div className="header__right__upload">
            <UploadButton className="header__right__upload__button" />
            <User className="header__right__upload__user" />
          </div>
        </div>
      </header>
    );
};

export default Header;