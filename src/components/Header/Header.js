import React from 'react'
import { Button, Grid, AppBar, Toolbar } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar className="header-strip" data-testid="Header">
      <Toolbar className="tool-bar">
        <Grid edge="start" className="log-container">
          <Link to={'/'}>
            <Logo />
          </Link>
        </Grid>
        <Grid container className="right-section" edge="end">
          <Button className="help-btn">
            <HelpOutlineIcon />
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
