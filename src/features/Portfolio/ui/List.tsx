"use client"

import PortfolioHoverElement from "@/shared/ui/elements/PortfolioHoverElement"
import styles from "../styles/portfolio.module.css"
import PortfolioOddSvg from "@/shared/ui/svgs/PortfolioOddSvg"
import PortfolioEvenSvg from "@/shared/ui/svgs/PortfolioEvenSvg"
import { useState } from "react"

const List = ({}) => {
  const [hoverIndex, setHoverIndex] = useState<number>(0)

  const images = [
    null,
    "/hover-1.jpg",
    "/hover-2.jpg",
    "/hover-3.jpg",
    "/hover-4.jpg" 
  ]

  return (
    <section className={styles.portfolioList}>
      <section 
        className={styles.listImage}
        style={{
          backgroundImage: hoverIndex > 0 ? `url(${images[hoverIndex]})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}  
      >
        <p
          style={{
            opacity: hoverIndex === 0 ? '1' : '0'
          }}
        >
          hover on the list
        </p>
      </section>
      <section className={styles.listOrder}>
        <PortfolioHoverElement keyIndex={1} setHoverIndex={setHoverIndex} index="01" text="CASPIAN FOREST" barCode={<PortfolioOddSvg />} />
        <PortfolioHoverElement keyIndex={2} setHoverIndex={setHoverIndex} index="02" text="Alchemed" barCode={<PortfolioEvenSvg />} />
        <PortfolioHoverElement keyIndex={3} setHoverIndex={setHoverIndex} index="03" text="CAPSULE" barCode={<PortfolioOddSvg />} />
        <PortfolioHoverElement keyIndex={4} setHoverIndex={setHoverIndex} index="04" text="SWOOSH!" barCode={<PortfolioEvenSvg />} />
      </section>
    </section>
  )
}

export default List
