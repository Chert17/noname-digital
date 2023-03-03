import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/auth-slice/auth-slice';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const useAuth = () => {
  const dispatch = useDispatch();

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            user: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            },
            token: user.accessToken,
          })
        );
      })
      .catch(console.warn);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            user: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            },
            token: user.accessToken,
          })
        );
      })
      .catch(console.warn);

  const authWithGoogle = () =>
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            user: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            },
            token: user.accessToken,
          })
        );
      })
      .catch(console.warn);

  return { registerUser, loginUser, authWithGoogle };
};
