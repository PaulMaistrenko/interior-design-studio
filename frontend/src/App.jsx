import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
