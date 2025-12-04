import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, ShopAllPage, ProductPage, FavorivesPage, BestSellersAllPage } from './pages'
import { useAppDispatch } from './store/hooks';
import { productsThunk } from './store/slices/ProductsSlice/productsThunk';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsThunk());
  }, [dispatch]);

  return (
    <section className="font-montserrat text-black">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/shop-all' element={<ShopAllPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/favorites' element={<FavorivesPage />} />
          <Route path='/best-all' element={<BestSellersAllPage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
