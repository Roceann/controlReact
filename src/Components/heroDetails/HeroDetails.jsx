// heroDetails.jsx

import { useParams } from "react-router";
import ApiFetch from "../../api/ApiFetch";
import "./HeroDetails.scss";

export default function HeroDetails() {
  const { id } = useParams();

  return (
    <div className="hero-details">
      <ApiFetch url={`https://www.superheroapi.com/api.php/327bc6e2a225432100b715467b5e4cbc/${id}`}>
        {(hero) => (
          <div className="hero-details__container">
            <h2>{hero.name}</h2>
            <img src={hero.image.url} alt={hero.name} className="hero-details__image" />
            <div className="hero-details__info">
              <p><strong>Biographie:</strong> {hero.biography["full-name"]}</p>
              <p><strong>Première apparition:</strong> {hero.biography["first-appearance"]}</p>
              <p><strong>Alignement:</strong> {hero.biography.alignment}</p>
              <p><strong>Intelligence:</strong> {hero.powerstats.intelligence}</p>
              <p><strong>Force:</strong> {hero.powerstats.strength}</p>
              <p><strong>Vitesse:</strong> {hero.powerstats.speed}</p>
              <p><strong>Durabilité:</strong> {hero.powerstats.durability}</p>
              <p><strong>Pouvoir:</strong> {hero.powerstats.power}</p>
              <p><strong>Combat:</strong> {hero.powerstats.combat}</p>
            </div>
          </div>
        )}
      </ApiFetch>
    </div>
  );
}
