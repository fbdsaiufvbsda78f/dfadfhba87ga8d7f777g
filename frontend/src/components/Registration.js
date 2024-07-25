import React from 'react';

function Registration() {
	function Reg(){
		const data = {
			login: document.getElementById('login').value,
			password: document.getElementById('password').value,
			email: document.getElementById('email').value
		}
		fetch('http://localhost:9001/registration', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'    
			},
			body: JSON.stringify(data)
		})
		.then(result => result.json())
		.then((result) => {
			console.log(result)
		})
	}
	
	return (
			<>
				<h1>Регистрация</h1>
				<input id='login' type='text' placeholder='Логин'/>
				<input id='password' type='password' placeholder='Пароль'/>
				<input id='email' type='email' placeholder='Почта'/>
				<button onClick={Reg}>Сохранить</button>
			</>
		);
	}

export default Registration;