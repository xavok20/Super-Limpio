import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const brands = [
  { name: "Hotel Hilton", logo: "/logos/hilton.png" },
  { name: "Banco Pichincha", logo: "/logos/pichincha.png" },
  { name: "USFQ", logo: "/logos/usfq.png" },
  { name: "Hotel Quito", logo: "/logos/hotel-quito.png" },
  // Añade las embajadas y demás aquí
]

export function BrandCarousel() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8 text-slate-700">Empresas que confían en nosotros</h2>
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-1">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/4 lg:basis-1/5">
                <div className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  <span className="font-semibold text-slate-400">{brand.name}</span> 
                  {/* Reemplaza el span por <img src={brand.logo} /> cuando tengas los logos */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}