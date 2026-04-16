import AvtorLabSite from "./AvtorLabSite";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata("uk");

export default function HomePage() {
  return <AvtorLabSite initialLang="uk" />;
}
