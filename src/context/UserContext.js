// src/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/r0981ki6fkj2f').then(response => {
      setUsers(response.data);
    });
  }, []);

  const searchUsers = (query) => {
    setSearch(query);
    axios.get(`http://localhost:8080/users/search?q=${query}`).then(response => {
      setUsers(response.data);
    });
  };

  const addUser = (user) => {
    axios.post('https://sheetdb.io/api/v1/r0981ki6fkj2f', user).then(response => {
      setUsers([...users, response.data]);
      window.location.reload();
    });
  };

  return (
    <UserContext.Provider value={{ users, search, searchUsers, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
