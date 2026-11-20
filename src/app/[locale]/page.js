import { notFound } from "next/navigation";
import { content, links } from "../../content/portfolio";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../components/Portfolio.module.css";

export default async function Home({ params }) {
  const { locale } = await params;
  const copy = content[locale];
  if (!copy) notFound();

  return (
    <>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <div id="top" />
      <Header locale={locale} copy={{ nav: copy.nav, navigation: copy.navigation, languages: copy.languages, languageNames: copy.languageNames, openMenu: copy.openMenu, closeMenu: copy.closeMenu }} />
      <main id="main" tabIndex={-1} className="container">
        <section className={styles.hero} aria-labelledby="hero-title">
          <p className={styles.availability}><span aria-hidden="true" />{copy.availability}</p>
          <p className={styles.greeting}>{copy.greeting}</p>
          <h1 id="hero-title">{copy.role}<span aria-hidden="true">.</span></h1>
          <p className={styles.headline}>{copy.headline}</p>
          <p className={styles.heroIntro}>{copy.intro}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#projects">{copy.viewProjects} <span aria-hidden="true">↗</span></a>
            <a className={styles.secondaryButton} href="#contact">{copy.contactMe}</a>
          </div>
          <a className={styles.github} href={links.github}>{copy.github} <span aria-hidden="true">↗</span></a>
        </section>

        <Section id="projects" number="01" title={copy.nav[0]} intro={copy.projectsIntro}>
          <div className={styles.projectGrid}>{copy.projects.map((project) => <ProjectCard key={project.name} project={project} copy={copy} />)}</div>
        </Section>

        <Section id="skills" number="02" title={copy.skillsTitle} intro={copy.skillsIntro}>
          <dl className={styles.skills}>{copy.skills.map(([area, description]) => (
            <div key={area}><dt>{area}</dt><dd>{description}</dd></div>
          ))}</dl>
        </Section>

        <Section id="about" number="03" title={copy.nav[2]}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>{copy.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className={styles.aboutDetails}>
              <h3>{copy.trainingTitle}</h3>
              <ul>{copy.training.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>{copy.spokenTitle}</h3>
              <ul>{copy.spoken.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="contact" number="04" title={copy.nav[3]} className={styles.contact}>
          <h3 className={styles.contactTitle}>{copy.contactTitle}</h3>
          <p>{copy.contactIntro}</p>
          <p className={styles.location}>{copy.location}</p>
          <div className={styles.contactLinks}>
            <a href={links.email}><span>{copy.emailLabel} ↗</span>ignacio0512942@gmail.com</a>
            <a href={links.phone}><span>{copy.phoneLabel} ↗</span>+56 9 9184 5633</a>
            <a href={links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={links.github}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </Section>
      </main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p>Alejandro González <span>· {copy.role}</span></p>
          <a href="#top">{copy.top} <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
