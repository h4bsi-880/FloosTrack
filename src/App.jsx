import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./index.css";
import InstallPrompt from "./components/InstallPrompt";

export default function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });
    return unsubscribe;
  }, []);

  if (checking) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Login />
        <InstallPrompt />
      </>
    );
  }

  return (
    <>
      <Home user={user} onLogout={() => signOut(auth)} />
      <InstallPrompt />
    </>
  );
}