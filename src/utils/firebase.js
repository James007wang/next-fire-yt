'use server'

import { addDoc, doc } from "firebase/firestore"

const addPost = async (formData) => {
    const collectionRef = collect(db, 'posts')
    const userId = cookies().get('userId')
    const userRef = doc(db, 'users', userId)
    const docRef =
    await addDoc(collectionRef, {
        title: formData.get('title'),
        content: formData.get('content'),
        tags: formData.get('tags').split(',').map(tag => tag.trim()),
        user: userRef
    })
}

export {
    addPost
}