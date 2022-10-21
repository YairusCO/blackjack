import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = (props) => {
	const { children } = props
	return (
		<div className="Layout">
			<Header />
			<div className="Wrapper">{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
