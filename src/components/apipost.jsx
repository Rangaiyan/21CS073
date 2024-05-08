import React from 'react';

function Apipost() {
  // Function to send POST request to the server
  const sendPostRequest = async () => {
    const data = {
      companyName: "goMart",
      ownerName: "Rahul",
      rollNo: "1",
      ownerEmail: "rahul@abc.edu",
      accessCode: "FKDLjg"
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch('http://localhost:3000/register', requestOptions);
      const responseData = await response.json();
      console.log(responseData); // Log the response data from the server
      alert('Registration successful!');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h1>API Post Test</h1>
      <button onClick={sendPostRequest}>Register</button>
    </div>
  );
}

export default Apipost;
