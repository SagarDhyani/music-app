
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home } from './myPages/Home';

import { ProductsList } from './Components/ProductsList';
import SongsList from './myPages/SongList';
import { Product } from './Components/Product';
import { MyProducts } from './myPages/MyProducts';
import Pagination from './Components/Pagination';



function App() {


  return (
    

    <Router>
      

      <Switch>
        <Route exact path="/page/:pageNumber">
        <Home/>

        </Route>

        <Route exact path="/">
        <Home/>

        </Route>
        <Route path="albums/:genre">
        <MyProducts/>
          </Route>
        {/* <Route path="/albums/:category">
        <MyProducts/>
        </Route> */}
      
        <Route path="/songs/:id">
          <SongsList />
        </Route>
        
       
      </Switch>
    </Router>
  
  );
}

export default App;
