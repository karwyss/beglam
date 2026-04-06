import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    id: 1,
    quote: "Nigdy nie czułam się tak zaopiekowana. Atmosfera Be Glam to coś niesamowitego – wchodzisz jako klientka, wychodzisz jako przyjaciółka. Efekt mojego makijażu ślubnego utrzymał się cały dzień i noc.",
    author: 'Anna K.',
    rating: 5
  },
  {
    id: 2,
    quote: "Wreszcie znalazłam miejsce, gdzie paznokcie wyglądają tak samo dobrze po dwóch tygodniach jak zaraz po wizycie. Profesjonalizm na najwyższym poziomie. Polecam każdemu!",
    author: 'Magdalena W.',
    rating: 5
  },
  {
    id: 3,
    quote: "Lifting rzęs to była najlepsza decyzja. Oszczędzam czas każdego ranka, a wyglądam jakbym miała profesjonalny makijaż. Dziękuję za cierpliwość i doradztwo!",
    author: 'Katarzyna M.',
    rating: 5
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-rose block mb-4">
            Opinie
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Co mówią nasze klientki
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-gold text-xl" />
                ))}
              </div>
              <p className="font-serif text-2xl md:text-3xl italic text-black/80 mb-8 leading-relaxed">
                "{testimonials[current].quote}"
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-rose">
                {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-black/10 hover:border-rose hover:text-rose transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? 'bg-rose' : 'bg-black/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-black/10 hover:border-rose hover:text-rose transition-colors"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
