import './App.css';
import Home from './components/booking/home';
import Homeusers from './components/users/homeusers';
import Footer from './components/users/Footer';
import Flighthome from './components/flights/Flighthome';

function App() {
  return (
    <div className="App">
      <Homeusers />
      <Home />
      <Flighthome />  
      <Footer/>

    </div>
  );
}

export default App;
