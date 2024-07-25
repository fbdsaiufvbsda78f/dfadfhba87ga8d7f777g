import React from 'react';

function Login() {
    function Log(){
        const data = {
            login: document.getElementById('login').value,
            password: document.getElementById('password').value
        }
        fetch('http://localhost:9001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'    
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then((result) => {
			if (result.token != null || typeof result.token != 'undefined'){
				localStorage.setItem('token', result.token);
				window.location.reload();
			}
        })
    }
    
  return (
    <>
        <h1>Логин</h1>
        <input id='login' type='text' placeholder='Логин'/>
        <input id='password' type='password' placeholder='Пароль'/>
        <button onClick={Log}>Войти</button>
    </>
);
}

export default Login;