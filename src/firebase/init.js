// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3kMmF4d6nXKXBxap6FUgCzlgFiEDH9Go',
  authDomain: 'porfolio-marcinpelszyk.firebaseapp.com',
  projectId: 'porfolio-marcinpelszyk',
  storageBucket: 'porfolio-marcinpelszyk.appspot.com',
  messagingSenderId: '538580275844',
  appId: '1:538580275844:web:e920333ff60779a7d3a8d1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const projectsColection = collection(db, 'projects')

export {
  projectsColection,
  db
} 
  