import Image from 'next/image'
import styles from './Navbar.module.scss'
import React from 'react'
export default function Navbar() {
    return (
    <div className={styles.back}>
        <div className={styles.logo}>
        <a href='/' style={{textDecoration: "none"}}><p>Codewith_Dorell.B</p></a>
        </div>
        <div className={styles.center}>
        <a href='#projects' style={{textDecoration: "none"}}><p>Projects</p></a>
        <a href='https://www.buymeacoffee.com' style={{textDecoration: "none"}}><p>Support</p></a>
        </div>
        <div className={styles.last}>
        <a href='https://www.instagram.com/codewith_dorell.b/' style={{textDecoration: "none"}}><Image src="/instagram.svg" width={35} height={35}/></a>
        <a href='https://www.instagram.com/codewith_dorell.b/' style={{textDecoration: "none"}}><Image src="/tg.svg" width={35} height={35}/></a>
        <a href='https://t.me/webxwiz' style={{textDecoration: "none"}}><Image src="/youtube.svg" width={35} height={47}/></a>
        </div>
    </div>
    )
}