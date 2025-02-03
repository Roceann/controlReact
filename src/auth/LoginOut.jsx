//loginOut.jsx
import { useAuth } from "./AuthProvider";
import { useState } from "react";
import "./LoginOut.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

   
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control form-control-sm"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-light btn-sm">Connexion</button>
    </form>
  );
}

function Logout() {
  const { logout } = useAuth();

  return <button onClick={logout} className="logout-button">Se déconnecter</button>;
}

export { Login, Logout };