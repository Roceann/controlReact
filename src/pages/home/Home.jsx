// Code: Home.jsx

import { useState } from "react";
import FetchHero from "../../Components/fetchHero/FetchHero";
import SearchBar from "../../Components/searchBar/SearchBar";
import { useAuth } from "../../auth/AuthProvider";
import "./Home.scss";

export default function Home() {
  const { user } = useAuth();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="home">
      <section className="hero-section">
        <h1>Bienvenue sur SuperHero App</h1>
        <p>
          Découvrez vos super-héros préférés et explorez leurs statistiques.
          {!user && (
            <span> Connectez-vous pour accéder à plus de fonctionnalités.</span>
          )}
        </p>
      </section>

      {user && <SearchBar onSearchResults={handleSearchResults} />}

      {searchResults.length > 0 ? (
        searchResults.map((hero) => (
          <FetchHero key={hero.id} heroId={hero.id} />
        ))
      ) : (
        <FetchHero heroId={45} /> 
      )}
    </div>
  );
}
