import { initializeApp } from "firebase-admin";
import { cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import { credentials } from "./credentials.js";


export default function dbConnect() {
   if (!getApps().length) {
    initializeApp({
        credential: cert(credentials)
    })
   }
   getFirestore
}