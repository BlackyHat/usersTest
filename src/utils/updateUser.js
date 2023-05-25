import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export const updateUser = async ({ id, ...newUserData }) => {
  try {
    const ref = doc(db, 'users', id);
    await updateDoc(ref, { ...newUserData });
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};
