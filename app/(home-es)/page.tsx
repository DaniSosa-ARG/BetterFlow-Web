import type { Metadata } from "next";
import HomePage from "@/modules/home/HomePage";
import { buildHomeMetadata } from "@/modules/home/config/site";
import { es } from "@/modules/home/content/es";

export const metadata: Metadata = buildHomeMetadata(es, "/");

export default function Page() {
  return <HomePage content={es} />;
}
