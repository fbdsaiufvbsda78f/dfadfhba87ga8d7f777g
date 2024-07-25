import React, { useState, useEffect } from 'react';
import './Account.css';
import { jwtDecode } from 'jwt-decode'

function Account() {
  
  const [user, setUser] = useState({ login: '', email: '', password: '' });
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token !== null) {
      const decodedToken = jwtDecode(token);
      const { login, id } = decodedToken;
      
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:9001/getUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
          });
          
          const result = await response.json();
          setUser({ login, email: result.email, password: result.password });
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };
      
      fetchData();
    }
  }, []);
  
  const handleChangePassword = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const { id } = jwtDecode(token);
    
    try {
      const response = await fetch('http://localhost:9001/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, newPassword }),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage('Ошибка при изменении пароля');
    }
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="Account">
      <h1>Личный кабинет</h1>
      {user.login && (
        <>
		  <p>Добро пожаловать {user.login}</p>
          <p>Изменить пароль</p>
          <input
            type="password"
            placeholder="Новый пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleChangePassword}>Отправить</button>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
}
 
export default Account;