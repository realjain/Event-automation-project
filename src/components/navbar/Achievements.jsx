import React from "react";

const Achievements = () => {
  const winners = [
    {
      event: "Tech Fest 2024",
      position: "1st Place",
      winner: "Rahul Sharma",
      college: "ABC Engineering College",
      year: "2024",
    },
    {
      event: "Hackathon 2023",
      position: "2nd Place",
      winner: "Priya Verma",
      college: "XYZ University",
      year: "2023",
    },
    {
      event: "Coding Championship",
      position: "1st Place",
      winner: "Arjun Patel",
      college: "LMN Institute of Tech",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          🏆 Our Event Winners
        </h1>
        <p className="text-gray-600">
          Celebrating excellence and achievements from various competitions.
        </p>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {winners.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-500">
                {item.year}
              </span>
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800">
                {item.position}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {item.event}
            </h2>

            <p className="text-gray-700 font-medium">
              👤 {item.winner}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              🏫 {item.college}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;