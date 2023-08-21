"use client"
import React from "react"
import football_player from "public/football_player.png"
import star from "public/star.svg"
import ResponsiveImage from "../common/image"
import Icon from "../common/icon"

const CommonLayout = () => {
  return (
    <div>
      <Icon alt="star-icon" src={star} />
      <ResponsiveImage
        alt="football_player"
        height={950}
        placeholder="blur"
        src={football_player}
        width={678}
      />
    </div>
  )
}

export default CommonLayout
