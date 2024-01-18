import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <Link
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-neutral-800 hover:text-neutral-800"
          >
            {product.collection.title}
          </Link>
        )}
        <Heading level="h2" className="text-3xl leading-10 text-chablis">
          {product.title}
        </Heading>

        <Text className="text-medium text-neutral-800">
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
