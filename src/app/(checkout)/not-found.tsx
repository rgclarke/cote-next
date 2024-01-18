import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 | Côte de Chine",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-chablis">Page not found</h1>
      <p className="text-chablis text-chablis">
        The page you tried to access does not exist.
      </p>
      <Link href="/" className="mt-4 underline text-base-regular text-chablis">
        Go to frontpage
      </Link>
    </div>
  )
}
