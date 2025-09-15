import React from 'react'

const FurnitureGallery = () => {
  // Sample furniture data with image paths
  const furnitureItems = [
    {
      id: 1,
      name: "Salotto Milano",
      description: "Elegante arredamento per salotto",
      price: "€2,800",
      image: "/images/furniture/salotto1.jpg",
      ambiente: "Salotto"
    },
    {
      id: 2,
      name: "Salotto Venezia",
      description: "Ambiente classico veneziano",
      price: "€3,200",
      image: "/images/furniture/salotto2.jpg",
      ambiente: "Salotto"
    },
    {
      id: 3,
      name: "Salotto Roma",
      description: "Lusso romano per il soggiorno",
      price: "€4,500",
      image: "/images/furniture/salotto3.jpg",
      ambiente: "Salotto"
    },
    {
      id: 4,
      name: "Salotto Firenze",
      description: "Stile rinascimentale fiorentino",
      price: "€5,800",
      image: "/images/furniture/salotto4.jpg",
      ambiente: "Salotto"
    },
    {
      id: 5,
      name: "Salotto Napoli",
      description: "Eleganza partenopea",
      price: "€3,500",
      image: "/images/furniture/salotto5.jpg",
      ambiente: "Salotto"
    },
    {
      id: 6,
      name: "Salotto Torino",
      description: "Raffinatezza piemontese",
      price: "€4,200",
      image: "/images/furniture/salotto6.jpg",
      ambiente: "Salotto"
    },
    {
      id: 7,
      name: "Salotto Bologna",
      description: "Tradizione emiliana di lusso",
      price: "€3,800",
      image: "/images/furniture/salotto7.jpg",
      ambiente: "Salotto"
    }
  ]

  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gold mb-4" style={{fontFamily: 'Playfair Display'}}>
            Collezione d'Arte
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Scoprite i nostri pezzi esclusivi, ognuno progettato per creare 
            un ambiente di lusso unico nella vostra casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {furnitureItems.map((item) => (
            <div 
              key={item.id} 
              className="luxury-gradient rounded-2xl p-6 border border-gold border-opacity-30 hover:border-opacity-60 transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDRhZjM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzFhMWExYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhc2EgZCdBcnRlPC90ZXh0Pjwvc3ZnPg=='
                  }}
                />
                {/* Ambiente Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {item.ambiente}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gold mb-2" style={{fontFamily: 'Playfair Display'}}>
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gold">
                    {item.price}
                  </span>
                  <button className="bg-gold text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                    Acquista
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FurnitureGallery