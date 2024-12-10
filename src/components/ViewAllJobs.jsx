import { Link } from 'react-router-dom';

const ViewAllTasks = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/jobs'
        className='block bg-brown-600 text-white text-center py-4 px-6 rounded-xl hover:bg-brown-700 transition-shadow shadow-md'
        style={{
          backgroundColor: '#8B4513', 
        }}
      >
        View All Tasks
      </Link>
    </section>
  );
};

export default ViewAllTasks;
