import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TaskListing from './TaskListing';
import Spinner from './Spinner';
import tasksData from '../tasks.json'; 

const TaskListings = ({ isHome = false }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = () => {
      setTimeout(() => {
        const data = isHome ? tasksData.slice(0, 3) : tasksData;
        setTasks(data);
        setLoading(false);
      }, 0);
    };
    loadTasks();
  }, [isHome]);

  return (
    <section className='bg-green-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-green-800 mb-6 text-center'>
          {isHome ? 'Recent Farm Tasks' : 'All Farm Tasks'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {tasks.map((task) => (
              <TaskListing key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

TaskListings.propTypes = {
  isHome: PropTypes.bool,
};

export default TaskListings;
