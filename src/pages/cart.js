import React from 'react';
import Item from '../components/Item';



const CartPage = ({items, onPageChange}) => {
    const summarizer = (result, item) => {
        const existingItem = result.find(i => i.id === item.id)
        if (!existingItem) {
            result.push({
                ...item,
                count: 1
            })
        } else {
            existingItem.count++
        }

        return result
    }
    const cart = items.reduce(summarizer, [])
    return (
        <div className="container">
            <h2 className="my-5">Shooping Cart</h2>
            <ul className="list-group mb-5">
                {cart.map(item => (
                    <Item key={item.id} item={item}>
                        {item.count}
                    </Item>
                ))}
            </ul>
            <hr />
            <div className="total d-flex align-items-center justify-content-between">
                <h3>Total:
                ${
                    cart.reduce((total, item) => {
                        return total + item.price * item.count;
                    }, 0)
                }
                </h3>
                <button className="btn btn-primary" onClick={
                () => onPageChange('checkout')
            }>Checkout Now</button>
            </div>
        </div>
    );
};

export default CartPage;