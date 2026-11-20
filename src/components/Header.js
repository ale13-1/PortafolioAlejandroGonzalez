"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "../content/portfolio";
import styles from "./Header.module.css";

export default function Header({ locale, copy }) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 60rem)");
    const onResize = () => setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  function navigateToSection(event, id) {
    setOpen(false);
    if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      document.getElementById(id)?.focus({ preventScroll: true });
    }
  }

  function changeLanguage(event, targetLocale) {
    // Read at click time as well, so the link always keeps the latest anchor.
    event.currentTarget.href = `/${targetLocale}${window.location.hash}`;
  }

  return (
    <header className={styles.header} ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <div className={`container ${styles.bar}`}>
        <a className={styles.brand} href="#top" onClick={() => setOpen(false)}>
          <span className={styles.monogram} aria-hidden="true">ag<span>.</span></span>
          <span>Alejandro González</span>
        </a>
        <button ref={toggleRef} type="button" className={styles.toggle}
          aria-expanded={open} aria-controls="main-navigation"
          onClick={() => setOpen(!open)}>
          {open ? copy.closeMenu : copy.openMenu}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav id="main-navigation" aria-label={copy.navigation}
          className={`${styles.navigation} ${open ? styles.open : ""}`}>
          {sections.map((id, index) => (
            <a key={id} href={`#${id}`} aria-current={hash === `#${id}` ? "location" : undefined}
              onClick={(event) => navigateToSection(event, id)}>{copy.nav[index]}</a>
          ))}
        </nav>
        <div className={styles.languages} role="group" aria-label={copy.languages}>
          {["es", "en"].map((language, index) => (
            <a key={language} href={`/${language}${hash}`} lang={language} hrefLang={language}
              aria-label={copy.languageNames[index]}
              aria-current={locale === language ? "page" : undefined}
              onClick={(event) => changeLanguage(event, language)}>
              {language.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
