import Link from "next/link";
import type { HomeContent } from "../content/types";
import styles from "../ui/home.module.css";
import { ArrowIcon } from "./HomeIcons";
import WhatsAppLink from "./WhatsAppLink";

export default function SiteHeader({ content }: { content: HomeContent }) {
  const { accessibility, nav } = content;

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label={accessibility.brandHome}>
        <span>BetterFlow·IA</span>
      </Link>
      <nav className={styles.nav} aria-label={accessibility.primaryNav}>
        <Link href="#como" className={styles.navLink}>
          {nav.home}
        </Link>
        <Link href="/productos" className={styles.navLink}>
          {nav.solutions}
        </Link>
        <a href="#contacto" className={styles.navLink}>{nav.pending[0]}</a>
      </nav>
      <WhatsAppLink
        className={styles.headerContact}
        label={nav.contact}
        opensIn={accessibility.whatsappOpens}
        decoration={<ArrowIcon className={styles.icon} />}
      />
    </header>
  );
}
