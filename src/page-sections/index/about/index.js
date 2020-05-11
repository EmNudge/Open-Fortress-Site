import React from 'react'
import './index.scss'
import TortoiseSVN from '../../../images/svg/tortoiseSVN.svg'
import GoogleForms from '../../../images/svg/googleforms.svg'

const About = () => (
  <div className="about">
    <div className="contents">
      <h1>About</h1>
      <p>
        Open Fortress is a free and open-source passion project, lovingly crafted by nearly a hundred members of the Team Fortress community with an ideal of fun gameplay as well as maximum customizability. The game and website are still under construction, but you are welcome to try it out during development using the SVN Repo via the installer.
      </p>

      <div className="button-container">
        <a href="/install-instructions" className="about-btn">
          <img src={TortoiseSVN} alt="tortoiseSVN logo"/>
          <span>TortoiseSVN Installation</span>
        </a>
      </div>
      
      <p>If you are looking to contribute to the project, you may apply by clicking the button below and filling out our form:</p>

      <div className="button-container">
        <a href="https://forms.gle/5USEZsKDdVwfExo68" className="about-btn">
          <img src={GoogleForms} alt="google forms logo"/>
          <span>Apply Now!</span>
        </a>
      </div>
    </div>
  </div>
)

export default About;