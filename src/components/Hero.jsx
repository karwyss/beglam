import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-rose/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase text-rose mb-4"
          >
            Wadowice • Osiedle Pod Skarpą
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] mb-6"
          >
            Be <span className="italic text-rose">Glam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-cream/70 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          >
            Twoje piękno, nasza pasja. Odkryj nową wersję siebie w przestrzeni stworzonej z myślą o Tobie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#footer"
              className="inline-block px-8 py-4 bg-rose text-black text-xs tracking-[0.2em] uppercase hover:bg-rose/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,165,165,0.4)]"
            >
              Umów wizytę
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-cream/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
