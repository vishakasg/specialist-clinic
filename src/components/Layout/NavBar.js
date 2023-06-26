import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { teal } from '@mui/material/colors';

const color = teal[500]
const theme = createTheme({
	palette: {
		primary: teal,
		secondary: teal,
	  },
	
  })


const pages = [
	{ name: "Appointments", path: "/appointments" },
	{ name: "List", path: "/list" },
	{ name: "Contact", path: "/contact" },
];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar >
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='/'
						sx={{
							flexGrow: 1,
							display: { xs: "flex", lg: "flex" },
							fontFamily: "Helvetica Neue",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Specialist Clinic
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "flex" },
							justifyContent: "flex-end",
						}}
					>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
                            href='/List'
						>
							Doctors List
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
                            href='/Appointments'
						>
							Appointments Booking
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
                            href='/Contact'
						>
							Contact Us
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;