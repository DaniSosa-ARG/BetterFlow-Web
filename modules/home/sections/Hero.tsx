import Image from "next/image";
import type { HomeContent } from "../content/types";
import styles from "../ui/home.module.css";
import { ArrowIcon, benefitIcons } from "./HomeIcons";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero({ content }: { content: HomeContent }) {
  const { hero, accessibility } = content;

  return (
    <div className={styles.hero}>
      <div className={styles.figure}>
        <Image
          src="/images/hero-architecture.webp"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className={styles.figureImage}
        />
      </div>
      <div className={styles.heroCopy}>
        <h1 className={styles.headline}>
          <span className={styles.line}>{hero.titleLead}</span>{" "}
          <span className={styles.lineGradient}>{hero.titleAccent}</span>
        </h1>
        <p className={styles.lede}>
          {hero.descriptionLines.map((line) => (
            <span key={line} className={styles.ledeLine}>
              {line}{" "}
            </span>
          ))}
        </p>
        <div className={styles.actions}>
          <WhatsAppLink
            className={styles.heroPrimary}
            label={hero.primaryCta}
            opensIn={accessibility.whatsappOpens}
            decoration={<ArrowIcon className={styles.icon} />}
          />
        </div>
      </div>
      <ul className={styles.benefits}>
        {hero.benefits.map((benefit, index) => {
          const Icon = benefitIcons[index];
          return (
            <li key={benefit.title} className={styles.benefit}>
              <Icon className={styles.benefitIcon} />
              <span className={styles.benefitTitle}>{benefit.title}<br />{benefit.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
