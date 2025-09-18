// import { use } from "react";
// import Country from "../Country/Country";

// const Countries = ({ countriesPromise }) => {
//   const countriesContent = use(countriesPromise);
//   const countries = countriesContent.countries;

//   return (
//     <>
//       {countries.map((country) => (
//         <Country country={country} key={country.cca3.cca3} />
//       ))}
//     </>
//   );
// };

// export default Countries;

import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesContent = use(countriesPromise);
  const countries = countriesContent.countries;

  return (
    <div className="container mx-auto px-4 py-8 w-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Countries of the World
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Country country={country} key={country.cca3.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
