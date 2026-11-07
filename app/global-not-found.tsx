import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/modules/home/ui/home.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada — BetterFlow IA",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className={styles.body}>
        <main className={`${styles.shell} ${styles.notFound}`}>
          <h1 className={styles.notFoundTitle}>No encontramos esta página.</h1>
          <Link href="/" className={styles.primary}>
            Volver al inicio
          </Link>
        </main>
      </body>
    </html>
  );
}
