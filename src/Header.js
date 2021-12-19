const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}t</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'Default title',
}

export default Header
