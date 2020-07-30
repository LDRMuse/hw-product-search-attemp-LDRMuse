import React, { Fragment } from 'react';
import './App.css';
import {SearchBar} from './FilterableProductTable'
import {ProductCategoryRow} from './FilterableProductTable'

export const App = () => {
  return (
    <Fragment>
    <SearchBar />
    <ProductCategoryRow />
    </Fragment>
  );
}
