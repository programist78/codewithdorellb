import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.preback}>
    <Image src="/app-gradient-footer.webp" width="1600" height="250" alt="*" loading='lazy' className={styles.app_gradient}/>
    <div className={styles.back}>
      <div className={styles.logo_part}>
      <Link prefetch={false} href="/"><Image src="/logo.svg" width={60} height={60} alt="*" className={styles.logo}/></Link>
      </div>
      <div className={styles.links_part}>
      <Link prefetch={false} href="/terms-of-use&security/#privacy-policy"><p>Terms of use & privacy policy</p></Link>
      <Link prefetch={false} href="/terms-of-use&security/#security"><p>Security</p></Link>
      </div>
    </div>
    </div>
  )
}
