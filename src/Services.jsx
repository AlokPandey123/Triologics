import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/employee-demonstrating-effective-communication-generative-ai_883586-210561.jpg')`, // Replace with your image path or URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Add overlay */}
      <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          The Best IT Services in the Region
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Give us a call and get the best quote for your enquiry
        </p>
        <button className="bg-pink-600 text-white py-3 px-6 rounded-full hover:bg-pink-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};


// Service Feature Card Component
const ServiceFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center items-center bg-blue-100 text-blue-500 w-12 h-12 rounded-full mx-auto mb-4">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Core Service Card Component
const CoreServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Main Services Page
const Services = () => {
  const features = [
    {
      title: 'Smart Softwares',
      description: 'Get the best IT solutions with smart and efficient software.',
      icon: 'https://img.icons8.com/ios-filled/50/000000/cloud-network.png',
    },
    {
      title: 'Trusted Security',
      description: 'Advanced security systems to protect your data and privacy.',
      icon: 'https://img.icons8.com/ios-filled/50/000000/privacy.png',
    },
    {
      title: 'Award-Winners',
      description: 'Awards won for best services and outstanding support.',
      icon: 'https://img.icons8.com/ios-filled/50/000000/trophy.png',
    },
    {
      title: 'Great Experience',
      description: 'Delivering quality IT experiences for over a decade.',
      icon: 'https://img.icons8.com/ios-filled/50/000000/happy.png',
    },
  ];

  const coreServices = [
    {
      title: 'Security Audit',
      description: 'Ensure top-notch security for your business.',
      image: 'https://www.example.com/security-audit.jpg', // Replace with actual image
    },
    {
      title: 'Performance Checks',
      description: 'Optimize and boost your system’s performance.',
      image: 'https://www.example.com/performance-checks.jpg',
    },
    {
      title: 'Vulnerability Report',
      description: 'Get a detailed vulnerability report for your infrastructure.',
      image: 'https://www.example.com/vulnerability-report.jpg',
    },
    {
      title: 'Web Development',
      description: 'We build high-quality, scalable web solutions.',
      image: 'https://www.example.com/web-development.jpg',
    },
    {
      title: 'Legal Contracts',
      description: 'Ensure your business stays legally compliant.',
      image: 'https://www.example.com/legal-contracts.jpg',
    },
    {
      title: 'Strategic Planning',
      description: 'Plan strategically for long-term success.',
      image: 'https://www.example.com/strategic-planning.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Service Features Section */}
      <section className="py-16 bg-[#D6D6D6]">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ServiceFeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Core Technology Services Section */}
      <section className="py-16 bg-[#E8EAEA]">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Core Technology Services</h2>
          <p className="text-gray-600">
            Explore our range of technology services tailored to meet your business needs.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <CoreServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
