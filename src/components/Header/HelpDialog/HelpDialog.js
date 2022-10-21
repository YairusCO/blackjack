import React, { useState } from 'react'
import { Typography, Grid, TextField, Button } from '@mui/material'

const HelpDialog = ({}) => {
	const Body = (
		<form>
			<Grid container alignItems="center" justifyContent="center">
				<Grid item xs={12}>
					<Typography className="titleDialog">{'need-help'}</Typography>
					<Typography className="subtitleDialog">
						{'user.fill-in-your-details'}
					</Typography>

					<>
						<TextField
							className="text-field"
							placeholder={'fullname'}
							value={'fullName'}
						/>
						<TextField
							className="text-field"
							error={true}
							placeholder={'name@company.com'}
						/>
					</>

					<TextField
						className="text-field text-field-five-rows"
						placeholder={'how can we help'}
						multiline
						rows={5}
					/>
					<Button text={'send'} />
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</form>
	)
	return (
		<div data-testid="HelpDialog" className="help-dialog">
			{/* <PopUpDialog
        handleClickToClose={toggleHelpDialogOpenState}
        Body={Body}
        modalClassName={'help-dialog'}
      /> */}
		</div>
	)
}

export default HelpDialog
