import './styles/App.css';
import axios from 'axios';
import Products from './components/pages/Products/Products';
import Detail from './components/pages/Detail/Detail';
import Basket from './components/pages/Basket/Basket';
import Header from './components/core/Header/Header';
import Footer from './components/core/Footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { useEffect, useState } from 'react';
import NotFound from './components/NotFound';
import Login from './components/pages/Login/Login';
import userJson from './data/Users.json';
import UserProfile from './components/pages/UserProfile/UserProfile';
import AuthRoute from './components/authRoute/AuthRoute';
import { UserContext } from './components/context/UserContext';

const App = () => {
  const [ characters, setCharacters ] = useState([]);
  const [ productList, setProductList ] = useState([]);
  const [ user, setUser ] = useState(null);

  const navigate = useNavigate();

  const loginUser = (formData) => {
    const findUser = userJson.find((user) => {
      return user.email === formData.email && user.password === formData.password;
    });
    if (findUser) {
      setUser(findUser);
      navigate("/");
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
      <UserContext.Provider value={user}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products characters={characters} addToList={addToList} />}
        />
        <Route path="/detail/:id" element={<Detail characters={characters} />} />
        <Route
          path="/basket"
          element={<AuthRoute component={<Basket productList={productList} deleteFromList={deleteFromList} />} />}
        />
        <Route
          path="/userprofile"
          element={<AuthRoute component={<UserProfile />} />}
        />
        <Route path="/login" element={<Login loginUser={loginUser}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      </UserContext.Provider>
      <Footer />
    </>
  );
};

export default App;
