// Code: 404page.jsx

import { Link } from "react-router";
import "./404Page.scss";

export default function Page404() {
  return (
    <div className="not-found">
      <h1>404 - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
    </div>
  );
}
