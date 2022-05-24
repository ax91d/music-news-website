import "./header.css";
import bootstrap from "bootstrap";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Akhmet Dossanov</span>
        <span className="headerTitleLg">Strings & Rhymes</span>
      </div>
      
      <img
        className="headerImg"
        src={require("../../img/ava.jpeg")}
        alt=""
      />
      
      
    </div>
  );
}
