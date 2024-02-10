'use server'

import { db } from '@/config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { cookies } from 'next/headers'

const login = async formData => {
	const collectionRef = collection(db, 'users')

	const docRef = await addDoc(collectionRef, {
		userName: formData.get('userName'),
		password: formData.get('password'),
	})

	cookies().set('userId', docRef.id)
}

export { login }
