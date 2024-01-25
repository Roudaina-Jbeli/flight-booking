import './App.css';
import Home from './components/booking/home';
import Homeusers from './components/users/homeusers';
import Footer from './components/users/Footer';
function App() {
  return (
    <div className="App">

      <Homeusers />
      <Footer/>
      <Home />

    </div>
  );
}

export default App;
