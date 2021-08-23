import React from 'react';
const ObjectCard = props => {
    return (
      <div className="item-card">
        <p>
          <b>Title:</b> {props.title}
        </p>
        <p>
          <b>Style:</b> {props.style}
        </p>
        <p>
          <b>Price:</b> {props.price}
        </p>
        <p>
          <b>Description:</b> {props.description}
        </p>
        <p>
          <b>Free shipping:</b> {props.isFreeShipping}
        </p>
      </div>
    );
  };

  export default ObjectCard;