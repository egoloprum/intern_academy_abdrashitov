import { Description } from './ui/Description'
import styles from './styles/about.module.css'
import { Title } from './ui/Title'
import { ImageContainer } from './ui/ImageContainer'

export const About = ({}) => {
  return (
    <article className={styles.about}>
      <section className={styles.aboutText}>
        <Title />
        <ImageContainer />
      </section>

      <section className={styles.aboutDescription}>
        <Description />
      </section>
    </article>
  )
}

