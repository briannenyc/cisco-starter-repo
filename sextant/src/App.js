
import './App.css';
import Banner from "./components/Banner"
import Exhibit from "./components/Exhibit"
import UserAddress from './components/UserAddress';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Exhibit> 
        <UserAddress>IPv4</UserAddress>
      </Exhibit>
      <Exhibit> 
        <UserAddress>IPv6</UserAddress>
      </Exhibit>
      
     <p>Brianne Nunnelley</p>
    </div>
  );
}

export default App;
