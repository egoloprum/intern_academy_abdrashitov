import ArrowDown from "@/shared/ui/ArrowDown"
import styles from "./styles/testimonials.module.css"
import List from "./ui/List"
import Title from "./ui/Title"

export const Testimonials = ({}) => {
  return (
    <article className={styles.testimonials}>
      <Title />
      <List />
      <p>
        <span>See more</span>
        <ArrowDown height="24" width="24" />
      </p>
    </article>
  )
}

