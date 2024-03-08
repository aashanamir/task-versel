// App.js
import React, { useState } from 'react';

import Login from "./components/login/Index";
import Appointment from "./components/appointments/Index";

function App() {
  const [token, setToken] = useState('');

  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Appointment token={token} setToken={setToken} />}
    </div>
  );
}



export default App;
