import type { HomeContent } from "../content/types";
import styles from "../ui/home.module.css";
import WhatsAppLink from "./WhatsAppLink";

export default function ContactPlane({ content }: { content: HomeContent }) {
  const { contactPlane, accessibility } = content;

  // `como` y `nosotros` son alias de anclas que todavía enlaza el sitio legacy.
  return (
    <section id="como" className={styles.plane}>
      <div className={styles.planeMain}>
        <p id="nosotros" className={styles.planeDescription}>
          {contactPlane.description}
        </p>
        <WhatsAppLink
          className={styles.primary}
          label={contactPlane.cta}
          opensIn={accessibility.whatsappOpens}
        />
      </div>
      <div className={styles.planeFoot}>
        <ul lang="en" className={styles.services}>
          {contactPlane.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <p className={styles.region}>{contactPlane.region}</p>
      </div>
    </section>
  );
}
