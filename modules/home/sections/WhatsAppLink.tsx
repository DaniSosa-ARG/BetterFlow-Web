import type { ReactNode } from "react";
import { buildWhatsAppUrl } from "../config/contact";

interface WhatsAppLinkProps {
  label: string;
  opensIn: string;
  className: string;
  /** Reemplaza la flecha por defecto. */
  decoration?: ReactNode;
}

export default function WhatsAppLink({ label, opensIn, className, decoration }: WhatsAppLinkProps) {
  return (
    <a
      className={className}
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}, ${opensIn}`}
    >
      {decoration ?? null}
      {label}
      {decoration ? null : <span aria-hidden="true"> ↗</span>}
    </a>
  );
}
