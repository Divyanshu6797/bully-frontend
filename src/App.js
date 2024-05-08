import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [work, setWork] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = async() => {

    const data1 = {
      work: work,
      room_no: location,
      message: message
  };

  try {
      const response = await axios.post('https://bully-backend.onrender.com/sendmail', data1);
      console.log('Email sent:', response);
  } catch (error) {
      console.error('Error sending email:', error);
  }
    
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ flex: 1 }}></div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#333' }}>You need help</h1>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="work" style={{ fontWeight: 'bold', color: '#555' }}>Work:</label>
          <input type="text" id="work" value={work} onChange={handleWorkChange} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="location" style={{ fontWeight: 'bold', color: '#555' }}>Location:</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ fontWeight: 'bold', color: '#555' }}>Personalized Message:</label>
          <input type="text" id="message" value={message} onChange={handleMessageChange} style={{ width: '100%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }} />
        </div>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSend}>Send</button>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {/* Placeholder for the photo */}
        <div style={{ height: '400px', width: '400px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '50px' }}>
          {/* You can insert an image here */}
        </div>
      </div>
    </div>
  );
};

export default App;
