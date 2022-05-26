import initializeFirebaseAuth from '../Firebase/firebase.init'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

initializeFirebaseAuth()
const useFirebase = () => {
  const providerGoogle = new GoogleAuthProvider()
  const auth = getAuth()

  const handleResisterUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        // Signed in
        const user = userInfo.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  const hadnleSignInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        // Signed in
        const user = userInfo.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return {
    handleGoogleSignIn,
    handleLogOut,
    handleResisterUser,
    hadnleSignInUser,
  }
}

export default useFirebase
