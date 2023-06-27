import { cert, initializeApp } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'

const app = initializeApp({
  credential: cert({
    projectId: process.env.FUNC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FUNC_FIREBASE_PRIVATE_KEY,
    privateKey: process.env.FUNC_FIREBASE_CLIENT_EMAIL,
  }),
  storageBucket: process.env.FUNC_FIREBASE_DATABASE_URL,
  databaseURL: process.env.FUNC_FIREBASE_STORAGE_BUCKET,
})

const bucket = getStorage().bucket()

export { app, bucket }
