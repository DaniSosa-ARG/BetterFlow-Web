export const whatsappContact = {
  digits: "541164791603",
  display: "+54 11 6479-1603",
} as const;

export function buildWhatsAppUrl(): string {
  return `https://wa.me/${whatsappContact.digits}`;
}
