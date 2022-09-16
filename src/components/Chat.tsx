import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()) as any)
    })
  }, [])
  const user = auth.currentUser;
  const { uid } = user as {uid: string}
  const messageClass = uid === (auth as any).currentUser.uid ? 'sent' : 'received';
  console.log(messageClass)

  return (
    <div>
      <SignOut />
          <div className="msgs">
              {messages.map(({ id, text, photoURL }) => (
                  <div key={id} className={`msg ${messageClass}`}>
                      <img src={photoURL} alt="photoURL" /> 
                      <p>{text}</p>
                  </div>
              ))}
          </div>
          <SendMessage />
    </div>
    
  )
}

export default Chat