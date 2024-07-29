import { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Signup = () => {

  const [ formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div className=' flex justify-center items-center w-full'>
      <div className=' bg-cyan-400 max-w-md w-full rounded-lg shadow-lg p-8'>
        <h2 className='text-4xl text-blue-600 text-center font-semibold mb-4'>Signup</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label htmlFor='username' className='py-3 px-1'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Enter username...'
            value={formData.username}
            onChange={handleChange}
            className='rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 border-none'
          />
          <label htmlFor='username' className='py-3 px-1'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email...'
            value={formData.email}
            onChange={handleChange}
            className='rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 border-none'
          />
          <label htmlFor='username' className='py-3 px-1'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter password...'
            value={formData.password}
            onChange={handleChange}
            className='rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 border-none'
          />
          <button className='flex items-center justify-center bg-blue-500 mt-8 gap-3 p-3 rounded-md hover:bg-blue-600 transition duration-200'>
            <IoMdCheckmarkCircleOutline className=''/>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup