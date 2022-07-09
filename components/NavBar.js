import Image from 'next/image'
import Link from 'next'
import styles from '../styles/NavBar.module.css'
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='tel' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+23765893764</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo.png' alt='logo' width='160px' height='60px' />
          <li className={styles.listItem}>Event</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Image src='/img/cart.png' alt='cart' width='35px' height='35px' />
        <div className={styles.counter}>2</div>
      </div>
    </div>
  )
}

export default NavBar
