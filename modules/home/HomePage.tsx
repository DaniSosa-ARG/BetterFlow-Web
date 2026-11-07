import type { HomeContent } from "./content/types";
import ContactPlane from "./sections/ContactPlane";
import Hero from "./sections/Hero";
import SiteFooter from "./sections/SiteFooter";
import SiteHeader from "./sections/SiteHeader";
import styles from "./ui/home.module.css";

export default function HomePage({ content }: { content: HomeContent }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#contenido">
        {content.accessibility.skipLink}
      </a>
      <SiteHeader content={content} />
      <main id="contenido" tabIndex={-1} className={styles.main}>
        <Hero content={content} />
        <ContactPlane content={content} />
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
