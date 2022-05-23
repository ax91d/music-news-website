import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <div style={{minHeight: "100vh",display: "flex",
    flexDirection: "column"}}>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer/>
      </div>

    </Router>
  );
}

export default App;
