import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import AnimatedRoutes from './routes/AnimatedRoutes';

export const App = () => {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </ParallaxProvider>
  );
};
