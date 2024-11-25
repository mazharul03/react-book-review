 
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const PagesToRead = () => {
  // Example data for books in the read list
  const data = [
    { name: "The Silent Patient", totalPages: 368 },
    { name: "Educated", totalPages: 400 },
    { name:"The Great Gatsby", totalPages: 180 },
  ];

  // Custom shape for the bars
  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={10} // Rounded corners
        />
        <text
          x={x + width / 2}
          y={y - 10}
          textAnchor="middle"
          fill="#333"
          fontSize={12}
          fontWeight="bold"
        >
          {height > 0 ? props.value : ""}
        </text>
      </g>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Pages to Read</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Visualize the total pages for each book in your read list.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#82ca9d" shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;

