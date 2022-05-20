import React, { memo, useEffect, useState } from 'react';
import { List, ListItem, Divider, Link, Typography, ListItemText, Box, CircularProgress, Container } from '@mui/material';

import { Content } from '../pagination/PaginationLink';

export const Repository = memo(() => {
	const [ repositories, setRepositories ] = useState({});

	useEffect(() => {
		setRepositories({});
		fetch("/api/repos")
		.then(res => res.json())
		.then(data => {
			setRepositories(data)
		});
	}, []);

	return (
		<>
			{
				repositories.repositoryData ? (
					<>
						<List>
							{
								repositories?.repositoryData?.map((repo, index) => (
									<div key={index} className='repo-container'>
										<ListItem className='followers-container'>
											<ListItem sx={{ width: 2/3 }} component={Link} href={repo.url} color="text.secondary" className='repo-name'>
												<ListItemText primary={repo.name} secondary={repo.description} />
											</ListItem>

											<Box>
												{
													repo.language && (
														<Typography variant="subtitle2" color="text.secondary" component="p">
															Lang: {repo.language}
														</Typography>
													)
												}
												<Typography variant="subtitle2" color="text.secondary" component="p">
													{`更新日: ${repo.updated_at.year}年${repo.updated_at.month}月${repo.updated_at.day}日`}
												</Typography>
											</Box>
										</ListItem>
										<Divider />
									</div>
								))
							}
						</List>
						<Content path="repository" />
					</>
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
