import Image from 'next/legacy/image'
import styles from 'styles/page-hero.module.css'
import top from '/images/siteTop.png'
export default function PageHero({ title, subtitle, imgOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.texts}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imgOn && (
        <figure className={styles.image}>
          <Image
            src={top}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
