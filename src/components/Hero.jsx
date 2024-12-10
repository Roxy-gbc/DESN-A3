import bannerImage from '../assets/images/banner.png';

const Hero = ({
  title = 'Welcome to Your Co-op Farm’s Task Board',
  subtitle = 'Work together with your friends to grow your farm and keep track of all pending tasks',
}) => {
  return (
    <section
      className="py-20 mb-4"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white drop-shadow-md'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
