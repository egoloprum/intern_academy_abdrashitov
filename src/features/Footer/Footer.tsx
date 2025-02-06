import Image from "next/image"
import styles from "./styles/footer.module.css"
import Contact from "./ui/Contact"
import Copyright from "./ui/Copyright"
import FooterLinks from "./ui/FooterLinks"

export const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <Image src="/footerImage.png" layout="fill"  alt="" />
      <FooterLinks />
      <Contact />
      <Copyright />
    </footer>
  )
}

