import React, { Component } from 'react';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

class Shelf extends Component {
 
  render() {
   return (
      <React.Fragment>
        <div className="shelf-container">
          <ShelfHeader  />
          <ProductList  />
        </div>
      </React.Fragment>
    );
  }
}
 export default Shelf;
