import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'

const Slider = () => {
  const [index, setIndex] = useState(0)
  const images = ['/img/banner_1.png', '/img/banner_2.png', '/img/banner_3.png']

  const handleClick = direction => {
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0)
    }
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    console.log(index)
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => handleClick('l')}
        style={{ left: 0 }}
      >
        <Image src='/img/arrowl.png' alt='arrow' objectFit='contain' layout='fill' />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imageContainer} key={i}>
            <Image src={img} alt='Featured' layout='fill' objectFit='contain' />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        onClick={() => handleClick('r')}
        style={{ right: 0 }}
      >
        <Image src='/img/arrowr.png' alt='arrow' objectFit='contain' layout='fill' />
      </div>
    </div>
  )
}

export default Slider
