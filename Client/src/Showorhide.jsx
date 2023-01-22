import React from 'react'
import { useState } from 'react'
import ChatBot from 'react-chatbot-kit'
import ActionProvider from './components/Chatbot/ActionProvider'
import MessageParser from './components/Chatbot/MessageParser';
import config from './components/Chatbot/config';
import 'react-chatbot-kit/build/main.css'

const Showorhide = () => {
    const [show,toggleShow]=useState(false);
  return (
    <div className='ChatBot'>
      <button onClick={()=>toggleShow(!show)}>
        {show ? 'Hide Chat':'Show chatbot'}
      </button>
      {show && <ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>}
    </div>
  )
}

export default Showorhide