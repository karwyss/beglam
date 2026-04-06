import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'O nas', href: '#about' },
    { label: 'Filozofia', href: '#philosophy' },
    { label: 'Usługi', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Kontakt', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream/98 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-accent text-xl md:text-2xl tracking-[0.25em] text-black">
          BE <span className="text-rose">GLAM</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a 
                href={item.href}
                className="text-xs tracking-[0.15em] uppercase text-black/70 hover:text-rose transition-colors duration-300"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hidden md:block px-5 py-2.5 text-xs tracking-[0.15em] uppercase bg-rose text-black hover:bg-rose/80 transition-all duration-300"
        >
          Umów wizytę
        </motion.a>
      </div>
    </motion.nav>
  )
}
