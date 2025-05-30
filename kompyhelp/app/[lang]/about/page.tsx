import { getDictionary } from "../dictionaries"
import { AboutPage } from "@/components/pages/about-page"

export default async function About({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return <AboutPage dict={dict} lang={params.lang} />
}
