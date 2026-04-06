import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    alt: 'Nail Art',
    category: 'Paznokcie'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    alt: 'Makijaż',
    category: 'Makijaż'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
    alt: 'Zabiegi na twarz',
    category: 'Twarz'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    alt: 'Rzęsy',
    category: 'Rzęsy'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
    alt: 'Portfolio',
    category: 'Portfolio'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-beige">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-rose block mb-4">
            Galeria
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-black">
            Nasze realizacje
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(img)}
              className={`relative overflow-hidden cursor-pointer group ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-cream text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-cream text-3xl hover:text-rose transition-colors"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-center text-cream mt-4 text-sm tracking-wider">
                {selectedImage.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
