import Image from "next/image"

export default function ExperienceSection() {
  const logos = [
    { name: "Sony", src: "/placeholder.svg?height=40&width=120" },
    { name: "Nikon", src: "/placeholder.svg?height=40&width=120" },
    { name: "Ubisoft", src: "/placeholder.svg?height=40&width=120" },
    { name: "Specsavers", src: "/placeholder.svg?height=40&width=120" },
    { name: "Sony", src: "/placeholder.svg?height=40&width=120" },
    { name: "Nikon", src: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
        <span className="text-gray-500">Our Experience</span>
        {logos.map((logo, index) => (
          <div key={index} className="grayscale opacity-50 hover:opacity-100 transition-opacity">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

