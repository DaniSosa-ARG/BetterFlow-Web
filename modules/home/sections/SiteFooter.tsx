import Link from "next/link";
import { whatsappContact } from "../config/contact";
import type { HomeContent } from "../content/types";
import styles from "../ui/home.module.css";
import WhatsAppLink from "./WhatsAppLink";

export default function SiteFooter({ content }: { content: HomeContent }) {
  const { closing, accessibility } = content;

  // `blog` es un alias de ancla que todavía enlaza el sitio legacy.
  return (
    <footer id="contacto" className={styles.footer}>
      <div id="blog">
        <h2 className={styles.closingTitle}>{closing.title}</h2>
        <p className={styles.closingDescription}>{closing.description}</p>
        <WhatsAppLink
          className={styles.primary}
          label={closing.cta}
          opensIn={accessibility.whatsappOpens}
        />
        <p className={styles.phone}>
          {closing.phoneLabel}: <span className={styles.phoneNumber}>{whatsappContact.display}</span>
        </p>
      </div>
      <Link href="/productos" className={styles.navLink}>
        {closing.productsLink}
      </Link>
    </footer>
  );
}
