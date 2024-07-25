import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import Basket from './views/Basket';
import Account from './views/Account';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  const [page, setPage] = useState('Main');
  const [modalBox, setModalBox] = useState(null);
  const [basket, setBasket] = useState([]);

  const renderPage = () => {
    switch (page) {
      case 'Main':
        return <Main basket={basket} setBasket={setBasket} setModalBox={setModalBox} />;
      case 'Basket':
        return <Basket basket={basket} setBasket={setBasket} />;
      case 'Account':
        return <Account setPage={setPage} />;
      default:
        return <Main basket={basket} setBasket={setBasket} setModalBox={setModalBox} />;
    }
  };

  const renderModalBox = () => {
    switch (modalBox) {
      case 'Login':
        return (
          <ModalBox setModalBox={setModalBox}>
            <Login />
          </ModalBox>
        );
      case 'Registration':
        return (
          <ModalBox setModalBox={setModalBox}>
            <Registration />
          </ModalBox>
        );
      case 'Logout':
        localStorage.removeItem('token');
        setModalBox(null);
        setPage('Main');
		window.location.reload();
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox} />
      {renderPage()}
      {renderModalBox()}
      <Footer />
    </div>
  );
}

export default App;
