// src/App.js
import React, { useContext, useState } from 'react';
import { UserProvider } from './context/UserContext';
import UserTable from './components/UserTable';


const App = () => {


 
  return (
    <UserProvider>
      <div>
        <UserTable />
      </div>
    </UserProvider> 

  );
};




export default App;
