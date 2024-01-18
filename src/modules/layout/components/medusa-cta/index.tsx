import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Côte de Chine is a service of
      <a
        href="https://trove.hk"
        className="hover:text-chablis"
        target="_blank"
        rel="noreferrer"
      >
        Trove Limited.
      </a>
      Developed in Hong Kong.
    </Text>
  )
}

export default MedusaCTA
