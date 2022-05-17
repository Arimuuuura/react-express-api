import React, { useEffect, useState } from 'react';

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
					<div>
						{
							repositories.repositoryData.map((repo, index) => (
								<div key={index} className='repo-container'>
									<a className='repo-name' href={repo.html_url}>{repo.name}</a>
									<p>{repo.language}</p>
									<p>{repo.updated_at}</p>
									<p>{repo.description}</p>
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
