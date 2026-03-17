import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Llevan sus propios productos de limpieza?</AccordionTrigger>
          <AccordionContent>
            Sí, contamos con maquinaria industrial y productos especializados de alta calidad para cada tipo de superficie, incluidos en todos nuestros presupuestos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cuál es su área de cobertura en Quito?</AccordionTrigger>
          <AccordionContent>
            Nuestra base está en Pusuquí, pero brindamos servicio en todo el Distrito Metropolitano de Quito, valles y zonas aledañas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Cómo puedo obtener una cotización?</AccordionTrigger>
          <AccordionContent>
            Puedes contactarnos por WhatsApp. Para trabajos grandes (oficinas o edificios), realizamos una inspección técnica sin costo para darte un valor exacto.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}