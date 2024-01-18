import Image from "next/image"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Link from "next/link"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <div className="h-16 bg-white border-b ">
        <nav className="flex h-full items-center content-container justify-between">
          <Link
            href="/cart"
            className="group text-small-semi text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
          >
            <ChevronDown
              className="group-hover:text-chablis rotate-90"
              size={16}
            />
            <span className="mt-px hidden small:block txt-compact-plus text-ui-fg-subtle group-hover:text-chablis">
              Back to shopping cart
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-ui-fg-subtle hover:text-chablis">
              Back
            </span>
          </Link>

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

          {/* <Link
            href="/"
            className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base"
          >
            Côte de Chine
          </Link> */}

          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative">{children}</div>
      <div className="py-4 w-full flex items-center justify-center">
        <MedusaCTA />
      </div>
    </div>
  )
}
