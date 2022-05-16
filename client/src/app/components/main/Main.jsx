import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export const Main = () => {
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

	const prepareTimestamp = (date) => {
		const year = date.substr(0, 4);
		const month = date.substr(5, 2);
		return { year, month };
	}

	const inputUser = e => setInputName(e.target.value);

	return (
		<main>
			<a href="/">HOME</a>
			<div>Hello from react</div>
			<form action={`http://localhost:5000/api/hello`} method='get'>
				<input type="text" value={inputName} name="user" onChange={inputUser} />
				<button type='submit' onClick={onClickButton}>Click Hear!!</button>
			</form>
			{
			data.accountData ? (
				<div>
					<a href={data.accountData.html_url}>
						<img className='user-image' src={data.accountData.avatar_url} alt="" />
					</a>
					<h2 className='user-name'>{data.accountData.name}</h2>
					<p className='user-login'>{data.accountData.login}</p>
					<p className='user-location'>{data.accountData.location}</p>
					<p>{prepareTimestamp(data.accountData.created_at).year}年{prepareTimestamp(data.accountData.created_at).month}月からGithubを利用しています</p>
					<p>最終更新{prepareTimestamp(data.accountData.updated_at).year}年{prepareTimestamp(data.accountData.updated_at).month}月</p>
					<Link to="/following">Following Link</Link>
					<p>{data.accountData.followers} followers</p>
					<p>{data.accountData.followers_url}</p>
					<p>{data.accountData.public_repos} Public Repository</p>
					<p>{data.accountData.repos_url}</p>
				</div>
			) : (
				<p>false</p>
			)
			}
		</main>
	)
}
