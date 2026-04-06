import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const services = [
  'Manicure Hybrydowy',
  'Lifting Rzęs',
  'Makijaż Okolicznościowy',
  'Zabieg na Twarz',
  'Pedicure SPA',
  'Przedłużanie Rzęs',
  'Botox Rzęs',
  'Regulacja Brwi',
  'Makijaż Permanentny',
  'Inna usługa'
]

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <footer id="footer" className="py-16 bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Logo & Info */}
          <div>
            <a href="#" className="font-accent text-3xl tracking-[0.3em] text-cream">
              BE <span className="text-rose">GLAM</span>
            </a>
            
            <p className="text-cream/50 mt-4 mb-8 max-w-xs">
              Luksusowy salon urody w sercu Wadowic. Twoje piękno, nasza pasja.
            </p>

            <div className="space-y-3 text-cream/70 text-sm">
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-rose" />
                Osiedle Pod Skarpą, Wadowice
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-rose" />
                +48 000 000 000
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-rose" />
                kontakt@beglam.pl
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faClock} className="text-rose" />
               Pn-Pt: 9:00-19:00, Sob: 9:00-15:00
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-cream/30 text-cream hover:bg-rose hover:border-rose hover:text-black transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="font-accent text-xl tracking-wider text-cream mb-6">
              Umów wizytę
            </h3>
            <p className="text-cream/50 text-sm mb-6">
              Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-rose/20 border border-rose/30 text-center"
              >
                <FontAwesomeIcon icon={faCheck} className="text-rose text-3xl mb-2" />
                <p className="text-cream">Dziękujemy! Skontaktujemy się wkrótce.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Imię i nazwisko"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-cream/30 text-sm focus:border-rose focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Numer telefonu"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-cream/30 text-sm focus:border-rose focus:outline-none transition-colors"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Adres email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-cream/30 text-sm focus:border-rose focus:outline-none transition-colors"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream text-sm focus:border-rose focus:outline-none transition-colors appearance-none cursor-pointer"
                  style={{ color: formData.service ? '#faf8f5' : 'rgba(250,248,245,0.4)' }}
                >
                  <option value="" disabled>Wybierz usługę</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-black">
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Dodatkowe informacje (opcjonalnie)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-cream/30 text-sm focus:border-rose focus:outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-rose text-black text-xs tracking-[0.15em] uppercase hover:bg-rose/80 transition-colors duration-300"
                >
                  Wyślij zgłoszenie
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-cream/30 text-xs">
            © 2026 Be Glam. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
