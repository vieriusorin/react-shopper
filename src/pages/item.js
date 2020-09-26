import React from 'react';
import Item from '../components/Item';

const ItemPage = ({items, onAddToCart}) => {
    return (
        <div className="container">
            <h2 className="my-5">Items for sale</h2>
            <ul className="list-group">
                {items.map(item => (
                    <Item key={item.id}
                    item={item}
                    onAddToCart={onAddToCart}
                    >
                        <button
                            className="btn btn-primary add"
                            onClick={() => onAddToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </Item>
                ))}
            </ul>
        </div>
    );
};

export default ItemPage;