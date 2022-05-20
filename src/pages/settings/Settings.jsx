import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://alchetron.com/cdn/noize-mc-0339754f-5cb9-4488-8286-61a5dc7a334-resize-750.jpeg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Akhmet" />
          <label>Email</label>
          <input type="email" placeholder="akhmet@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
