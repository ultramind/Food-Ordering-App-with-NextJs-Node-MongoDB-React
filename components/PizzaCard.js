import React from 'react'
import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImg}>
            <Image src='/img/pizza.png' width='400' height='400' />
        </div>
        <h1 className={styles.title}>Chilken Pizza</h1>
        <h3 className={styles.price}>Price: 1003</h3>
        <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
    </div>
  )
}

export default PizzaCard