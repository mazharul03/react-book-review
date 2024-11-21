import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const readBooks = [
    { bookId: 1, name: "Book A", totalPages: 300 },
    { bookId: 2, name: "Book B", totalPages: 150 },
    { bookId: 3, name: "Book C", totalPages: 200 },
  ];

  

  const CustomBarShape = ({ x, y, width, height }) => {
    return (
        <path
            d={`M${x},${y} h${width} v${height} h-${width} Z`}
            fill="skyblue"
            stroke="black"
            strokeWidth="1"
        />
    );
};



const PagesToRead = ({ readBooks }) => {
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="font-bold text-3xl text-center bg-gray-100 py-7 my-6 rounded-xl">
                Pages to Read
            </h2>
            {readBooks.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={readBooks}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="totalPages" shape={<CustomBarShape />} />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p className="text-center">No books in the read list.</p>
            )}
        </div>
    );
};

export default PagesToRead;

