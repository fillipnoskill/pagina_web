import React, { useState } from 'react';

const gamesData = [
  { id: 1, name: "The Legend of Zelda: Breath of the Wild", image: "https://zelda.nintendo.com/breath-of-the-wild/assets/media/wallpapers/tablet-1.jpg", genre: "Aventura", year: 2017, description: "Un épico juego de mundo abierto donde exploras el reino de Hyrule." },
  { id: 2, name: "FIFA 23", image: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c", genre: "Deportes", year: 2022, description: "Simulador de fútbol con las ligas y equipos más importantes del mundo." },
  { id: 3, name: "God of War", image: "https://tse1.mm.bing.net/th/id/OIP.y2CUTO8FEnVwqFj6wJr9qwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", genre: "Acción", year: 2018, description: "Kratos viaja por la mitología nórdica junto a su hijo Atreus." },
  { id: 4, name: "Civilization VI", image: "https://th.bing.com/th/id/R.2fcd1c150ac6d8cdc672ae042d2dd179?rik=18rS9ylHSeRBcw&pid=ImgRaw&r=0", genre: "Estrategia", year: 2016, description: "Construye y lidera un imperio para resistir el paso del tiempo." },
  { id: 5, name: "Super Mario Odyssey", image: "https://tse3.mm.bing.net/th/id/OIP.rIwtC2QNdt7Vs6cMJB7RsQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", genre: "Aventura", year: 2017, description: "Acompaña a Mario en un viaje por distintos mundos para rescatar a Peach." },
  { id: 6, name: "Call of Duty: Modern Warfare", image: "https://nintenduo.com/wp-content/uploads/2026/07/Call-of-Duty-Modern-Warfare-4-nth-hero-webp.webp", genre: "Acción", year: 2019, description: "Shooter en primera persona de intensidad táctica y combate militar." },
  { id: 7, name: "NBA 2K23", image: "https://tse2.mm.bing.net/th/id/OIP.xlNG9em_qnV1hqLroN9FcgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", genre: "Deportes", year: 2022, description: "Baloncesto profesional con gráficos realistas y múltiples modos de juego." },
  { id: 8, name: "StarCraft II", image: "https://tse3.mm.bing.net/th/id/OIP.zKJNQDLXxoyql93-TjHp2QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", genre: "Estrategia", year: 2010, description: "Juego de estrategia en tiempo real de ciencia ficción con tres razas únicas." }
];

const GameCard = ({ game, isFavorite, onToggleFavorite, onSelectGame }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', margin: '0.5rem', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <img 
          src={game.image} 
          alt={game.name} 
          style={{ 
            width: '150px', 
            height: '150px', 
            objectFit: 'cover', 
            borderRadius: '4px' 
          }} 
        />
        <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{game.name}</h3>
        <p style={{ margin: '0.2rem 0' }}><strong>Género:</strong> {game.genre}</p>
        <p style={{ margin: '0.2rem 0' }}><strong>Año:</strong> {game.year}</p>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(game.id); }}
          style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem', cursor: 'pointer' }}
        >
          {isFavorite ? 'Quitar de Favoritos ❌' : 'Marcar Favorito ⭐'}
        </button>
        <button 
          onClick={() => onSelectGame(game)} 
          style={{ width: '100%', padding: '0.5rem', cursor: 'pointer' }}
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredGames = gamesData.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? game.genre === selectedGenre : true;
    const matchesFavorites = showFavoritesOnly ? favorites.includes(game.id) : true;
    return matchesSearch && matchesGenre && matchesFavorites;
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Catálogo de Videojuegos</h1>
      
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Buscar título por nombre..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', width: '250px' }}
        />
        
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          style={{ padding: '0.5rem' }}
        >
          <option value="">Todos los géneros</option>
          <option value="Acción">Acción</option>
          <option value="Deportes">Deportes</option>
          <option value="Aventura">Aventura</option>
          <option value="Estrategia">Estrategia</option>
        </select>

        <button 
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          style={{ padding: '0.5rem', cursor: 'pointer' }}
        >
          {showFavoritesOnly ? 'Mostrar Todo el Catálogo' : 'Ver Únicamente Favoritos'}
        </button>

        <span style={{ fontWeight: 'bold' }}>
          Cantidad de favoritos: {favorites.length}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredGames.map(game => (
          <GameCard 
            key={game.id} 
            game={game} 
            isFavorite={favorites.includes(game.id)}
            onToggleFavorite={toggleFavorite}
            onSelectGame={setSelectedGame}
          />
        ))}
      </div>

      {selectedGame && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white', padding: '2rem', borderRadius: '8px',
            maxWidth: '500px', width: '90%', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ marginTop: 0 }}>{selectedGame.name}</h2>
            <img src={selectedGame.image} alt={selectedGame.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <p><strong>Género:</strong> {selectedGame.genre}</p>
            <p><strong>Año de lanzamiento:</strong> {selectedGame.year}</p>
            <p><strong>Descripción:</strong> {selectedGame.description}</p>
            <button 
              onClick={() => setSelectedGame(null)}
              style={{ padding: '0.5rem 1rem', cursor: 'pointer', marginTop: '1rem' }}
            >
              Cerrar Detalle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}