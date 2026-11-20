import styles from "./Portfolio.module.css";

export default function ProjectCard({ project, copy }) {
  return (
    <article className={styles.project}>
      <div className={styles.projectHeader}>
        <h3>{project.name}</h3>
        <span className={styles.period}>{project.period}</span>
      </div>
      <p className={styles.projectRole}>{project.role}</p>
      <p>{project.description}</p>
      <h4>{copy.contributions}</h4>
      <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
      {project.learning && <p>{project.learning}</p>}
      <div className={styles.projectStack}>
        <h4>{copy.technologies}</h4>
        <ul className={styles.tags}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <p className={styles.context}>{project.context}</p>
      </div>
      <div className={styles.projectLinks}>
        {project.links.map((link) => <a key={link.href} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}
      </div>
    </article>
  );
}
