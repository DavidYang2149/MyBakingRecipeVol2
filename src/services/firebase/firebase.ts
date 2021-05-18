import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

import 'firebase/storage';

import config from 'config';

firebase.initializeApp(config);

export const auth = firebase.auth();

export const fireStore = firebase.firestore;

export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export const storage = firebase.storage();
