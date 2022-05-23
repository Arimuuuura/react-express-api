import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Followers } from '../components/main/followers/Followers';
import { Following } from '../components/main/following/Following';
import { Repository } from '../components/main/repository/Repository';


export const Router = () => {

	return (
		<>
			<Routes>
				<Route path="/" exact element={<Repository />} />
			</Routes>
			<Routes>
				<Route path="/following" element={<Following />} />
			</Routes>
			<Routes>
				<Route path="/followers" element={<Followers />} />
			</Routes>
			<Routes>
				<Route path="/repository" element={<Repository />} />
			</Routes>
		</>
  	)
};
