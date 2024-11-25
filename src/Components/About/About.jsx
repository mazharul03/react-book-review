
const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-cyan-500 mb-6">About This Website</h1>
      <p className="text-lg text-gray-700 mb-4">
        This website is a book catalog and reading tracker. Users can browse a list of books, see details for each book,
        and track their reading progress. It is designed to help avid readers manage their reading lists.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Created by <span className="font-bold text-green-500">[Your Name]</span>, this project was built with React and
        React Router for a smooth user experience.
      </p>
      <div className="mt-8 bg-green-400 text-slate-600 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used:</h2>
        <ul className="list-disc pl-6">
          <li>React</li>
          <li>React Router</li>
          <li>Tailwind CSS</li>
          <li>JSON Data</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Future Plans:</h2>
        <p className="text-lg text-gray-700">
          We plan to add more features in the future, including:
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li>Book recommendation engine</li>
          <li>User accounts and book progress tracking</li>
          <li>Mobile app version</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
