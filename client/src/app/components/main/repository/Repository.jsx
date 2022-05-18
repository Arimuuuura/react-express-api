import React, { useEffect, useState } from 'react';
import { List, ListItem, Divider, Link, Typography, ListItemText, Box } from '@mui/material';

export const Repository = () => {
	const [ repositories, setRepositories ] = useState({})

	useEffect(() => {
		setRepositories({});
		fetch("/api/repos")
		.then(res => res.json())
		.then(data => setRepositories(data));
	}, []);

	repositories && console.log(repositories);
	return (
		<>
			{
				repositories.repositoryData ? (
					<List>
						{
							repositories.repositoryData.map((repo, index) => (
								<div key={index} className='repo-container'>
									<ListItem className='followers-container'>
										<ListItem sx={{ width: 2/3 }} component={Link} href={repo.html_url} color="text.secondary" className='repo-name'>
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
												{repo.updated_at}
											</Typography>
										</Box>
									</ListItem>
									<Divider />
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
}
