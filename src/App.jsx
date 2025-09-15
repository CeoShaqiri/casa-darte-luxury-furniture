import { useState } from 'react'
import './App.css'
import FurnitureGallery from './components/FurnitureGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="py-8 text-center border-b border-gold border-opacity-20">
        <h1 className="text-6xl font-bold text-gold mb-4" style={{fontFamily: 'Playfair Display'}}>
          Casa d'Arte
        </h1>
        <p className="text-xl text-gray-300 italic" style={{fontFamily: 'Cormorant Garamond'}}>
          Eccellenza Italiana nell'Arredamento di Lusso
        </p>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gold mb-8" style={{fontFamily: 'Playfair Display'}}>
            Benvenuti nel Mondo del Lusso Italiano
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Scoprite la nostra esclusiva collezione di mobili artigianali, 
            dove ogni pezzo racconta una storia di tradizione, eleganza e raffinatezza italiana.
          </p>
          
          <div className="luxury-gradient rounded-3xl p-12 shadow-2xl border border-gold border-opacity-30">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gold mb-4">150+</h3>
                <p className="text-gray-300">Pezzi Unici</p>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gold mb-4">50+</h3>
                <p className="text-gray-300">Anni di Esperienza</p>
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gold mb-4">1000+</h3>
                <p className="text-gray-300">Clienti Soddisfatti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxury-gradient rounded-2xl p-8 border border-gold border-opacity-30">
            <h3 className="text-2xl font-bold text-gold mb-6">Demo Interattivo</h3>
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-gold text-black font-semibold py-3 px-8 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Esplora Collezione: {count}
            </button>
            <p className="text-gray-400 mt-4 italic">
              Presto disponibile la nostra galleria completa di mobili di lusso
            </p>
          </div>
        </div>
      </section>

      {/* Furniture Gallery */}
      <FurnitureGallery />

      {/* Footer */}
      <footer className="py-12 border-t border-gold border-opacity-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h4 className="text-2xl font-bold text-gold mb-4">Casa d'Arte</h4>
          <p className="text-gray-400 mb-6">
            Milano • Roma • Firenze • Venezia
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Casa d'Arte. Tutti i diritti riservati. Artigianato italiano di lusso.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App