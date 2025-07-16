import { Outlet } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';

export const App = () => {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ParallaxProvider>
  );
};
