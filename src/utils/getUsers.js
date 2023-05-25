import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return usersData;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
