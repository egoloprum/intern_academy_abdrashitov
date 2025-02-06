import TestimonialCard from "@/shared/ui/TestimonialCard"
import styles from "../styles/testimonials.module.css"

const List = ({}) => {
  return (
    <section className={styles.testList}>
      <article className={styles.listOrder}>
        <TestimonialCard 
          className={styles.listCard} 
          name="Sophia Nguyen" 
          position="Founder of Lumina Tech" 
          text="Schrift brought our brand to life with a design that perfectly captures our identity. Their bold approach and attention to detail exceeded our expectations!" 
        />
        <TestimonialCard 
          className={styles.listCard} 
          name="Isabelle Martinez" 
          position="Director at GreenSphere" 
          text="Working with Schrift was seamless and inspiring. Their creativity and dedication made our rebranding process a complete success." 
        />
        <TestimonialCard 
          className={styles.listCard} 
          name="Liam Carter" 
          position="Co-founder of VentureStudio" 
          text="Schrift's designs are both innovative and purposeful. They helped us create a website that truly stands out and resonates with our audience." 
        />
        <TestimonialCard 
          className={styles.listCard} 
          name="Amara Okafor" 
          position="CEO of NovaEdge" 
          text="The Schrift team transformed our vision into a sleek and modern digital experience. The precision in their work is unmatched!" 
        />
        <TestimonialCard 
          className={styles.listCard} 
          name="Priya Mehta" 
          position="COO of Elevate Systems" 
          text="Their commitment to excellence is inspiring. Schrift’s work was pivotal in helping us stand out in a competitive market." 
        />
        <TestimonialCard 
          className={styles.listCard} 
          name="Carlos Rivera" 
          position="Founder of Arc & Co" 
          text="From start to finish, Schrift’s professionalism and creativity shined through. They’ve helped us establish a powerful and cohesive brand identity." 
        />
      </article>
    </section>
  )
}

export default List
