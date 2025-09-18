import { useState } from "react";

const Country = ({ country }) => {
  const [visited, setVisited] = useState("Not Visited");
  const handleVisited = () => {
    setVisited("Visited");
  };
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105">
      {/* Flag section */}
      <div className="relative h-48 bg-gradient-to-br from-green-500 to-yellow-400 flex items-center justify-center">
        <img
          src={country?.flags?.flags?.png}
          alt={country?.flags?.flags?.alt}
          className="h-10/12 object-cover rounded-md "
        />
      </div>

      {/* Content section */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-800">
            {country?.name?.common}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            {country?.area?.area?.toLocaleString()} km²
          </div>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            {country?.population?.population?.toLocaleString()}
          </div>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            {country?.currencies?.currencies?.JMD?.name} (
            {country?.currencies?.currencies?.JMD?.symbol})
          </div>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            {country?.capital?.capital?.[0]}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center mb-2">
            <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-green-100 text-green-800">
              Region: {country?.region?.region}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-100 text-purple-800">
              Languages
            </span>
            <span className="text-sm text-gray-600">
              {country?.languages &&
                Object.values(country?.languages?.languages).join(", ")}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-auto">
        <button
          onClick={handleVisited}
          className="border mt-auto bg-amber-200 p-2 rounded-xl cursor-pointer text-center justify-center "
        >
          {visited}
        </button>
      </div>
    </div>
  );
};

export default Country;
