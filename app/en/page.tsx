import AvtorLabSite from "../AvtorLabSite";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata("en");

export default function EnPage() {
  return <AvtorLabSite initialLang="en" />;
}
