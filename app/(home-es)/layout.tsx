import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/modules/home/ui/home.module.css";

const heroFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-home-hero",
  display: "swap",
});

export default function HomeEsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={heroFont.variable}>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
