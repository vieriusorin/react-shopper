import React from 'react';
import NavBar from './components/Navbar';
import ItemPage from './pages/item';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';

const products = [
  { id: 1, name: 'Phone', price: 299},
  { id: 2, name: 'Laptop', price: 1400},
  { id: 3, name: 'Headphones', price: 99},
  { id: 4, name: 'Camera', price: 699},
  { id: 6, name: 'Monitor', price: 399}
]

class App extends React.Component {
  state = {
    activePage: 'store',
    cart: []
  }
  handleAdd = item => {
    this.setState(prev => ({
      cart: [...prev.cart, item]
    }))
  }

  handleChangePage = page => {
    this.setState({activePage: page})
  }

  render() {
    const {activePage, cart} = this.state;
    return (
      <div className="App">
        <NavBar onPageChange={this.handleChangePage} cartCount={cart.length} />
        <main>
          {activePage === 'store' ? (
            <ItemPage onAddToCart={this.handleAdd} items={products} />
          ) :
            activePage === 'cart'
            ? ( <CartPage  items={cart} onPageChange={this.handleChangePage}  /> )
            : ( <CheckoutPage  items={cart}  /> )
          }
        </main>
      </div>
    );
  }
}

export default App;
