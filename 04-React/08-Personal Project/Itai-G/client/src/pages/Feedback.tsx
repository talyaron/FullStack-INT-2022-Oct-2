import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import './feedback.scss';
import useLoader from '../hooks/useLoder';
import { ThreeDots } from 'react-loader-spinner';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { isLoader } = useLoader();


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('/api/feedback/add-feedback', {
        name,
        email,
        message,
      });

      console.log('Feedback submitted:', response.data);
      
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  return (
    <>
     
      {isLoader ? (
        <div className="loaderContainer">
          <ThreeDots
            height={80}
            width={80}
            color="green"
            ariaLabel="loading"
          />
        </div>
      ) : (
      <><Navbar /><div className="container">
            <h2>Feedback Form</h2>
            <p>Please provide your feedback by filling out the form below:</p>
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  className="input-field"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div></>
      )}
    </>
  );
};

export default FeedbackForm;