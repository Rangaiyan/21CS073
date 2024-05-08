import React, { useEffect, useState } from 'react';

const Apic = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'http://20.244.56.144/test/register';
    const data = {
      companyName: "affordmed",
      ownerName: "Rangaiyan",
      rollNo: "21cs073",
      ownerEmail: "rangaiyan29@gmail.com",
      accessCode: "FKDLjg"
    };

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const request = new Request(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    fetch(request)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setResponseData(data);
        console.log('Success:', data);
      })
      .catch(error => {
        setError(error);
        console.error('Error:', error);
      });

  }, []); // Empty dependency array means this effect will only run once after the initial render

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!responseData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Response Data</h1>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>
    </div>
  );
}

export default Apic;
