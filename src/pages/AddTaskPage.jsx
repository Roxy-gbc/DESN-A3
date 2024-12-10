import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddTaskPage = ({ addTaskSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Farming');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [reward, setReward] = useState('');
  const [postedBy, setPostedBy] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      category,
      description,
      deadline,
      reward,
      postedBy,
      // Optionally, add a default icon if none chosen
      // categoryIcon: '/assets/images/default_icon.png'
    };

    addTaskSubmit(newTask);

    toast.success('Task Added Successfully!');

    return navigate('/tasks');
  };

  return (
    <section className='bg-green-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div 
          className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'
          style={{
            border: '4px solid #8B4513',
            boxShadow: '0 5px 10px rgba(0,0,0,0.3), inset 0 0 3px rgba(0,0,0,0.2)',
          }}
        >
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6 text-green-900'>
              Add New Farm Task
            </h2>

            <div className='mb-4'>
              <label
                htmlFor='category'
                className='block text-green-700 font-bold mb-2'
              >
                Task Category
              </label>
              <select
                id='category'
                name='category'
                className='border rounded w-full py-2 px-3 text-green-800'
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value='Farming'>Farming</option>
                <option value='Combat'>Combat</option>
                <option value='Animals'>Animals</option>
                <option value='Fishing'>Fishing</option>
                <option value='Foraging'>Foraging</option>
                <option value='Crafting'>Crafting</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-green-700 font-bold mb-2'>
                Task Title
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2 text-green-800'
                placeholder='e.g. Harvest Blueberries'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-green-700 font-bold mb-2'
              >
                Task Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3 text-green-800'
                rows='4'
                placeholder='Describe what needs to be done...'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='deadline'
                className='block text-green-700 font-bold mb-2'
              >
                Deadline
              </label>
              <input
                type='text'
                id='deadline'
                name='deadline'
                className='border rounded w-full py-2 px-3 text-green-800'
                placeholder='e.g. End of Summer, 2 days, Today'
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='reward'
                className='block text-green-700 font-bold mb-2'
              >
                Reward
              </label>
              <input
                type='text'
                id='reward'
                name='reward'
                className='border rounded w-full py-2 px-3 text-green-800'
                placeholder='e.g. 100g, Rare Seed, etc.'
                value={reward}
                onChange={(e) => setReward(e.target.value)}
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='postedBy'
                className='block text-green-700 font-bold mb-2'
              >
                Posted By
              </label>
              <input
                type='text'
                id='postedBy'
                name='postedBy'
                className='border rounded w-full py-2 px-3 text-green-800'
                placeholder='Who posted this task? e.g. Mayor Lewis'
                value={postedBy}
                onChange={(e) => setPostedBy(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
                style={{
                  backgroundImage: `url('/assets/images/wood.png')`,
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
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTaskPage;
