import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
	apiKey: 'AIzaSyAzs7C52NlsfPiFkltHxgLqQK8Y-XaBUIg',
	authDomain: 'praktikum-5f59f.firebaseapp.com',
	projectId: 'praktikum-5f59f',
	storageBucket: 'praktikum-5f59f.appspot.com',
	messagingSenderId: '1028927771502',
	appId: '1:1028927771502:web:aa03fd1a38ce7fee33677f',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

const courseStorageRefs = ref(storage, `/praktikum/course/${uuidv4()}`)

export { storage, courseStorageRefs }
