import React from 'react'
import { Button } from '@material-ui/core'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

function SignOut() {
  return (
    <div>
        <Button onClick={() => signOut(auth)}>Sign Out</Button>
    </div>
  )
}

export default SignOut