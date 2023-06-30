import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAvH38PEsJY0kfvc0yhLUhKGWJaaatWJk4',
	authDomain: 'love-meter-e1de3.firebaseapp.com',
	projectId: 'love-meter-e1de3',
	storageBucket: 'love-meter-e1de3.appspot.com',
	messagingSenderId: '44585486031',
	appId: '1:44585486031:web:b74aeb9d37f7811c0699ba',
	measurementId: 'G-H78B9WH792',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
export default db