import React, { useState } from 'react'
import { Paper, Fade, Modal, IconButton, Grid, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ribbon from '../../../assets/ribbon.png'
import MainBtn from '../MainBtn'
const PopUpDialog = ({ text, reset }) => {
  const [open, setOpen] = useState(true)

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      data-testid="PopUpDialog"
      className="pop-up-dialog"
      open={open}
      onClose={() => {
        // e.stopPropagation()
        setOpen(false)
        reset()
      }}
    >
      <Fade in={open}>
        <Paper className="paper">
          <Grid className="menu-bar">
            <IconButton
              className="close-btn"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setOpen(false)
                reset()
              }}
            >
              <CloseIcon className="close-icon" />
            </IconButton>
          </Grid>
          <Grid className="main-container">
            <img className={`ribbon ${text}`} src={ribbon} alt="ribbon" />
            <Grid className="txt-container">
              <Typography className="main-txt">{text}</Typography>
            </Grid>
            <Grid>
              <MainBtn
                text={'Back'}
                handleClick={() => {
                  reset()
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  )
}

export default PopUpDialog
