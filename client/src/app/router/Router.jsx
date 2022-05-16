import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Following } from '../components/main/following/Following';
import { Main } from '../components/main/Main';


export const Router = () => {

	return (
		<>
			<Routes>
				<Route path="/" exact element={<Main />} />
			</Routes>
			<Routes>
				<Route path="/following" element={<Following />} />
			</Routes>
		</>
  	)
}
