import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';
import { LIST_LIMIT } from '../constants/paginationParams';

export const getCountCollection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const count = Math.ceil(querySnapshot.size / LIST_LIMIT);
    return count;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
