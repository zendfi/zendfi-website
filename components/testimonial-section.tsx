import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center justify-start text-center lg:text-left">
            <div className="relative lg:flex-shrink-0">
              <img
                src="/images/blessed-headshot.png"
                alt="Blessed Tosin-Oyinbo testimonial"
                className="rounded-2xl shadow-lg w-full max-w-[240px] mx-auto"
              />
            </div>
            <div className="space-y-6 lg:ml-8 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
              <p className="text-xl text-muted-foreground leading-relaxed italic">
                "We envision a world where payments move as fast as ideas. ZendFi empowers businesses and creators with instant, borderless transactions built for speed, scalability, and inclusion."
              </p>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Blessed Tosin-Oyinbo</div>
                <div className="text-muted-foreground">Co-founder & Engineering Lead, Zendfi</div>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="Zendfi Logo"
                  width={80}
                  height={24}
                  className="h-6 w-auto filter hue-rotate-[19deg] brightness-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
