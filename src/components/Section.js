import styles from "./Portfolio.module.css";

export default function Section({ id, number, title, intro, children, className = "" }) {
  return (
    <section id={id} tabIndex={-1} aria-labelledby={`${id}-title`} className={`${styles.section} ${className}`}>
      <div className={styles.sectionHeading}>
        <span className={styles.number} aria-hidden="true">{number} /</span>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className={styles.sectionIntro}>{intro}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
