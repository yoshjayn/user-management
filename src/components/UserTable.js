import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import NewUserForm from './NewUserForm';
import Pages from './Pages';

const UserTable = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [showSuggestions,setShowSuggestions]=useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const { users, search, searchUsers } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(users.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  
  useEffect(() => {
    // Filter users based on the search query
    console.log("users =",users);
    if (users.length != 0) {
    const results = users.filter(user => user.first_name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredUsers(results);
    console.log("result =" ,results);}
  }, [searchQuery]);


  return (
    <div className=''>
      <div className='bg-blue-500 text-white p-4'>
      <div className='mx-4 flex justify-between items-center'>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md text-black"
          onBlur={()=>setShowSuggestions(false)}
          onFocus={()=>setShowSuggestions(true)} 
        />
        
      {/* Implements a search input with dynamic user suggestions dropdown, showing up to 5 users. */}
      {showSuggestions && filteredUsers != 0 ? <div key={2} className="fixed bg-white rounded-lg shadow-lg w-[14rem] ml-42 mt-52 px-1 py-1">
        <ul className="py-1 px-1">
            {
                filteredUsers.map((user, index) => {
                  if (index < 5) {
                    return (
                      <li className="block px-1 py-1 text-gray-800 hover:bg-gray-100" key={user.id}>
                        🧐{user.first_name}
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
        </div> : null}
        <button
          onClick={() => setShowForm(true)}
          className='m-5 px-4 py-2 border-white border-2 text-white rounded-md'
        >
          Add New User
        </button>
      </div>
</div>
      <div className="m-4">
        <div className="min-w-full mx-4" >
      <p className='text-3xl font-bold mb-2'>User Details</p>
      <p>View and manage user information.</p>
      </div>
      <table className="min-w-full bg-white mt-4">
      <thead>
          <tr className="">
            <td className="px-4 text-gray-500 py-2 w-1/5">First Name</td>
            <td className="px-4 text-gray-500 py-2 w-1/5">Last Name</td>
            <td className="px-4 text-gray-500 py-2 w-1/5">Email</td>
            <td className="px-4 text-gray-500 py-2 w-1/5">Age</td>
            <td className="px-4 text-gray-500 py-2 w-1/5">Gender</td>
          </tr>
      </thead>
        <tbody>
          {currentData.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.first_name}</td>
              <td className="py-2 px-4 border-b">{user.last_name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.age}</td>
              <td className="py-2 px-4 border-b">{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Pages
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {showForm && 
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
      <NewUserForm onClose={() => setShowForm(false)} />
        </div>
        </div>}
    </div>
  );
};

export default UserTable;
