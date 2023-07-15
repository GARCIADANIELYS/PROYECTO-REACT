import './styles/App.css';
import axios from 'axios';
import Products from './features/pages/Products/Products';
import Detail from './features/pages/Detail/Detail';
import Basket from './features/pages/Basket/Basket';
import Header from './features/core/Header/Header';
import Footer from './features/core/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './features/pages/Home/Home';
import { useEffect, useState } from 'react';
import NotFound from './features/NotFound';
import Login from './features/pages/Login/Login';
import { UserProfile } from './features/pages/UserProfile/UserProfile';
import AuthRoute from './authRoute/AuthRoute';
import userJson from './data/Users.json';

const App = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ productList, setProductList ] = useState([]);
  const [ user, setUser ] = useState(null);

  const loginUser = (FormData) => {
    const findUser = userJson.find((user) => {
      return user.email === FormData.email && user.password === FormData.password;
    });
    if (findUser) {
      setUser(findUser);
    } else {
      setUser(false);
    }
  };

  const addToList = (id) => {
    const findElement = productList.find((element) => {
      return element.id === id;
    });
    if (!findElement) {
      const findCharacter = characters.find((char) => {
        return char.id === id;
      });
      setProductList([ ...productList, findCharacter ]);
    }
  };

  const deleteFromList = (updatedProductList) => {
    setProductList(updatedProductList);
  };

  useEffect(() => {
    axios
      .get('https://64a1dcaa0079ce56e2db71f6.mockapi.io/api/kombucha/products')
      .then((response) => {
        setCharacters(response.data);
      });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products characters={characters} addToList={addToList} />}
        />
        <Route path="/detail/:id" element={<Detail characters={characters} />} />
        <Route
          path="/basket"
          element={<Basket productList={productList} deleteFromList={deleteFromList} />}
        />
        <Route
          path="/user"
          element={<AuthRoute user={user} component={<UserProfile user={user} />} />}
        />
        <Route path="/login" element={<Login loginUser={loginUser}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
