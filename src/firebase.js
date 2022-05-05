import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBhdDUjY_XTK4tVLw4WtQVuiollJlp_4Zk',
    authDomain: 'movie-project-d8dff.firebaseapp.com',
    projectId: 'movie-project-d8dff',
    storageBucket: 'movie-project-d8dff.appspot.com',
    messagingSenderId: '270522710670',
    appId: '1:270522710670:web:9d58a28b13c117d53067df',
    measurementId: 'G-RTPR4HPQYN',
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const providerFb = new FacebookAuthProvider();

export const auth = getAuth(app);
