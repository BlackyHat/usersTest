import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export const addUser = async (userData) => {
  try {
    const timestamp = serverTimestamp();
    const dataWithTimestamp = { ...userData, createdAt: timestamp };
    await addDoc(collection(db, 'users'), dataWithTimestamp);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};
