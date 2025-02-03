// src/Components/searchbar/SearchBar.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./SearchBar.scss"; // correction de la casse

export default function SearchBar({ onSearchResults }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/ba89627ef6d5cdd0d38c2317d97be959/search/${query}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        if (data.response === "error") {
          setError("Aucun résultat trouvé");
          setSuggestions([]);
        } else {
          setSuggestions(data.results || []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length > 2) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/ba89627ef6d5cdd0d38c2317d97be959/search/${query}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      if (data.response === "error") {
        setError("Aucun résultat trouvé");
        setResults([]);
      } else {
        const uniqueResults = Array.from(new Set(data.results.map(hero => hero.id)))
          .map(id => data.results.find(hero => hero.id === id));
        setResults(uniqueResults);
        onSearchResults(uniqueResults);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Rechercher un super héros..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          list="suggestions"
        />
        <datalist id="suggestions">
          {suggestions.map((hero) => (
            <option key={hero.id} value={hero.name} />
          ))}
        </datalist>
        <button type="submit" className="btn btn-primary">Rechercher</button>
      </form>
      {isLoading && <div className="loader"></div>}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
