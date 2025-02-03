// src/Components/fetchHero/FetchHero.jsx

import ApiFetch from "../../api/ApiFetch";
import "./FetchHero.scss";
import { useAuth } from "../../auth/AuthProvider";
import { Link } from "react-router"; 

export default function FetchHero({ heroId }) {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <ApiFetch url={`https://www.superheroapi.com/api.php/327bc6e2a225432100b715467b5e4cbc/${heroId}`}>
        {(hero) => (
          <div className="hero__item">
            <div
              className="card-container"
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".hero-info").style.display = "block";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".hero-info").style.display = "none";
              }}
            >
              <p>Nom: {hero.name}</p>
              {hero.image && (
                <Link to={`/hero/${hero.id}`}>
                  <img
                    src={hero.image.url}
                    alt="image de hero"
                    className="imagehero"
                  />
              </Link>
              )}
              <div className="hero-info">
                <p>Nom : {hero.name}</p>
              </div>
            </div>
          </div>
        )}
      </ApiFetch>
    </div>
  );
}
