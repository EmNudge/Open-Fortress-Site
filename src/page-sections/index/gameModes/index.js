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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe accusantium in. Enim, eos! Officiis atque quidem natus soluta voluptates velit aliquam impedit exercitationem? Veritatis quos vitae perferendis cupiditate fugit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe accusantium in. Enim, eos! Officiis atque quidem natus soluta voluptates velit aliquam impedit exercitationem? Veritatis quos vitae perferendis cupiditate fugit?
          </p>
        </div>
      </div>
      <img src={ManyMercs} alt="many mercs"/>
    </div>
  </div>
)

export default GameModes;