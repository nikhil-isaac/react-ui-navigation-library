import styles from "./Section.module.css";

export default function Section({ id, color, children }) {
  const className = `${styles.section} ${styles[color]}`;

  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
