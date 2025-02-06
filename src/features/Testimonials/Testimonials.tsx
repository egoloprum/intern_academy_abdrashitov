import styles from "./styles/testimonials.module.css"
import List from "./ui/List"
import Title from "./ui/Title"

export const Testimonials = ({}) => {
  return (
    <article className={styles.testimonials}>
      <Title />
      <List />
    </article>
  )
}

