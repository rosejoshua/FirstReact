import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBPVya0O-KYQG_pgT4bQ7C10K5C1uAeN6A',
  authDomain: 'certain-purpose-332602.firebaseapp.com',
  projectId: 'certain-purpose-332602',
  storageBucket: 'certain-purpose-332602.appspot.com',
  messagingSenderId: '915092488894',
  appId: '1:915092488894:web:41269e5a20dafe568d54ef',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;