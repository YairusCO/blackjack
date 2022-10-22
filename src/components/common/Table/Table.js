import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

const Table = ({}) => {
  return (
    <Grid className="table">
      <Grid>
        player/dealer
        <Button>Hit</Button>
      </Grid>
      <Grid>
        <Grid>cards</Grid>
        <Grid>18</Grid>
      </Grid>
    </Grid>
  )
}

export default Table
