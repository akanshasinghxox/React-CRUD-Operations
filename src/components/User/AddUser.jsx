/** @format */

import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

function AddUser(props) {
	// const [error, setError] = useState({
	// 	title: '',
	// 	message: '',
	// });
	const [error, setError] = useState({
		title: '',
		message: '',
	});
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	useEffect(() => {
		console.log(error);
	});
	// const [enteredData, setEnteredData] = useState([{ age: '', username: '' }]);
	const addUserHandler = (e) => {
		e.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		console.log(error);
		setEnteredAge('');
		setEnteredUsername('');
		props.onAddUserHandler(enteredAge, enteredUsername);
	};
	const errorHandler = () => {
		setError({ title: '', error: '' });
	};
	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};
	return (
		<>
			{error.title != '' && error.message != '' && (
				<ErrorModal
					onErrorHandler={errorHandler}
					title={error.title}
					message={error.message}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={enteredUsername}
						onChange={usernameChangeHandler}></input>
					<label htmlFor='age'>Age(Years</label>
					<input
						id='age'
						type='number'
						value={enteredAge}
						onChange={ageChangeHandler}></input>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
}

export default AddUser;
