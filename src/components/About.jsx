import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1633681922422-48f291a1a3b3?w=800&q=80" 
                alt="Be Glam Salon"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-rose/30 z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-rose block mb-4">
              O nas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-6 leading-tight">
              Przestrzeń stworzona<br />dla <span className="italic text-rose">Ciebie</span>
            </h2>
            <p className="text-black/60 mb-4 leading-relaxed">
              Be Glam to nie zwykły salon kosmetyczny. To <span className="italic text-rose">przestrzeń doświadczeń</span>, 
              w której każdy detal został przemyślany, byś czuła się wyjątkowo.
            </p>
            <p className="text-black/60 mb-6 leading-relaxed">
              Znajdujemy się w sercu Wadowic, na Osiedlu Pod Skarpą. 
              Łączymy elegancję minimalistycznego designu z ciepłem przytulnej atmosfery – 
              miejsce, gdzie możesz zatrzymać się, odetchnąć i zaufać profesjonalistom.
            </p>
            <p className="text-black/60 leading-relaxed">
              Wierzymy, że <span className="italic">prawdziwe piękno</span> rodzi się w chwili, 
              gdy czujesz się komfortowo w swojej skórze.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
