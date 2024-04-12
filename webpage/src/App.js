import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
     <Navbar />

     <div className='container'>
       <Card />
       <Card />
       <Card />
     </div>

     <Footer />
    </div>
  );
}

export default App;
