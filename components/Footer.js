import styles from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Image src='/img/footer-bg.jpg' layout='fill' alt='' />
      </div>
      <div className={styles.items}>
        <div className={styles.card}>
          <h2 className={styles.motor}>
            OH YES WE DID IT, LAMA PIZZA, WELL KNOW PIZZA IN THE WORLD AND THE
            MOST DEICIOUS ONE
          </h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>FIND OUR RESTURANTS</h2>
          <p className={styles.text}>
            1654 R. Don Road #458.
            <br />
            NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #458.
            <br />
            NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #458.
            <br />
            NewYork, 85022
            <br /> (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
        <h2 className={styles.title}>WORKING HOURS</h2>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY UNTIL SUNDAY
            <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
