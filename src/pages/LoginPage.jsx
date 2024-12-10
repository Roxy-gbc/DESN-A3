import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/images/banner.png';

const LoginPage = ({ onLoginSuccess }) => {
  const [enteredCode, setEnteredCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredCode.length === 6) {
      onLoginSuccess();
      navigate('/');
    } else {
      alert('Please enter a valid 6-character farm lobby code.');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 6) {
      setEnteredCode(value);
    }
  };

  return (
    <>
      {/* Hero section with background image */}
      <section
        className="py-20"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Enter Your Farm Lobby Code
          </h1>
          <p className='my-4 text-xl text-white'>
            Connect to your co-op farm’s shared task board
          </p>
        </div>
      </section>

      <section className='py-10 bg-gray-50'>
        <div className='max-w-md mx-auto bg-white rounded-lg shadow p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='code'
                className='block text-xl font-medium text-gray-700 mb-2'
              >
                Farm Lobby Code
              </label>
              <input
                id='code'
                type='text'
                value={enteredCode}
                onChange={handleChange}
                placeholder='Enter 6 characters'
                className='block w-full border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>
            <button
              type="submit"
              className="text-white font-medium py-3 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{
                backgroundImage: `url('/src/assets/images/wood.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                border: '4px solid #8B4513',
                borderRadius: '0px',
                boxShadow: '0 5px 10px rgba(0,0,0,0.3), inset 0 0 3px rgba(0,0,0,0.2)',
                transform: 'rotate(-2deg)',
                display: 'inline-block',
              }}
            >
              Enter Farm
            </button>
          </form>
          <p className='mt-6 text-center text-gray-600 text-sm'>
            This code ensures you join the correct co-op farm lobby so that your team's tasks remain private and shared only among your group.
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
