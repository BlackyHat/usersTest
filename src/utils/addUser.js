import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export const writeDataToFirestore = async (userData) => {
  try {
    const timestamp = serverTimestamp();
    const dataWithTimestamp = { ...userData, createdAt: timestamp };
    const docRef = await addDoc(collection(db, 'users'), dataWithTimestamp);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};
