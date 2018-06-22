import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

console.log('API_KEY', process.env.API_KEY);

export { firebase, database as default };

//--------------------------------------------------------------------//
//child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

//-----------------------------------------------------//
// database.ref('expenses').on(
//   'value',
//   snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   },
//   err => {
//     console.error('Error is ', err);
//   }
// );

//--------------------------------------------------------//
// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

//---------------------------------------------------------//
// database.ref('expenses').push({
//   description: 'bread',
//   note: 'for sandwiches',
//   amount: 399,
//   createdAt: 4687643547567645
// });
//----------------------------------------------------//
// database.ref('notes').push({
//   title: 'To do',
//   body: 'Go for a run'
// });

// database.ref('notes/LFbHe0JDWlWrDH4WbXY').remove();

//---------------------------------------------//

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   err => {
//     console.error('Error is ', err);
//   }
// );

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//------------------------------------------------//
// database
//   .ref()
//   .set({
//     name: 'Nikita Vlasov',
//     age: 22,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Krakow',
//       country: 'Poland'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(err => {
//     console.log('This failed', err);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

//--------------------------------------------//

// Alternative way to delete
// database.ref('isSingle').set(null);

// database
//   .ref('isSingle')
//   .remove()
//     .then(() => {
//     console.log('removed sucessfully');
//     })
//     .catch(err => {
//     console.error(err);
//     });
