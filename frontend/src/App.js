import { useContext, useEffect } from 'react';
import './App.css';

import GetProduct from './Api/products/get';
import PostProduct from './Api/products/post';
import UpdateProduct from './Api/products/update';
import DeleteProduct from './Api/products/delete';
import GetSingleProduct from './Api/products/getSingle';
import GetProductCategory from './Api/products/getByCategory';

import GetCategory from './Api/category/get';
import PostCategory from './Api/category/post';
import UpdateCategory from './Api/category/update';
import DeleteCategory from './Api/category/delete';

import GetAddress from './Api/address/get';
import UpdateAddress from './Api/address/update';
import DeleteAddress from './Api/address/delete';
import PostAddress from './Api/address/post';

import GetAdvert from './Api/advert/get';
import GetSingleAdvert from './Api/advert/getSingle';
import UpdateAdvert from './Api/advert/update';
import DeleteAdvert from './Api/advert/delete';

import Login from './Api/authenticator/login';
import SingUp from './Api/authenticator/singUp';

import UserAuth from './Api/authenticate/GetAuth';
import UpdateUser from './Api/authenticate/UpdateUser';
import PostAdvert from './Api/advert/post';
import Cart from './Api/authenticate/ShowCart';
import CartAdd from './Api/authenticate/CartAdd';
import CartRemove from './Api/authenticate/CartRemove';
import OrderAdd from './Api/authenticate/OrderAdd';
import ShowOrder from './Api/authenticate/ShowOrder';
import ShowOrderAll from './Api/authenticate/ShowOrderAll';

import { AuthContext } from './Auth';

function App() {
  const auth = useContext(AuthContext)
  useEffect(() => {

  })

  return (
    <>
      <h1>Produto</h1>
      <GetProduct />
      <GetSingleProduct />
      <GetProductCategory />
      <PostProduct />
      <UpdateProduct />
      <DeleteProduct />

      <h1>Categoria</h1>
      <GetCategory />
      <PostCategory />
      <UpdateCategory />
      <DeleteCategory />

      <h1>Endereço</h1>
      <GetAddress />
      <PostAddress />
      <UpdateAddress />
      <DeleteAddress />

      <h1>Anuncios</h1>
      <GetAdvert />
      <PostAdvert />
      <GetSingleAdvert />
      <UpdateAdvert />
      <DeleteAdvert />

      <h1>Autenticação</h1>
      <Login />
      <SingUp />

      <h1>Autenticado</h1>
      <UserAuth />
      <UpdateUser />
      <Cart />
      <CartAdd />
      <CartRemove />
      <OrderAdd />
      <ShowOrder />
      <ShowOrderAll />

    </>
  );
}

export default App;
