import { storage } from '../services/firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadAvatar = async (file) => {
  try {
    const imageRef = ref(storage, `usersAvatars/${Date.now() + file.name}`);
    await uploadBytes(imageRef, file);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
