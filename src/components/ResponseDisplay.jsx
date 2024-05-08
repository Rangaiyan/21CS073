import React from "react";

function ResponseDisplay({ response }) {
  return (
    <div>
      <h2>Response</h2>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default ResponseDisplay;
