import Hero from "@/components/home/Hero";
import ComoTrabajamos from "@/components/home/ComoTrabajamos";
import Servicios from "@/components/home/Servicios";
import ProductosDestacados from "@/components/home/ProductosDestacados";
import Nosotros from "@/components/home/Nosotros";
import CTAFinal from "@/components/home/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComoTrabajamos />
      <Servicios />
      <ProductosDestacados />
      <Nosotros />
      <CTAFinal />
    </>
  );
}
