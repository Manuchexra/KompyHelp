import { getDictionary } from "../dictionaries"
import { KnowledgeBasePage } from "@/components/pages/knowledge-base-page"

export default async function KnowledgeBase({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return <KnowledgeBasePage dict={dict} lang={params.lang} />
}
