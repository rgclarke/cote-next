import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div className="text-neutral-800 bg-white hover:bg-white">
      <div className="pb-3 flex items-center ">
        <Heading className="text-[2rem] leading-[2.75rem]">Cart</Heading>
      </div>
      <Table className="bg-white hover:bg-white">
        <Table.Header className="border-t-0 bg-white hover:bg-white">
          <Table.Row className="text-neutral-800 txt-medium-plus bg-white hover:bg-white">
            <Table.HeaderCell className="!pl-0 bg-white hover:bg-white">
              Item
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-white hover:bg-white"></Table.HeaderCell>
            <Table.HeaderCell className="bg-white hover:bg-white">
              Quantity
            </Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell bg-white hover:bg-white">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right bg-white hover:bg-white">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="bg-white hover:bg-white">
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
