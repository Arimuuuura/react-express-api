import React, { memo, useEffect, useState } from 'react';
import { List, ListItem, Divider, ListItemAvatar, Avatar, Link as MuiLink } from '@mui/material';

import "./followers.scss";

export const Followers = memo(() => {
	const [ followers, setFollowers ] = useState({})

	useEffect(() => {
		setFollowers({});
		fetch("/api/followers")
		.then(res => res.json())
		.then(data => setFollowers(data));
	}, []);

	return (
		<>
			{
				followers.followerUsers ? (
					<List>
						{
							followers.followerUsers.map((user, index) => (
								<div key={index}>
									<ListItem className='followers-container' alignItems="flex-start">
										<ListItemAvatar>
											<Avatar className='followers-image' alt="account imag" src={user.avatar_url} />
										</ListItemAvatar>
										<MuiLink href={user.html_url} underline="hover" className='followers-name'>
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
