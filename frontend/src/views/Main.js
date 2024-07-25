import React, {useState, useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';

function Main({setModalBox, basket, setBasket}) {
	const[products, setProducts] = useState([])
	
	useEffect(() => {
		fetch('http://localhost:9001/products')
			.then(result => result.json())
			.then((result) => {
				setProducts(result.data)
			})
	}, [])
	
	return (
		<div className="Main">
			{ products.map((item) => <Product key={item._id} id={item._id} header={item.header} image={item.image} price={item.price} setModalBox={setModalBox} basket={basket} setBasket={setBasket} />) }
		</div>
	);
}

export default Main;