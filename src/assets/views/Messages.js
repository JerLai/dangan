import React from 'react'
import "./Messages.css";
import { Button} from "@material-ui/core";
function Messages() {
  return (
    <div className="messages">

      <div className="messages__list">
        <div className="messages__header">
          <h2>Messages</h2>
        </div>
        <div className="messages__none">
          <h1>Send a message, get a message</h1>
          <p>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</p>
          <Button variant="outlined" className="messages__current__start">
            Start a conversation
          </Button>  
        </div>
      

      </div>
      <div className="messages__current">
        <h1>You don't have a message selected</h1>
        <p>Choose one from your existing messages, or start a new one.</p>
        <Button variant="outlined" className="messages__current__new">
          New message
        </Button>
      </div>
    </div>
  )
}

export default Messages
