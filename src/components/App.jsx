import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import Footer from './footer/Footer';
import Header from './header/Header';

const AuthPage = lazy(() => import('pages/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ProductPage = lazy(() => import('pages/ProductPage'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const CartPage = lazy(() => import('../pages/CartPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="auth" element={<AuthPage />} />
          </Route>

          <Route index element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
