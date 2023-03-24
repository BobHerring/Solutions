import React from 'react'
import styles from './ProductCard.module.css'

export default function ProductCard({ name, price, imageUrl }) {
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} alt="a house plant"/>
      <h1>{name}</h1>
      <p>£{price.toFixed(2)}</p>
      <button>Add to cart</button>
    </div>
  )
}
