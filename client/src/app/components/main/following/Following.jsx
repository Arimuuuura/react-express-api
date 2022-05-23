import React, { memo, useEffect, useState } from 'react';
import { List, ListItem, Divider, ListItemAvatar, Avatar, Link as MuiLink, Container, Box, CircularProgress } from '@mui/material';

import "./following.scss";

export const Following = memo(() => {
	const [ followingUsers, setFollowingUsers ] = useState({})

	useEffect(() => {
		setFollowingUsers({});
		fetch("/api/following")
		.then(res => res.json())
		.then(data => setFollowingUsers(data));
	}, []);

	return (
		<>
			{
				followingUsers.followingUsers ? (
					<List>
						{
							followingUsers.followingUsers.map((user, index) => (
								<div key={index}>
									<ListItem className='following-container' alignItems="flex-start">
										<ListItemAvatar>
											<Avatar className='following-image' alt="account imag" src={user.avatar_url} />
										</ListItemAvatar>
										<MuiLink href={user.html_url} underline="hover" className='following-name'>
											{user.login}
										</MuiLink>
									</ListItem>
									<Divider variant="inset" component="li" />
								</div>
							))
						}
					</List>
				) : (
					<Container maxWidth="sm">
						<Box sx={{ minHeight: '60vh', mx: 'auto', width: '80%', color: 'grey.500', display: 'flex' }}>
							<CircularProgress sx={{ my: '80px', mx: 'auto' }} color="inherit" />
						</Box>
					</Container>
				)
			}
		</>
 	)
});
