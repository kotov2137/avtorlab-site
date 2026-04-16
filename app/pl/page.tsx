import AvtorLabSite from "../AvtorLabSite";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata("pl");

export default function PlPage() {
  return <AvtorLabSite initialLang="pl" />;
}
