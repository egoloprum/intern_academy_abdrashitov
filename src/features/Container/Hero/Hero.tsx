import styles from "./styles/hero.module.css"
import HeroText from './ui/HeroText'
import HeroTitle from './ui/HeroTitle'
import HeroBarCode from '@/shared/ui/barCodes/HeroBarCode'
import HeroFooter from './ui/HeroFooter'
import HeroBackground from '@/shared/ui/HeroBackground'

export const Hero = ({}) => {
  return (
    <article className={styles.hero}>
      <HeroText />
      <HeroTitle />
      <HeroBarCode className={styles.heroBarCode} />
      <HeroBackground className={styles.heroBackground} />
      <HeroFooter />
    </article>
  )
}


