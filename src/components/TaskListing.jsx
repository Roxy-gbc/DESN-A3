import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemsShippedIcon from '../assets/images/Items_Shipped_Icon.png';
import itemsCombat_Icon from '../assets/images/Combat_Icon.png';
import itemsFish_Icon from '../assets/images/Fish_Icon.png';
import itemsForaging_Icon from '../assets/images/Sturdy_Ring.png';
import itemsAnimals_Icon from '../assets/images/Animals_Icon.png';

const iconMap = {
  "Farming": itemsShippedIcon,
  "Combat": itemsCombat_Icon,
  "Animals": itemsAnimals_Icon,
  "Fishing": itemsFish_Icon,
  "Foraging": itemsForaging_Icon
};

const TaskListing = ({ task }) => {
  const iconSrc = iconMap[task.category];
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = task.description;
  if (!showFullDescription && description.length > 90) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div 
      className='bg-white rounded-xl shadow-md relative' 
      style={{
        border: '4px solid #8B4513', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 0 3px rgba(0,0,0,0.1)',
      }}
    >
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-green-700 my-2 text-lg font-semibold'>
            Category: {task.category}
          </div>
          <h3 className='text-2xl font-bold text-brown-900'>{task.title}</h3>
        </div>

        <div className='mb-5 text-gray-700'>{description}</div>

        <button
          onClick={() => setShowFullDescription((prev) => !prev)}
          className='text-green-700 mb-5 hover:text-green-800 underline'
        >
          {showFullDescription ? 'Show Less Details' : 'Show More Details'}
        </button>

        <h3 className='text-green-800 mb-2 font-semibold'>
          Reward: {task.reward}
        </h3>
        <h4 className='text-green-700 mb-2'>Deadline: {task.deadline}</h4>
        <p className='text-sm text-gray-600 mb-4'>
          Posted by: {task.postedBy}
        </p>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between items-center mb-4'>
          {task.category && (
            <img 
              src={iconSrc} 
              alt={`${task.category} icon`} 
              className='h-10 w-10 mb-3 lg:mb-0'
            />
          )}
          <Link
            to="#" // Add the appropriate path here
            className='h-[36px] bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Completed!
          </Link>
        </div>
      </div>
    </div>
  );
};

TaskListing.propTypes = {
  task: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    reward: PropTypes.string,
    deadline: PropTypes.string,
    postedBy: PropTypes.string,
  }),
};

export default TaskListing;
