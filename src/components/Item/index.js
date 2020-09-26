import React from 'react';

const Item = ({ item, onAddToCart,  children}) => (
    <li className="list-group-item d-flex align-items-center justify-content-between">
        <span>
            {item.name}
            <span className="price">${item.price}</span>
        </span>
        {children}
    </li>
  );

  export default Item;