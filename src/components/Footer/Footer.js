import React from 'react'
import Link from '@mui/material/Link'
import { ReactComponent as LinkedInLogo } from '../../assets/linkedin-logo.svg'
import { LINKEDIN } from './conatants'

const Footer = ({}) => {
	return (
		<div className="footer" data-testid="footer">
			<div className="footer-container">
				<div className="footer-left">
					© {new Date().getFullYear()} All Rights Reserved
				</div>
				<div className="footer-right">
					<Link className="footer-link">cookies setting</Link>
					<Link className="footer-link">privacy policy</Link>
					<Link className="footer-link">cookies policy</Link>
					<Link target="_blank" href={LINKEDIN}>
						<LinkedInLogo />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
