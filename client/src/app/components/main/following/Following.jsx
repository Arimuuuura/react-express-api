import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./following.scss";

export const Following = () => {
	const [ followingUsers, setFollowingUsers ] = useState({})

	useEffect(() => {
		setFollowingUsers({});
		fetch("/api/following")
		.then(res => res.json())
		.then(data => setFollowingUsers(data));
	}, []);

	// followingUsers && console.log(followingUsers);

	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/following">Following</Link>
			<Link to="/followers">Followers</Link>
			{
				followingUsers.followingUsers ? (
					<div>
						{
							followingUsers.followingUsers.map((user, index) => (
								<div key={index} className='following-container'>
									<img className='following-image' src={user.avatar_url} alt="account imag" />
									<a className='following-name' href={user.html_url}>{user.login}</a>
								</div>
							))
						}
					</div>
				) : (
					<p>User data nothing..</p>
				)
			}
		</div>
 	)
}
