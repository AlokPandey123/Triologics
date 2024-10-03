import React from 'react';
import logo from '../src/assets/logo.jpeg'; // Import the image

function Blogs() {
  const blogsLeft = [
    {
      title: 'Analyzing Spotify Music UI/UX',
      description: 'Siri\'s latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0a8687159923371.63a98a103dc02.jpg',
    },
    {
      title: 'Continuous Design and Good Strategies',
      description: 'As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business.',
      img: 'https://thumbs.dreamstime.com/b/continuous-improvement-concept-business-198002520.jpg',
    }
  ];

  const blogsRight = [
    {
      title: 'Warner Music Group buys tickets',
      description: 'We\'re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don\'t appreciate the moment until it\'s passed.',
    },
    {
      title: 'The human brain in the new Era',
      description: 'We\'re not always in the position that we want to be in. We\'re constantly trying to express ourselves and actualize our dreams. We\'re constantly growing to express ourselves.',
    },
    {
      title: 'A healthy body is light and silent',
      description: 'That\'s what I do. That\'s what I\'m here for. Don\'t be afraid to be wrong because you can\'t learn anything from a compliment.',
    }
  ];

  const additionalBlogs = [
    {
      title: 'Rover raised $65 million for pet sitting',
      description: 'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover...',
      img: 'https://th.bing.com/th/id/OIP.hD4t63f3JR7-mA0Cbl0sHgHaE8?w=1000&h=667&rs=1&pid=ImgDetMain',
    },
    {
      title: 'MateLabs mixes machine learning with IFTTT',
      description: 'If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with...',
      img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_853/https://iies.in/wp-content/uploads/2023/08/Machine-Learning.png',
    },
    {
      title: 'US venture investment ticks up',
      description: 'Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings...',
      img: 'https://www.alleywatch.com/wp-content/uploads/2024/06/May-2024-AlleyWatch-NYC-Venture-Capital-Funding-Report.002.jpeg',
    },
    {
      title: 'Startup Insticator raises $5.2M',
      description: 'Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes...',
      img: 'https://th.bing.com/th/id/OIP.57wyki2C9nZa-900eBT4yQHaEJ?w=1722&h=964&rs=1&pid=ImgDetMain',
    }
  ];

  return (
    <div className="App bg-[#D6D6D6]">
      {/* Hero Section with 50% height */}
      <div
        className="relative bg-cover bg-center h-[50vh]" // 50% height
        style={{
          backgroundImage: "url('https://www.johnsnowlabs.com/wp-content/uploads/2022/04/general-technical-guide.jpg')" // Replace with your image
        }}
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content inside the hero */}
        <div className="container mx-auto px-6 flex flex-col justify-center h-full relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            A Blog for Passionate People <br /> and Website Lovers
          </h1>
          <p className="text-white mb-6 w-[60%]">
            Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game.
            Those attacking wealth creation are often just seeking status.
          </p>

          {/* Button Styled and Positioned next to the paragraph */}
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 inline-block w-1/6">
            Read Article
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side: Two larger blogs in one row */}
          <div className="md:col-span-2 flex gap-6">
            {blogsLeft.map((blog, index) => (
              <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
                <img src={blog.img} alt={blog.title} className="rounded-lg mb-4 h-1/2" />
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 flex-grow">{blog.description}</p>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition duration-300">
                  Read Article
                </button>
              </div>
            ))}
          </div>

          {/* Right Side: Three smaller blogs with Read More links */}
          <div className="flex flex-col justify-between">
            {blogsRight.map((blog, index) => (
              <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-lg mb-2">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 flex-grow">{blog.description}</p>
                <a href="#" className="text-pink-600 hover:underline">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Additional Blog Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {additionalBlogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={blog.img} alt={blog.title} className="rounded-lg mb-4 h-[180px]" />
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a href="#" className="text-pink-600 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
