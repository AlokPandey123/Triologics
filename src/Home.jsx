import React from 'react';
import { Link } from 'react-router-dom';
import videoSource from '../src/assets/video.mp4'; // Import the video file

const Home = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6">Best Digital Technology Agency</h1>
        <p className="mb-6">Welcome to Digital Startup Agency</p>
        <Link to="/about">
          <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 hover:text-white transition">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
