"use client"
import React from "react"
import PlayerSection from "../sections/player-section"
import FootballSection from "../sections/football-section"
import "./styles.scss"

const CommonLayout = () => {
  return (
    <div className="page">
      <div className="information">
        <FootballSection />
        <PlayerSection />
      </div>
    </div>
  )
}

export default CommonLayout
