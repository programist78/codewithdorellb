import styles from './Part2.module.scss'
export default function Part2() {
  return (
    <div className={styles.back}>
        <p className={styles.title}>#Facts<span>  about me</span></p>
        <div className={styles.ul}>
            <li>I was born in Moldova 🇲🇩 but I've been living in Italy🇮🇹 for about 6  years.</li>
            <li>I can say that I'm at the beginning of my career as a developer as I officially started working in this field for more than a year.</li>
            <li>At the moment I work in a multinational company.</li>
            <li>I don't have a professional specialization📜, as to add the objective and be able to work as a programmer</li>
        </div>
    </div>
  )
}
