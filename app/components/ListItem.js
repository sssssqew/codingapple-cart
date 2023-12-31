'use client'

import { useRouter } from "next/navigation"

export default function ListItem({ name, price, imgSrc }){
  // console.log(name, price, imgSrc)
  const router = useRouter()
  const addItemToCart = () => {
    let cartInfo = JSON.parse(localStorage.getItem('cartInfo')) ?? []
    
    if(cartInfo.filter(cart => cart.name === name).length == 0){
      cartInfo.push({name, price, qty: 1})
    }else{
      console.log("이미 카트에 담겨있어요 !")
    }
    localStorage.setItem('cartInfo', JSON.stringify(cartInfo))
    router.push('/cart')
  }
  return (
    <div className="food">
      <img src={imgSrc.src} alt={name} className="food-img"/>
      <h4>{name} (${price})</h4>
      <button onClick={addItemToCart}>담기</button>
    </div>
  )
}