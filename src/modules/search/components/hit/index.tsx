import { ProductVariant } from "@medusajs/medusa"
import { Container, Text } from "@medusajs/ui"
import Link from "next/link"

import Thumbnail from "@modules/products/components/thumbnail"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: ProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <Link href={`/products/${hit.handle}`}>
      <Container
        key={hit.id}
        className="flex sm:flex-col gap-2 w-full p-4 shadow-elevation-card-rest hover:shadow-elevation-card-hover items-center sm:justify-center"
      >
        <Thumbnail
          thumbnail={hit.thumbnail}
          size="square"
          className="group h-12 w-12 sm:h-full sm:w-full"
        />
        <div className="flex flex-col justify-between group">
          <div className="flex flex-col">
            <Text className="text-neutral-800">{hit.title}</Text>
          </div>
        </div>
      </Container>
    </Link>
  )
}

export default Hit
