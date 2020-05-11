import { Link } from "gatsby"
import React from "react"
import MainLogo from '../../images/svg/full logo.svg';
import "./index.scss"

const Header = () => (
  <header>
      <h1 className="brand">
        <Link to="/">
          <img src={MainLogo} alt="main site logo" height="50px" />
        </Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/servers">Servers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faq">F.A.Q.</Link>
        <Link to="/credits">Credits</Link>
      </nav>
  </header>
)

export default Header
