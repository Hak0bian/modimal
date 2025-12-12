import Layout from './components/Layout/Layout'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, ProductPage, FavorivesPage, BestSellersAllPage, 
    ShopAllPage, NewInPage, PlusSizePage, SearchResultsPage,  } from './pages'
import { useAppDispatch } from './store/hooks';
import { productsThunk } from './store/slices/ProductsSlice/productsThunk';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(productsThunk());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, dispatch]);

  return (
    <section className="font-montserrat text-black">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/favorites' element={<FavorivesPage />} />
          <Route path='/best-sellers' element={<BestSellersAllPage />} />
          <Route path='/shop-all' element={<ShopAllPage />} />
          <Route path='/new-in' element={<NewInPage />} />
          <Route path='/plus-size' element={<PlusSizePage />} />
          <Route path='/search' element={<SearchResultsPage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
