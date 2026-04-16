import AvtorLabSite from "../AvtorLabSite";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata = buildHomeMetadata("ru");

export default function RuPage() {
  return <AvtorLabSite initialLang="ru" />;
}
