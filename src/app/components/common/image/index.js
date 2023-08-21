import React from "react"
import Image from "next/image"

const ResponsiveImage = ({ alt, className, height, src, width }) => {
  return (
    <div className={className}>
      <Image
        alt={alt}
        height={height || 200}
        placeholder='blur'
        src={src}
        width={width || 200}
      />
    </div>
  )
}

export default ResponsiveImage
