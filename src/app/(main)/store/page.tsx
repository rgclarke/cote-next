import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store | Côte de Chine",
  description: "Explore all of our wines.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
}

export default async function StorePage({ searchParams }: Params) {
  const { sortBy, page } = searchParams

  return <StoreTemplate sortBy={sortBy} page={page} />
}
