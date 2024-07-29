import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    // <div className='flex flex-col justify-center items-center h-full bg-neutral-300'>
    //   <h2 className='text-3xl font-medium pb-8'>Login</h2>
    //   <form onSubmit={handleSubmit} className='flex flex-col gap-4 h-full'>
    //     <label htmlFor='email' className=''>Email:</label>
    //     <input
    //       type='email'
    //       placeholder='example@example.com'
    //       name='email'
    //       id='email'
    //       className='bg-none rounded-md h-10 p-2'
    //     />
    //     <label htmlFor='password' className=''>Password:</label>
    //     <input
    //       type='password'
    //       placeholder='example@example.com'
    //       name='password'
    //       id='password'
    //       className='bg-none rounded-md h-10 p-2'
    //     />
    //     <button className='flex justify-center items-center gap-2 bg-blue-500 rounded-lg text-lg px-5 py-2 mt-4'>
    //       <IoMdCheckmarkCircleOutline className='text-white'/>
    //       Submit
    //     </button>
    //   </form>
    // </div>

    <div className="flex justify-center items-center w-full">
    <div className="bg-cyan-400 max-w-md w-full rounded-lg shadow-lg p-8">
      <h2 className="text-4xl text-blue-600 text-center font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className="mb-4">
          <label htmlFor="email" className="py- px-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 border-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="py-3 px-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 border-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          // type="submit"
          className="flex justify-center items-center gap-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          <IoMdCheckmarkCircleOutline className='text-white'/>
          Login
        </button>
      </form>
    </div>
    </div>
  )
}

export default Login