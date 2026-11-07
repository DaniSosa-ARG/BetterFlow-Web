import type { Metadata } from "next";
import HeroProductos from "@/components/productos/HeroProductos";
import Problema from "@/components/productos/Problema";
import FlowMed from "@/components/productos/FlowMed";
import FlowSport from "@/components/productos/FlowSport";
import ComoFunciona from "@/components/productos/ComoFunciona";
import Precios from "@/components/productos/Precios";
import CTAFinalProductos from "@/components/productos/CTAFinalProductos";

export const metadata: Metadata = {
  alternates: { canonical: "/productos" },
  title: "Productos — FlowMed & FlowSport | BetterFlow",
  description:
    "FlowMed y FlowSport: agentes de IA por WhatsApp para consultorios medicos y complejos deportivos. Reserva de turnos automatica las 24hs.",
};

export default function ProductosPage() {
  return (
    <>
      <HeroProductos />
      <Problema />
      <FlowMed />
      <FlowSport />
      <ComoFunciona />
      <Precios />
      <CTAFinalProductos />
    </>
  );
}
