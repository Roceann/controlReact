// src/routes/PrivateRoute.jsx

import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
