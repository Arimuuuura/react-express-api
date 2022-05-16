import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./followers.scss";

export const Followers = () => {
	const [ followers, setFollowers ] = useState({})

	useEffect(() => {
		setFollowers({});
		fetch("/api/followers")
		.then(res => res.json())
		.then(data => setFollowers(data));
	}, []);

	followers && console.log(followers);

	return (
		<>
			<Link to="/">Home</Link>
			<Link to="/following">Following</Link>
			<Link to="/followers">Followers</Link>
			<Link to="/repository">Repository</Link>
			{
				followers.followerUsers ? (
					<div>
						{
							followers.followerUsers.map((user, index) => (
								<div key={index} className='followers-container'>
									<img className='followers-image' src={user.avatar_url} alt="account imag" />
									<a className='followers-name' href={user.html_url}>{user.login}</a>
								</div>
							))
						}
					</div>
				) : (
					<p>User data nothing..</p>
				)
			}
		</>
 	)
}
