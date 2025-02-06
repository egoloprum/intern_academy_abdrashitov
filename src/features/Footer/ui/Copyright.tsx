import Arrow from "@/shared/ui/Arrow"
import styles from "../styles/footer.module.css"

const Copyright = ({}) => {
  return (
    <section className={styles.footerCopyright}>
      <p>© Copyright Schrift 2024</p>
      <Arrow params="80" />
    </section>
  )
}

export default Copyright
