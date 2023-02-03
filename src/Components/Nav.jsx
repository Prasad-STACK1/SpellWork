import React from "react";
import "./Nav.css";
import { AiFillDribbbleSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div class="name">
        <AiFillDribbbleSquare className="companyLogo" />
        <h2>SpellWork</h2>
      </div>
      <div className="links">
        <Link id="kath" to="/">
          Kathmandu
        </Link>
        <Link id="hy" to="/Hydra ">
          Hydra
        </Link>
        <Link id="as" to="/Asgard">
          Asgard
        </Link>
      </div>
    </div>
  );
}
export default Nav;
