import React from "react"
import clsx from "clsx"

const Image = ({
  alt,
  children,
  className,
  imageClass,
  height,
  src,
  width,
}) => {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        className={clsx("image", imageClass)}
        height={height || 200}
        placeholder="blur"
        src={src}
        width={width || 200}
      />
      {children}
    </div>
  )
}

export default Image
