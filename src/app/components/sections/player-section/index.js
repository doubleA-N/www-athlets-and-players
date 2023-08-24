import React from "react"
import clsx from "clsx"
import basketball_player from "public/basketball_player.png"
import star from "public/star.svg"
import star_light from "public/star_light.svg"
import path from "public/path.svg"
import ResponsiveImage from "../../common/image"
import Icon from "../../common/icon"
import "./styles.scss"

const PLAYER_DETAILS = [
  {
    title: "CONNECTION",
    description:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  },
  {
    title: "COLLABORATION",
    description:
      "Work with recruiter to increase your chances of finding talented athlete.",
  },
  {
    title: "GROWTH",
    description: "Save your time, recruit proper athletes for your team.",
  },
]

const PlayerSection = () => {
  return (
    <div className="player-inner">
      <div className="player-info">
        <div className="player-title">PLAYERS</div>
        {PLAYER_DETAILS.map((detail, idx) => (
          <div className={`player-details tier-${idx}`} key={detail.title}>
            <div className="detail">
              <div className="header">
                <div>
                  <span className={clsx("header__number", {'purple-medium': idx === 2})}>{`0${idx + 1}`}</span>
                  <hr className={clsx({ neutral: idx === 2 })} />
                </div>
                <span className="header__title">{detail.title}</span>
              </div>
              <span className={clsx("description", { neutral: idx === 2 })}>
                {detail.description}
              </span>
            </div>
            <div className="separated" />
          </div>
        ))}
      </div>
      <ResponsiveImage
        alt="player-img"
        className="player-img-wrapper"
        imageClass="basketball-player-img"
        src={basketball_player.src}
      >
        <div className="children-img">
          <Icon alt="star-icon" className="icon-star-light-left" src={star_light} />
          <Icon alt="star-icon-left" className="icon-star-left" src={star} />
          <Icon
            alt="path-left"
            className="line-left"
            src={path}
            width={209}
            height={234}
          />

          <Icon alt="star-icon-right" className="icon-star-right" src={star} />
          <Icon
            alt="path-right"
            className="line-right"
            src={path}
            width={209}
            height={234}
          />
        </div>
      </ResponsiveImage>
    </div>
  )
}

export default PlayerSection
