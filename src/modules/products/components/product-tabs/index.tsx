"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Details",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-neutral-800 text-sm py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Grape</span>
            <p>{product.material ? product.material : ""}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : ""}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : ""}</p>
          </div>
        </div>
      </div>
      {/* Tags Here */}
    </div>
  )
}
// {product.tags?.length ? (
//   <div>
//     <span className="font-semibold">Tags</span>
//     <p>{product.type ? product.type.value : ""}</p>
//     {product.tags.map((tag, i) => (
//       <span
//         className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//         key={i}
//       >
//         {tag.component}
//       </span>
//     ))}
//   </div>
// ) : null}

const ShippingInfoTab = () => {
  return (
    <div className="text-neutral-800 text-sm py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Delivery</span>
            <p className="max-w-sm">
              Standard shipping in Hong Kong within 2 business days. See
              checkout for express and other options. Free delivery with minimum
              order. Or you can pick up your order from our warehouse at any
              time during business hours.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Exchanges</span>
            <p className="max-w-sm">
              Unopened merchandise may be returned for a full refund within 7
              days &#40;excluding Sale and Bin-end items&#41;.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Corked Wine</span>
            <p className="max-w-sm">
              If your wine has a cork closure and has spoiled, just return the
              bottle with a substantial amount of the contents remaining for an
              exchange or refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ;<div className="flex flex-col gap-y-4">
//   <div>
//     <span className="font-semibold">Weight</span>
//     <p>{product.weight ? `${product.weight} g` : "-"}</p>
//   </div>
//   <div>
//     <span className="font-semibold">Dimensions</span>
//     <p>
//       {product.length && product.width && product.height
//         ? `${product.length}L x ${product.width}W x ${product.height}H`
//         : "-"}
//     </p>
//   </div>
// </div>

export default ProductTabs
