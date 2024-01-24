import './App.css';
import Home from './components/booking/home';
import  Homeusers from './components/users/homeusers';
import DeleteUser from './components/users/deleteusers';
function App() {
  return (
    <div className="App">
      <Home/>
      <Homeusers/>
      <DeleteUser/>


</div>
  );
}

export default App;
