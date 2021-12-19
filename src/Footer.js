const Footer = ({ length }) => {
	return (
		<footer>
			<p>
				{length} List {length === 1 ? 'item' : 'item'}
			</p>
		</footer>
	)
}

export default Footer
