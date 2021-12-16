import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Navigationbar from './component/Navigationbar'
import Home from './Pages/Home'
import About from './Pages/About';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigationbar/>
      <Switch>
   
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contacts" component={Contacts}/>
           
    </Switch>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
