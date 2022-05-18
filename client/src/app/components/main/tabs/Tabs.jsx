import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Tabs as MUTabs, Tab } from '@mui/material';

export const Tabs = () => {

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', mt: 2, bgcolor: 'background.paper' }}>
			<MUTabs value={value} onChange={handleChange} centered>
				<Tab label="Repository" component={Link} to="/repository" />
				<Tab label="following" component={Link} to="/following" />
				<Tab label="followers" component={Link} to="/followers" />
			</MUTabs>
		</Box>
	)
}
