import React from 'react';
import Item from './Item';
import Cart from './Cart';

class App extends React.Component {
  cartItemId = 0;

  state = {
    items: [],
    cartItems: [],
  };

  componentDidMount = () => {
    fetch('https://5ed0108416017c00165e327c.mockapi.io/api/v1/items')
      .then(resp => resp.json())
      .then(data => {
        this.setState({items: data});
      });
  }

  addToCart = item => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, {...item, id: this.cartItemId}]
    }))

    this.cartItemId++
  }

  removeFromCart = item => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(cartItem => cartItem !== item)
    }));
  }

  render = () => {
    return (
      <>
        <header>
          <h1>mouseHeav3an</h1>
        </header>
        <main>
          <ul className="items">
            {this.state.items.map(item => (
              <Item item={item} key={item.id} onAddToCart={this.addToCart}/>
            ))}
          </ul>
          <Cart cartItems={this.state.cartItems} onRemoveFromCart={this.removeFromCart}/>
        </main>
      </>
    )
  }
}


export default App;
