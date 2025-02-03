// Header.jsx

import { Login, Logout } from "../../auth/LoginOut";
import { useAuth } from "../../auth/AuthProvider";
import { Link } from "react-router";
import "./Header.scss";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <h1><Link to="/">SuperHero App</Link></h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        {user && <li><Link to="/contact">Contact</Link></li>}
      </ul>
      <div className="auth-section">
        {user ? <Logout /> : <Login />}
      </div>
    </header>
  );
}
