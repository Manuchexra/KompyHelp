import { getDictionary } from "../../dictionaries"
import { CustomerDashboard } from "@/components/customer/customer-dashboard"

export default async function DashboardPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary("uz")

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{dict.common.dashboard}</h1>
      <CustomerDashboard lang={"uz"} dict={dict} />
    </div>
  )
}
