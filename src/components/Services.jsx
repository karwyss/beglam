import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const servicesData = [
  {
    id: 1,
    title: 'Manicure Hybrydowy',
    description: 'Trwały lakier utrzymujący się do 3 tygodni. Precyzyjna pielęgnacja i stylizacja paznokci.',
    price: '120',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
  },
  {
    id: 2,
    title: 'Lifting Rzęs',
    description: 'Naturalne podkreślenie spojrzenia bez codziennego malowania. Efekt do 8 tygodni.',
    price: '180',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=80'
  },
  {
    id: 3,
    title: 'Makijaż Okolicznościowy',
    description: 'Profesjonalny makijaż na ślub, studniówkę lub inne wyjątkowe wydarzenie.',
    price: '200',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80'
  },
  {
    id: 4,
    title: 'Zabieg na Twarz',
    description: 'Kompleksowa pielęgnacja dobierana indywidualnie do potrzeb Twojej skóry.',
    price: '250',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80'
  },
  {
    id: 5,
    title: 'Pedicure SPA',
    description: 'Relaksująca pielęgnacja stóp z masażem i aromatycznymi kosmetykami.',
    price: '150',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80'
  },
  {
    id: 6,
    title: 'Przedłużanie Rzęs',
    description: 'Metoda 1:1, efekt naturalny lub dramatyczny. Precyzyjna aplikacja.',
    price: '280',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
  },
  {
    id: 7,
    title: 'Botox Rzęs',
    description: 'Odżywienie i wzmocnienie naturalnych rzęs dla zdrowszego wyglądu.',
    price: '90',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=80'
  },
  {
    id: 8,
    title: 'Regulacja Brwi',
    description: 'Precyzyjna regulacja threading lub woskiem dla idealnego kształtu.',
    price: '40',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80'
  },
  {
    id: 9,
    title: 'Trychologia',
    description: 'Diagnoza i pielęgnacja skóry głowy oraz włosów.',
    price: '150',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80'
  },
  {
    id: 10,
    title: 'Makijaż Permanentny',
    description: 'Mikropigmentacja brwi, ust lub liner. Efekt do 2 lat.',
    price: '800',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80'
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <>
      <section id="services" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-rose block mb-4">
              Usługi
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Cennik usług
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ x: 8 }}
                onClick={() => setSelectedService(service)}
                className={`group relative grid md:grid-cols-[1fr_auto_200px] items-center gap-6 p-4 md:p-6 bg-white/5 border border-white/10 hover:border-rose/40 cursor-pointer transition-all duration-300 ${
                  i === 1 ? 'border-rose/40 bg-rose/5' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover"
                  />
                  <div>
                    <h3 className="font-accent text-lg md:text-xl tracking-wider text-cream group-hover:text-rose transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cream/50 text-sm hidden md:block">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="font-serif text-2xl md:text-3xl text-rose">
                  {service.price} <span className="text-sm text-cream/50">zł</span>
                </div>
                
                <div className="hidden md:block w-24 h-16 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="#footer"
              className="inline-block px-10 py-4 bg-rose text-black text-xs tracking-[0.2em] uppercase hover:bg-rose/80 hover:shadow-[0_0_30px_rgba(212,165,165,0.4)] transition-all duration-300"
            >
              Umów wizytę
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-rose/30 max-w-lg w-full p-8 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-2xl text-cream/30 hover:text-rose transition-colors"
              >
                ×
              </button>
              
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-48 object-cover mb-6"
              />
              <h3 className="font-accent text-2xl tracking-wider text-cream mb-2">
                {selectedService.title}
              </h3>
              <p className="font-serif text-3xl text-rose mb-4">
                {selectedService.price} zł
              </p>
              <p className="text-cream/60 mb-6 leading-relaxed">
                {selectedService.description}
              </p>
              <a
                href="#footer"
                onClick={() => setSelectedService(null)}
                className="block text-center px-6 py-3 bg-rose text-black text-xs tracking-[0.15em] uppercase hover:bg-rose/80 transition-colors duration-300"
              >
                Umów wizytę
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
