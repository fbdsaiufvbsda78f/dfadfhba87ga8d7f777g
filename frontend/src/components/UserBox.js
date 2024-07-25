import React from 'react';
import './UserBox.css';

function UserBox({setModalBox, setPage}) {
  return (
    (() => {
      const token = localStorage.getItem('token');
	  console.log('token',token)
      if (token == null || typeof token === 'undefined'){
        return (
          <div className="UserBox">
            <button onClick={() => setModalBox('Login')}>Вход</button>
            <button onClick={() => setModalBox('Registration')}>Регистрация</button>
          </div>
        );
      }
      return (
        <div className="UserBox">
          <button onClick={() => setPage('Account')}>Личный кабинет</button>
          <button onClick={() => {
            localStorage.removeItem('token');
			setModalBox(null);
			setPage('Main');
			window.location.reload();
          }}>Выход</button>
        </div>
      );
    })()
  );
}

export default UserBox;