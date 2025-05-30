import { getDictionary } from "../../dictionaries"
import { LoginForm } from "@/components/auth/login-form"

export default async function LoginPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary("uz")

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">{dict.auth.signIn}</h1>
          <p className="text-sm text-muted-foreground">
            {dict.auth.noAccount}{" "}
            <a href={`/uz/register`} className="underline underline-offset-4 hover:text-primary">
              {dict.auth.signUp}
            </a>
          </p>
        </div>
        <LoginForm lang={"uz"} dict={dict} />
      </div>
    </div>
  )
}
