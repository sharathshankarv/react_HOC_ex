import React from 'react';
import ObjectCard from '../../components/ObjectCard'

const StocksList = (props)=>{
    return (
      <div className="container">
        {props.data && props.data.map((product) => <ObjectCard key={product.sku} {...product} />)}
      </div>
      )    
  }

  export default StocksList
