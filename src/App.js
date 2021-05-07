import React from "react"
import Box from "@material-ui/core/Box"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"

function App() {
	const [mouseX, setMouseX] = React.useState(null)
	const [mouseY, setMouseY] = React.useState(null)
	const [color, setColor] = React.useState(false)
	const [font, setFont] = React.useState(false)

	const handleClick = (event) => {
		event.preventDefault()
		setMouseX(event.clientX)
		setMouseY(event.clientY)
	}

	const handleClose = () => {
		setMouseX(null)
		setMouseY(null)
	}

	const swapColor = () => {
		setColor(!color)
	}

	const swapFont = () => {
		setFont(!font)
	}

	return (
		<div className='App'>
			<Container maxWidth='sm'>
				<Box>
					<TextField
						variant='outlined'
						onContextMenu={handleClick}
						style={{ cursor: "context-menu" }}
						inputProps={{
							style: {
								color: color ? "#333" : "#f00",
								fontFamily: font ? "Times New Roman" : "Arial",
							},
						}}
					/>
					<Menu
						keepMounted
						open={mouseY !== null}
						onClose={handleClose}
						anchorReference='anchorPosition'
						anchorPosition={
							mouseY !== null && mouseX !== null
								? { top: mouseY, left: mouseX }
								: undefined
						}>
						<MenuItem
							onClick={(evt) => {
								swapColor()
								handleClose(evt)
							}}>
							Invert colors
						</MenuItem>
						<MenuItem
							onClick={(evt) => {
								swapFont()
								handleClose(evt)
							}}>
							Switch font
						</MenuItem>
					</Menu>
				</Box>
			</Container>
		</div>
	)
}

export default App
