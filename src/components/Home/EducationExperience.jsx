import { FaGraduationCap } from "react-icons/fa";

const EducationExperience = () => {
  return (
    <div id="education" className="bg-gray-900 text-white py-16 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-8">
        Education Quality
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <p className="text-sm text-red-400">2017 - 2019</p>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" /> HSC - Sarail Govt
            College
          </h3>
          <p className="text-gray-400">
            Completed Higher Secondary Certificate (HSC) at Sarail Govt College.
          </p>
          <span className="text-red-400 font-semibold">4.50/5</span>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <p className="text-sm text-red-400">2019 - Present</p>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" /> BSc in CSE - Green
            University
          </h3>
          <p className="text-gray-400">
            Currently in the final year of my Bachelor's in Computer Science &
            Engineering.
          </p>
          <span className="text-red-400 font-semibold">Ongoing</span>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
