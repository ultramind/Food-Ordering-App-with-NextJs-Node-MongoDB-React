import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'

const Product = () => {
  const [size, setSize] = useState(0)
  const pizza = {
    id: 1,
    name: 'Chicken Pizza',
    img: '/img/pizza.png',
    price: [19.9, 23.9, 29.9],
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout='fill' objectFit='content' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <h2 className={styles.price}>${pizza.price[size]}</h2>
        <p className={styles.desc}> {pizza.desc} </p>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src='/img/size.png' width='40px' height='40px' />
            <span className={styles.badge}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src='/img/size.png' width='60px' height='60px' />
            <span className={styles.badge}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src='/img/size.png' width='80px' height='80px' />
            <span className={styles.badge}>Big</span>
          </div>
        </div>
        <h3>Choose Ingredents</h3>
        <div className={styles.options}>
          <div className={styles.option}>
            <input type='checkbox' checked id='double' name='double' />
            <label htmlFor='double'>Double Ingredents</label>
          </div>
          <div className={styles.option}>
            <input type='checkbox' id='spicy' name='spicy' />
            <label htmlFor='spicy'>Extra Spicy</label>
          </div>
          <div className={styles.option}>
            <input type='checkbox' id='sauce' name='sauce' />
            <label htmlFor='sauce'>Extra sauce</label>
          </div>
          <div className={styles.option}>
            <input type='checkbox' id='garlic' name='garlic' />
            <label htmlFor='garlic'>Extra sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type='number' defaultValue={1}/><button className={styles.btn}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
