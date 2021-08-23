import React from 'react';

import Hoc from '../components/Hoc'
import ProductsList from './Products/ProductList';
import {productsData} from './Products/productsData'

import StocksList from './Stocks/StocksList';
import {stocksData} from './Stocks/StocksData'

const ProductsListWithHoc = Hoc(ProductsList);
const StocksListWithHoc = Hoc(StocksList)

const HomePage = () => {
  return (
    <div>
    <h4>HOC Ex</h4>
    <div className="flex-layout">
    <ProductsListWithHoc title="Products" data={productsData} />
    <StocksListWithHoc title="Stocks" data={stocksData} /></div>
    {/* <ProductsList /> */}
    </div>
  );
}

export default HomePage;