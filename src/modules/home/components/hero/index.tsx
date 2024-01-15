import BackgroundImage from "@modules/common/components/background-image"

// import { Github } from "@medusajs/icons"
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
          <Button variant="secondary">Explore our Collection</Button>
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
