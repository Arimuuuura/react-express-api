import React, { memo, useEffect, useState } from 'react'
import { Router } from '../../router/Router';
import { Tabs } from './tabs/Tabs';

import { Box, Card, CardContent, CardMedia, Typography, Link, Container, CircularProgress } from '@mui/material';

export const Main = memo(() => {
	const [ data, setData ] = useState({})
	const [ inputName, setInputName ] = useState('')

	useEffect(() => {
		setData({});
		fetch("/api/account")
		.then(res => res.json())
		.then(data => setData(data));
	}, []);

	const onClickButton = (e) => {
		// const user = e.target.value;
	}

	const inputUser = e => setInputName(e.target.value);

	return (
		<main>
			<form action={`http://localhost:5000/api/hello`} method='get'>
				<input type="text" value={inputName} name="user" onChange={inputUser} />
				<button type='submit' onClick={onClickButton}>Click Hear!!</button>
			</form>
			{
			data.accountData ? (
				<div>
					<Card sx={{ display: 'flex' }}>
						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							<CardContent sx={{ flex: '1 0 auto' }}>
								<Typography className='user-name' component={Link} href={data.accountData.url} variant="h5">
									{data.accountData.name}
								</Typography>
								<Typography variant="subtitle1" color="text.secondary" component="div">
									{data.accountData.login}
								</Typography>
							</CardContent>
							<Box sx={{ alignItems: 'center', pl: 2, pb: 3 }}>
								<Typography variant="subtitle1" color="text.secondary" component="div">
									{data.accountData.location}
								</Typography>
								<Typography variant="subtitle1" color="text.secondary" component="div">
									{`${data.accountData.created_at.year}年${data.accountData.created_at.month}月からGithubを利用しています`}
								</Typography>
								<Typography variant="subtitle1" color="text.secondary" component="div">
									{`最終更新${data.accountData.updated_at.year}年${data.accountData.updated_at.month}月`}
								</Typography>
							</Box>
						</Box>
						<CardMedia
							component="img"
							className='user-image'
							image={data.accountData.avatar_url}
							alt="Live from space album cover"
						/>
					</Card>
					<Tabs />
					<Router />
				</div>
			) : (
				<Container maxWidth="sm">
					<Box sx={{ minHeight: '60vh', mx: 'auto', width: '80%', color: 'grey.500', display: 'flex' }}>
						<CircularProgress sx={{ my: '80px', mx: 'auto' }} color="inherit" />
					</Box>
				</Container>
			)
			}
		</main>
	)
});
