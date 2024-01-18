import Image from "next/image"
import { Text, clx } from "@medusajs/ui"
import Link from "next/link"

import { getCategoriesList, getCollectionsList } from "@lib/data"

const fetchCollections = async () => {
  const { collections } = await getCollectionsList()
  return collections
}

const fetchCategories = async () => {
  const { product_categories } = await getCategoriesList()
  return product_categories
}

export default async function Footer() {
  const productCollections = await fetchCollections().then(
    (collections) => collections
  )
  const productCategories = await fetchCategories().then(
    (categories) => categories
  )
  return (
    <footer className="w-full bg-neutral-200">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-24">
          <div className="mb-12 sm:mb-0">
            <Link href="/" className="">
              <Image
                src="/svg/code-de-chine-wordmark-black.svg"
                alt="Cote de Chine"
                width={120}
                height={20}
              />
            </Link>
            {/* <Link
              href="/"
              className="txt-compact-xlarge-plus text-neutral-800 hover:text-chablis hover:text-base uppercase"
            >
              Cote de Chine
            </Link> */}
            <div className="text-neutral-500 gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
              <div className="flex flex-col gap-y-2">
                <span className="mt-2 mb-6 text-sm text-neutral-500">
                  Fine European & New World Wines
                </span>
                <ul className="grid grid-cols-1 gap-2 text-neutral-800 ">
                  <li className="hover:text-chablis hover:text-base">
                    About Côte
                  </li>
                  <li className="hover:text-chablis hover:text-base">
                    Contact Us
                  </li>
                  <li className="hover:text-chablis hover:text-base">
                    Delivery & Pick-up
                  </li>
                  <li className="hover:text-chablis hover:text-base">Legal</li>
                  <li className="hover:text-chablis hover:text-base">
                    Privacy Policy
                  </li>
                  {/* <li className="hover:text-chablis hover:text-base">FAQ</li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-neutral-800 gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="font-semibold">Categories</span>
                <ul className="grid grid-cols-1 gap-2">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-neutral-800 hover:text-chablis hover:text-base"
                        key={c.id}
                      >
                        <Link
                          className={clx(" ", children && "")}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </Link>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    className="hover:text-chablis hover:text-base"
                                    href={`/categories/${child.handle}`}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {productCollections && productCollections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="font-semibold">Regions</span>
                <ul
                  className={clx("grid grid-cols-1 gap-2 text-neutral-800 ", {
                    "grid-cols-2": (productCollections?.length || 0) > 3,
                  })}
                >
                  {productCollections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <Link
                        className="hover:text-chablis hover:text-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-neutral-800">
          <Text className="txt-compact-small">
            ©{new Date().getFullYear()} Trove Limited. Designed in Hong Kong.
          </Text>
        </div>
      </div>
    </footer>
  )
}
