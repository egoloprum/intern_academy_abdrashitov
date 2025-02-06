import { Description } from './ui/Description'
import styles from './styles/about.module.css'
import { Title } from './ui/Title'
import AboutSvg from '@/shared/ui/svgs/AboutSvg'

export const About = ({}) => {
  return (
    <article className={styles.about}>
      <section className={styles.aboutText}>
        <Title />
        <AboutSvg className={styles.textImageContainer} />
      </section>

      <section className={styles.aboutDescription}>
        <Description />
      </section>
    </article>
  )
}

