import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div>
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  )
}

export default SignIn;