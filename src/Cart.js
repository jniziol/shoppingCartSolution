import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {

  const total = props.cartItems.reduce((total, cartItem) => {
    return total += cartItem.price;
  }, 0);

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} onRemoveFromCart={props.onRemoveFromCart} key={cartItem.id}/>
        ))}
      </ul>
      {props.cartItems.length > 0 && <div className="total">Total: ${total.toFixed(2)}</div>}
    </aside>
  )
}

