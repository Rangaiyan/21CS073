import React, { useState } from 'react';
import axios from 'axios';

function NumInput({ onResponse }) {
  const [numberId, setNumberId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      onResponse(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number ID:
        <input type="text" value={numberId} onChange={(e) => setNumberId(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default NumInput;