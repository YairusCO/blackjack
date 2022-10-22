import React from 'react'
import { Typography } from '@mui/material'

const MainBtn = ({ text, classname, handleClick }) => {
  return (
    <button className={`main-btn ${classname}`} onClick={handleClick}>
      <Typography>{text}</Typography>
    </button>
  )
}

export default MainBtn
