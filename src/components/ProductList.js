import React, { Component } from 'react';
import { storeProducts } from '../data';
import Title from './Title';


export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };

  render() {
      console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="conatiner">
            <Title name="our" title="products" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
