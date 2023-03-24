import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import styles from './ShopPage.module.css'

export default function ShopPage( {productData} ) {
  return (
    <div>
      <h1 className={styles.header}>Our plants</h1>
      <div className= {styles.productwrapper}> 
        {productData.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))
        }        
      </div>
    </div>
  )
}
