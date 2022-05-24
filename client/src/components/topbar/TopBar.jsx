import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    document.getElementById('check').checked = false;
  };

  const toggle = () => {
    document.getElementById('check').checked = false;
  }

  return (
    <div className="top">
    <Link to="/">
    <label htmlFor="" className="main-title-lable">
      <h1 className="main-title">  Strings & Rhymes </h1>
      <i className="main-icon fa-solid fa-guitar"></i>
    </label>
    </Link>
    <input type="checkbox" id="check"/>
    <label htmlFor="check">
          <i className="fa-solid fa-bars" id="menu-btn"></i>
          <i className="fa-solid fa-xmark" id="menu-cancel"></i>
      </label>
      
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link" onClick={toggle}>
              HOME
            </Link>
          </li>
          <li className="topListItem" onClick={toggle}>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem" onClick={toggle}>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem" onClick={toggle}>
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem logout" onClick={handleLogout}>
            {user && "LOG OUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

//https://townsquare.media/site/838/files/2021/08/attachment-lollapalooza-2021-saturday-127.jpg
