import React from 'react';
import ObjectCard from '../../components/ObjectCard'

const ProductsList = (props)=>{
    return (
      <div className="container">
        {props.data && props.data.map((product) => <ObjectCard key={product.sku} {...product} />)}
      </div>
      )    
  }

  export default ProductsList
