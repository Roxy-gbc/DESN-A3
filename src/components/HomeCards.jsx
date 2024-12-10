import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>

          {/* For Farmhands Card */}
          <Card bg='bg-green-100'>
            <h2 className='text-2xl font-bold text-green-900'>For Farmhands</h2>
            <p className='mt-2 mb-4 text-green-800'>
              View the list of tasks that need to be completed around the farm. Pitch in where you can and help your friends thrive!
            </p>
            <Link
              to='/jobs'
              className='inline-block bg-green-700 text-white rounded-lg px-4 py-2 hover:bg-green-800 transition-shadow shadow-md'
            >
              View Tasks
            </Link>
          </Card>

          {/* For Host Farmer Card */}
          <Card bg='bg-yellow-100'>
            <h2 className='text-2xl font-bold text-yellow-900'>For the Host Farmer</h2>
            <p className='mt-2 mb-4 text-yellow-800'>
              Add new tasks to keep the farm running smoothly. Organize chores, projects, and goals to ensure everyone knows what needs doing.
            </p>
            <Link
              to='/add-job'
              className='inline-block bg-yellow-600 text-white rounded-lg px-4 py-2 hover:bg-yellow-700 transition-shadow shadow-md'
            >
              Add Task
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
