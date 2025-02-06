import ServicesBackground from '@/features/Services/ui/ServicesBackground'
import styles from '../styles/services.module.css'
import ServicesHoverElement from '@/features/Services/ui/ServicesHoverElement'
import HoverBorderSvg from '@/shared/ui/svgs/HoverBorderSvg'

const Section = ({}) => {
  return (
    <section className={styles.servicesSection}>
      <article className={styles.servicesInsideSection}>
        <ServicesBackground className={styles.servicesBackground} />
        <HoverBorderSvg className={styles.hoverBorder} />

        <ServicesHoverElement
          className={styles.servicesHoverElement} 
          index="01" 
          headerText="Brand Identity Design" 
          paramText="We create memorable brand identities that resonate with your audience. From logos to complete visual systems, we ensure your brand stands out with clarity and impact." 
        />
        <ServicesHoverElement
          className={styles.servicesHoverElement} 
          index="02" 
          headerText="Web Design & Development" 
          paramText="Your website is your digital storefront. We design and develop websites that combine bold aesthetics with functionality, ensuring an intuitive experience for your users." 
        />
        <ServicesHoverElement
          className={styles.servicesHoverElement} 
          index="03" 
          headerText="Motion Graphics & Animation" 
          paramText="Bring your brand to life with dynamic animations and motion graphics. We create captivating visuals that engage and leave a lasting impression." 
        />
        <ServicesHoverElement
          className={styles.servicesHoverElement} 
          index="04" 
          headerText="Creative Consultation" 
          paramText="Have a vision but not sure how to bring it to life? Our creative experts collaborate with you to develop bold and precise strategies tailored to your brand goals." 
        />

      </article>
    </section>
  )
}

export default Section
