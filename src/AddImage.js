import React, { useState } from 'react'
import {app, storage} from './firebase-config'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
const AddImage = () => {
    const [data, setData] = useState({});

    //put an image in Firebase Storage
    const handleInput = () => {
     const storageRef = ref(storage, `images/${data.name}`);
        const uploadTask = uploadBytesResumable(storageRef, data);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
        },
        (error) => alert(error.message),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => (
                console.log("File available at", downloadURL)
            ))
        })
    }

  return (
    <div>
        <input type="file" name="email" onChange={(e) => setData(e.target.files[0])} />
        <button type='submit' onClick={handleInput}>Submit</button>
    </div>
  )
}

export default AddImage