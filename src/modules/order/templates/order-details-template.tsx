"use client"

import { Order } from "@medusajs/medusa"
import { XMark } from "@medusajs/icons"
import React from "react"

import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import ShippingDetails from "@modules/order/components/shipping-details"
import Link from "next/link"

type OrderDetailsTemplateProps = {
  order: Order
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-2xl-semi">Order details</h1>
        <Link
          href="/account/orders"
          className="flex gap-2 items-center text-neutral-800 hover:text-chablis"
        >
          <XMark /> Back to overview
        </Link>
      </div>
      <div className="flex flex-col gap-4 h-full bg-white w-full">
        <OrderDetails order={order} showStatus />
        <Items items={order.items} region={order.region} />
        <ShippingDetails order={order} />
        <OrderSummary order={order} />
        <Help />
      </div>
    </div>
  )
}

export default OrderDetailsTemplate
