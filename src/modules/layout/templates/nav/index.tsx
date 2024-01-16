import Image from "next/image"
import { cookies } from "next/headers"
import Link from "next/link"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AccountIcon from "@modules/common/icons/account-circle"
import CartIcon from "@modules/common/icons/cart"
import SearchIcon from "@modules/common/icons/magnify"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  const regionCookie = cookies().get("_medusa_region")?.value
  const currentRegion = regionCookie && JSON.parse(regionCookie)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-white/50 border-white/30 backdrop-blur-md">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} currentRegion={currentRegion} />
            </div>
          </div>
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base"
            >
              <Image
                src="/svg/code-de-chine-wordmark-black.svg"
                alt="Cote de Chine"
                width={160}
                height={26}
              />
            </Link>
          </div>
          {/* Link Bar */}
          <div className="flex items-center h-full flex-1 basis-0 justify-end">
            <div className="flex items-center rounded-full pl-2 sm:pl-3 pr-3 sm:pr-4 py-0.5 hover:bg-white/50 justify-end">
              <div className="flex items-center gap-x-2 sm:gap-x-6 h-full">
                {/* {process.env.FEATURE_SEARCH_ENABLED && ( */}
                <Link
                  className="hidden sm:inline-block hover:text-chablis"
                  href="/search"
                  scroll={false}
                >
                  <span className="sr-only">search</span>
                  <SearchIcon />
                </Link>
                {/* )} */}
                {/* Account */}
                <Link className="hover:text-chablis" href="/account">
                  <span className="sr-only">account</span>
                  <AccountIcon />
                </Link>
                {/* Cart */}
                <Suspense
                  fallback={
                    <Link className="flex" href="/cart">
                      <span className="sr-only">cart</span>
                      <CartIcon />
                    </Link>
                  }
                >
                  {/* @ts-expect-error Server Component */}
                  <CartButton />
                </Suspense>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
