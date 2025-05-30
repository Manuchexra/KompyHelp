import { getDictionary } from "../dictionaries"
import { ContactPage } from "@/components/pages/contact-page"

export default async function Contact({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return <ContactPage dict={dict} lang={params.lang} />
}
