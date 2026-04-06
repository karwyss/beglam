import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Philosophy() {
  const principles = [
    {
      title: 'Naturalność',
      description: 'Podkreślamy Twoje atuty, nie zmieniamy tego, co piękne. Wydobywamy naturalny blask, który już w Tobie istnieje.',
      icon: faGem
    },
    {
      title: 'Pewność siebie',
      description: 'Każda wizyta to moment dla Ciebie. Budujemy poczucie własnej wartości przez dbałość o detale.',
      icon: faHeart
    },
    {
      title: 'Indywidualne podejście',
      description: 'Twoja uroda jest unikalna. Dobieramy zabiegi i produkty idealnie dopasowane do Twoich potrzeb.',
      icon: faUser
    }
  ]

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-rose block mb-4">
            Filozofia piękna
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Trzy filary naszej pasji
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8 bg-white border border-black/5 hover:border-rose/20 hover:shadow-lg hover:shadow-rose/10 transition-all duration-500 group"
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-rose block mb-6"
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.span>
              <h3 className="font-accent text-xl tracking-wider text-black mb-4 group-hover:text-rose transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
