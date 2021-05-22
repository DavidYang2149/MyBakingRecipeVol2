import { auth, provider } from 'src/services/firebase/firebase';

export const postUserLogin = async () => {
  const response = await auth.signInWithPopup(provider);
  return response;
};

export const postUserLogout = async () => {
  await auth.signOut();
};
