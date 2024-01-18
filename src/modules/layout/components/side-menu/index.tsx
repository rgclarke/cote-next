"use client"

import Image from "next/image"
import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import MenuIcon from "@modules/common/icons/menu"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import Link from "next/link"
import { Fragment } from "react"

import CountrySelect from "../country-select"
const SideMenuItems = {
  Store: "/store",
  Search: "/search",
  Contact: "/contact",
  "Delivery & Pick-up": "/delivery",
  "About Côte": "/company",
  Legal: "/legal",
  FAQ: "/faq",
}

const SideMenu = ({
  regions,
  currentRegion,
}: {
  regions: Region[] | null
  currentRegion?: {
    regionId: string
    countryCode: string
  }
}) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-chablis">
                  <MenuIcon size="24" />
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full sm:w-1/3 2xl:w-1/4 sm:min-w-min h-dvh z-30 inset-x-0 text-sm text-ui-fg-on-color m-0 sm:m-2 backdrop-blur-2xl">
                  <div className="flex flex-col h-full bg-chablis/70 sm:rounded-sm justify-between p-4">
                    <div className="flex flex-row h-12 sm:-mt-2 sm:-ml-2">
                      <div
                        className="basis-1/4 flex pl-2 pt-1.5 items-start justify-start"
                        id="xmark"
                      >
                        <button
                          onClick={close}
                          className="hover:text-neutral-800"
                        >
                          <XMark size="24" />
                        </button>
                      </div>
                      <div className="basis-1/2 inline-block pt-1 mx-auto sm:hidden justify-center items-center h-full">
                        <Link
                          href="/"
                          className="flex justify-center items-center"
                        >
                          <Image
                            src="/svg/code-de-chine-wordmark-white.svg"
                            alt="Cote de Chine"
                            width={160}
                            height={26}
                          />
                        </Link>
                      </div>
                      <div className="basis-1/4 sm:hidden"></div>
                    </div>
                    <div className="flex mt-4 ml-3 sm:ml-0 w-full h-full justify-start">
                      <ul className="flex flex-col w-full h-full gap-4 items-start">
                        {Object.entries(SideMenuItems).map(([name, href]) => {
                          return (
                            <li key={name}>
                              <Link
                                href={href}
                                className="text-xl leading-8 hover:text-neutral-800"
                                onClick={close}
                              >
                                {name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && currentRegion && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                            currentRegion={currentRegion}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        ©{new Date().getFullYear()} Trove Limited
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
