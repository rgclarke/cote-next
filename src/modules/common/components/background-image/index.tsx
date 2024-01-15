import Image from "next/image"

interface ImageBackgroundProps {
  src: string
  alt: string
  // width?: number
  // height?: number
}

const ImageBackground = ({
  src,
  alt,
  // width = 2400,
  // height = 1200,
}: ImageBackgroundProps) => {
  return (
    <div className="relative w-full h-full cover">
      <Image
        src={src}
        alt={alt}
        // width={width}
        // height={height}
        layout="fill"
        objectFit="cover" // Adjust as needed
      />
      {/* additional content */}
    </div>
  )
}

export default ImageBackground
