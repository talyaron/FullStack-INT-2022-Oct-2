import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './HomePage.scss'; 

const HomePage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [namesList, setNamesList] = useState([]);

  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const response = await axios.get('/api/names');
      if (!response){
        return <div>no names</div>
      }
      setNamesList(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/api/add', { name, age });
  //     dispatch({ type: 'ADD_NAME', payload: response.data });
  //     setName('');
  //     setAge('');
  //     fetchNames();
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div className="HomePage">
      <h1 className="HomePageTitle">Home Page</h1>
      <form className="HomePageForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="HomePageInput"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="HomePageInput"
          />
        </div>
        <button type="submit" className="HomePageButton">
          Add
        </button>
      </form>
      <div className="NamesList">
        <h2>Previously Added Names:</h2>
        <ul>
          {namesList.map((nameData) => (
            <li key={nameData._id}>{nameData.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;