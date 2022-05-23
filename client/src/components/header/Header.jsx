import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Akhmet Dossanov</span>
        <span className="headerTitleLg">Strings & Rhymes</span>
      </div>
      <img
        className="headerImg"
        src="https://guitar.com/wp-content/uploads/2021/10/Angels-Airwaves-Credit-Kevin-Trout-9@2160x1215.jpg"
        alt=""
      />
    </div>
  );
}
