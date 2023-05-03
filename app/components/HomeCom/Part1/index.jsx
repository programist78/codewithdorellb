import Image from 'next/image'
import styles from './Part1.module.scss'

export default function Part1() {
  return (
    <div className={styles.back}>
      <div className={styles.left}>
        <p><span>Hi everyone 👋</span>, my name is Dorel.
        I'm a software developer.👨🏽‍💻</p>
        <Image src="/line1.svg" width={311} height={21}/>
        </div>
        <div className={styles.right}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zzZbcrhmYdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={styles.video} />
        </div>
    </div>
  )
}
