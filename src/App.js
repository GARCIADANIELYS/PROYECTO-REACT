import './styles/App.css';
import Header from './features/core/Header/Header';
import Footer from './features/core/Footer/Footer';
import NotFound from './features/NotFound';
import Home from './features/pages/Home/Home';
import Products from './features/pages/Products/Products'
import Basket from './features/pages/Basket/Basket'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './features/pages/Detail/Detail';


const App = () => {
  const [ characters, setCharacters ] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get('https://64a1dcaa0079ce56e2db71f6.mockapi.io/api/kombucha/products')
      .then(response => {
        setCharacters(response.data);
      })
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products characters={characters} />} />
        <Route path="/detail/:id" element={<Detail characters={characters}/>} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
};
export default App;