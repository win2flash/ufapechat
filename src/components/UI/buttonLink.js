import React from 'react'
import { Link } from "rebass/styled-components";

const ButtonLink = ({ children, url }) => {

  return (
    <Link to={url}>
      {children}
    </Link>
  )

}

export default ButtonLink