import products from '/products'
import ListItem from '../components/ListItem'

export default function List() {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, i) => (
        <ListItem  
          key={i} 
          {...product}
        />
      ))}
    </div>
  )
}
