import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import TaskListings from '../components/TaskListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <TaskListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
