// import { getDictionary } from "@/app/[lang]/dictionaries"
import { HomePage } from "@/components/pages/home-page"

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  // const dict = await getDictionary(params.lang)

  return <HomePage />
}
