import admin from 'firebase-admin';
import serviceAccount from './service-account-key.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://teacherayaa.appspot.com',
});
console.log('Firebase Connected!');

const bucket = admin.storage().bucket();
export default bucket;