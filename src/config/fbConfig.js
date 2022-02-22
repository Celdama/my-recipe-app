import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_QwzzWUehIJRZ0EFucj3I9vJtgIczr-Q',
  authDomain: 'my-recipe-app-49544.firebaseapp.com',
  projectId: 'my-recipe-app-49544',
  storageBucket: 'my-recipe-app-49544.appspot.com',
  messagingSenderId: '170833709655',
  appId: '1:170833709655:web:5a1aac2e5008861f2db112',
  measurementId: 'G-2THLSBWX5B',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
