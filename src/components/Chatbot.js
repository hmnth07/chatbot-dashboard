import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

export default function Chatbot() {
  return (
    <div className='chatbot'>
      <div className="topNav bg">
        <div>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt=''/>
            <div>
              <p className="title">Appointment Bot</p>
              <p className="caption">Book Easy Appointment</p>
            </div>
        </div> 
        <ClearIcon className="clearIcon"/>
      </div>

      <div className='chatbot__chat'>
        <div className='chat received'>
          <p className='message'>Hello, Let me know how I can help you today?</p>
          <p className='time'>Bot 21:50</p>
        </div>
        <div className='chat sent'>
          <p className='message'>I need to make an appointment.</p>
          <p className='time'>you 21:51</p>
        </div>

      </div>
    </div>
  )
}
