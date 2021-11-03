import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navber from './components/Navber';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navber />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} /> 
        </Switch>
      </React.Fragment>
    )
  }
}


export default App;
