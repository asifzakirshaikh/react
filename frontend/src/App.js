
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Advertising from './pages/advertising';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Home from './pages/home';
import Interview from './pages/interview';
import MartechRadar from './pages/martechradar';
import Navbar from './pages/navbar';
import News from './pages/news';

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='News' element={< News/>}/>
      <Route path='MartechRadar' element={< MartechRadar/>}/>
      <Route path='Advertising' element={<Advertising />} />
      <Route path='Interview' element={<Interview />} />
      <Route path='Blogs' element={<Blogs />} />
      <Route path='Contact' element={<Contact />} />
    </Routes>

    <Footer />

   </>
  );
}

export default App;
