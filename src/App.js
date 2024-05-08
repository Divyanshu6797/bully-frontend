import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from './oneImage.png';


const App = () => {
  const [work, setWork] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showEmptyFieldModal, setShowEmptyFieldModal] = useState(false);

  const handleWorkChange = (event) => {
    setWork(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    if (!work || !location) {
      setShowEmptyFieldModal(true);
      return;
    }

    const data1 = {
      work: work,
      room_no: location,
      message: message
    };

    try {
      const response = await axios.post('https://bully-backend.onrender.com/sendmail', data1);
      console.log('Email sent:', response);
      setWork('');
      setLocation('');
      setMessage('');
      setShowModal(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setWork('');
      setLocation('');
      setMessage('');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowEmptyFieldModal(false);
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#007bff', padding: '10px', zIndex: 100 }}>
        <ul style={{ display: 'flex', justifyContent: 'flex-start', listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '20px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        </ul>
      </nav>
      <div style={{ width: '100%', maxWidth: '600px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#333', textAlign: 'center' }}>I am the savior. you need any help???</h1>
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
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }} onClick={handleSend}>Send</button>
      </div>

      {/* Bootstrap Modal for Empty Field */}
      {showEmptyFieldModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', overflow: 'auto' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Error</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                The saviour is dumb. He couldn't find your location or task. Please fill in the required fields.
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End of Bootstrap Modal for Empty Field */}

      {/* Bootstrap Modal for Message Sent */}
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)', overflow: 'auto' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Message Sent</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Your message is sent to the savior. He will contact you soon. Thank you for using our service.
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End of Bootstrap Modal for Message Sent */}
    </div>
  );
};

export default App;
