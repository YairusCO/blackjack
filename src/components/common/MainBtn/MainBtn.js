import React from 'react'
import { Button } from '@mui/material'

const MainBtn = ({ text, classname, handleClick, disabled = true }) => {
  return (
    <Button
      disabled={!disabled}
      className={`main-btn ${classname}`}
      onClick={handleClick}
      variant="contained"
      size="large"
      inherit
    >
      {text}
    </Button>
  )
}

export default MainBtn
