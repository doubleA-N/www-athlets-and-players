import React from "react"
import clsx from "clsx"
import football_player from "public/football_player.png"
import star from "public/star.svg"
import star_light from "public/star_light.svg"
import path from "public/path.svg"
import ResponsiveImage from "../../common/image"
import Icon from "../../common/icon"
import "./styles.scss"

const ATHLETES_DETAILS = [
  {
    title: "CONNECTION",
    description:
      "Connect with coaches directly, you can ping coaches to view profile.",
  },
  {
    title: "COLLABORATION",
    description:
      "Work with other student athletes to increase visibility. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
  },
  {
    title: "GROWTH",
    description:
      "Resources and tools for you to get better as a student Athletes. Access to training classes, tutor sessions, etc ",
  },
]

const FootballSection = () => {
  return (
    <div className="inner">
      <div className="info">
        <div className="title">ATHLETS</div>
        {ATHLETES_DETAILS.map((detail, idx) => (
          <div className={`details tier-${idx}`} key={detail.title}>
            <div className="separated" />
            <div className="detail">
              <div className="header">
                <div>
                  <span className="header__number">{`0${idx + 1}`}</span>
                  <hr className={clsx({ neutral: idx === 2 })} />
                </div>
                <span className="header__title">{detail.title}</span>
              </div>
              <span className={clsx("description", { neutral: idx === 2 })}>
                {detail.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ResponsiveImage
        alt="test"
        className="img-wrapper"
        imageClass="football-player-img"
        src={football_player.src}
      >
        <div className="children-img">
          <Icon alt="star-icon" className="icon-star-light" src={star_light} />
          <Icon alt="star-icon" className="icon-star" src={star} />
          <Icon
            alt="path"
            className="line"
            src={path}
            width={209}
            height={234}
          />
        </div>
      </ResponsiveImage>
    </div>
  )
}

export default FootballSection
