import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { useState, useEffect, useContext } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useSelector } from 'react-redux'
import { AuthContext } from "../../hooks/AuthContext";
import { useRouter } from 'next/router'
import { debounce } from 'lodash';

export default function Navbar() {
  const [isScrollUp, setIsScrollUp] = useState(false)
  const [isOpen, toggle] = useState(false)
  const router = useRouter()
  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    let isScrollUp = false

    const handleScroll = debounce(() => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop < lastScrollTop) {
        setIsScrollUp(false);
      } else if (currentScrollTop > lastScrollTop) {
        setIsScrollUp(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }, 50);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  const part1Styles = useSpring({
    transform: isScrollUp ? 'translateY(-20%)' : 'translateY(0%)',
    opacity: isScrollUp ? 1 : 0
  })

  const part2Styles = useSpring({
    transform: isScrollUp ? 'translateY(-150%)' : 'translateY(0%)',
    opacity: isScrollUp ? 0 : 1
  })
  const [open, setOpen] = useState("")
  function ChangeMenu() {
    setOpen(!open)
  }

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)"
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)"
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)"
  });
  const { user, logout, authredux } = useContext(AuthContext);

  const { auth } = useSelector((state) => state.auth);
  const onLogout = () => {
    logout();
    router.push('/')
    document.location.reload();
}
  //normal
  return (
    <>
                   <Image src="/app-gradient.webp" width="1600" height="250" alt="*" loading="lazy" className={styles.app_gradient}/>
    <div className={styles.preback}>
    <div className={`${styles.back} ${isScrollUp ? styles.show1  : styles.show1}`}>
    <animated.div style={part2Styles} className={styles.part1}>
      {/* <div className={styles.part1}> */}
        <div className={styles.links1}>
          <Link prefetch={false} href="/#about-us"><p>About</p></Link>
          <Link prefetch={false} href="/#works"><p>Works</p></Link>
        </div>
        <div className={styles.logo}>
        <Link prefetch={false} href="/"><Image src="/logo.svg" width={90} height={90} alt="*" /></Link>
        </div>
        <div className={styles.links2}>
        <div>
          <p>Contacts</p>
          <div>
            <a href='https://t.me/webXwiz'><Image src="/telegram.svg" width={40} height={40} alt='.'/></a>
            <a href='https://www.instagram.com/web.x.wiz/'><Image src="/instagram.svg" width={40} height={40} alt='.'/></a>
            <a href='https://wa.me/380938036791'><Image src="/whatsapp.svg" width={40} height={40} alt='.'/></a>
            <a href='https://dribbble.com/Pofactu'><Image src="/dribbble.svg" width={40} height={40} alt='.'/></a>
            <a href='https://www.facebook.com/profile.php?id=100089414475022'> <Image src="/facebook.svg" width={40} height={40} alt='.'/></a>
          </div>
        </div>
        {auth ?
        <p onClick={onLogout}>Logout</p>
        :
          <a href="https://www.buymeacoffee.com/webXwiz"><p>Support</p></a>
        }
          </div>
      
      </animated.div>
      {/* </div> */}
      {/* <div className={`${styles.part2} ${isScrollUp ? styles.show : ""}`} > */}
      <animated.div style={part1Styles}  className={`${styles.part2} ${isScrollUp ? styles.findmargin : styles.findmargin }`}>
        <Link prefetch={false} href="/"><div>web<span>X</span>wiz</div></Link>
      </animated.div>
      <animated.div style={part2Styles} className={styles.menu}> 
      {isOpen ?
        <>
         <div className={styles.premenu}>
      </div>
      <div className={styles.backmenu}>
        <div>
          {/* <CgMenuMotion onClick={() => toggle(!isOpen)} className={styles.burger2}/> */}
          <svg
        onClick={() => toggle(!isOpen)}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#fafafa"
        className={styles.animate_burger2}
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
      </div>
         <div className={styles.info_links}>
         <Link prefetch={false} href="/#about-us"><div>About</div></Link>
          <Link prefetch={false} href="/#works"><div>Works</div></Link>
         <a href="https://www.buymeacoffee.com/webXwiz"><div>Support</div></a>
          <div className={styles.box_contacts}>
            <div className={styles.first_child}>
            <a href='https://t.me/webXwiz'><div><Image src="/telegram.svg" alt='.' width={40} height={40}/></div></a>
            <a href='https://www.instagram.com/web.x.wiz/'><div><Image src="/instagram.svg" alt='.' width={40} height={40}/></div></a>
            <a href='https://wa.me/380938036791'><div><Image src="/whatsapp.svg" alt='.' width={40} height={40}/></div></a>
            </div>
            <div className={styles.second_child}>
            <a href='https://dribbble.com/Pofactu'><div><Image src="/dribbble.svg" alt='.' width={40} height={40}/></div></a>
            <a href='https://www.facebook.com/profile.php?id=100089414475022'> <div><Image src="/facebook.svg" alt='.' width={40} height={40}/></div></a>
            </div>
          </div>
         </div>
        </div>
        </>
      
        :
        <div className={styles.premenu}>
        <svg
        onClick={() => toggle(!isOpen)}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#fafafa"
        className={styles.animate_burger}
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
      </div>
        // <CgMenu className={styles.burger} onClick={() => setIsOpenMenu(!isOpenMenu)}/>  
      }
      </animated.div>
    {/* </animated.div> */}
    </div>
    </div>
    </>
  )
}
