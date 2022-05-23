import React, { memo } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material';

export const Footer = memo(() => {
	return (
		<Box>
			<AppBar position="static" sx={{ alignItems: 'center' }}>
				<Toolbar>
					<p>&#169; Yuki Arimura ALL RIGHTS RESERVED.</p>
				</Toolbar>
			</AppBar>
		</Box>
	)
});
