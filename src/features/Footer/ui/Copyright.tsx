import styles from "../styles/footer.module.css"
import ArrowDown from "@/shared/ui/ArrowDown"

const Copyright = ({}) => {
  return (
    <section className={styles.footerCopyright}>
      <p>© Copyright Schrift 2024</p>
      <ArrowDown height="80" width="80" />
    </section>
  )
}

export default Copyright
