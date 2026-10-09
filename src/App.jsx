import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Projects from './components/Projects';
import Stack from './components/Stack';
import AISection from './components/AISection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Cursor/>
      <Nav/>
      <main>
        <Hero/>
        <Ticker/>
        <Projects/>
        <Stack/>
        <AISection/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
