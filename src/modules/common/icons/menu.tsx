import React from "react"

import { IconProps } from "types/icon"

const Menu: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path fill={color} d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path>
    </svg>
  )
}

export default Menu
