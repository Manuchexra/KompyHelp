import { ShopPage } from "@/components/pages/shop-page"
import { getDictionary } from "@/i18n/get-dictionary"

export default async function Shop({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return <ShopPage dictionary={dict} />
}
