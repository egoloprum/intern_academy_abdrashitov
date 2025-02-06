import Image from "next/image"
import styles from "./styles/hero.module.css"
import HeroText from './ui/HeroText'
import HeroTitle from './ui/HeroTitle'
import HeroFooter from './ui/HeroFooter'
import HeroBarCode from '@/shared/ui/barCodes/HeroBarCode'

export const Hero = ({}) => {
  return (
    <article className={styles.hero}>
      <HeroText />
      <HeroTitle />
      <HeroBarCode className={styles.heroBarCode} />
      <Image src={"/heroImage.png"} layout="fill" objectFit="contain" alt="hero-image" />
      <HeroFooter />
    </article>
  )
}


