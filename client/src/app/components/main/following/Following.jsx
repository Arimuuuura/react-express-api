import React, { memo, useEffect, useState } from 'react';
import { List, ListItem, Divider, ListItemAvatar, Avatar, Link as MuiLink } from '@mui/material';

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
					<p>User data nothing..</p>
				)
			}
		</>
 	)
});
