import React from 'react'
import './index.scss'
import TortoiseSVN from '../../../images/svg/tortoiseSVN.svg'

const About = () => (
  <div className="about">
    <div className="contents">
      <h1>About</h1>
      <p>
        Open Fortress is a free and open-source passion project, lovingly crafted by nearly a hundred members of the Team Fortress community with an ideal of fun gameplay as well as maximum customizability. The game and website are still under construction, but you are welcome to try it out during development using the SVN Repo via the installer.
      </p>

      <div className="install-container">
        <a href="/install-instructions" className="install-btn">
          <img src={TortoiseSVN} alt="tortoiseSVN logo"/>
          <span>TortoiseSVN Installation</span>
        </a>
      </div>
    </div>
  </div>
)

export default About;