import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../services/firebase";
import style from "./Auth.module.scss";

export const AuthProvider = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => setUser(credentials.user))
        .catch((error) => console.error(error));
    });
    return unsub;
  }, [auth]);

  return user != null ? (
    <div className={style.auth}>{user.displayName}</div>
  ) : (
    <></>
  );
};
