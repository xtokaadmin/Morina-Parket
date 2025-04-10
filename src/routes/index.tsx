import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ProductsPage from '../pages/ProductsPage';
import ShowroomPage from '../pages/ShowroomPage';
import ContactPage from '../pages/ContactPage';
import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import GalleryPage from '../pages/GalleryPage';
import AboutPage from '../pages/AboutPage';
import CareProductsPage from '../pages/CareProductsPage';
import MainLayout from '@/layouts/MainLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: '/services',
    element: <MainLayout><ServicesPage /></MainLayout>,
  },
  {
    path: '/sortiment',
    element: <MainLayout><ProductsPage /></MainLayout>,
  },
  {
    path: '/shop',
    element: <MainLayout><ShopPage /></MainLayout>,
  },
  {
    path: '/cart',
    element: <MainLayout><CartPage /></MainLayout>,
  },
  {
    path: '/checkout',
    element: <MainLayout><CheckoutPage /></MainLayout>,
  },
  {
    path: '/showroom',
    element: <MainLayout><ShowroomPage /></MainLayout>,
  },
  {
    path: '/galerie',
    element: <MainLayout><GalleryPage /></MainLayout>,
  },
  {
    path: '/pflegeprodukte',
    element: <MainLayout><CareProductsPage /></MainLayout>,
  },
  {
    path: '/ueber-uns',
    element: <MainLayout><AboutPage /></MainLayout>,
  },
  {
    path: '/contact',
    element: <MainLayout><ContactPage /></MainLayout>,
  },
  {
    path: '/products',
    element: <MainLayout><ProductsPage /></MainLayout>,
  },
];

export default routes; 