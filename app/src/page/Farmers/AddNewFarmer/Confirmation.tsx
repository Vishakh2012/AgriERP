
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="m-6">
        <h2 className="text-xl font-bold mb-4">New farmer added successfully</h2>
        <div>
          <div className="flex flex-col md:flex-row">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 mr-0 md:mr-4"
            >
              Add New Farmer
            </Link>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Display All Farmers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
