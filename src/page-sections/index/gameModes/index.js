import React from 'react'
import BG from '../../../images/bgs/ctf_boys.png'
import ManyMercs from '../../../images/many_mercs.png'
import './index.scss'

const GameModes = () => (
  <div className="game-modes" style={{ backgroundImage: `url(${BG})` }}>
    <div className="contents">

      <div className="text-container">
        <div className="text">
          <h1>Game Modes</h1>
          <p>
            Open Fortress provides a fast-paced Arena FPS styled Deathmatch mode, paying homage to Team Fortress's roots with frantic free-for-all action. From classic weapon pickups to Earth-shattering powerups, Deathmatch is an addictive gamemode that's fun to jump into and even more fun to master.
          </p>
          <p>
            Numerous team-based and 'mutator' modes also accompany Deathmatch. Team Deathmatch, Zombie Infection, Instagib and more await you in the arena!
          </p>
        </div>
      </div>
      <img src={ManyMercs} alt="many mercs"/>
    </div>
  </div>
)

export default GameModes;