import Image from 'next/image'
import styles from './Part3.module.scss'

export default function Part3() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>
            Projects
        </p>
        <Image src="/arrow.svg" width={41} height={114} className={styles.arrow}/>
        {/* <Posts /> */}
    </div>
  )
}
