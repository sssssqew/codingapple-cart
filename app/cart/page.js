'use client'

import { useState, useEffect } from 'react'

export default function Cart() {
  const [carts, setUpdate] = useState(false)
  
  const increaseQty = (product, i) => {
    let cartInfo = JSON.parse(localStorage.getItem('cartInfo'))
    cartInfo = cartInfo.map(cart => cart.name == product.name ? {...cart, qty: product.qty + 1}: cart)
    localStorage.setItem('cartInfo', JSON.stringify(cartInfo))
    setUpdate(cartInfo)
  }

  useEffect(() => {
      const cartInfo = JSON.parse(localStorage.getItem('cartInfo'))
      console.log("데이터 전달: ", cartInfo)
      setUpdate(cartInfo)
  }, [])

  return (
    <div>
      <h4 className="title">Cart</h4>
      {carts &&
      carts.map((product, i) => <CartItem key={i} {...product} handleClick={() => increaseQty(product, i)}/>)} 
    </div>
  )
}

function CartItem({ name, price, qty, handleClick }){
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>${price}</p>
      <p>{qty}</p>
      <p>${price * qty}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
