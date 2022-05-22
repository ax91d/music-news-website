import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cat, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb0721a0eb3b04c76895b53a8d"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit illum,
          ad odio sed quae accusamus explicabo natus.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li key={c.name.toString()} className="sidebarListItem">
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItemSocial">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="social">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
