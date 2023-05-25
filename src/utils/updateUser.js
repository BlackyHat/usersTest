import { doc, updateDoc } from 'firebase/firestore';
import { db } from './config';

export const updateDataInFirestore = async (
  collectionName,
  docId,
  newUserData
) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, newUserData);
    console.log('document updated');
  } catch (error) {
    console.log(error);
  }
};
