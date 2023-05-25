import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const API_KEY = import.meta.env.VITE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'userslist-e81b3.firebaseapp.com',
  projectId: 'userslist-e81b3',
  storageBucket: 'userslist-e81b3.appspot.com',
  messagingSenderId: '523954186639',
  appId: '1:523954186639:web:34192cf7b96d8452acc3fa',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
