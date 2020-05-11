import React from 'react'
import MercImage  from '../../../images/merc.png'
import './index.scss'

const MeetTheMerc = () => (
  <div className="meet-the-merc">
    <h1>Meet The Merc</h1>
    <div className="image-container" style={{ backgroundImage: `url(${MercImage})` }}>
      <div className="empty"></div>
      <div className="content">
        <p>
          A smooth talker, hard hitter and a hell of a fast shooter, the Mercenary is a man raised by television and nurtured by film. Moulded by the dashing gunslingers and suave secret agents of the silver screen, he aspired to be just like them, even from a young age, when he went fist-to-fist with the orphanage's worst bullies and came out on top.
        </p>
        <p>
          With an arsenal jam-packed with the finest experimental prototype weapons blood-sport can buy, he's ready to show the world that he really is that twelve on the one-to-ten scale of badass.
        </p>
      </div>
    </div>
  </div>
)

export default MeetTheMerc;