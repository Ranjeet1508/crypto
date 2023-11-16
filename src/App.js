import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
