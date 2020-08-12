import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleShow() {
      if (window.scrollY > 100) setShow(true);
      else setShow(false);
    }
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={`navbar ${show && "navbar-dark"}`}>
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="netflix_logo"
      />
      <img
        className="navbar-avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="netflix_avatar"
      />
    </div>
  );
}

export default Navbar;
