import Image from "next/image"
import React from "react"

const Icon = ({ alt, className, height, src, width }) => (
  <span className={className} role="presentation">
    <Image alt={alt} height={height || 15} src={src} width={width || 15} />
  </span>
)

export default Icon
