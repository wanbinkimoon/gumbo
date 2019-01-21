import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3QyY1gdibjCS87_QJitoQ3AIXgIAT1EY',
  authDomain: 'jazzology-7be01.firebaseapp.com',
  databaseURL: 'https://jazzology-7be01.firebaseio.com',
  projectId: 'jazzology-7be01',
  storageBucket: 'jazzology-7be01.appspot.com',
  messagingSenderId: '809601814042',
};
firebase.initializeApp(config);

const db = firebase.firestore();

const settings = {
  timestampsInSnapshots: true,
};

db.settings(settings);

export default db;
