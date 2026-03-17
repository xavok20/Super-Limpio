export function ComparisonGallery() {
  const comparisons = [
    { antes: "/fotos/alfombra-antes.jpg", despues: "/fotos/alfombra-despues.jpg", titulo: "Limpieza de Alfombras" },
    { antes: "/fotos/piso-antes.jpg", despues: "/fotos/piso-despues.jpg", titulo: "Pulido de Pisos" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Resultados Reales</h2>
        <Carousel plugins={[Autoplay({ delay: 4000 })]} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {comparisons.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <img src={item.antes} alt="Antes" className="w-full h-64 object-cover" />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-xs">ANTES</span>
                  </div>
                  <div className="relative">
                    <img src={item.despues} alt="Después" className="w-full h-64 object-cover" />
                    <span className="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold">DESPUÉS</span>
                  </div>
                </div>
                <p className="text-center mt-4 font-medium text-slate-600">{item.titulo}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}