import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chickens = () => {
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    fetchChickens();
  }, []);

  const fetchChickens = async () => {
    try {
      const response = await axios.get('http://localhost:3000/chickens');
      setChickens(response.data);
    } catch (error) {
      console.error('Error fetching chickens:', error);
    }
  };

  const handleAddChicken = async () => {
    try {
      const response = await axios.post('http://localhost:3000/chickens', {
        age_months: 12,
        weight_kg: 2.5,
        total_eggs: 20,
        daily_eggs: 2,
      });
      setChickens(prevChickens => [...prevChickens, response.data]);
    } catch (error) {
      console.error('Error adding chicken:', error);
    }
  };

  const handleDeleteChicken = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/chickens/${id}`);
      setChickens(prevChickens => prevChickens.filter(chicken => chicken.id !== id));
    } catch (error) {
      console.error('Error deleting chicken:', error);
    }
  };

  return (
    <div>
      <h2>My Chickens</h2>
      <button onClick={handleAddChicken}>Add Chicken</button>
      <ul>
        {chickens.map(chicken => (
          <li key={chicken.id}>
            <p>ID: {chicken.id}</p>
            <p>Age (months): {chicken.age_months}</p>
            <p>Weight (kg): {chicken.weight_kg}</p>
            <p>Total Eggs: {chicken.total_eggs}</p>
            <p>Date: {chicken.date}</p>
            <p>Daily Eggs: {chicken.daily_eggs}</p>
            <button onClick={() => handleDeleteChicken(chicken.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chickens;
