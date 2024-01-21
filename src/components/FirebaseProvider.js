import { createContext, useEffect, useState } from "react"

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

export const FirebaseContext = createContext({})

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBQASgzTB07Iay-Zy5Ol8_63CEhQ0vlgkI",
	authDomain: "lawn-b622a.firebaseapp.com",
	projectId: "lawn-b622a",
	storageBucket: "lawn-b622a.appspot.com",
	messagingSenderId: "628751968445",
	appId: "1:628751968445:web:9fe4549a24d00c90a76fd4",
}

export const FirebaseProvider = (props) => {
	const children = props.children

	const [firebaseInitializing, setFirebaseInitializing] = useState(true)
	const myApp = initializeApp(firebaseConfig)
	const myFS = getFirestore(myApp)
	const myStorage = getStorage(myApp)

	useEffect(() => {
		setFirebaseInitializing(false)
	}, [myFS, myStorage])

	if (firebaseInitializing) {
		// return <h1>Loading</h1>
	}

	const values = {
		myApp,
		myFS,
		myStorage,
	}

	return (
		<FirebaseContext.Provider value={values}>
			{children}
		</FirebaseContext.Provider>
	)
}
