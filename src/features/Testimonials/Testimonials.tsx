import styles from "./styles/testimonials.module.css"
import List from "./ui/List"
import Title from "./ui/Title"
import Arrow from "@/shared/ui/Arrow"

export const Testimonials = ({}) => {
  return (
    <article className={styles.testimonials}>
      <Title />
      <List />
      <p>
        <span>See more</span>
        <Arrow params="24" />
      </p>
    </article>
  )
}

