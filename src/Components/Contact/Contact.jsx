// // src/Components/Contact/Contact.js
// import React from 'react';

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>If you have any questions or need assistance, feel free to reach out!</p>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" required />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" required />
//         </label>
//         <br />
//         <label>
//           Message:
//           <textarea name="message" required></textarea>
//         </label>
//         <br />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;




// src/Components/Contact/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 mb-10 shadow-lg rounded-lg mt-12">
      <h1 className="text-4xl font-semibold text-center text-green-600 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        If you have any questions or need assistance, feel free to reach out!
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700" htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
