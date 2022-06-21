/** @format */

import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [userList, setUserList] = useState([]);
	const addUserHandler = (age, name) => {
		// console.log('data is', data);
		setUserList((prev) => {
			return [
				...prev,
				{
					age: age,
					name: name,
					id: Math.random().toString(),
				},
			];
		});
	};
	return (
		<div>
			<AddUser onAddUserHandler={addUserHandler}></AddUser>
			<UsersList users={userList}></UsersList>
		</div>
	);
}

export default App;
