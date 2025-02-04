import styles from '../styles/about.module.css'
import DescriptionCard from '@/shared/ui/DescriptionCard'
import PrecisionLogo from '@/shared/ui/logo/PrecisionLogo'
import BoldLogo from '@/shared/ui/logo/BoldLogo'
import ClientLogo from '@/shared/ui/logo/ClientLogo'
import CreativeLogo from '@/shared/ui/logo/CreativeLogo'

export const Description = ({}) => {
  return (
    <>
      <p className={styles.descriptionTitle}>Schrift is a graphic design agency focused on clarity, impact, and purpose. We deliver designs that communicate powerfully and authentically</p>

      <section className={styles.descriptionCards}>
        <DescriptionCard 
          image={<PrecisionLogo />} 
          headerText='Precision' 
          paramText='Every detail counts at Schrift. We believe in designing with intention, where every element serves a purpose.' 
        />
        <DescriptionCard 
          image={<BoldLogo />} 
          headerText='Bold' 
          paramText='Our style is modern, sleek, and minimal, using clean lines and bold choices that make a statement.' 
        />
        <DescriptionCard 
          image={<ClientLogo />} 
          headerText='CLIENT - CENTERED' 
          paramText='Your vision is our priority. We work closely with clients, valuing open communication and feedback at every step.' 
        />
        <DescriptionCard 
          image={<CreativeLogo />} 
          headerText='creative excellence' 
          paramText='Our team is composed of experienced designers who bring fresh, innovative perspectives to each project' 
        />
      </section>
    </>
  )
}
