import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./settings.css";
import {AnimatePresence, motion } from "framer-motion";


export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (e) {}
    }
    try {
      const res = await axios.put("/users/"+user._id, updatedUser);
      setSuccess(true);
    dispatch({type:"UPDATE_SUCCESS", payload:res.data});
    } catch (e) {
    dispatch({type:"UPDATE_FAILURE"});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              name=""
              id="fileInput"
              style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}

            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}/>
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar />
    </div>
    </motion.div>
  );
}
