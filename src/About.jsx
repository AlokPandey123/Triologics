import React, { useState } from 'react';
import teamImage1 from '../src/assets/imag3e.png'; // Import the first image
import teamImage2 from '../src/assets/image.png'; // Import the second image
import missionImage from '../src/assets/home.png'; // Import the third image

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-[#D6D6D6]">
      <section className="container mx-auto px-4 py-16">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={teamImage1}
              alt="Team Meeting"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              We’re Delivering Only Exceptional Quality Work
            </h2>
            <p className="text-gray-600 mb-4">
              We are formed by a team with extensive experience in innovation and digital transformation. We work mainly in the creation of digital solutions and products based on new technologies in an Open Innovation model.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of creative and technological Geeks think and work differently.
            </p>
            <button
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
              onClick={handleReadMore}
            >
              {showMore ? 'Show Less' : 'Read More'}
            </button>

            {showMore && (
              <div className="mt-6 text-gray-600">
                <p>
                  Our team focuses on the creation of digital solutions and products based on new technologies in an Open Innovation model. We strive to provide the best quality work with a focus on long-term partnerships and mutual success.
                </p>
                <p className="mt-4">
                  Our goal is to continuously innovate and think outside the box, ensuring that we bring cutting-edge solutions to our clients in a timely and effective manner.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 text-white p-6 rounded-lg flex justify-around mb-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold">254+</h3>
            <p>People</p>
            <p className="text-sm text-blue-200">Adipiscing elit, sed do eiusmod.</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">12</h3>
            <p>World Offices</p>
            <p className="text-sm text-blue-200">Sed do eiusmod tempor.</p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
          {/* Right: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={teamImage2}
              alt="Team Work"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Left: Text */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Benefits Of Choosing Our Agency
            </h2>
            <p className="text-gray-600 mb-4">
              Learn from experts with years of experience in providing industry solutions. Benefit from hands-on advice and guidance to ensure the success of your project.
            </p>

            {/* Progress bars */}
            <div className="my-4">
              <div className="flex justify-between mb-2">
                <span>Locally Recommended</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="my-4">
              <div className="flex justify-between mb-2">
                <span>Projects Completed Successfully</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={missionImage}
              alt="Team Mission"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Your Success Is Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Learn from a company that is dedicated to ensuring your success through personalized solutions and cutting-edge innovation.
            </p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
