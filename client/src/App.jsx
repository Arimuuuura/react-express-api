import React, { useState } from 'react';

export const App = () => {
  const [ data, setData ] = useState({})

  const onClickButton = async () => {
    await fetch("api/github")
    .then(res => res.json())
    .then(data => setData(data));
  }

  return (
    <>
      <div>Hello from react</div>
      <button onClick={onClickButton}>Click Hear!!</button>
      {
        data.accountData ? (
          <div>
            <img src={data.accountData.avatar_url} alt="" />
            <p>{data.accountData.created_at}</p>
            <p>{data.accountData.followers}</p>
            <p>{data.accountData.followers_url}</p>
            <p>{data.accountData.following}</p>
            <p>{data.accountData.following_url}</p>
            <p>{data.accountData.html_url}</p>
            <p>{data.accountData.location}</p>
            <p>{data.accountData.name}</p>
            <p>{data.accountData.public_repos}</p>
            <p>{data.accountData.repos_url}</p>
            <p>{data.accountData.twitter_username}</p>
            <p>{data.accountData.updated_at}</p>
          </div>
        ) : (
          <p>false</p>
        )
      }
    </>
  );
}
