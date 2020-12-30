import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB06I8lmNEjELU-80IVke0LWLvCHy9jNxo',
    authDomain: 'netflix-1655d.firebaseapp.com',
    projectId: 'netflix-1655d',
    storageBucket: 'netflix-1655d.appspot.com',
    messagingSenderId: '952365594847',
    appId: '1:952365594847:web:61049bba3ce3c42e87516a',
};

const firebase = Firebase.initializeApp(config);

export { firebase };