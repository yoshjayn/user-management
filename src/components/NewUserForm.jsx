import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const NewUserForm = ({ onClose }) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const { addUser } = useContext(UserContext);



  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ first_name, last_name, email, age, gender });
    setFirstName('');
    setLastName('');
    setEmail('');
    setAge('');
    setGender('');
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white px-4 rounded-lg shadow-lg w-96 p-4">
        <h2 className="text-xl mb-4 font-bold px-4">Add New User</h2>
        <p className="mb-6 px-4">Enter the details for the new user.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4 ">

            {/* First Name */}
            <div className="w-1/2 mr-4 p-4">
            <div>
            <label className="block mb-2">First Name</label>
            </div>
              <input
                type="text"
                placeholder="Enter first name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className=" w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Last Name */}
            <div className="w-1/2 p-4">
            <div>
            <label className="block mb-2">Last Name</label>
            </div>
              <input
                type="text"
                placeholder="Enter last name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className='px-4'>
            <div>
            <label className="block mb-2">Email</label>
            </div>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2 p-4">
            <div>
            <label className="block mb-2">Age</label>
            </div>
              <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-1/2 p-4">
            <div>
            <label className="block mb-2">Gender</label>
            </div>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="p-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={onClose} // Call onClose to hide the form
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default NewUserForm;
