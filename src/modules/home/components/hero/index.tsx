import SearchIcon from "@modules/common/icons/magnify"
import BackgroundImage from "@modules/common/components/background-image"
import Link from "next/link"

import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 h-screen w-full min-h-full border-b border-ui-border-base">
        <BackgroundImage
          src="/images/vineyard-meyers-unsplash.jpg"
          alt="A vinyard with hills in the background in the sunshine"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        {/* Search Bar */}
        <div className="mx-auto grid w-full place-content-center py-4">
          <Link
            href="/search"
            className="w-64 rounded-full border border-neutral-300 bg-white px-4 py-1 text-left text-sm ring-transparent ring-offset-2 hover:border-transparent hover:ring-2 hover:ring-chablis dark:border-neutral-500 dark:bg-neutral-900 dark:hover:border-transparent dark:hover:ring-chablis"
            aria-label="Search"
            scroll={false}
          >
            <div className="pointer-events-none flex items-center px-1">
              <SearchIcon />
              <span className="inline-block pl-1 pt-0.5"> Search ⌘K</span>
            </div>
          </Link>
        </div>
        <span>
          <Heading
            level="h1"
            className="px-8 text-5xl leading-10 font-serif text-white"
          >
            Cote de Chine
          </Heading>
          <Heading
            level="h2"
            className="px-8 text-xl leading-10 font-normal text-white"
          >
            Fine Wines in Hong Kong
          </Heading>
        </span>
        <a href="/store">
          <button className="mt-4 inline-block mr-4 rounded-full border border-white px-3 py-1.5 text-white text-lg hover:border-chablis dark:hover:border-chablis hover:bg-chablis hover:text-white dark:border-white dark:hover:bg-chablis">
            Explore our Wines
          </button>
        </a>
      </div>
    </div>
    // <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
    //   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
    //     <span>
    //       <Heading
    //         level="h1"
    //         className="text-3xl leading-10 text-ui-fg-base font-normal"
    //       >
    //         Cote de Chine
    //       </Heading>
    //       <Heading
    //         level="h2"
    //         className="text-3xl leading-10 text-ui-fg-subtle font-normal"
    //       >
    //         Fine Wines in Hong Kong
    //       </Heading>
    //     </span>
    //   </div>
    // </div>
  )
}

export default Hero
