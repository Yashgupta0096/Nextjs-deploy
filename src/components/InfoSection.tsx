import React from 'react';

const InfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 p-4">
          <h2 className="text-3xl font-bold mb-4">EQ beats IQ</h2>
        </div>
        <div className="md:w-1/3 p-4">
          <p className="text-lg mb-4">
            People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="md:w-1/3 p-4">
          <p className="text-lg">
            They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
