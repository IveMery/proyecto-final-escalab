import React from 'react'
import { Typography } from '@material-ui/core'

const Title = (props) => {
   const {children ,variant,component} = props
  return (
  <Typography {...props} >{children}</Typography>
  )
}

export default Title