import { useEffect, useState } from "react";
import logoImg from "../assets/logo.png";
import titleImg from "../assets/title.png";
import prfImg from "../assets/prf.png";
import logoutImg from "../assets/logout.png";
import "../css/styles-main.css";

function getNameFromEmail(email) {
  if (!email) return "User";
  const name = email.split("@")[0].replace(/[^a-zA-Z]/g, "");
  return name ? name[0].toUpperCase() + name.slice(1) : "User";
}

function TopBar({ onLogout }) {
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@email.com");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setEmail(user.email || "user@email.com");
    setName(getNameFromEmail(user.email));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    if (onLogout) onLogout();
  };

  return (
    <nav className="top-bar">
      {/* LEFT */}
      <div className="left">
        <img src={logoImg} className="small-logo-1" alt="logo" />
        <img src={titleImg} className="small-logo-2" alt="title" />
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="profile-info">
          <p className="para">@{name}</p>
          <p className="para">{email}</p>
        </div>

        <img src={prfImg} className="profile-pic" alt="profile" />

        <div className="logout-wrapper" onClick={handleLogout}>
          <img src={logoutImg} className="logo-logout" alt="logout" />
          <span className="logout-tooltip">Logout</span>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
